const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function generateAndSaveLogo() {
  try {
    // prompt user for shape, color, and text
    const userInput = await inquirer.prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter the fill color:',
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to (3) letters you want included in your logo:',
      },
    ]);

    // create a shape instance based on user's choice
    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      default:
        console.error('Invalid shape choice');
        return;
    }

    // set properties based on user input
    shape.setColor(userInput.color);
    shape.setText(userInput.text);

    // render the shape to get the SVG string
    const svgString = shape.render();

    // log the SVG string before saving it to the file
    // console.log('Generated SVG:', svgString);

   // save the SVG string to a file (e.g., logo.svg)
    fs.writeFileSync('logo.svg', svgString, 'utf-8');


    console.log('Horray! Your custom logo has been generated and saved as logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// invoke the function to generate and save the logo
generateAndSaveLogo();
