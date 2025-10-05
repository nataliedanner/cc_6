// Coding Challenge 6

// Create base class Employee
class Employee{
   constructor(name, department) {
    this.name = name;
    this.department = department
   }
   describe() {
    return `${this.name} works in the ${this.department} department.`
   }
}

// Create subclass Manager that extends Employee

class Manager extends Employee{
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize
    }
    describe(){
        return `${this.name} works in the ${this.department} department and manages ${this.teamSize} people.`
    }
}

// Create sample employees and manager


let emp1 = new Employee("Alice", "Finance");
let emp2 = new Employee("Jim", "Advertising");

let manager = new Manager("Taylor", "HR", 8);

// Create class Company

class Company {
    constructor(){ 
        this.employees = []
    }
    addEmployee(employee) {
        this.employees.push()
    }

    listEmployees() {
        return console.log(`${this.name} works in the ${this.department} department.`)
    }
}

// Create Company object

let c = new Company();
let emp4 = new Employee("Jane", "Marketing");
c.addEmployee(emp4);
console.log("Employee List")
c.listEmployees();
