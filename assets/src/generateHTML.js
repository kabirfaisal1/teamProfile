// create Manager card
const generateManager = function (manager) {
    return `
    <div id="managercard_header" class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="card-header" id="managercard_header">
                <h3 class="card-title" >${manager.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Manager</h4><i class="material-icons">laptop_mac</i>
        
            </div>
        
            <p class="id">ID: ${manager.id}</p>
        
            <p>Email:<a href="mailto:${manager.email}">${manager.email}</a> </p>
        
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `

        <div id="engineer_card" class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header" id="engineercard_header">
                    <h3 class="card-title" >${engineer.name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">Engineer</h4><i class="material-icons">laptop_mac</i>
            
                </div>
            
                <p class="id">ID: ${engineer.id}</p>
            
                <p>Email:<a href="mailto:${engineer.email}">${engineer.email}</a> </p>
            
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>

    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `

        <div id="interncard_header" class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header" id="interncard_header">
                    <h3 class="card-title" >${intern.name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">Intern</h4><i class="material-icons">assignment_ind</i>
            
                </div>
            
                <p class="id">ID: ${intern.id}</p>
            
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a> </p>
            
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>

    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const buildTeam = buildTeamPage(employeeCards);
    return buildTeam;

}

// generate html page 
const buildTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link class="myIcon" rel="icon" type="image/x-icon"
      href="../teamProfile/assets/image/favicon.ico">
      <title>Team Profile</title>
      <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous">
      <link rel=”stylesheet” href=”https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css”/>
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="./assets/css/style.css">
  </head>
  <body>
        <header>
            <nav class="navbar navbar-expand-lg" id="header_navbar">
                <div class="navbar-brand mb-0 h1 w-100 text-center"id="pageTitle">Team Profile
                </div>
            </nav>
        </header>
        <main>
             <div class="container" id="mainContainer">
                <div class="row justify-content-center" id="team_cards">
                    <!--Team Cards-->
                        ${employeeCards}
                </div>
            </div>
        </main>
      
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>


`;
}

// export to index
module.exports = generateHTML; 
