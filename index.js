const inquirer = require("inquirer");
const fs = require("fs");
const { DefaultSerializer } = require("v8");

const generateHTML = (answers) => ``;

// const generateHTML = ({ name, location, github, linkedin }) => ``;

// const managerPrompts = () => {
//   inquirer.prompt([
//       {
//         type: "input",
//         message: "What is your name?",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "What is your ID?",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "What is your email?",
//         name: "email",
//       },
//       {
//         type: "input",
//         message: "What is your office number?",
//         name: "number",
//       },
//     ])

//     .then(() => {});
// };

// const engineerPrompts = () => {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "What is your ID?",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "What is your email?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What is your Github username?",
//       name: "github",
//     },
//   ])

//   .then(() => {});
// };

// const internPrompts = () => {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "What is your ID?",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "What is your email?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What school do you attend?",
//       name: "school",
//     },
//   ])
//   .then(() => {});
// };
let initialAnswers =[];
function initialPrompts() {
  inquirer.prompt([
    {
      type: "list",
      message: "What role would you like to create?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
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
      message: "What is your office number?",
      name: "number",
      when: (answers) => answers.role === "Manager", //when property is used to isolate this question so it only procs when the role is manager
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "github",
      when: (answers) => answers.role === "Engineer", //when proper is used to isolate this question so it only procs when the role is engineer
    },
    {
      type: "input",
      message: "What school do you attend?",
      name: "school",
      when: (answers) => answers.role === "Intern", //when proper is used to isolate this question so it only procs when the role is engineer
    },
    {
      type: "list",
      message: "Do you have another employee to create?",
      name: "another",
      choices:["Yes", "No"]
    },
  ])

  .then((answers) => {
initialAnswers =[initialAnswers.push(answers)]
if (answers.another === "Yes"){
  console.log(initialAnswers)
  initialPrompts();
}

  fs.writeFile("index.html", generateHTML(answers), (err) =>
    err ? console.log(err) : console.log(`Success!`)
  );
  
  })
 
  //   .then((answer) => {
  // switch(answer.choices){
  //   case "Manager":
  //     managerPrompts();
  //     break;
  //   case "Engineer":
  //     engineerPrompts();
  //     break;
  //   case "Intern":
  //     internPrompts();
  //     break;
  // }})

  // .then((answer) => {
  //   if ((answer.choices = "Manager")) {
  //     managerPrompts();
  //   }
  //   else if ((answer.choices = "Engineer")) {
  //     engineerPrompts();
  //   }
  //   else {
  //     internPrompts();
  //   }
  // });
}

initialPrompts();
