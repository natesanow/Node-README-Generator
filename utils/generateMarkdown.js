const fs = require('fs');

// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
    if (license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}

// Function that returns the license link

function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://opensource.org/licenses/MIT`
    }
    if (license === 'GPLv3') {
        return `https://www.gnu.org/licenses/gpl-3.0`
    } 
    if (license === 'LGPLv3') {
        return `https://www.gnu.org/licenses/lgpl-3.0`
    }
    if (license === 'Apache_2.0') {
        return `https://opensource.org/licenses/Apache-2.0`
    }
    if (license === 'MPL_2.0') {
        return `https://opensource.org/licenses/MPL-2.0`
    }
    if (license === 'BSD_3--Clause') {
        return `https://opensource.org/licenses/BSD-3-Clause`
    }
    if (license === 'none') {
        return ""
    }
}

// Function that returns the license section of README

function renderLicenseSection(license) {
    if (license) {
        return ``;
    } else {
        return `This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License] (#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributions
${data.contributions}
## Tests
${data.tests}
## Questions
If you have any questions, please contact me on github or by email: 

[GitHub](https://github.com/${data.gitHubName})

[Email: ${data.emailAddress}](mailto:${data.emailAddress})
`;
}

module.exports = generateMarkdown;
