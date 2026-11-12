class Student {
    constructor(id, name, course, email) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.email = email;
    }
    
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Course: ${this.course}, Email: ${this.email}`;
    }

    getStudentName() {
        return this.name;
    }
    get StudentEmail() {
        return this.email;
    }
}

module.exports = Student;