// The State Pattern Concept

interface IState {
  // A State interface
  toString(): string;
}

class Context {
  // This is the object whose behaviour will change
  #stateHandles: IState[];
  #handle: IState | undefined;

  constructor() {
    this.#stateHandles = [
      new ConcreteStateA(),
      new ConcreteStateB(),
      new ConcreteStateC()
    ];
  }

  request(): IState {
    // A method of the state that dynamically changes which
    // class it uses depending on the value of this.#handle
    this.#handle = this.#stateHandles[Math.floor(Math.random() * 3)];
    return this.#handle;
  }
}

class ConcreteStateA implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am ConreteStateA';
  }
}

class ConcreteStateB implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am ConreteStateB';
  }
}

class ConcreteStateC implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am ConreteStateC';
  }
}

// The Client
const CONTEXT = new Context();
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
