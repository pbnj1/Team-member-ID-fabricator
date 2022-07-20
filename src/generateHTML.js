
const managerCard = (Manager) =>{
return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-title">${Manager.name}</h4>
          <h5 class="card-text">${Manager.role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${Manager.id}</li>
          <li class="list-group-item">Email:
            <a href="#" class="card-link"> ${Manager.email}</a>
          </li>
          <li class="list-group-item">${Manager.officeNumber}</li>
        </ul>
      </div>

`
}

const engineerCard = (Engineer) =>{
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
    
    `
    }


const internCard = (Intern) =>{
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
    `
    }



const generateHTML = (Intern) => 

`<html lang="en">
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
    


    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">${Intern.getName()}</h4>
      <h5 class="card-text">${Intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Intern.getId()}</li>
      <li class="list-group-item">Email:
        <a href="#" class="card-link"> ${Intern.getEmail()}</a>
      </li>
      <li class="list-group-item">${Intern.getSchool()}</li>
    </ul>
  </div>  



    </div>

   



</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</html>`;

module.exports = generateHTML;

    


// const generateHTML = ({ name, location, github, linkedin }) => ``;


// ${document.createElement("div").innerHTML(answersArr).setAttr("id","card")}
// ${document.getElementById("to-append").append(card)}