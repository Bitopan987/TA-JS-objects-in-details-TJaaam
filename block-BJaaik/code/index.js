class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log(`I am ${this.name} and I can eat !!`);
  }
  sleep() {
    console.log(`I am ${this.name} and I can  sleep !!`);
  }
  walk() {
    console.log(`I am ${this.name} and I can walk !!`);
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    console.log(`I love to play ${this.sportsName}`);
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    console.log(`I teach in ${this.instituteName}`);
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    console.log(`I am a ${this.kind} of Artist`);
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    console.log(
      `I love to play ${this.sportsName} and My team name will be ${this.teamName}`
    );
  }
}

PersonOne = new Cricketer("Bitopan", 25, "Male", "Cricket", "India");
PersonTwo = new Cricketer("Tulsi", 20, "Female", "Badminton", "Argentina");
