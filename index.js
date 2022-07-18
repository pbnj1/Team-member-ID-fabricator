const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");



const engineerPrompts = () => {
  inquirer.prompt([
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
    }
  ])

  .then((answers) => {
  answersArr.push(answers);
  console.log("engineer Q", answersArr);
  return nextIdPrompt();
})
}




const internPrompts = () => {
  inquirer.prompt([
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
    answersArr.push(answers);
    console.log("intern Q", answersArr);
    return nextIdPrompt();
  
  })
}





let answersArr =[];

const managerPrompts =() =>{
  inquirer.prompt([
   
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

  )
  answersArr.push(answers);
  console.log("manager Q", answersArr);
  return nextIdPrompt();
})
}








const nextIdPrompt =() =>{
  inquirer.prompt([
    {
        type: "list",
        message: "What role would you like to create?",
        name: "role",
        choices: ["Engineer", "Intern", "Finish Building My Team"],
      },
    ])

   .then((answers) => {
if (answers.role === "Engineer"){engineerPrompts();} 
if (answers.role === "Intern"){internPrompts()};
if (answers.role === "Finish Building My Team")
{
  console.log("finish Q", answersArr);
  fs.writeFile("index.html", generateHTML(answers), (err) =>
  err ? console.log(err) : console.log(`Success!`)
   )
}
})
}

;


managerPrompts();
module.exports = nextIdPrompt;