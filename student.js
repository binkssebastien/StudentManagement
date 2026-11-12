class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Course: ${this.course}`;
    }

    getStudentName() {
        return this.name;
    }
}

module.exports = Student;