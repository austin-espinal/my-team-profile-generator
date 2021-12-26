//inquirer package
const inquirer = require('inquirer');

//HTML generation module
const {writeFile, copyFile} = require('./src/generateHTML');
//template for HTML
const template = require('./src/pageTemplate');

//job class modules
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

//team member array
const memberArr = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is name of the manager for this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("please enter manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("please enter manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("please enter manager's office number");
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNum } = managerData;
        const manager = new Manager(name, id, email, officeNum)

        memberArr.push(manager);
    })
};

//allows you to add new employees to the team
const addMember = () => {
    console.log(`
    =========================
    Add employees to the team
    =========================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    console.log ("Please enter the employee's ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's email!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'git',
            message: "What is the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: gitInput => {
                if (gitInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add more employees to the team?',
            default: false
        }
    ])
    .then(memberData => {

        let { name, id, email, role, git, school, confirmAddMember } = memberData; 
        let member; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, git);

            console.log(member);

        } 
        
        if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(member);
        }

        memberArr.push(employee); 

        if (confirmAddMember) {
            return addMember(memberArr); 
        } else {
            return memberArr;
        }
    })

};

promptManager()
.then(addMember)
.then(memberArr => {
    console.log(template(memberArr));
    return template(memberArr);
})
.then(generatedHTML => {
    return writeFile(generatedHTML);
})
.then(copyFile())
.catch(err => {
    console.log(err);
});