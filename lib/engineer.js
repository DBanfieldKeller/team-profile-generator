const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub(data) {
        return data.github
    }
    getRole() {
        return "Engineer"
    }
}