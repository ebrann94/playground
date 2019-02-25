import * as THREE from 'three';

const light = new THREE.PointLight(0xff9900);
light.position.set(-7, 5, 10);

// light.castShadow = true;
// light.shadow.camera.near = 0.1;
// light.shadow.camera.far = 25;

export default light;