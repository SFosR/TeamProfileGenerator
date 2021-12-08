const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it('Creates Engineer', () => {
    const engineer = new Engineer('Sheri', '1', 'fostr.sheri@gmail.com', 'SFosR');

    expect(engineer.name).toBe('Sheri');
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("fostr.sheri@gmail.com");
    expect(engineer.gitHub).toBe('SFosR')
    expect(engineer.type).toBe("Engineer");
  });
  it("sets the name", () => {
    const engineer = new Engineer("Sheri", "1", "fostr.sheri@gmail.com", "SFosR");
    expect(engineer.getName()).toBe("Sheri");
  });

  it("sets the Id", () => {
    const engineer = new Engineer("Sheri", "1", "fostr.sheri@gmail.com", "SFosR");
    expect(engineer.getId()).toBe("1");
  });

  it("sets the email", () => {
    const engineer = new Engineer("Sheri", "1", "fostr.sheri@gmail.com", "SFosR");
    expect(engineer.getEmail()).toBe("fostr.sheri@gmail.com");
  });

  it("sets the Role", () => {
    const engineer = new Engineer("Sheri", "1", "fostr.sheri@gmail.com", "SFosR");
    expect(engineer.getRole()).toBe("Engineer");
  });

  it("sets office number", () => {
    const engineer = new Engineer("Sheri", "1", "fostr.sheri@gmail.com", "SFosR");
    expect(engineer.getGitHub()).toBe("SFosR")
  });


});


