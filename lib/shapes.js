class Shape {
    constructor() {
      this.color = '';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text || '';
    }
  
    renderText() {
        return `<text x='50%' y='50%' font-size='30' text-anchor='middle' alignment-baseline='center' fill='white'>${this.text}</text>`;
      }
      
  
  renderSvgContent(shapeContent) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${shapeContent}\n</svg>`;
  }
}

class Circle extends Shape {
  render() {
    const shapeContent = `<circle cx="150" cy="100" r="80" fill='${this.color}'/>\n${this.renderText()}`;
    return this.renderSvgContent(shapeContent);
  }
}

class Square extends Shape {
  render() {
    const shapeContent = `<rect x="50" width="200" height="200" fill='${this.color}'/>\n${this.renderText()}`;
    return this.renderSvgContent(shapeContent);
  }
}

class Triangle extends Shape {
  render() {
    const shapeContent = `<svg height="210" width="500">
      <polygon points='200,10 300,200 90,200' fill='${this.color}'/>\n${this.renderText()}</svg>`;
    return this.renderSvgContent(shapeContent);
  }

  renderText() {
    // Center the text within the triangle
    return `<text x='195' y='140' font-size='20' text-anchor='middle' alignment-baseline='middle' fill='white'>${this.text}</text>`;
  }
}

// Export the classes
module.exports = { Shape, Circle, Square, Triangle };
