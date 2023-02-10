const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "marv",
  [password]: "password",
  age: 1,
};

console.log(`Name: ${user.username}`);
console.log(`Password: ${user.password}`);
console.log(`Age: ${user.age}`);
