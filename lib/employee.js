//created the parent class of employee
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id =id;
        this.email =email;
    }
    //set up the parent methods - notice that this is outside the constructor
        getName(){
            // this.name = name;
            return Employee.name;
        };
        getId(){
            // this.id =id;
            return Employee.id;
        }
        getEmail(){
           
            return Employee.email;
        };
        getRole(){
           
            console.log("employee class", "Employee");
            return Employee;
        }
    
}


module.exports = Employee;
