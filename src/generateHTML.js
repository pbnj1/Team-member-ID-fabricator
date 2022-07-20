let example = ""

const managerCard = (Manager) => {
  console.log("hi", Manager);
  return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-title">${Manager.name}</h4>
          <h5 class="card-text">${Manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${Manager.id}</li>
          <li class="list-group-item">Email:
            <a href="#" class="card-link"> ${Manager.email}</a>
          </li>
          <li class="list-group-item">${Manager.officeNumber}</li>
        </ul>
      </div>

`;
};

const engineerCard = (Engineer) => {
  return `  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">${Engineer.name}</h4>
      <h5 class="card-text">${Engineer.role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Engineer.id}/li>
      <li class="list-group-item">Email:
        <a href="#" class="card-link"> ${Engineer.email}</a>
      </li>
      <li class="list-group-item">Github:
        <a href="#" class="card-link"> ${Engineer.github}</a>
      </li>
    </ul>
  </div>
    
    `;
};

const internCard = (Intern) => {
  return `  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">${Intern.name}</h4>
      <h5 class="card-text">${Intern.role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Intern.id}</li>
      <li class="list-group-item">Email:
        <a href="#" class="card-link"> ${Intern.email}</a>
      </li>
      <li class="list-group-item">${Intern.school}</li>
    </ul>
  </div>  
    `;
};

function getEachCard(answersArr) {
    console.log("inside getEachCard", answersArr);
    for (i = 0; i < answersArr.length; i++) {
      console.log(answersArr[i].getRole());
      if (answersArr[i].getRole() === "Manager") {
      
        const managerCardText = managerCard(answersArr[i]);
        console.log(" string ", managerCardText)
        return managerCardText
      }
      if (answersArr[i].getRole() === "Engineer") {
        const engineerCardText = engineerCard(answersArr[i]);
        return engineerCard;
      }
      if (answersArr[i].getRole() === "Intern") {
        const internCardText = internCard(answersArr[i]);
        return internCard;
      }
    }
    return example
  }

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
    <link rel="stylesheet" type ="text/css" href="./assets/styles.css">
</head>
<body>
    <nav id = "nav"> <h1 id ="team"> My Team </h1></nav>

    <div id ="to-append">
    <div>${"hello"}<div>
    
    ${getEachCard(answersArr)}
   

    </div>

   



</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</html>`;
}
module.exports = generateHTML;
