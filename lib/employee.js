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
            console.log("employee class", "Employee");
            return "Employee";
        }
    
}


module.exports =Employee;
