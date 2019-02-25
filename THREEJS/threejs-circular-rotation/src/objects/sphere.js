import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry(1, 10, 10);
const sphereMaterial = new THREE.MeshPhongMaterial({color: 0x0000ff, flatShading: true});

const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

export default sphere;