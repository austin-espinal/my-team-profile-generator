const managerCard = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNum}</p>
          </div>
      </div>
  </div>
  `;
}

// creates engineer cards
const engineerCard = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `;
}

// creates intern cards
const internCard = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `;
};

generatePage = team => {
  cardArr = [];

  let managers = team.filter(function(member) {
    if(member.getRole() === 'Manager') {
      const mGroup = managerCard(member);
      return cardArr.push(mGroup);
    }
  })
  console.log(managers);

  let engineers = team.filter(function(member) {
    if(member.getRole() === 'Engineer') {
      const eGroup = engineerCard(member);
      return cardArr.push(eGroup);
    }
  })
  console.log(engineers);
  
  let interns = team.filter(function(member) {
    if(member.getRole() === 'Intern') {
      const iGroup = internCard(member);
      return cardArr.push(iGroup);
    }
  })
  console.log(interns);

  const teamCards = cardArr.join('')
  return pageTemp(teamCards)
}

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
          <h1 class="page-title text-secondary bg-dark py-2 px-3">header</h1>
        </div>
      </header>
      <main class="container my-5">
      ${teamCards}
      </main>
    </body>
    </html>
    `;
};

module.exports = generatePage;