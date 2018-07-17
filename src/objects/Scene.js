import { Group } from 'three';
import Land from './Land/Land.js';
import BasicLights from './Lights.js';
import Particles from './Particles.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const land = new Land();
    const lights = new BasicLights();
    const particles = new Particles();

    this.add(lights, particles);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}