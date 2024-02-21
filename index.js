// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use including screenshots as needed.",
    },
    {
       type: "checkbox",
       name: "license",
       message: "Select a license if any for your project.",
       choices: ["MIT", "GPL", "LGPL", "Apache License 2.0", "MPL 2.0", "BSD License", "Unlicense"] 
    },
    {
        type: "input",
        name: "contributions",
        message: "List any contributors to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Tests for your application."
    },
    {
        type: "input",
        name: "gitHubName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownText = generateMarkdown(data);
    fs.writeFile(fileName, markdownText, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README file is now generated.");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", answers);
    });
}

// Function call to initialize app
init();
