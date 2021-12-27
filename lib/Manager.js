//imports employee object
const Employee = require('./Employee');

//manager object
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;