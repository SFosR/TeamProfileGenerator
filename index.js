
const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');

let theTeam = [];


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

const addNewEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: ["Add Engineer", "Add Intern", "Finish"],
    },
  ])
  .then(answers => {
    if(answers.option === "Add Engineer"){
      return addEngineer();
    } else if (answers.option === "Add Intern") {
      return addIntern();
    } else {
      console.log(theTeam);
      console.log("Team created");
      const html = generateHTML(theTeam);

      writeHTML(html);    
    };
  })
}

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Engineer's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email address?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is the Engineer's GitHub profile name?"
    },
  ])
  .then(answers => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    theTeam.push(engineer);
    console.log(theTeam);
    return addNewEmployee();
  })
};

const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Intern's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school did the Intern attend?"
    },
  ])
  .then(answers => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    theTeam.push(intern);
    console.log(theTeam);
    return addNewEmployee();
  })
};

const init = () => {
    addManager()
      .then(addNewEmployee)
};

init();

function writeHTML (html){
  fs.writeFile('./dist/index.html', html, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Completed');
    } 
  })
}








