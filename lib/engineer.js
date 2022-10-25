const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub(data) {
        return data.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer