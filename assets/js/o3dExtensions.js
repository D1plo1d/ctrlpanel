// TODO!
/*
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

console.log min
console.log max
#console.log center
*/

computeNormals = function(onlyMissingNormals) {
  var nonZeroNormals, vA, vB, vC;
  for (i = 0; i < $vertices.length-1; i+=3)
  {
    // Only add normals if they are missing (ie. all zero)
    if(onlyMissingNormals == true)
    {
      nonZeroNormals = false;
      for (j in [0,1,2])
      {
        if (normal[i+j] != 0) nonZeroNormals = true;
      }
      if (nonZeroNormals == true) continue;
    }

    for (var j = 0; j < 3; j++)
    {
      // Work in progress..
      vA = verts[i+j];
      vB = verts[i+j+3];
      vC = verts[i+j+6];
      vC - vB
    }
  }
}
