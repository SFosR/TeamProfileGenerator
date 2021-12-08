
const inquirer = require('inquirer');
const fs = require('fs');

//pulls in libraries for classes
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');

//array to store each team member created
let theTeam = [];

//prompts for user employee input

const addManager = () => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: `What is the manager's name?`
        },
        {
          type: 'input',
          name: 'id',
          message: `What is the manager's id?`,
        },
        {
          type: 'input',
          name: 'email',
          message: `What is the manager's email?`,
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: `What is the manager's phone number?`,
        },
      ])
      .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        theTeam.push(manager);
        console.log(theTeam);
      })
};





