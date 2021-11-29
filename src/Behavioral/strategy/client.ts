// The Strategy Pattern Example Use Case

type Coords = [number, number];

interface IMove {
  // The Move Strategy Interface

  move(position: Coords): void;
}

interface IMoveConstructor {
  // A Constructor for IMove
  new (): IMove;
}

class GameCharacter {
  // This is the context whose strategy will change

  #position: Coords = [0, 0];

  move(movementStyle: IMoveConstructor) {
    // The movement algorithm has been decided by the client
    new movementStyle().move(this.#position);
  }
}

class Walking implements IMove {
  // A Concrete movement strategy for walking

  move(position: Coords): void {
    position[0]++;

    console.log(`I am Walking. New position = ${position}`);
  }
}

class Sprinting implements IMove {
  // A Concrete movement strategy for sprinting

  move(position: Coords): void {
    position[0] += 2;

    console.log(`I am Running. New position = ${position}`);
  }
}

class Crawling implements IMove {
  // A Concrete movmement strategy for crawling

  move(position: Coords): void {
    position[0] += 0.5;

    console.log(`I am Crawling. New position = ${position}`);
  }
}

// The Client

const GAME_CHARACTER = new GameCharacter();
GAME_CHARACTER.move(Walking);

// Character sees the enemy
GAME_CHARACTER.move(Sprinting);

// Character finds a small cave to hide in
GAME_CHARACTER.move(Crawling);
