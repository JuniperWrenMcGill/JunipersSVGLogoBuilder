const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
  it('should render a circle with the specified color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const renderedCircle = circle.render();
    expect(renderedCircle).toEqual("<circle cx='50%' cy='50%' r='100%' hight='100%' fill='red'/>");
  });
});

describe('Square', () => {
  it('should render a square with the specified color', () => {
    const square = new Square();
    square.setColor('blue');
    const renderedSquare = square.render();
    expect(renderedSquare).toEqual("<rect x='50' hight='200' width='200' fill='blue'/>");
  });
});

describe('Triangle', () => {
  it('should render a triangle with the specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    const renderedTriangle = triangle.render();
    expect(renderedTriangle).toEqual("<polygon height='100%' width='100%' points='0.200 300.00 150.0' fill='green'/>");
  });
});
