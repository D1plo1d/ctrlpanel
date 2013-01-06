//#define POINT_LIGHTS // enable this if your scene includes point light sources
#define DIRECTIONAL_LIGHT // enable this if your scene includes a directional light source
//#define TEXTURES
#define LIGHT_MAX 4 // the number of point lights in your scene

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;

#ifdef TEXTURES
  attribute vec2 texCoord1;
#endif

uniform mat4 worldMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;

uniform bool enableLights;
uniform vec3 ambientColor;

#ifdef DIRECTIONAL_LIGHT
  uniform vec3 directionalColor;
  uniform vec3 lightingDirection;
#endif

#ifdef POINT_LIGHTS
  uniform vec3 pointLocation[LIGHT_MAX];
  uniform vec3 pointColor[LIGHT_MAX];
  uniform int numberPoints;
#endif

varying vec4 vColor;
varying vec2 vTexCoord;
varying vec3 lightWeighting;

void main(void) {
  vec4 mvPosition = worldMatrix * vec4(position, 1.0);

  if(!enableLights) {
    lightWeighting = vec3(1.0, 1.0, 1.0);
  } else {
    vec3 plightDirection;
    vec3 pointWeight = vec3(0.0, 0.0, 0.0);
    vec4 transformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);

    #ifdef DIRECTIONAL_LIGHT
      float directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);
    #endif

    #ifdef POINT_LIGHTS
      for (int i = 0; i < LIGHT_MAX; i++) {
        if (i < numberPoints) {
          plightDirection = normalize((viewMatrix * vec4(pointLocation[i], 1.0)).xyz - mvPosition.xyz);
          pointWeight += max(dot(transformedNormal.xyz, plightDirection), 0.0) * pointColor[i];
        } else {
          break;
        }
      }
    #endif

    #ifdef DIRECTIONAL_LIGHT
      lightWeighting = ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;
    #else
      lightWeighting = ambientColor + pointWeight;
    #endif
  }

  vColor = color;

  #ifdef TEXTURES
    vTexCoord = texCoord1;
  #else
    vTexCoord = vec2(0.0, 0.0);
  #endif

  gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);
}