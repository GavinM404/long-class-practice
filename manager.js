const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees) { //name, salary, title, manager
        super(name, salary, title, manager)
        this.employees = []
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);

module.exports = Manager;
