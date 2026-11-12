const Student = require('./student');
describe('Student Class Tests', () => {
    test('Should create a student correctly', () => {
        const student = new Student(
            101,
            'John',
            'Computer Science',
            'john@example.com'
        );
        expect(student.id).toBe(101);
        expect(student.name).toBe('John');
        expect(student.course).toBe('Computer Science');
    });
    test('Should return student name', () => {
        const student = new Student(
            102,
            'Sarah',
            'Software Engineering',
            'sarah@example.com'
        );
expect(student.getStudentName()).toBe('Sarah');
    });
    test('Should display student details', () => {
        const student = new Student(
            103,
            'David',
            'Computer Science',
            'david@example.com'
        );
        expect(student.displayDetails()).toContain('David');
        expect(student.displayDetails()).toContain('Computer Science');
    });
    test('Should return student email', () => {
        const student = new Student(
            104,
            'Alex',
            'Computer Science',
            'alex@example.com'
        );
        expect(student.getStudentEmail()).toBe('alex@example.com');
    });
});