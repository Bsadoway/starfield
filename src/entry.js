/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */

import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Vector3,
  Color
} from 'three';
import SeedScene from './objects/Scene.js';

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({
  antialias: true
});
const seedScene = new SeedScene();
let mouse = {
  x: 0,
  y: 0
};
let currentAstPos;

// scene
scene.add(seedScene);
scene.background = new Color(0x000000);
// camera
camera.position.set(0, 0, -20);
camera.lookAt(new Vector3(0, 0, 0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  seedScene.update && seedScene.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => {
  const {
    innerHeight,
    innerWidth
  } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild(renderer.domElement);
document.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('mousedown', onMouseDown, false);

function onMouseMove(event) {
  const asteroid = scene.getObjectByName("asteroid");

  // Update the mouse variable
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Make the sphere follow the mouse
  var vector = new Vector3(mouse.x, mouse.y, 0.5);
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  var pos = camera.position.clone().add(dir.multiplyScalar(distance));
  asteroid.position.copy(pos);
};

function onMouseDown(event) {
  const asteroid = scene.getObjectByName("asteroid");
  currentAstPos = asteroid.position.z;
  event.preventDefault();
  
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  // push object along  z axis
  asteroid.position.z += 100;
  // TODO check for collision with stars
  // after relase bounce back to origin position
}