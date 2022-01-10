//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utilities/generateMarkdown');

// Questions for user input
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
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  project usage description is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    }
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', `##${data.title}`, 
//     function(err) {
//         if (err) throw err;
//         console.log('README Created!');
//     })
// }

// TODO: Create a function to initialize app
function init() {}

    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            fs.writeFile('newREADME.md', `# ${responses.title}

## Description
${responses.description}
## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

### Installation 
${responses.installation}
### Usage 
${responses.usage}
### License 
${responses.license}
### Contributing 
${responses.contributing}
### Tests 
${responses.tests}
### Questions
${responses.github, responses.email}`, function(err) {
    if (err) throw err;
    console.log('README created!');
})
});

// Function call to initialize app
init();

