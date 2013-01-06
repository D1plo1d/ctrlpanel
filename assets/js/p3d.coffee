window.P3D = {}

debug = true

P3D.loadBinaryStl = (url, opts = {center: true}, callback) ->
  xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.responseType = "arraybuffer"
  xhr.onload = (e) ->
    data = new DataStream xhr.response, 80, true

    # Header data
    nOfTriangles = data.readUint32()
    console.log "#{nOfTriangles} triangles" if debug

    # Debug
    if debug and false
      console.log triangleSize
      console.log nOfTriangles
      console.log data.length/triangleSize

    # Initializing normals and verts
    normals = new Float32Array nOfTriangles*9
    verts = new Float32Array nOfTriangles*9
    indices = new Uint16Array nOfTriangles*3

    indices[i] = i for i in [0 .. nOfTriangles*3]

    # Parsing the verts and normals of each triangle
    for i in [0 .. nOfTriangles-1]
      normals[i*9+j] = data.readFloat32()     for j in [0..2]
      normals[i*9+3+j+k] = normals[i*9+j]     for j in [0..2] for k in [0,3]
      verts[i*9+j] =   data.readFloat32()     for j in [0..8]
      data.readUint16() # 2 byte "attributes byte count"


    # Finding the max and min points
    max = ( Number.MIN_VALUE for i in [0..2])
    min = ( Number.MAX_VALUE for i in [0..2])

    for i in [0 .. nOfTriangles-1]
      for j in [0..2]
        for k in [0..2]
          max[j] = verts[i*3+j+k] if verts[i*3+j+k] > max[j]
          min[j] = verts[i*3+j+k] if verts[i*3+j+k] < min[j]

    # Finding the object's center
    center = ( (max[i] + min[i])/2 for i in [0..2] )

    # Centering the object
    ###
    for i in [0 .. nOfTriangles]
      offset = (offset + triangleSize || 0)
      verts[i*3+j] = data[offset+3+j+k] - center[j] for j in [0..2] for k in [0..8] by 3
    ###

    #console.log normals
    #console.log verts
    #console.log indices
    #console.log verts.length/9
    #console.log min
    #console.log max
    #console.log center

    callback verts, normals, indices
  xhr.send()
