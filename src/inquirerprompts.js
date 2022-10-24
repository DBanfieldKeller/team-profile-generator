const inquirer = require('inquirer');


function getManagerInfo() {
    inquirer.prompt([
        {
            type : "input",
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
        console.log(response)
    })
}

function getEmployeeInfo() {
  
}
getManagerInfo()