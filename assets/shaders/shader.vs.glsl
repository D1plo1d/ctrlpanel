attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;
attribute vec2 texCoord1;

uniform mat4 worldMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;

varying vec4 vColor;

void main(void) {
  // vert color
  vColor = color;

  // position transforms
  gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);
  //gl_Position = worldMatrix * vec4(position, 1.0);
}
