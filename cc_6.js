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
        return `${this.name} works in the ${this.department} and manages ${this.teamSize} people.`
    }
}

// Create sample employees


