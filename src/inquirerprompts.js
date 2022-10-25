const inquirer = require('inquirer');
const employee = require('../lib/employee');
const manager = require('../lib/manager')

function getManagerInfo() {
    inquirer.prompt([
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
    ])

        .then((response) => {
            // add class info
            console.log(response)
        })
}

function newEmployee() {
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
            if (response.newemployee === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Employee name?'
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
                ]).then((response) => {
                    console.log(response);
                    // add class stuff
                    newEmployee()
                })
            } else if (response.newemployee === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Intern name?'
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
                ]) .then((response) =>{
                    console.log(response);
                    // class stuff;
                    newEmployee();
                })
            } else {
                console.log('running html function')
                // run html function
            }
        });
}

// newEmployee()
module.exports= {
    getManagerInfo,
    newEmployee
}