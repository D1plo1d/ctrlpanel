#ifdef GL_ES
precision highp float;
#endif

#define LIGHT_MAX 4

varying vec2 vTexCoord1;
varying vec2 vTexCoord2;
varying vec4 vColor;
varying vec4 vTransformedNormal;
varying vec4 vPosition;

uniform vec4 colorUfm;
uniform float shininess;

uniform vec3 ambientColor;
uniform vec3 directionalColor;
uniform vec3 lightingDirection;

uniform vec3 pointLocation[LIGHT_MAX];
uniform vec3 pointColor[LIGHT_MAX];
uniform vec3 pointSpecularColor[LIGHT_MAX];
uniform int numberPoints;

uniform bool hasTexture1;
uniform sampler2D sampler1;

uniform mat4 viewMatrix;

void main(void) {
  vec3 lightWeighting;
  vec3 lightDirection;
  float specularLightWeighting = 0.0;
  float diffuseLightWeighting = 0.0;
  vec3  specularLight = vec3(0.0, 0.0, 0.0);
  vec3  diffuseLight = vec3(0.0, 0.0, 0.0);

  vec3 transformedPointLocation;
  vec3 normal = normalize(vTransformedNormal.xyz);

  vec3 eyeDirection = normalize(-vPosition.xyz);
  vec3 reflectionDirection;

  vec3 pointWeight = vec3(0.0, 0.0, 0.0);

  transformedPointLocation = (viewMatrix * vec4(pointLocation[0], 1.0)).xyz;
  lightDirection = normalize(transformedPointLocation - vPosition.xyz);

  reflectionDirection = reflect(-lightDirection, normal);
  specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);
  specularLight += specularLightWeighting * pointSpecularColor[0];

  diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);
  diffuseLight += diffuseLightWeighting * pointColor[0];
  lightWeighting = ambientColor + diffuseLight + specularLight;

  vec4 fragmentColor;
  if (hasTexture1) {
    fragmentColor = texture2D(sampler1, vec2(vTexCoord1.s, vTexCoord1.t));
  } else {
    fragmentColor = colorUfm;
  }
  gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);
}