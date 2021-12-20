const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.office = officeNum;
    }
    
    getRole() {
        return Manager;
    }
}

module.exports = Manager;