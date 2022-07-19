const Manager = require("../lib/Manager")

test("Can instantiate Intern instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  