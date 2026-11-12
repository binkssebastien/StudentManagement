const Student = require('./student');
describe('Student Class Tests', () => {
test('Should create a student correctly', () => {
const student = new Student(
101,
'John',
'Computer Science'
);
expect(student.id).toBe(101);
expect(student.name).toBe('John');
expect(student.course).toBe('Computer Science');
});
test('Should return student name', () => {
const student = new Student(
102,
'Sarah',
'Software Engineering'
);
expect(student.getStudentName()).toBe('Sarah');
});
test('Should display student details', () => {
const student = new Student(
103,
'David',
'Computer Science'
);
expect(student.displayDetails()).toContain('David');
expect(student.displayDetails()).toContain('Computer Science');
});
});