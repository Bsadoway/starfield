import {
  Mesh,
  Group,
  MeshBasicMaterial,

  SphereGeometry
} from 'three';

export default class Particles extends Group {
  constructor() {
    super();

    var mouseGeometry = new SphereGeometry(1, 0, 0);
    var mouseMaterial = new MeshBasicMaterial({
      color: 0x0000ff
    });
    var mouseMesh = new Mesh(mouseGeometry, mouseMaterial);
    mouseMesh.position.z = -5;
    mouseMesh.name = "asteroid";
    this.add(mouseMesh);
  }
}
