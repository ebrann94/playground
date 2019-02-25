import * as THREE from 'three';
import sphere from './objects/sphere';

//Create a scene and add a camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100 );
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

//Create a renderer and set the size then add it to the DOM element in which you want it to appear
const renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff, 0.1);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild( renderer.domElement );

// Lights
const lights = [];
lights[1] = new THREE.PointLight();
lights[2] = new THREE.AmbientLight(0x404040, 0.5);

lights[1].position.set(0, 0, 0);

// Add objects to scene
scene.add(sphere);
lights.forEach(light => {
    scene.add(light);
});

let angle = 0;

const center = new THREE.Vector3(0, 0, 0);

//Create an animation loop to render the scene to the canvas
function animate() {
    requestAnimationFrame( animate );

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // const newSpherePos = calculateRotation(angle);
    // sphere.position.set(newSpherePos.x, newSpherePos.y, 0);
    rotateAroundPoint(sphere, center, angle);

    angle += 0.01;
    
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