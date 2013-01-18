debug = true

# Utils
# -----------------------------------------------------

# check if a string starts with the given substring
startsWith = (str, substring) ->
  str[0..substring.length-1] == substring

eachLine = (str, callback) ->
  # Note: this implementation may becomes a serious memory concern in large strings.
  # If so it should be replaced with a better one which does not rely on String.split
  callback(line, i) for line, i in str.split("\n")


# P3D
# -----------------------------------------------------

window.P3D =

  loadStl: (url, callback) ->
    stringXhr = P3D.ajax url: url
    interval = setInterval ( -> P3D._waitForStlHeader stringXhr, interval, url, callback ), 10

  _waitForStlHeader: (xhr, interval, url, callback) -> 
    return unless (text = xhr.responseText).length > 80
    isBinary = text[0..80].match(/^solid /) == null
    clearInterval interval
    # If this is a binary stl cancel the current text ajax request and start a binary ajax request
    if isBinary
      xhr.abort()
      P3D.loadBinaryStl url, callback
    # If this is a text stl wait for the current text ajax request to complete and then parse it
    else
      parseWhenReady = ->
        P3D.parseTextStl xhr.responseText, callback if xhr.readyState == xhr.DONE

      if xhr.readyState == xhr.DONE
        parseWhenReady()
      else
        xhr.onreadystatechange = parseWhenReady


  loadBinaryStl: (url, callback) ->
    P3D.ajax url: url, binary: true, (response) -> P3D.parseBinaryStl response, callback

  parseBinaryStl: (response, callback) ->
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
      normals[i*9+3+j+k] = normals[i*9+j]     for j in [0..2] for k in [0,3,6]
      verts[i*9+j] =   data.readFloat32()     for j in [0..8]
      data.readUint16() # 2 byte "attributes byte count"

    callback verts, normals, indices

  parseTextStl: (response, callback) ->
    console.log "text"

    prefixes = normal: "facet normal ", vert: "vertex "

    # Initializing normals and verts
    nOfTriangles = Math.round (response.split("\n").length - 3)/7
    normals = new Float32Array nOfTriangles*9
    verts = new Float32Array nOfTriangles*9
    indices = new Uint16Array nOfTriangles*3

    normalCount = 0
    vertCount = 0

    eachLine response, (line, index) ->
      return if index == 0 # skipping the header
      line = line.replace(/^\s+|\s+$/g, '') # stripping whitespace
      if startsWith line, prefixes.normal
        faceNormals =  ( parseFloat(s) for s in line.split(" ")[2..] )
        isZero = faceNormals.reduce ( (isZero, val)-> isZero and (val == 0) ), true
        normals[normalCount++] = faceNormals[i] for i in [0..2] for k in [0,3, 6]

      else if startsWith line, prefixes.vert
        for s in line.split(" ")[1..]
          indices[vertCount] = vertCount
          verts[vertCount++] = parseFloat(s)
    console.log normals
    console.log nOfTriangles*9
    console.log normalCount
    console.log vertCount
    callback verts, normals, indices

  ajax: (opts, callback) ->
    xhr = new XMLHttpRequest()
    xhr.open("GET", opts.url, true)
    xhr.responseType = "arraybuffer" if opts.binary == true
    if callback?
      xhr.onload = (e) -> callback xhr.response
    xhr.send()
    return xhr

