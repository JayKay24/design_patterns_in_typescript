// The Template Method Pattern Concept

abstract class AbstractClass {
  // A template class containing a template method and primitive methods

  stepOne(): void {
    /**
     * Hooks are normally empty in the abstract class. The implementing class
     * can optionally override providing a custom implementation.
     */
  }

  abstract stepTwo(): void;
  /**
   * An abstract method that must be overridden in the implementing class. Note
   *  the addition of the `abstract` keyword.
   */

  stepThree(): void {
    /**
     * Hooks can also contain default behavior and can be optionally
     * overridden
     */

    console.log(`Step three is a hook that prints this line by default.`);
  }

  templateMethod(): void {
    /**
     * This is the template method that the subclass will call.
     * The subclass(implementing class) doesn't need to override this
     * method since it would have optionally overridden
     * the following methods with its own implementations.
     */

    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
}

class ConcreteClassA extends AbstractClass {
  stepTwo(): void {
    console.log('Class_A : Step Two. (overridden)');
  }
}

class ConcreteClassB extends AbstractClass {
  // A Concrete class that only overrides steps one, two and three

  stepOne(): void {
    console.log('Class_B : Step One. (overridden)');
  }

  stepTwo(): void {
    console.log('Class_B : Step Two. (overridden)');
  }

  stepThree(): void {
    console.log('Class_C : Step Three. (overridden)');
  }
}

// The Client

const CLASS_A = new ConcreteClassA();
CLASS_A.templateMethod();

const CLASS_B = new ConcreteClassB();
CLASS_B.templateMethod();
