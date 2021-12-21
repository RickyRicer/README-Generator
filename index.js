// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your readme?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What would you like to include for a description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Create a table of content:',
        name: 'tableOfContent',
      },
      {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: [ 'Bulbasaur', 'Squirtle', 'Charmander']
      },
];

inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();