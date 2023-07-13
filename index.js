// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like to name your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Describe your project pls:",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation Instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "What can we use this program for:",
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license for this project:",
        choices: [
          "MIT",
          "GPL",
          "IBM",
          "CC0",
        ],
      },
      {
        type: "input",
        name: "tests",
        message: "Enter any testing instructions you would like for this project:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github account name:",
      },
];

console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
  if(err) {
      console.log('Error Could not generate README.');
  } else {
  console.log('Success README generated');
  }
})
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
  .then((data) => {
     writeToFile('./projectREADME.md', generateMarkdown(data))
  })
}

// Function call to initialize app
init();
