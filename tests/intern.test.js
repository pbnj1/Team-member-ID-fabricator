const Intern = require("../lib/Intern")

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });

  test("Can get school via getSchool()", () => {

    const e = new Intern();

    expect(e.getSchool()).toBe(Intern.school);
  });
  
  test("getRole() should return \"Intern\"", () => {
   
    const e = new Intern();

    expect(e.getRole()).toBe(Intern);
  });
  