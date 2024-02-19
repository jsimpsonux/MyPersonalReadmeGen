// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

import fs from 'fs';
import inquirer from 'inquirer'
import generateMarkdown from './utils/generateMarkdown.js'

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Enter a title of the project");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give the description of the project',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Enter description of the project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the intructions for the installation?',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Please enter details on how to install");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Please enter details on usage for this project");
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which Licences would you like?',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'BSD 4-clause "Original" or "Old" license',
            'BSD Zero-Clause license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution ShareAlike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',
            
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for contributing to this project?',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Enter details on how to contribute to this project");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the test of this project?',
        validate: (input) => {
            if(input) {
                return true;
            } else {
                console.log("Please enter a test for this project");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your Github username');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    }

];

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        // dist is the folder name for where the readme that is generated is stored, fs.writeFile writes the file and checks
        // the answers from the generateMarkdown and if there is an error it will be console logged, if not it print a message.
        fs.writeFile("dist/README.md", generateMarkdown(answers), error => 
        {
            if (error){
                console.log(error)
            } else {
                console.log("Congratulations, your README is located in dist")
            }
        })
    })
}

// function call to initialize program
init();
