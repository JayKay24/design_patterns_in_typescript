import IProtoType, { CloneMode } from './iprototype';

type ArrayTuple = [number[], number[]];

export default class Document implements IProtoType {
  private _name = '';
  array: ArrayTuple;

  constructor(name: string, array: ArrayTuple) {
    this.name = name;
    this.array = array;
  }

  clone(mode: CloneMode): Document {
    let array;

    if (mode === CloneMode.Deep) {
      array = JSON.parse(JSON.stringify(this.array));
    } else {
      array = Object.assign({}, this.array);
    }

    return new Document(this.name, array);
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (!name) throw new Error('Please provide a valid name for the document.');
    this._name = name;
  }
}
