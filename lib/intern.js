const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool(data) {
        return data.school
    }
    getRole() {
        return "Intern"
    }
}