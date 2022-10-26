// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const {getManagerInfo, newEmployee} = require('./src/inquirerprompts')
const Manager = require('./lib/manager')

// data

let teamArray = [];

// functions

// user interactions

// initialization
getManagerInfo()
.then((response)=> {
    const teamManager = new Manager(response.name, response.id, response.email, response.officenumber);
    teamArray.push(teamManager)
    console.log(teamArray)
    newEmployee()
})