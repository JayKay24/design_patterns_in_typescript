import IShapeImplementer from './ishape-implementer';

export default class CircleImplementer implements IShapeImplementer {
  drawImplementation(): void {
    console.log(`${' '.repeat(3)}${'*'.repeat(6)}${' '.repeat(3)}`);
    console.log(
      `${' '.repeat(1)}${'*'.repeat(2)}${' '.repeat(6)}${'*'.repeat(
        2
      )}${' '.repeat(2)}`
    );
    console.log(
      `${' '.repeat(1)}${'*'.repeat(1)}${' '.repeat(8)}${'*'.repeat(
        1
      )}${' '.repeat(1)}`
    );
    console.log(
      `${' '.repeat(1)}${'*'.repeat(1)}${' '.repeat(8)}${'*'.repeat(
        1
      )}${' '.repeat(1)}`
    );
    console.log(
      `${' '.repeat(1)}${'*'.repeat(2)}${' '.repeat(6)}${'*'.repeat(
        2
      )}${' '.repeat(2)}`
    );
    console.log(`${' '.repeat(3)}${'*'.repeat(6)}${' '.repeat(3)}`);
  }
}
