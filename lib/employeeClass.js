//created the parent class of employee
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id =id;
        this.email =email;
    }
    //set up the parent methods - notice that this is outside the constructor
        getName();
        getId();
        getEmail();
        getRole(){
            return "Employee";
        }
    
}

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
}

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
}
