export interface IProductA {
  name: string;
}

class ConcreteProduct implements IProductA {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductC';
  }
}

export class FactoryA {
  static getObject(someProperty: string): IProductA {
    try {
      switch (someProperty) {
        case 'a':
          return new ConcreteProductA();
        case 'b':
          return new ConcreteProductB();
        case 'c':
          return new ConcreteProductC();
        default:
          throw new Error('Class Not Found');
      }
    } catch (e) {
      console.error(e);
    }

    return new ConcreteProduct();
  }
}
