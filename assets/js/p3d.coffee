debug = true

# Utils
# -----------------------------------------------------

# check if a string starts with the given substring
startsWith = (str, substring) ->
  str[0..substring.length-1] == substring

eachLine = (str, callback) ->
  # Note: this implementation may becomes a serious memory concern in large strings.
  # If so it should be replaced with a better one which does not rely on String.split
  callback(line, i) for line, i in str.split(/\r?\n/)
  return undefined

capitalize = (str) -> "#{str[0].toUpperCase()}#{str[1..]}"

sign = (num) -> if num > 0 then +1 else if num < 0 then -1 else 0

fileExt = (str) -> str.split('.').pop()

ajax = (opts, callback) ->
  xhr = new XMLHttpRequest()
  xhr.open("GET", opts.url, true)
  xhr.responseType = "arraybuffer" if opts.binary == true
  if callback?
    xhr.onload = (e) -> callback xhr.response
  xhr.send()
  return xhr

base64_encode = (data) ->
  # http://kevin.vanzonneveld.net
  # +   original by: Tyler Akins (http://rumkin.com)
  # +   improved by: Bayron Guevara
  # +   improved by: Thunder.m
  # +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  # +   bugfixed by: Pellentesque Malesuada
  # +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  # +   improved by: Rafał Kukawski (http://kukawski.pl)
  # *     example 1: base64_encode('Kevin van Zonneveld');
  # *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  # mozilla has this native
  # - but breaks in 2.0.0.12!
  #if (typeof this.window['btoa'] == 'function') {
  #    return btoa(data);
  #}
  b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  o1 = undefined; o2 = undefined; o3 = undefined; h1 = undefined
  h2 = undefined; h3 = undefined; h4 = undefined; bits = undefined
  i = 0
  ac = 0
  enc = ""
  tmp_arr = []
  return data unless data
  loop # pack three octets into four hexets
    o1 = data.charCodeAt(i++)
    o2 = data.charCodeAt(i++)
    o3 = data.charCodeAt(i++)
    bits = o1 << 16 | o2 << 8 | o3
    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f

    # use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
    break unless i < data.length
  enc = tmp_arr.join("")
  r = data.length % 3
  ((if r then enc.slice(0, r - 3) else enc)) + "===".slice(r or 3)


# Web Worker Interface
# -----------------------------------------------------

isWorker = (self.document == undefined)
webWorkerAttrs = ['normals', 'vertices', 'indices', 'nOfTriangles', 'chunks']
if !isWorker
  webWorkerFn = arguments.callee
  # Getting a blob url reference to this script's closure
  webWorkerURL = =>
    return @webWorkerURL if @webWorkerURL?
    # Removing the closure from the worker's js because it caused syntax issues in chrome 24
    str = webWorkerFn.toString()
    str = str.replace(/^\s*function\s*\(\) {/, "").replace(/}\s*$/, '')

    webWorkerBlob = new Blob [str], type: "text/javascript"
    @webWorkerURL = (window.URL || window.webkiURL).createObjectURL webWorkerBlob
else
  parserPipeline = null
  data = null
  # Running a slave P3D instance in the webworker
  @onmessage = (event) ->
    parser = new P3D.Parser(event.data)
    # Returning the data
    msg = {}
    msg[k] = parser[k] for k in webWorkerAttrs
    transfers = ( parser[k].buffer for k in ['normals', 'vertices', 'indices'] )
    transfers.push chunk[k].buffer for k in ['normals', 'vertices', 'indices'] for chunk in parser.chunks
    postMessage msg, transfers


