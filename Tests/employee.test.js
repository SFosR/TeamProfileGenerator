const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('test employee object', ()=> {
    const worker = new Employee();
    expect(typeof(worker)).toBe("object");
});

it("Sets the name", ()=> {
    const testName = "Frank";
    const worker = new Employee(testName);
    expect(worker.name).toBe(testName);
});

it("Sets the Id", ()=> {
    const testId = "10";
    const worker = new Employee("Frank", testId);
    expect(worker.id).toBe(testId);
});

it("Sets the email", ()=> {
    const testEmail = "frank@frank.com";
    const worker = new Employee("Frank", 10, testEmail);
    expect(worker.email).toBe(testEmail);
});

it("Sets the Role", ()=> {
    const testRole = "Intern";
    const worker = new Employee("Frank", 10, "frank@frank.com", testRole);
    expect(worker.testRole).toBe(testRole);
});

