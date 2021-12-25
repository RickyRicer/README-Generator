// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(`![badge](https://img.shields.io/badge/license-${license}-brightgreen)`);
  
  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle} 👋
 
${renderLicenseBadge(data.license)}

## Description
🔍 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${data.installation}
## Usage
💻 ${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 
## Contributing
👪 ${data.contributing}
## Tests
✏️ ${data.tests}
## Questions
✋ If you have any questions, please contact me through email or github, listed below:<br />
<br />
Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />
🖖_This README was generated with ❤️ by [README-generator](https://github.com/${data.github}/README-Generator) 🔥🔥🔥_
    ;
  }

`;
}

module.exports = generateMarkdown;
