window.gcodeUtils = {}

gcodeUtils.parse = (str, callback) ->
  opts =
    mode: "absolute"
    position: {x: 0, y: 0, z: 0}

  str.lines (line) =>
    # removing comments and whitespace as well as converting to lower case
    attrs = line.replace( /(;.*)|(\(.*?\))| /g , '').trim().toLowerCase().split(/(?=[a-z])/)

    cmd = attrs.shift()
    cmd = "#{cmd[0]}#{parseInt cmd.substring(1)}"

    switch cmd
      when "g0", "g1"
        newPosition = $.extend {}, opts.position
        for a in attrs
          val = parseFloat a.substring(1)
          val += opts.position[a] || 0 if opts.mode == "relative"
          newPosition[a[0]] = val
        opts.position = newPosition
        #console.log newPosition
        callback cmd, newPosition
      when "g91" then opts.mode = "relative"
      when "g92" then opts.mode = "absolute"
