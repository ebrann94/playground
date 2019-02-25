import * as THREE from 'three';

//Create a cube and add it to the scene
//Box geometry creates the vertices for the box
//Material creates the material and then the Mesh object applies the material ot the mesh
const geometry = new THREE.BoxGeometry( 3, 3, 5);
const material = new THREE.MeshPhongMaterial({ color: 0x229922 });
const cube = new THREE.Mesh( geometry, material );
// cube.castShadow = true;

cube.position.z = 5;


export default cube;