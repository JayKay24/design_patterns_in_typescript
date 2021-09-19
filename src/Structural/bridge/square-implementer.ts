import IShapeImplementer from './ishape-implementer';

export default class SquareImplementer implements IShapeImplementer {
  drawImplementation(): void {
    console.log(`${'*'.repeat(14)}`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`*${' '.repeat(12)}*`);
    console.log(`${'*'.repeat(14)}`);
  }
}
