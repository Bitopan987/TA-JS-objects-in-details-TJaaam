// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}
// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sayHello = function () {
    alert(`Welcome ${obj.name}`);
  };
  return obj;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sayHello = function () {
    alert(`Welcome ${obj.name}`);
  };
  return obj;
}

let personOne = createUser("ahir", 40);
let personTwo = createUser("Tulsi", 24);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
function createUser(name, age) {
  let obj = Object.create(userMethods);
  obj.name = name;
  obj.age = age;
  return obj;
}

let userMethods = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

let personOne = createUser("ahir", 40);
let personTwo = createUser("Tulsi", 24);
personOne.sayHello();
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

let personOne = new CreateUser("ahir", 40);
let personTwo = new CreateUser("Tulsi", 24);
personOne.sayHello();
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

let personOne = new CreateUser("ahir", 40);
let personTwo = new CreateUser("Tulsi", 24);
personOne.sayHello();
// 8. Convert the `createUser` function into `User` class.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}

let personOne = new CreateUser("Manash", 40);
let personTwo = new CreateUser("Tulsi", 24);
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();
