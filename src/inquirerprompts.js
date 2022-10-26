const inquirer = require('inquirer');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern')

let teamArray = []

// get manager info

function getManagerInfo() {
    return Promise.resolve(inquirer.prompt([
        {
            type: "input",
            message: "Manager name?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager's employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Manager's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Manager's office number?",
            name: "officenumber"
        }
    ]))
}

// add new employee
function newEmployee() {
    // prompt for new employee type or finish entering employees
    inquirer.prompt([
        {
            type: 'list',
            name: 'newemployee',
            message: 'Add additional employee?',
            choices: [
                'Engineer',
                'Intern',
                'Finish (No further employees will be added and your html will be generated)'
            ]
        }
    ])
        .then((response) => {
            // prompt for engineer
            if (response.newemployee === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Employee name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Employee ID?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Employee email address?'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "Employee's github user name?",
                    },
                    // take response and create new engineer, add new engineer to team array and repeat function
                ]).then((response) => {
                    teamArray.push(new Engineer(response.name, response.id, response.email, response.github))
                    newEmployee()
                })
                // prompt for intern
            } else if (response.newemployee === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Intern name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "Intern's employee ID?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Intern email address?',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Intern's school?"
                    }
                    // take responses, make new intern and push to array, repeat new employee function
                ]) .then((response) =>{
                    teamArray.push(new Intern(response.name, response.id, response.email, response.school))
                    newEmployee();
                })
                // end function and run write to HTML function (TODO)
            } else {
                console.log('running html function')
                console.log(teamArray)
                // run html function
            }
        });
}

getManagerInfo()
.then((response) => {
    const teamManager = new Manager(response.name, response.id, response.email, response.officenumber)
    teamArray.push(teamManager)
    console.log(teamManager)
    newEmployee()
})


module.exports={
    getManagerInfo,
    newEmployee
}