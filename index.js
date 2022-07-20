const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML = require("./src/generateHTML");
const generateHTML = require("./src/generateHTML");
let answersArr = [];

//engineer prompts
const engineerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
      },
    ])

    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      answersArr.push(engineer);
      console.log("inside engineer Q", answersArr);
      return nextIdPrompt();
    });
};

//Intern prompts
const internPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school do you attend?",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      answersArr.push(intern);
      console.log("inside intern Q", answersArr);
      return nextIdPrompt();
    });
};

//Manager prompts
const managerPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your employee email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      answersArr.push(manager);
      console.log("inside manager Q", answersArr);
      return nextIdPrompt();
    });
};

//next employee prompts and to render on the HTML file
const nextIdPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What role would you like to create?",
        name: "role",
        choices: ["Engineer", "Intern", "Finish Building My Team"],
      },
    ])

    .then((answers) => {
      if (answers.role === "Engineer") {
        engineerPrompts();
      }
      if (answers.role === "Intern") {
        internPrompts();
      }
      if (answers.role === "Finish Building My Team") {
        console.log("inside finish Q", answersArr);
        fs.writeFile("./dist/index.html", generateHTML(answersArr) , (err) =>
        err ? console.log(err) : console.log(`Success!`)
         )
      }
    });
};


managerPrompts();
module.exports = nextIdPrompt;
