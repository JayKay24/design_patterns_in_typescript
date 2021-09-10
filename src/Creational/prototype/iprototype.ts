import Document from './document';

export enum CloneMode {
  Shallow = 1,
  Deep
}

export default interface IProtoType {
  clone(mode: CloneMode): Document;
}