# P3D
# -----------------------------------------------------
class self.P3D

  _fileTypeWhitelist: ["Stl"]

  # Creates a P3D parser which loads the src url or HTML5 file object and 
  # fires the callback when it's geometry is ready
  # Arguments:
  #  src: A url (string) or File object
  #  type: (optional) the file type of the src. If no type is given P3D will 
  #        attempt to determine it from the file extension.
  #  opts: (optional) a object containing properties for this parser
  #     background: (boolean) if true this parser will spawn a webworker and run outside the UI thread
  #  callback: the fn to run once the 3d geometry has been parsed
  constructor: (src) ->
    @src = src
    args = arguments
    @opts = if args.length > 2 then args[1] else {background: true}
    @callback = args[args.length-1]

    # Determining the file name and the file type
    @filename = if typeof(@src) == "string" then @src.split("/").pop().replace("/", "") else @src.name
    @fileType = capitalize fileExt(@filename).toLowerCase()

    if @_fileTypeWhitelist.indexOf(@fileType) == -1
      throw "Unable to parse file extension or unsupported file extension: #{@fileType}"

    # Loading the object
    if typeof(@src) == "string" # load from URL
      @_initTextXhr()
    else # load from local file (HTML5 file API)
      @_initReader "Text"


  # File API/AJAX Load Methods
  # ------------------------------------------------------

  _initReader: (type) ->
    @dataType = type
    r = @reader = new FileReader()
    r.onload = @_onReaderLoad
    r["readAs#{type}"] @src

  _onReaderLoad: () =>
    data = @reader.result
    if @dataType == "Text" and @_isBinary data
    #if typeof(data) == "string" and @_isBinary data
      delete @reader
      @_initReader "ArrayBuffer"
    else
      @_parse data

  _initTextXhr: ->
    @dataType = "Text"
    @xhr = ajax url: @src
    @xhrPollingInterval = setInterval @_waitForXhrHeader, 10

  _initBinaryXhr: ->
    @dataType = "ArrayBuffer"
    ajax url: @src, binary: true, (response) => @_parse response

  _waitForXhrHeader: => 
    return unless @_hasHeaders(text = @xhr.responseText)
    clearInterval @xhrPollingInterval
    # If this is a binary file cancel the current text ajax request and start a binary ajax request
    if @_isBinary(text)
      @xhr.abort()
      delete @xhr
      @_initBinaryXhr()
    # If this is a text stl wait for the current text ajax request to complete and then parse it
    else if @xhr.readyState == @xhr.DONE
      @_onXhrReadyStateChange()
    else
      @xhr.onreadystatechange = @_onXhrReadyStateChange

  _onXhrReadyStateChange: => @_parse @xhr.responseText if @xhr.readyState == @xhr.DONE


  # Exporting Methods
  # ------------------------------------------------------

  # TODO: This method only works for small objects with less then ~196614 verts. I don't know why.
  exportTextStl: ->
    str = "solid P3D\n"
    formatFloat = (flt, i)-> (if sign(flt) >= 0 or i == 0 then " " else "") + flt.toExponential(6)
    formatVector = (array, v) -> (formatFloat(array[i], if v then i else 1) for i in [0..2]).join(" ")

    @_eachFace (f, i) ->
      str += "  facet normal #{ formatVector f.normals[0], false }\n"
      str += "    outer loop\n"
      str += "      vertex #{ formatVector v, true }\n" for v in f.vertices
      str += "    endloop\n"
      str += "  endfacet\n"

    str += "endsolid P3D"
    str = str.replace(/e\+([0-9][^0-9])/g, "e+0$1")
    str = str.replace(/e\-([0-9][^0-9])/g, "e-0$1")
    return new Blob [str], type: "application/octet-stream"


  # Parsing Interface (File API/AJAX agnostic)
  # ------------------------------------------------------
  _hasStlHeaders: (text) -> text.length > 80
  _isBinaryStl: (text) -> text[0..80].match(/^solid /) == null

  _hasHeaders: (text) -> @["_has#{@fileType}Headers"](text)
  _isBinary: (text) -> @["_isBinary#{@fileType}"](text)

  _dataTypeInfo: -> if @dataType == 'Text' then 'Text' else 'Binary'

  _parsingDebugMsg: (done) -> if debug
    if done == true
      ms = new Date().getTime()
      suffix = "[ DONE #{(ms - @_parserStartMs)/1000}s ]"
    else
      @_parserStartMs = new Date().getTime()
      suffix = ''
    console.log "Parsing #{@filename} as #{@_dataTypeInfo().toLowerCase()} #{@fileType.toUpperCase()}.. #{suffix}"

  _parse: (data) ->
    @_parsingDebugMsg(false)
    parserOpts = pipeline: ["_parse#{@dataType}#{@fileType}", "split"], data: data
    if @opts.background == true
      console.log "Running as a background job"
      worker = new Worker webWorkerURL()
      worker.onmessage = (e) => @_onParsingComplete(e.data)
      worker.addEventListener "error", ((e) -> console.log e), false
      worker.postMessage = worker.webkitPostMessage || worker.postMessage
      worker.postMessage parserOpts, if @dataType == 'Text' then [] else [data]
      # TODO: remove data parser dependancy. it is long and bloated and won't work in web workers.
    else
      @_onParsingComplete new P3D.Parser parserOpts

  _onParsingComplete: (parser) ->
    @[k] = parser[k] for k in webWorkerAttrs
    @verts = @vertices
    @_parsingDebugMsg(true)
    @callback @


