const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Creates Manager", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");

    expect(manager.name).toBe("Sheri");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("fostr.sheri@gmail.com");
    expect(manager.officeNumber).toBe("614-000-0000");
    expect(manager.type).toBe("Manager");
  });

  it("sets the name", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");
    expect(manager.getName()).toBe("Sheri");
  });

  it("sets the Id", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");
    expect(manager.getId()).toBe("1");
  });

  it("sets the email", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");
    expect(manager.getEmail()).toBe("fostr.sheri@gmail.com");
  });

  it("sets the Role", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");
    expect(manager.getRole()).toBe("Manager");
  });

  it("sets office number", () => {
    const manager = new Manager("Sheri", "1", "fostr.sheri@gmail.com", "614-000-0000");
    expect(manager.getOfficeNumber()).toBe("614-000-0000");
  });
});
