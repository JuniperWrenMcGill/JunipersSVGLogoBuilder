const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
  test('should create a Shape instance', () => {
    const shape = new Shape();
    expect(shape).toBeInstanceOf(Shape);
  });

  test('setColor should set the color property', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });

  test('setText should set the text property', () => {
    const shape = new Shape();
    shape.setText('Hello');
    expect(shape.text).toBe('Hello');
  });

  test('renderText should render text content', () => {
    const shape = new Shape();
    shape.setText('Test Text');
    const renderedText = shape.renderText();
    expect(renderedText).toContain('<text');
    expect(renderedText).toContain('Test Text');
  });

  test('renderSvgContent should render SVG content', () => {
    const shape = new Shape();
    const svgContent = shape.renderSvgContent('<circle cx="10" cy="10" r="5" fill="blue"/>');
    expect(svgContent).toContain('<svg');
    expect(svgContent).toContain('<circle');
  });
});

describe('Circle', () => {
  test('render should render a circle SVG', () => {
    const circle = new Circle();
    circle.setColor('green');
    const renderedCircle = circle.render();
    expect(renderedCircle).toContain('<circle');
    expect(renderedCircle).toContain('green');
  });
});

describe('Square', () => {
  test('render should render a square SVG', () => {
    const square = new Square();
    square.setColor('yellow');
    const renderedSquare = square.render();
    expect(renderedSquare).toContain('<rect');
    expect(renderedSquare).toContain('yellow');
  });
});

describe('Triangle', () => {
  test('render should render a triangle SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('orange');
    const renderedTriangle = triangle.render();
    expect(renderedTriangle).toContain('<polygon');
    expect(renderedTriangle).toContain('orange');
  });
});
