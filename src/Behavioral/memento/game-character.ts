// The Game Character whose state changes

import Memento, { Location } from './memento';

export default class GameCharacter {
  #score: number;
  #inventory: Set<string>;
  #level: number;
  #location: Location;

  constructor() {
    this.#score = 0;
    this.#inventory = new Set();
    this.#level = 0;
    this.#location = { x: 0, y: 0, z: 0 };
  }

  get score(): number {
    // A getter for the score
    return this.#score;
  }

  registerKill(): void {
    // The character kills its enemies as it progresses
    this.#score += 100;
  }

  addInventory(item: string): void {
    // The character finds objects in the game
    this.#inventory.add(item);
  }

  progressToNextLevel(): void {
    // The character progresses to the next level
    this.#level += 1;
  }

  moveForward(amount: number): void {
    // The character moves around the environment
    this.#location['z'] += amount;
  }

  status(): string {
    return `Score: ${this.#score},
		Level: ${this.#level},
		Location: ${JSON.stringify(this.#location)},,
		Inventory: ${JSON.stringify(Array.from(this.#inventory))}`;
  }

  public get memento(): Memento {
    // A `getter` for the characters attributes as a Memento
    return new Memento(this.#score, new Set(this.#inventory), this.#level, {
      ...this.#location
    });
  }

  public set memento(value: Memento) {
    const { score, inventory, level, location } = value;
    this.#score = score;
    this.#inventory = inventory;
    this.#level = level;
    this.#location = location;
  }
}
