// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeurl = '';
  if (license !== 'No liscense')
  {badgeurl = "[![License](https://img.shields.io/badge/License-" + license + "-blue.svg)](${license})"
  }
  return badgeurl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://lbesson.mit-license.org/'
  }
  if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (license === 'IBM') {
    return 'https://www.ibm.com/about/software-licensing/licensing/basics'
  }
  if (license === 'CC0') {
    return 'https://creativecommons.org/licenses/by-nd/4.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`
  
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

${renderLicenseSection(data.license)}


${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributers)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributers

${data.contributers}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, please contact me at 

[${data.github}](https://github.com/${data.github})

Thank you for your time.`;
}


module.exports = generateMarkdown;


