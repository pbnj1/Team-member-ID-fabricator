const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = (answersArr) => ``;

// const generateHTML = ({ name, location, github, linkedin }) => ``;


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
  answersArr.push(answers);
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
if (answers.choices === "Engineer"){
engineerPrompts();
} 
// if (answers.choices === "Intern"){
// internPrompts();
// }if (answers.choices === "Finish Building My Team"){
//   fs.writeFile("index.html", generateHTML(answers), (err) =>
//   err ? console.log(err) : console.log(`Success!`)
//    )
// }
})
}

;


managerPrompts();
