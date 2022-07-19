// let pinBoard = document.getElementById("to-append");
// let card = document.createElement("div");

//  tried using the below lines inside the div in the generateHTML - it did not like the document part though
// ${document.createElement("div").innerHTML(answersArr).setAttr("id","card")}
// ${document.getElementById("to-append").append(card)}


const generateHTML = (answersArr) => 



// for(let i= 0; i< answerArr.length; i++){
//     let pinBoard = document.getElementById("to-append");
//     let card = document.createElement("div");
//     card.innerHTML("hello")
//     pinBoard.append(card);
//     }

`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team ID Card Builder</title>
    <link rel="stylesheet" type ="text/css" href="./assets/styles.css">
</head>
<body>
    <nav id = "nav"> <h1 id ="team"> My Team </h1></nav>

    <div id ="to-append">

    </div>

   



</body>
</html>`;

module.exports = generateHTML;

// const generateHTML = ({ name, location, github, linkedin }) => ``;


