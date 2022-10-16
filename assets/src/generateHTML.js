// create Manager card
const generateManager = function (manager) {
    return `
        <div id="manager_card" class="col mb-4 mb-lg-0 card text-center card-block" >
  
            <div id="managercard_header" class="card-header">
                <h3 class="display-4" >${manager.name}</h3>
                <h4 class="display-4" >Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>


            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div id="engineer_card" class="col mb-4 mb-lg-0 card text-center card-block" >
  
            <div id= "engineercard_header" class="card-header">
                <h3 class="display-4" >${engineer.name}</h3>
                <h4 class="display-4" >Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>

    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
        <div id="intern_card" class="col mb-4 mb-lg-0 card text-center card-block" >
    
            <div id="interncard_header"  class="card-header">
                <h3 class="display-4" >${intern.name}</h3>
                <h4 class="display-4" >Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
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
      <nav class="navbar navbar-expand-lg navbar-dark" id="header_navbar">
            <div class="container">Team Profile
            </div>
        </nav>
      </header>
      <main>
      <div class="container mt-4" id="mainContainer">
      <div class="row mb-4 card-deck" id="team_cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>


`;
}

// export to index
module.exports = generateHTML; 
