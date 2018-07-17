import {
  Geometry,
  PointsMaterial,
  Vector3,
  Vertex,
  Group,
  Points
} from 'three';

export default class Particles extends Group {
  constructor() {
    super();

    var particleCount = 1800,
      particles = new Geometry(),
      pMaterial = new PointsMaterial({
        color: 0xFFFFFF,
        size: 1
      });

    // now create the individual particles
    for (var p = 0; p < particleCount; p++) {

      // create a particle with random
      // position values, -250 -> 250
      var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500 - 250,
        particle = new Vector3(pX, pY, pZ);

      // add it to the geometry
      particles.vertices.push(particle);
    }

    // create the particle system
    var particleSystem = new Points(
      particles,
      pMaterial);


    this.add(particleSystem);
  }

}
