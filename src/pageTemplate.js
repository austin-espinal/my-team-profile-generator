//creates manager cards
const managerCard = function (manager) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${manager.name}</h2>
              <h4 class="text-secondary">Manager</h4><i class="far fa-user"></i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.office}</p>
          </div>
      </div>
  </div>
  `;
}

// creates engineer cards
const engineerCard = function (engineer) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${engineer.name}</h2>
              <h4 class="text-secondary">Engineer</h4><i class="fas fa-user-cog"></i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.git}" target="_blank">${engineer.git}</a></p>
          </div>
      </div>
  </div>
  `;
}

// creates intern cards
const internCard = function (intern) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${intern.name}</h2>
              <h4 class="text-secondary">Intern</h4><i class="fas fa-coffee"></i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `;
};

//creates the html page using the data collected from inquirer. adds the employees to make it complete
generatePage = team => {
  cardArr = [];

  let managers = team.filter(function(member) {
    if(member.getRole() === 'Manager') {
      const mGroup = managerCard(member);
      return cardArr.push(mGroup);
    }
  })
  // console.log(managers);

  let engineers = team.filter(function(member) {
    if(member.getRole() === 'Engineer') {
      const eGroup = engineerCard(member);
      return cardArr.push(eGroup);
    }
  })
  // console.log(engineers);
  
  let interns = team.filter(function(member) {
    if(member.getRole() === 'Intern') {
      const iGroup = internCard(member);
      return cardArr.push(iGroup);
    }
  })
  // console.log(interns);

  const teamCards = cardArr.join('')
  return pageTemp(teamCards)
}

//overall page template
const pageTemp = teamCards => {

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3 align-center">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class="flex-row justify-center">
          ${teamCards}
        </div>
      </main>
    </body>
    </html>
    `;
};

module.exports = generatePage;