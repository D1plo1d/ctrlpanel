O3D = PhiloGL.O3D
class O3D.PolyLine extends O3D.Model
  position: {x:0, y:0, z:0}
  _lines: { vertices: [], indices: [] }

  constructor: (opts) -> O3D.Model.call @, opts

  lineTo: (p2) =>
    i = @_lines.indices.last() || 0

    @_lines.vertices.add [p2.x, p2.y, p2.z]

    @_lines.indices.add [i, ++i] for p in [@position, p2] when p?

    #console.log @position
    #console.log p2
    @position = p2

  updateLines: =>
    @[k] = @_lines[k] for k in ["vertices", "indices"]



# Adding basic scene graph capabilities to every model (this is only a single layer atm). TODO: horribly broken.
###
O3D.Model.prototype.update = ->
  `var matrix = this.matrix,
      pos = this.position,
      rot = this.rotation,
      scale = this.scale;

  matrix.id();`
  matrix.$translate(pos.x, pos.y, pos.z)
  matrix.$rotateXYZ(rot.x, rot.y, rot.z)
  matrix.$scale(scale.x, scale.y, scale.z)
  matrix.$mulMat4(@parentMatrix) if @parentMatrix?
###