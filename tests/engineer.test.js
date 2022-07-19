const Engineer = require("../lib/Engineer")

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });

  test("Can get github username via getGithub()", () => {

    const e = new Engineer();
    
    expect(e.getGithub()).toBe(Engineer.github);
  });
  
  test("getRole() should return \"Engineer\"", () => {
 
    const e = new Engineer();
    
    expect(e.getRole()).toBe(Engineer);
  });
  