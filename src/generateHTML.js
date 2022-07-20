let idRender = "";

//manager HTML
const managerCard = (Manager) => {
  console.log("hi", Manager);
  return `


    <div class="card col-4" style="width: 18rem">
        <div class="card-body top">
          <h4 class="card-title">${Manager.name}</h4>
          <h5 class="card-text">${Manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush bottom">
          <li class="list-group-item bottom">ID: ${Manager.id}</li>
          <li class="list-group-item bottom">Email:
            <a href="#" class="card-link"> ${Manager.email}</a>
          </li>
          <li class="list-group-item bottom"> Office Number: ${Manager.officeNumber}</li>
        </ul>
      </div>

`;
};

//engineer HTML
const engineerCard = (Engineer) => {
  return `  


  <div class="card col-4" style="width: 18rem">
    <div class="card-body top">
      <h4 class="card-title">${Engineer.name}</h4>
      <h5 class="card-text">${Engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bottom">ID: ${Engineer.id}/li>
      <li class="list-group-item bottom">Email:
        <a href="#" class="card-link"> ${Engineer.email}</a>
      </li>
      <li class="list-group-item bottom">Github:
        <a href="#" class="card-link"> ${Engineer.github}</a>
      </li>
    </ul>
  </div>
    
    `;
};

//Intern HTML
const internCard = (Intern) => {
  return `  

  
  <div class="card col-4" style="width: 18rem">
    <div class="card-body top">
      <h4 class="card-title">${Intern.name}</h4>
      <h5 class="card-text">${Intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush bottom">
      <li class="list-group-item bottom">ID: ${Intern.id}</li>
      <li class="list-group-item bottom">Email:
        <a href="#" class="card-link"> ${Intern.email}</a>
      </li>
      <li class="list-group-item bottom">School: ${Intern.school}</li>
    </ul>
  </div>  
    `;
};

//Funciton to search through the prompts to find the right employee class and send it from an array to a string
function getEachCard(answersArr) {
  console.log("inside getEachCard", answersArr);
  for (i = 0; i < answersArr.length; i++) {
    console.log(answersArr[i].getRole());
    if (answersArr[i].getRole() === "Manager") {
      const managerCardText = managerCard(answersArr[i]);
      console.log(" string ", managerCardText);
      idRender += managerCardText;
    }
    if (answersArr[i].getRole() === "Engineer") {
      const engineerCardText = engineerCard(answersArr[i]);
      console.log(" string ", engineerCardText);
      idRender += engineerCardText;
    }
    if (answersArr[i].getRole() === "Intern") {
      const internCardText = internCard(answersArr[i]);
      idRender += internCardText;
    }
  }
  return idRender;
}

//function to return the skeleton to render the cards on the screen
function generateHTML(answersArr) {
  return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
    crossorigin="anonymous"
    />
    <title>Team ID Card Builder</title>
    <link rel="stylesheet" type ="text/css" href="./styles.css">
</head>
<body>
    <nav id = "nav"> <h1 id ="team"> My Team </h1></nav>
<div class ="container">
    <div id ="to-append" class ="row col-12 d-flex justify-content-around">
   
    
    ${getEachCard(answersArr)}
   

    </div>
<div>
   



</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</html>`;
}
module.exports = generateHTML;