# Parsing Methods (File API/AJAX agnostic)
# ------------------------------------------------------
class self.P3D.Parser
  constructor: (opts) ->
    # Parsing the data from it's raw format
    @[opts.pipeline[0]](opts.data)
    # Running any post processing steps
    @[method]() for method in opts.pipeline[1..]

  # Initializing normals, verts and indices
  _initGeometry: (nOfTriangles, nOfIndices) ->
    @nOfTriangles = nOfTriangles
    @normals = new Float32Array @nOfTriangles*9
    @vertices = @verts = new Float32Array @nOfTriangles*9
    if nOfIndices?
      @indices = new Uint32Array nOfIndices
    else
      indices = @indices = new Uint32Array @nOfTriangles*3
      indices[i] = i for i in [0 .. indices.length]
    return [@normals, @verts, @indices]

  _parseArrayBufferStl: (arrayBuffer) -> # binary stl format parser
    # Note: binary STLs are encoded as little endian
    data = new DataView arrayBuffer, 80
    dataPointer = 0

    _read = (method, bytes) ->
      val = data[method] dataPointer, true
      dataPointer += bytes
      return val
    readFloat32 = -> _read "getFloat32", 4
    readUint32 = ->  _read "getUint32", 4
    readUint16 = ->  _read "getUint16", 2

    # Header data
    nOfTriangles = readUint32()
    [normals, verts, indices] = @_initGeometry nOfTriangles

    # Parsing the verts and normals of each triangle
    for i in [0 .. nOfTriangles-1]
      normals[i*9+j]     = readFloat32()  for j in [0..2]
      normals[i*9+3+j+k] = normals[i*9+j] for j in [0..2] for k in [0,3,6]
      verts[i*9+j]       = readFloat32()  for j in [0..8]
      readUint16() # 2 byte "attributes byte count"
    @_eachFace @_calculateVertexNormals
    undefined # not returning the comprehension


  ###_parseArrayBufferStl: (arrayBuffer) -> # binary stl format parser
    data = new DataStream arrayBuffer, 80, true

    # Header data
    nOfTriangles = data.readUint32()
    [normals, verts, indices] = @_initGeometry(nOfTriangles)
    #console.log "#{nOfTriangles} triangles" if debug
    #console.log "#{verts.length/3} verts" if debug

    # Parsing the verts and normals of each triangle
    for i in [0 .. nOfTriangles-1]
      normals[i*9+j] = data.readFloat32()     for j in [0..2]
      normals[i*9+3+j+k] = normals[i*9+j]     for j in [0..2] for k in [0,3,6]
      verts[i*9+j] =   data.readFloat32()     for j in [0..8]
      data.readUint16() # 2 byte "attributes byte count"
    @_eachFace @_calculateVertexNormals
    undefined # not returning the comprehension
  ###

  _parseTextStl: (text) -> # text stl format parser
    prefixes = normal: "facet normal ", vert: "vertex "
    ignoredPrefixes = ["outer", "endloop", "endfacet", "endsolid"]
    normalCount = 0
    vertCount = 0

    # Finding the number of triangles in the mesh
    nOfTriangles = 0
    eachLine text, (line, index) ->
      return if index == 0 # skipping the header
      nOfTriangles++ if line.indexOf(prefixes.normal) != -1

    # Initializing normals and verts
    [normals, verts, indices] = @_initGeometry(nOfTriangles)

    eachLine text, (line, index) ->
      return if index == 0 # skipping the header
      #return if index < 152900
      # stripping whitespace
      line = line.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ').toLowerCase()

      if startsWith line, prefixes.normal
        faceNormals =  ( parseFloat(s) for s in line.split(" ")[2..] )
        normals[normalCount++] = faceNormals[i] for i in [0..2] for k in [0,3, 6]
      else if startsWith line, prefixes.vert
        vectorStrings = line.split(/\s/)[1..]
        throw "Parsing Error: #{vectorStrings.length} vector vertex" if vectorStrings.length != 3
        for s in vectorStrings
          verts[vertCount++] = v = parseFloat(s)
          throw "Parsing Error: Vertex vector ##{vertCount} is not a number" if isNaN(v) or !isFinite(v)
      else if line.length > 0
        return if startsWith(line, k) for k in ignoredPrefixes
        throw "Parsing Error: Invalid Line \n #{line}"
      undefined # not returning the comprehension
    @_eachFace @_calculateVertexNormals
    undefined


  # Mesh Manipulation Methods (File API/AJAX and Parser agnostic)
  # ---------------------------------------------------------------

  # iterates over all the faces of the mesh
  _eachFace: (fn) ->
    indices = @indices
    normals = @normals
    vertices = @vertices
    for i in [0..@indices.length-3] by 3
      fIndices = indices.subarray i, i+3
      fn
        indices: fIndices
        normals:  ( normals.subarray  index*3, index*3+3 for index in fIndices )
        vertices: ( vertices.subarray index*3, index*3+3 for index in fIndices )
    undefined# not returning the comprehension

  _flipFace: (f) ->
    firstIndex   = f.indices[0]
    f.indices[0] = f.indices[1]
    f.indices[1] = firstIndex

  _calculateVertexNormals: (f) ->
    # calculating vectors for 2 edges of the face
    v = ( f.vertices[i][j] - f.vertices[0][j] for j in [0..2] for i in [1..2] )
    # calculating the normal vector see http://www.opengl.org/wiki/Calculating_a_Surface_Normal
    vN = [
      (v[0][1]*v[1][2]) - (v[0][2]*v[1][1]),
      (v[0][2]*v[1][0]) - (v[0][0]*v[1][2]),
      (v[0][0]*v[1][1]) - (v[0][1]*v[1][0])
    ]
    # scaling the normal vector into a unit normal vector
    len = Math.sqrt vN[0]*vN[0] + vN[1]*vN[1] + vN[2]*vN[2]
    vN[i] = vN[i]/len for i in [0..2]
    # overwriting the previous normals
    f.normals[i][j] = vN[j] for j in [0..2] for i in [0..2]

  # Splits the object into 2^16 vert chunks and returns the chunks
  split: () =>
    bytesPerMesh = Math.pow(2,16) # is this even in bytes!?
    bytesPerMesh -= bytesPerMesh % 9 # Rounding the bytes per mesh down to the nearest face

    @chunks = for startIndex in [0..@indices.length-1] by bytesPerMesh
      oldIndices = @indices.subarray startIndex, startIndex + bytesPerMesh
      opts = indices: new Uint16Array(oldIndices.length), vertices: [], normals: []
      opts.indices[i] = i for i in [0..opts.indices.length-1]

      for oldIndex, newIndex in oldIndices
        for k in [0..2]
          opts.vertices[newIndex*3+k] = @vertices[oldIndex*3+k]
          opts.normals[ newIndex*3+k] = @normals[ oldIndex*3+k]
      opts[k] = new Float32Array(opts[k]) for k in ['vertices', 'normals']
      opts

P3D.prototype._eachFace = P3D.Parser.prototype._eachFace