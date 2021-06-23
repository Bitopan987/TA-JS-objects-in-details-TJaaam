# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

<!-- - [ ] Using function to create object -->

```js
function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };
  user.incrementProjects = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };
  user.decrementProjects = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };
  return user;
}

const bikash = createUser("bikash", 1, 25);
const pallav = createUser("pallav", 2, 100);

console.group("Bikash");
console.log(bikash.name);
console.log(bikash.id);
console.log(bikash.incrementProjects());
console.log(bikash.decrementProjects());
console.log(bikash.changeName("bitopan"));
console.log(bikash.name);
console.groupEnd();

console.group("Pallav");
console.log(pallav.name);
console.log(pallav.id);
console.log(pallav.incrementProjects());
console.log(pallav.decrementProjects());
console.log(pallav.changeName("pallavi"));
console.log(pallav.name);
console.groupEnd();
```

<!-- - [ ] Using Object.create (prototypal pattern) -->

```js
function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}
let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProjects: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProjects: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

const bikash = createUser("bikash", 1, 25);
const pallav = createUser("pallav", 2, 100);
```

<!-- - [ ] Using Pseudoclassical Way -->

```js
function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProjects: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProjects: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

const bikash = new CreateUser("bikash", 1, 25);
const pallav = new CreateUser("pallav", 2, 100);
```

<!-- - [ ] Using Class -->

```js
class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  }
  incrementProjects() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }
  decrementProjects() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

const bikash = new User("bikash", 1, 25);
const pallav = new User("pallav", 2, 100);
```
