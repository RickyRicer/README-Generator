// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle} 👋
 
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
🔍 ${data.description}
## Installation
💾 ${data.installation}
## Usage
💻 ${data.usage}
## License
${renderLicenseBadge(data.license)}
<br />
This application is covered by the ${data.license} license. 
## Contributing
👪 ${data.contributing}
You can contribute to this project by adhering to the code of conduct as mentioned: [here](https://www.contributor-covenant.org/#:~:text=Contributor%20Covenant%20is%20a%20code,that%20distinguish%20your%20own%20community)
## Tests
✏️ ${data.tests}
## Questions
✋ If you have any questions, please contact me through email or github, listed below:<br />
<br />
Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />
🖖_This README was generated with ❤️ by [README-generator](https://github.com/${data.github}/README-Generator) 🔥🔥🔥_
    
  `};


module.exports = generateMarkdown;
