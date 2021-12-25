// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your readme?',
        name: 'projectTitle',
      },
      // {
      //   type: 'input',
      //   message: 'Create a table of contents:',
      //   name: 'tableOfContent',
      // },
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
        message: 'Placeholder for contributing',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide information about testing performed for your project.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Provide email address',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Provide your github username',
        name: 'github',
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
        choices: [ 'Apache', 
          'Academic',
          'GNU',
          'GPL',
          'LGPL',
          'MIT',
          'Mozilla',
          'Open',
          ]
      },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
   
}
// fs.writeFile('README.md', (err) => err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown({
       ...answers
    }));
  });
}

// Function call to initialize app
init();