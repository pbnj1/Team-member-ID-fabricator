const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber,role){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        this.role = Manager
        console.log("manager class","Manager");
        return Manager
    }
}


module.exports = Manager;