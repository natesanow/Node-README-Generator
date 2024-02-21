// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
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
       choices: ["MIT", "GPLv3", "LGPLv3", "Apache_2.0", "MPL_2.0", "BSD_3--Clause", "none"] 
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

// Function to write README file
function writeToFile(fileName, data) {
    const markdownText = generateMarkdown(data);
    fs.writeFile(fileName, markdownText, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README file is now generated.");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("./utils/README.md", answers);
    });
}

// Function call to initialize app
init();
