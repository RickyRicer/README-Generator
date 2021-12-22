// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your readme?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Create a table of contents:',
        name: 'tableOfContent',
      },
      {
        type: 'input',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project?
        - What problem does it solve?
        - What did you learn?`,
        name: 'description',
      },
      {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
      },
      {
        type: 'input',
        message: `List your collaborators, if any, with links to their GitHub profiles.
        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        If you followed tutorials, include links to those here as well.`,
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: [ 'Apache License 2.0', 
          'BSD 3-Clause "New" or "Revised" license',
          'BSD 2-Clause "Simplified" or "FreeBSD" license',
          'GNU General Public License (GPL)',
          'GNU Library or "Lesser" General Public License (LGPL)',
          'MIT license',
          'Mozilla Public License 2.0',
          'Common Development and Distribution License',
          'Eclipse Public License version 2.0',]
      },
];

inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// fs.writeFile('README.md', (err) => err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();