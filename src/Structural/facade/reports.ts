type ReportSignature = { [id: number]: [number, string] };

// A Singleton Dictionary of Reported Events
export default class Reports {
  static instance: Reports;
  #reports: ReportSignature = {};
  #rowId = 0;

  constructor() {
    if (Reports.instance) {
      return Reports.instance;
    }

    Reports.instance = this;
  }

  getHistory(): ReportSignature {
    return this.#reports;
  }

  logEvent(event: string): boolean {
    this.#reports[this.#rowId] = [Date.now(), event];
    this.#rowId++;
    return true;
  }
}
