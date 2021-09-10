import LeaderBoard from './leaderboard';
import IGame from './igame';

export class Game1 implements IGame {
  leaderboard: LeaderBoard;

  constructor() {
    this.leaderboard = new LeaderBoard();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
