const inquirer = require('inquirer');
const employee = require('../lib/employee');
const manager = require('../lib/manager')

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
        ])
        
)
    // .then((response) => {
    //     // new manager(response.officenumber)
    //     console.log(response)
    // })
}

function newEmployee() {
    response = inquirer.prompt([
        {
            type: 'list',
            name: 'newemployee',
            message: 'Add additional employee?',
            choices: [
                'Engineer',
                'Intern',
                'Finish (No further employees will be added)'
            ]
        }
    ])
    if (response === 'Engineer') {
        const response2 = inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Employee name?'
            },
            {
                type: 'input',
                name: 'github',
                message: "Employee's github user name?",
            },

        ])
        console.log(response2)
    }
}
getManagerInfo()
    .then((resolved) => console.log(resolved))
// newEmployee()