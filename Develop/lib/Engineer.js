// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Engineer{
    constructor(github){
        this.github = github

    }
    getGitHub(github) {

    }
    getRole(){
        return ("Engineer")
    }
}








module.exports = Engineer;