// The Iterator Pattern Concept

interface IIterator {
  next(): IAggregate;
  // Return the object in collection

  hasNext(): boolean;
  // Returns Boolean whether at end of collection or not
}

interface IAggregate {
  // An interface that the aggregates should implement
  method(): void;
}

class IteratorConcept implements IIterator {
  // The concrete iterator (iterable)
  index: number;
  aggregates: IAggregate[];

  constructor(aggregates: IAggregate[]) {
    this.index = 0;
    this.aggregates = aggregates;
  }

  next(): IAggregate {
    if (this.hasNext()) {
      const aggregate = this.aggregates[this.index];
      this.index++;
      return aggregate;
    }

    throw new Error('At End of Iterator');
  }

  hasNext(): boolean {
    return this.index < this.aggregates.length;
  }
}

class Aggregate implements IAggregate {
  // A concrete object

  method(): void {
    console.log('This method has been invoked');
  }
}

// The Client

const AGGREGATES: IAggregate[] = [];

for (let i = 0; i < 4; i++) {
  AGGREGATES.push(new Aggregate());
}

/**
 * AGGREGATES is an array that is already iterable by default. But we can create
 * own iterator on top anyway
 */

const ITERABLE = new IteratorConcept(AGGREGATES);

while (ITERABLE.hasNext()) {
  ITERABLE.next().method();
}
