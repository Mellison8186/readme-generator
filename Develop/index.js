const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Title of README'
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Choose items for your table of contents:',
            choices: ['Description', 'Installation', 'Usage', 'Credits', 'License','Questions']
          },
        {
            type: 'input',
            name: 'description',
            message: 'Explain what prompted you to build the project, how it stands out by addressing an issues, and what you learned by making the project?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions below:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information on how your app will be used:'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List all contributor names along with links to their GitHub profiles:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license that will be used with this the app:',
            choices: ['MIT', 'GitHub']
        },
        {
            type: 'input',
            name: 'questionsGitHub',
            message: 'Provide your GitHub username:'
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Provide your email address:'
        },

    ]).then(data => writeFileAsync('readme.md',markdown(data)));
};
questions();
console.log(questions);