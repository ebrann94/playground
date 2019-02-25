import * as THREE from 'three';
import cube from './objects/cube';
import line from './objects/line';
import light from './lights/light';
import light2 from './lights/light-2';
import ambLight from './lights/ambLight';

//Create a scene and add a camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100 );
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

//Create a renderer and set the size then add it to the DOM element in which you want it to appear
const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild( renderer.domElement );

const helper = new THREE.PointLightHelper(light, 1);
const helper2 = new THREE.PointLightHelper(light2, 1);

// Add object to scene
scene.add( cube );
//scene.add( line );
scene.add( light );
scene.add( light2 );
scene.add( helper );
scene.add( helper2 );
scene.add( ambLight );

//Create an animation loop to render the scene to the canvas
function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // cube.scale.set(cube.scale * 1.1); 

    // line.rotation.x += 0.01;
    helper.update();
    
    renderer.render( scene, camera );
}

animate();