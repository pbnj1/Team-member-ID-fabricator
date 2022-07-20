//created the parent class of employee
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id =id;
        this.email =email;
    }
    //set up the parent methods 
        getName(){
           
            return Employee.name;
        };
        getId(){
           
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
