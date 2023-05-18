class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager || null;
        
        if (this.manager){
            manager.addEmployee(this)
        }
    }

}


module.exports = Employee
