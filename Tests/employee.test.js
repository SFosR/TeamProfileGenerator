const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Creates Employee", () => {
    const employee = new Employee("Sheri", "1", "fostr.sheri@gmail.com");

    expect(employee.name).toBe("Sheri");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("fostr.sheri@gmail.com");
    expect(employee.type).toBe("Employee");
  });

  it("sets the name", () => {
    const employee = new Employee("Sheri", "1", "fostr.sheri@gmail.com");
    expect(employee.getName()).toBe("Sheri");
  });

  it("sets the Id", () => {
    const employee = new Employee("Sheri", "1", "fostr.sheri@gmail.com");
    expect(employee.getId()).toBe("1");
  });

  it("sets the email", () => {
    const employee = new Employee("Sheri", "1", "fostr.sheri@gmail.com");
    expect(employee.getEmail()).toBe("fostr.sheri@gmail.com");
  });

  it("sets the Role", () => {
    const employee = new Employee("Sheri", "1", "fostr.sheri@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
