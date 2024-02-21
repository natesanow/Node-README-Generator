const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLincenseLink(license)})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
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
