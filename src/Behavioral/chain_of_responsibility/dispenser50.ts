import IDispenser from './idispenser';

// A dispenser of ￡50 notes
export default class Dispenser50 implements IDispenser {
  // Dispenses ￡10s if applicable, otherwise continues to next successor
  #successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    this.#successor = successor;
  }

  handle(amount: number): void {
    if (amount >= 50) {
      const num = Math.floor(amount / 50);
      const remainder = amount % 50;

      console.log(`Dispensing ${num} ￡50 note`);

      if (remainder !== 0) {
        (this.#successor as IDispenser)?.handle(remainder);
      } else {
        (this.#successor as IDispenser)?.handle(amount);
      }
    }
  }
}
