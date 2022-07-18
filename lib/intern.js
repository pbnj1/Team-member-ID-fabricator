const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    getRole(){
        console.log("intern class","Intern");
        return "Intern";
    }
}

module.exports = Intern;