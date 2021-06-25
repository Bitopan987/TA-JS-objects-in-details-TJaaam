//// - Pseudoclassical Pattern //////

function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  },
};

function CreateDog(location, numberOfLegs, name, color) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}

CreateDog.prototype = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

function CreateCat(location, numberOfLegs, name, colorOfEyes) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

////  - Class Pattern  ////

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  }
}

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

///TEST///

let tiger = new Animal("Brazil", 4);
let maggi = new Dog("India", 4, "maggi", "black");
let sushi = new Cat("pakistan", 4, "sushi", "brown");

console.log(tiger.changeLocation("Arunachal"));
console.log(tiger.summary());
console.log(tiger.eat());
