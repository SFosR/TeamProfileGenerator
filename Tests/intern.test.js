const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Creates Intern", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");

    expect(intern.name).toBe("Sheri");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("fostr.sheri@gmail.com");
    expect(intern.school).toBe("OSU");
    expect(intern.type).toBe("Intern");
  });

  it("sets the name", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");
    expect(intern.getName()).toBe("Sheri");
  });

  it("sets the Id", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");
    expect(intern.getId()).toBe("1");
  });

  it("sets the email", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");
    expect(intern.getEmail()).toBe("fostr.sheri@gmail.com");
  });

  it("sets the Role", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");
    expect(intern.getRole()).toBe("Intern");
  });

  it("sets the office number", () => {
    const intern = new Intern("Sheri", "1", "fostr.sheri@gmail.com", "OSU");
    expect(intern.getSchool()).toBe("OSU");
  });
});
