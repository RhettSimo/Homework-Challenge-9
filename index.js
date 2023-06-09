// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter info on the usage of your app.'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Licenses',
        choices: ['GNU GPL', 'MIT License', 'Mozilla Public License', 'BSD License', 'Eclipse Public License', 'None'],  
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list any contributors or sources.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add any tests/testings you would like to include in your readme.'
    },
    {
        type: 'input',
        name: 'questions',
        message: "Don't enter anything, this references your email and github username for contact and questions/concerns."
    },
];

// Created a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}
// Function call to initialize app
init();
