import CircleImplementer from './circle-implementer';
import Circle from './circle';
import SquareImplementer from './square-implementer';
import Square from './square';

const CIRCLE = new Circle(new CircleImplementer());
CIRCLE.draw();

const SQUARE = new Square(new SquareImplementer());
SQUARE.draw();
