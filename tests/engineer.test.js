const Engineer = require("../lib/Engineer")

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });

  test("Can get github username via getGithub()", () => {
    const testValue = "user@github.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  