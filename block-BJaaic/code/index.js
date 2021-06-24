let animalMethods = {
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

let dogMethods = {
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

let catMethods = {
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

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

function createDog(location, numberOfLegs, name, color) {
  let animal = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(animal, dogMethods);
  animal.name = name;
  animal.color = color;
  return animal;
}

function createCat(location, numberOfLegs, name, colorOfEyes) {
  let animal = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(animal, catMethods);
  animal.name = name;
  animal.colorOfEyes = colorOfEyes;
  return animal;
}

// Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

///TEST///

let tiger = createAnimal("Brazil", 4);
let maggi = createDog("India", 4, "maggi", "black");
let sushi = createCat("pakistan", 4, "sushi", "brown");
