#= require mdns_helpers
# Originally based on https://github.com/GoogleChrome/chrome-app-samples/blob/master/mdns-browser/main.js
# Requires the following permissions in your manifest.json:
# "socket": [
#    "udp-bind:*",
#    "udp-send-to:*"
# ]

# This is a single-use object that does a DNS multicast search on creation.
class @MDNS

  # @param {function} callback The callback to be invoked when this object is
  # updated, or when an error occurs (passes string).
  constructor: (callback) ->
    @callback_ = callback
    @byIP_ = {}
    @byService_ = {}
    @sockets_ = []
    
    # TODO: ipv6.
    
    # Store the socket, set up a recieve handler, and broadcast on it.
    @forEachAddress_ (address) =>
      unless address.indexOf(":") is -1
        console.log "IPv6 address unsupported", address
        return true
      console.log "Broadcasting to address", address
      @bindToAddress_ address, (socket) =>
        if chrome.runtime.lastError
          @callback_ "could not bind UDP socket: " + chrome.runtime.lastError.message
          return true
        @sockets_.push socket
        @recv_ socket
        @broadcast_ socket, address
    
    # After a short time, if our database is empty, report an error.
    setTimeout =>
      @callback_ "no mDNS services found!"  unless Object.keys(@byIP_).length
    , 10 * 1000

  api: chrome.socket or chrome.experimental.socket


  # Invokes the callback for every local network address on the system.
  # private
  # @param {function} callback to invoke
  forEachAddress_: (callback) ->
    api = @api
    unless api.getNetworkList
      
      # Short-circuit for Chrome built before r155662.
      callback "0.0.0.0", "*"
      return true
    api.getNetworkList (adapterInfo) ->
      adapterInfo.forEach (info) ->
        callback info["address"], info["name"]


  # Creates UDP socket bound to the specified address, passing it to the
  # callback. Passes null on failure.
  # @private
  # @param {string} address to bind to
  # @param {function} callback to invoke when done
  bindToAddress_: (address, callback) ->
    api = @api
    api.create "udp", {}, (createInfo) ->
      api.bind createInfo["socketId"], address, 0, (result) ->
        callback createInfo["socketId"]


  # Sorts the passed list of string IPs in-place.
  # @private
  sortIps_: (arg) ->
    arg.sort @sortIps_sort_
    arg


  sortIps_sort_: (l, r) =>
    # TODO: support v6.
    lp = l.split(".").map(@sortIps_toInt_)
    rp = r.split(".").map(@sortIps_toInt_)
    i = 0

    while i < Math.min(lp.length, rp.length)
      if lp[i] < rp[i]
        return -1
      else return +1  if lp[i] > rp[i]
      ++i
    0

  sortIps_toInt_: (i) -> +i


  # Returns the services found by this MDNS, optionally filtered by IP.
  services: (opt_ip) ->
    k = Object.keys((if opt_ip then @byIP_[opt_ip] else @byService_))
    k.sort()
    k


  # Returns the IPs found by this MDNS, optionally filtered by service.
  ips: (opt_service) ->
    k = Object.keys((if opt_service then @byService_[opt_service] else @byIP_))
    @sortIps_ k


  # Handles an incoming UDP packet.
  # @private
  recv_: (sock, info) ->
    if chrome.runtime.lastError
      
      # If our socket fails, detect this early: otherwise we'll just register
      # to receive again (and fail again).
      @callback_ chrome.runtime.lastError.message
      return true
    @api.recvFrom sock, @recv_.bind(this, sock)
    
    # We didn't receive any data, we were just setting up recvFrom.
    return false  unless info
    getDefault_ = (o, k, def) ->
      (k of o) or false is (o[k] = def)
      o[k]

    
    # Update our local database.
    # TODO: Resolve IPs using the dns extension.
    packet = DNSPacket.parse(info.data)
    byIP = getDefault_(@byIP_, info.address, {})
    packet.each "an", 12, (rec) =>
      ptr = rec.asName()
      byService = getDefault_(@byService_, ptr, {})
      byService[info.address] = true
      byIP[ptr] = true
    
    # Ping! Something new is here. Only update every 25ms.
    unless @callback_pending_
      @callback_pending_ = true
      setTimeout =>
        @callback_pending_ = `undefined`
        @callback_()
      , 25


  # Broadcasts for services on the given socket/address.
  # @private
  broadcast_: (sock, address) ->
    packet = new DNSPacket()
    packet.push "qd", new DNSRecord("_services._dns-sd._udp.local", 12, 1)
    raw = packet.serialize()
    @api.sendTo sock, raw, "224.0.0.251", 5353, (writeInfo) ->
      @callback_ "could not write DNS packet on: " + address  unless writeInfo.bytesWritten is raw.byteLength


  shutdown: ->
    @sockets_.forEach (sock) ->
      @api.disconnect sock
      @api.destroy sock
