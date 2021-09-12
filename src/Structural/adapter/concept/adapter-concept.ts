interface IA {
  methodA(): void;
}

interface IB {
  methodB(): void;
}

class ClassA implements IA {
  methodA() {
    console.log('method A');
  }
}

class ClassB implements IB {
  methodB() {
    console.log('method B');
  }
}

class ClassBAdapter implements IA {
  #classB: ClassB;

  constructor() {
    this.#classB = new ClassB();
  }

  methodA() {
    // calls the ClassB methodB instead
    this.#classB.methodB();
  }
}

/**
 * The Client
 * Before the adapter I need to test the objects class to know which method to
 * call
 */
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB();
  } else {
    item.methodA();
  }
});

/**
 * After creating an adapter for ClassB I can reuse the same method
 * signature as ClassA (preferred)
 */
const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => item.methodA());
