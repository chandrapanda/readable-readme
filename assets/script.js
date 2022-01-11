//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utilities/generateMarkdown');

//Questions for user input 
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please describe your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the steps required for installation.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please describe the usage of your project.",
        name: 'usage',
        default: 'Project Usage',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'none'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Please describe any relevant contributors, or how users can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application.",
        name: 'tests'
    },
 
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'github',
        default: 'chandrapanda',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
    }
];


//Function to write README file
function writeReadMe() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            const myMarkdown = markdown(responses.license);
            fs.writeFile('newREADME.md', `# ${responses.title}

## Description
${responses.description}
## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation 
${responses.installation}
## Usage 
${responses.usage}
## Contributing 
${responses.contributing}
## Tests 
${responses.tests}
## Questions
### GitHub
[GitHub](https://www.github.com/${responses.github}) 
### Email
${responses.email}
${myMarkdown}`, function(err) {
    if (err) throw err;
    console.log('README created!');
    
})
})
};

// Function call to initialize app
writeReadMe();

