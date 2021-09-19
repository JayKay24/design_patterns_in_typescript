import IShape from './ishape';
import IShapeImplementer from './ishape-implementer';

// A Square Abstraction
export default class Square implements IShape {
  #implementer: IShapeImplementer;

  constructor(implementer: IShapeImplementer) {
    this.#implementer = implementer;
  }

  draw(): void {
    this.#implementer.drawImplementation();
  }
}
