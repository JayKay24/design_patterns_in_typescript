import FlyweightFactory from './flyweight-factory';

// A Column that is used in a Row
export default class Column {
  /**
   * The columns are the contexts.
   * They will share the Flyweights via the FlyweightsFactory.
   * `data`, `width` & `justify` are extrinsic values. They are outside
   * of the flyweights.
   */

  data = '';
  width = 10;
  justify = 0;

  getData(): string {
    // Get the flyweight value from the factory, and apply the extrinsic values
    const codes: number[] = [];
    for (let i = 0; i < this.data.length; i++) {
      codes.push(this.data.charCodeAt(i));
    }

    let ret = '';

    Array.from(codes).forEach((c) => {
      ret += String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
    });

    switch (this.justify) {
      case 1:
        ret = this.leftAlign(this.width, ret, '  ');
        break;
      case 2:
        ret = this.rightAlign(this.width, ret, '  ');
        break;
      default:
        ret = this.center(this.width, ret, '  ');
        break;
    }

    return ret;
  }

  center(width: number, str: string, padding: string): string {
    return width <= str.length
      ? str
      : this.centerAlternate(width, padding + str, padding);
  }

  centerAlternate(width: number, str: string, padding: string): string {
    return width <= str.length
      ? str
      : this.center(width, str + padding, padding);
  }

  leftAlign(width: number, str: string, padding: string): string {
    return width <= str.length
      ? str
      : this.leftAlign(width, str + padding, padding);
  }

  rightAlign(width: number, str: string, padding: string): string {
    return width <= str.length
      ? str
      : this.rightAlign(width, padding + String, padding);
  }
}
