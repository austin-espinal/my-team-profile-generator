const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.git = github;
    }

    getGithub() {
        return this.git;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;