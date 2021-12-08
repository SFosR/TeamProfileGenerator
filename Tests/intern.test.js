const { TestWatcher } = require("@jest/core");
const Intern = require("../lib/Intern");

test("Sets school", () => {
  const school = "THE OSU";
  const worker = new Intern("Frank", 10, "frank@frank.com", school);
  expect(worker.school).toBe(school);
});

test("Sets Role", () => {
  const role = "Intern";
  const worker = new Intern("Frank", 10, "frank@frank.com", "THE OSU");
  expect(worker.role()).toBe(role);
});
