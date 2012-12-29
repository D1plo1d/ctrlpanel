window.gcode = {}

gcode.parse = (str, callback) -> str.lines (line) =>
  # removing comments and whitespace as well as converting to lower case
  attrs = line.replace( /(;.*)|(\(.*?\))| /g , '').trim().toLowerCase().split(/(?=[a-z])/)

  cmd = attrs.shift()
  cmd = "#{cmd[0]}#{parseInt cmd.substring(1)}"

  if cmd == "g0" or cmd == "g1"
    axes = {}; axes[a[0]] = parseFloat a.substring(1) for a in attrs
    callback cmd, axes
