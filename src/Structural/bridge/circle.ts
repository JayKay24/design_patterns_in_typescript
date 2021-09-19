import IShape from './ishape';
import IShapeImplementer from './ishape-implementer';

// A Circle Abstraction
export default class Circle implements IShape {
  #implementer: IShapeImplementer;

  constructor(implementer: IShapeImplementer) {
    this.#implementer = implementer;
  }

  draw(): void {
    this.#implementer.drawImplementation();
  }
}
