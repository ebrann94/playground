import * as THREE from 'three';

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 }) ;
const lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));

const line = new THREE.Line( lineGeometry, lineMaterial);

export default line;