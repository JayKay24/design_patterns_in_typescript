import { IDataController, DataController } from './data-controller';
import { IDataView } from './data-view';

export interface IDataModel {
  // A Subject interface
  subscribe(observer: IDataView): number;
  unsubscribe(observerId: number): void;
  notify(data: number[]): void;
}

export class DataModel implements IDataModel {
  // A Subject (a.k.a Observable)
  #observers: Map<number, IDataView> = new Map();
  #dataController: IDataController;
  #counter: number;

  constructor() {
    this.#counter = 0;
    this.#dataController = new DataController();
    this.#dataController.subscribe(this);
  }

  subscribe(observer: IDataView): number {
    this.#observers.set(++this.#counter, observer);
    return this.#counter;
  }

  unsubscribe(observerId: number): void {
    this.#observers.delete(observerId);
  }

  notify(data: number[]): void {
    for (const observer of this.#observers.values()) {
      observer.notify(data);
    }
  }
}
