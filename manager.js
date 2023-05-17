const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(employees) { //name, salary, title, manager
        this.employees = [];
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);

module.exports = Manager;
