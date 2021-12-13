generateHTML = (theTeam) => {

  let cards = [];

  for (var i = 0; i <theTeam.length; i++) {
    if (theTeam[i].type === "Manager") {
      let managerCard = generateManagerCard(theTeam[i]);
      cards.push(managerCard);
    } else if (theTeam[i].type === "Engineer") {
      let engineerCard = generateEngineerCard(theTeam[i]);
      cards.push(engineerCard);
    } else if (theTeam[i].type === "Intern") {
      let internCard = generateInternCard(theTeam[i]);
      cards.push(internCard);
    }
  }
  const theTeamCards = cards.join("");

  const indexHTML = generateCompleteHTML(theTeamCards);
  return indexHTML;
};

const generateCompleteHTML = (theTeamCards) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width>, initial-scale=1">
  <title>Team Profile Generator</title> 
  <link rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"/>
<link rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
</head>

<body>
  <header class="bg-success p-2">
    <h3 class="display-3 text-center text-white fw-bolder">My Team</h3>
    <div class="display-3 text-center text-white fw-bolder"><i class="fas fa-users fa-xs"></i></div>
  </header>  

  <div class="container">
    <div class="row">
    ${theTeamCards}
   </div>
   </div>
   </body>
   </html> 
    `
};

const generateManagerCard = (manager) => {
  return `
    <div class="col-3 m-2">
  <div class="card">
    <div class="card-header bg-danger text-white">
    <h2>${manager.name}</h2>
    <h3><i class="fas fa-cogs fa-sm"></i></h3>
    <h3>${manager.type}</h3>
  </div>
  <div class="card-body"></div>
    <p class="border m-2">ID: ${manager.id}</p>
    <p class="border m-2"><i class="fas fa-envelope-square"></i>${manager.email}</p>
    <p class="border m-2">${manager.officeNumber}</p>
  </div>
  </div> `
};

const generateEngineerCard = (engineer) => {
  return `
    <div class="col-3 m-2">
  <div class="card">
    <div class="card-header bg-danger text-white">
      <h2>${engineer.name}</h2>
      <h3><i class="fas fa-glasses"></i></h3>
      <h3>${engineer.type}</h3>
    </div>
    <div class="card-body"></div>
      <p class="border m-2">${engineer.id}</p>
      <p class="border m-2"><i class="fas fa-envelope-square"></i>${engineer.email}</p>
      <p class="border m=2">GitHub: ${engineer.gitHub}</p>
  </div>  
</div>`
};

const generateInternCard = (intern) => {
  return `
    <div class="col-3 m-2">
  <div class="card">
    <div class="card-header bg-danger text-white">
      <h2>${intern.name}</h2>
      <h3><i class="fas fa-user-graduate"></i></h3>
      <h3>${intern.type}</h3>
    </div>
    <div class="card-body"></div>
      <p class="border m-2">ID: ${intern.id}</p>
      <p class="border m-2"><i class="fas fa-envelope-square"></i>Email: ${intern.email}</p>
      <p class="border m=2">School: ${intern.school}</p>
  </div>  
</div>`
};

module.exports = generateHTML;
