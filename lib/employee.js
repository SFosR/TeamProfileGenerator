class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = 'Employee';
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.type;
    };
};

module.exports = Employee;
