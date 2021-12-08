const Employee = require('./Employee');

class Engineer extends Employee {
        constructor (name, id, email, gitHub) {
        super(name, id, email)
        this.GitHub = gitHub;
        this.role = 'Engineer';
    };
   
    getGitHub() {
        return this.gitHub;
    };
    getRole() {
        return this.role;
    };
};   


module.exports = Engineer;