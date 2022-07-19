const Manager = require("../lib/Manager")

test("Can instantiate Intern instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

  
  test("getRole() should return \"Intern\"", () => {
  
    const e = new Manager();

    expect(e.getRole()).toBe(Manager);
  });
  