const Manager = require("../lib/Manager");

test("Sets office number", () => {
  const officeNumber = 104;
  const worker = new Manager("Frank", 10, "frank@frank.com", officeNumber);
  expect(worker.officeNumber).toBe(officeNumber);
});

test("Sets role", () => {
  const role = "Manager";
  const worker = new Manager("Frank", 10, "frank@frank.com", 104, role);
  expect(worker.role()).toBe(role);
});
