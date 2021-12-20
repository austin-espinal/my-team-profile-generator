const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.git = github;
    }

    getGithub() {
        
    }
    
    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;