const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("emmanuel", 3, "emma@gmail.com", "UC Berkeley");

  expect(intern.name).toEqual("emmanuel");
  expect(intern.id).toEqual(3);
  expect(intern.email).toEqual("emma@gmail.com");
  expect(intern.school).toEqual("UC Berkeley");
});

test("gets an intern's school", () => {
  const intern = new Intern("emmanuel", 3, "emma@gmail.com", "UC Berkeley");

  expect(intern.getSchool()).toEqual(intern.school);
});

test("gets an intern's role", () => {
  const intern = new Intern("emmanuel", 3, "emma@gmail.com", "UC Berkeley");

  expect(intern.getRole()).toEqual("Intern");
});
