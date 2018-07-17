import {
  Group
} from 'three';
import BasicLights from './Lights.js';
import Particles from './Particles.js';
import Asteroid from './Asteroid.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const lights = new BasicLights();
    const particles = new Particles();
    const asteroid = new Asteroid();

    this.add(lights, particles,asteroid);
  }

  update(timeStamp) {
    
    for (var i = 0; i < 5000; i++) {
      var star = this.children[1].children[i];
      star.position.x += star.direction.x;
      star.position.y += star.direction.y;

      // if edge is reached, bounce back
      if (star.position.x < -window.innerWidth ||
        star.position.x > window.innerWidth) {
        star.direction.x = -star.direction.x;
      }
      if (star.position.y < -window.innerHeight ||
        star.position.y > window.innerHeight) {
        star.direction.y = -star.direction.y;
      }
    }
    // this.rotation.y = timeStamp / 10000;
  }
}
