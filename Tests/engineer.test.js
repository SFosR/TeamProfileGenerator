const { test, expect } = require("@jest/globals");
const Employee = require("../lib/engineer");

test("Sets GitHub", () => {
  const testGitHub = "githubUser";
  const worker = new Engineer("Frank", 10, "frank@frank.com", testGitHub);
  expect(worker.github).toBe(testGitHub);
});

test("Sets GitHub Username", () => {
  const testGitHubUser = "github";
  const worker = new Engineer("Frank", 10, "frank@frank.com", testGitHubUser);
  expect(worker.GitHubUser()).toBe(testGitHub);
});

test("Sets Role", () => {
  const role = "Intern";
  const worker = new Engineer("Frank", 10, "frank@frank.com", "GitHubUser");
  expect(worker.role()).toBe(role);
});
