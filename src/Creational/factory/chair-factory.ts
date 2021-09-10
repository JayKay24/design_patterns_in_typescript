import { IChair } from './chair';
import SmallChair from './small-chair';
import MediumChair from './medium-chair';
import BigChair from './big-chair';

export default class ChairFactory {
  static getChair(chair: string): IChair {
    switch (chair) {
      case 'BigChair':
        return new BigChair();
      case 'MediumChair':
        return new MediumChair();
      default:
        return new SmallChair();
    }
  }
}
