O3D = PhiloGL.O3D
class O3D.PolyLine extends O3D.Model
  position: {x:0, y:0, z:0}
  _lines: { vertices: [], indices: [] }

  constructor: (opts) ->
    opts.vertices = []
    opts.indices = []
    O3D.Model.call @, opts

  lineTo: (p2) =>
    i = @_lines.indices.last() || 0

    @_lines.vertices.add [p2.x, p2.y, p2.z]

    @_lines.indices.add [i, ++i] for p in [@position, p2] when p?

    #console.log @position
    #console.log p2
    @position = p2

  updateLines: =>
    @[k] = @_lines[k] for k in ["vertices", "indices"]
