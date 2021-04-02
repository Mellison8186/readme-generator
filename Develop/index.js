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
            type: 'input',
            name: 'description',
            message: 'Explain what your motivation was, why you built the project, the problem that it solves, what you learned by making the project, and what makes your project stand out?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What coding languages did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
    ]).then(data => writeFileAsync('readme.md',markdown(data)));
};
questions();
console.log(questions);