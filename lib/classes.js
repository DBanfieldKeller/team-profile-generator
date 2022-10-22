class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(data) {
        return data.name;
    }
    getId(data) {
        return data.id;
    }
    getEmail(data) {
        return data.email
    }
    getRole() {
        return "Employee"
    }
};

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
}

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