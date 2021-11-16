// A Memento to store characterr attributes

export default class Memento {
  score: number;
  inventory: Set<string>;
  level: number;
  location: Location;

  constructor(
    score: number,
    inventory: Set<string>,
    level: number,
    location: Location
  ) {
    this.score = score;
    this.inventory = inventory;
    this.level = level;
    this.location = location;
  }
}

export type Location = { x: number; y: number; z: number };
