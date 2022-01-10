//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utilities/generateMarkdown');

// Array of questions for user input
const questions = ["What is the title of your project?", "Please describe your project.", "Write instructions for installation.", "Describe the usage of your application.", "Who contributed to your project?", "Provide test instructions."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', `##${data.title}`, function(err) {
        if (err) throw err;
        console.log('README Created!');
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "name",
    },
    {
        type: "input",
        message: "Where are you located?",
        name: "location",
    },
    {
        type: "input",
        message: "Type up a short bio.",
        name: "bio",
    },
    {
        type: "input",
        message: "What is your LinkedIn URL?",
        name: "linkedin",
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "github",
    },
    
])
.then((responses) => {
    console.log(responses);
    fs.writeFile('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <title>About Me</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${responses.name}</h1>
        <p class="lead">I live in ${responses.location}.</p>
        <h3>A little about me: ${responses.bio}<span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub URL is ${responses.github}</li>
          <li class="list-group-item">LinkedIn: ${responses.linkedin}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`, function(err) {
        if (err) throw err;
        console.log('File created!');
})
});