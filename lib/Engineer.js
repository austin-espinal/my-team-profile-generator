const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.git = github;
    }

    getGithub() {
        
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;