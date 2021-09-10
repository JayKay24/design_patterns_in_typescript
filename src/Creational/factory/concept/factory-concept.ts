interface IProduct {
  name: string;
}

class ConcreteProduct implements IProduct {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductB';
  }
}

class ConcteteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductC';
  }
}

class Creator {
  static createObject(someProperty: string): IProduct {
    switch (someProperty) {
      case 'a':
        return new ConcreteProductA();
      case 'b':
        return new ConcreteProductB();
      default:
        return new ConcteteProductC();
    }
  }
}

const PRODUCT = Creator.createObject('b');
console.log(PRODUCT.constructor.name);
