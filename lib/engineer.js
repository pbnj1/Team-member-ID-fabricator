const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        console.log("engineer class","Engineer");
        return "Engineer";
    }
}

module.exports = Engineer;