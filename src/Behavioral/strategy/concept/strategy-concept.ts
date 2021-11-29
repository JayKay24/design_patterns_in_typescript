// The Strategy Pattern Concept

interface IStrategyConstructor {
  // A Constructor for the IStrategy

  new (): IStrategy;
}

interface IStrategy {
  // A Strategy Interface

  method(): string;
}

class ObjectContext {
  // This is the object whose behavior will change

  request(Strategy: IStrategyConstructor) {
    // The request is handled by the class passed in
    return new Strategy();
  }
}

class ConcreteStrategyA implements IStrategy {
  // A Concrete Strategy Subclass

  method(): string {
    return 'I am ConcreteStrategyA';
  }
}

class ConcreteStrategyB implements IStrategy {
  // A Concrete Strategy Subclass

  method(): string {
    return 'I am ConcreteStrategyB';
  }
}

class ConcreteStrategyC implements IStrategy {
  // A Concrete Strategy Subclass

  method(): string {
    return 'I am ConcreteStrategyC';
  }
}

// The Client
const OBJECT_CONTEXT = new ObjectContext();

console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyC).method());
