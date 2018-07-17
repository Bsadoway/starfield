import {
  Mesh,
  Group,
  MeshBasicMaterial,

  SphereGeometry
} from 'three';

export default class Particles extends Group {
  constructor() {
    super();
    var particles = [];

    var particleGeometry = new SphereGeometry(2, 5, 5); // size, number of polys to form this circle
    var particleMaterial = new MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.5
    });

    // create a random set of particles
    for (var i = 0; i < 5000; i++) {

      particles[i] = new Mesh(particleGeometry, particleMaterial);

      //randomize positions
      particles[i].position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;;
      particles[i].position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
      particles[i].position.z = Math.random() * window.innerWidth * 2 - window.innerWidth;

      particles[i].direction = {
        x: Math.random(),
        y: Math.random()
      }

      this.add(particles[i]);
    }
  }
}
