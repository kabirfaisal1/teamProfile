// employee constructor 
class Employee {
    constructor (name, id, email,employee) {
        this.name = name;
        this.id = id;
        this.email = email 
        this.employee = employee 
    }

    // returning name from input
    getName () {
        return this.name;
    }

    // returning ID from input
    getId () {
        return this.id;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return this.employee; 
    }
};

// to be exported 
module.exports = Employee; 