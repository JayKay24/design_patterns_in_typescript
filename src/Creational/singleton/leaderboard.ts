export default class LeaderBoard {
  static instance: LeaderBoard;
  private table: { [id: number]: string } = {};

  constructor() {
    if (LeaderBoard.instance) return LeaderBoard.instance;

    LeaderBoard.instance = this;
  }

  public addWinner(position: number, name: string): void {
    this.table[position] = name;
  }

  public print(): void {
    console.log(`${'-'.repeat(11)}Leaderboard${'-'.repeat(11)}`);

    for (const key in this.table) {
      console.log(`|\t${key}\t|\t${this.table[key]}\t|`);
    }

    console.log();
  }
}
