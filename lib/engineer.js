const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github,role){
        super(name,id,email);
        this.github = github;
    }
    getGithub(github){
        this.github = github;
        return github;
    }
    getRole(){
        this.role = Engineer;
        console.log("engineer class","Engineer");
        return Engineer;
    }
}

module.exports = Engineer;