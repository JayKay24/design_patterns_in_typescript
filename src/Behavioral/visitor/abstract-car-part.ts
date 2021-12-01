import IVisitor from './ivisitor';
import IVisitable from './ivisitable';

export default abstract class AbstractCarPart implements IVisitable {
  // The Abstract Car Part

  #name: string;
  #sku: string | undefined;
  #price: number | undefined;

  constructor(name: string, sku?: string, price?: number) {
    this.#name = name;
    this.#sku = sku;
    this.#price = price;
  }

  public get name(): string {
    return this.#name;
  }

  public set name(value: string) {
    this.#name = value;
  }

  public get sku() {
    return this.#sku;
  }

  public set sku(value: string | undefined) {
    this.#sku = value;
  }

  public get price() {
    return this.#price;
  }

  public set price(value: number | undefined) {
    this.#price = value;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }
}
