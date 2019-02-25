import * as THREE from 'three';
import earth from './objects/sun';
import sunlight from './lights/sunlight';

//Create a scene and add a camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

//Create a renderer and set the size then add it to the DOM element in which you want it to appear
const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 1);
document.body.appendChild( renderer.domElement );

// Lights

// Add objects to scene
scene.add(earth);
scene.add(sunlight);

let angle = 0;

const center = new THREE.Vector3(0, 0, 0);

//Create an animation loop to render the scene to the canvas
function animate() {
    requestAnimationFrame( animate );
    
    renderer.render( scene, camera );
}

animate();

function calculateRotation(angle) {
    const x = 6 * Math.cos(angle);
    const y = 6 * Math.sin(angle);

    return {
        x,
        y
    }
}

function rotateAroundPoint(object, pointOfRotation, angle) {
    const newX = pointOfRotation.x + (10 * Math.cos(angle));
    const newY = pointOfRotation.y + (10 * Math.sin(angle));

    object.position.set(newX, newY, 0);
}