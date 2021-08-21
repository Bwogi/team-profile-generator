const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer("emmanuel", 2, "emma@gmail.com", "github_username");

  expect(engineer.name).toEqual("emmanuel");
  expect(engineer.id).toEqual(2);
  expect(engineer.email).toEqual("emma@gmail.com");
  expect(engineer.github).toEqual("github_username");
});

test("gets an engineer's github username", () => {
  const engineer = new Engineer("emmanuel", 2, "emma@gmail.com", "github_username");

  expect(engineer.getGithub()).toEqual(engineer.github);
});

test("gets an engineer's role", () => {
  const engineer = new Engineer("emmanuel", 2, "emma@gmail.com", "github_username");

  expect(engineer.getRole()).toEqual("Engineer");
});
