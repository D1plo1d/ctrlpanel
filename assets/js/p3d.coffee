debug = true

window.P3D =

  loadBinaryStl: (url, opts = {center: false}, callback) ->
    P3D.ajax url: url, binary: true, (response) ->
      data = new DataStream response, 80, true

      # Header data
      nOfTriangles = data.readUint32()
      console.log "#{nOfTriangles} triangles" if debug

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

      P3D.postProcess verts, normals, indices, opts
      callback verts, normals, indices

  ajax: (opts, callback) ->
    xhr = new XMLHttpRequest()
    xhr.open("GET", opts.url, true)
    xhr.responseType = "arraybuffer" if opts.binary == true
    xhr.onload = (e) -> callback xhr.response
    xhr.send()

  postProcess: (verts, normals, indices, opts) ->
    # Finding the max and min points
    max = ( Number.MIN_VALUE for i in [0..2])
    min = ( Number.MAX_VALUE for i in [0..2])

    for i in [0 .. verts.length-1] by 3
      for j in [0..2]
        max[j] = verts[i+j] if verts[i+j] > max[j]
        min[j] = verts[i+j] if verts[i+j] < min[j]

    # Finding the object's center
    center = ( (max[i] + min[i])/2 for i in [0..2] )

    # Centering the object
    if opts.center
      verts[i+j] = verts[i+j] - center[j] for j in [0..2] for i in [0 .. verts.length-1] by 3

    #console.log min
    #console.log max
    #console.log center