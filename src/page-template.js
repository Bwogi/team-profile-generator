const createCards = (employees) => {
    if (!employees) {
      return "";
    }
  
    return `
      ${employees
        .map((employee) => {
          return `
          <div class="card m-2" style="width:18rem">
          <div class="card-body">
            <h5 class="card-title bg-primary text-white p-4"><span class="lead">${employee.name}</span><br><span>${iconSetup(employee)} ${employee.role}</span></h5>
            <div class="card p-3 mb-1">ID: ${employee.id}</div>
            <div class="card p-3 mb-1">Email:<a href="mailto:${employee.email}">${employee.email}</a></div>
            <div class="card p-3 mb-3">${otherDetail(employee)}</div>
          </div>
        </div>`;
        })
        .join("")}
    `;
  };
  // generate icons 
  const iconSetup = (employee) => {
    if(employee.role === "Engineer"){
      return `<i class="fas fa-glasses"></i> `
    } else 
    if(employee.role === "Manager"){
      return `<i class="fas fa-mug-hot"></i> `
    } else 
    if (employee.role === "Intern"){
      return `<i class="fas fa-user-graduate"></i>`
    }
  };
  
  // customize cards to roles
  const otherDetail = (employee) => {
    if (employee.role === "Manager") {
      return `Office <i class="fas fa-phone-alt"></i>:${employee.officeNumber}`;
    } else if (employee.role === "Engineer") {
      return `GitHub Account:<a href="https://github.com/${employee.github}">${employee.github}</a>`;
    } else {
      return `School: ${employee.school}`;
    }
  };
  
  // The relevant arrays for each employee 
  module.exports = (data) => {
    const managers = data.filter((employee) => employee.role === "Manager");
    const engineers = data.filter((employee) => employee.role === "Engineer");
    const interns = data.filter((employees) => employees.role === "Intern");
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          <title>My Generator</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
          <link rel="stylesheet" href="css/mdb.min.css" />
          <link rel="stylesheet" href="plugins/css/all.min.css" />
          <link rel="stylesheet" href="./css/style.css">
      </head>
      <body>
      <header class="bg-danger text-white p-5">
        <div class="text-center display-6">My Team</div>
     </header>
     <div class="container-fluid">
       <div id="card-container" class="mt-4 container justify-content-center ">
              ${createCards(managers)}
              ${createCards(engineers)}
              ${createCards(interns)}
        </div>
      </div>
     </body>
  
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <script type="text/javascript" src="plugins/js/all.min.js"></script>
    <script 
      `;
  };
  