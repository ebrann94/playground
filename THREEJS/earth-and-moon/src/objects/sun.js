import * as THREE from 'three';

const earthGeometry = new THREE.SphereGeometry(8, 32, 32);
const earthMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff, flatShading: true});

const earth = new THREE.Mesh( earthGeometry, earthMaterial );
earth.position.set(0, 0, 0);

export default earth;