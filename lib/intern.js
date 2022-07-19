const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school,role){
        super(name,id,email,role);
        this.school = school;
    }
    getSchool(school){
        this.school = school;
        return school
    }
    getRole(){
        this.role = Intern;
        console.log("intern class","Intern");
        return Intern;
    }
}

module.exports = Intern;