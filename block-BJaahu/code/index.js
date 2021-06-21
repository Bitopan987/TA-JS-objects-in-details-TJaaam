// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.

// Prototypal pattern of object creation (Put methods inside an object and create object using Object.create).

// function createQuestion(title, options, correctAnswerIndex) {
//   let question = Object.create(getResult);
//   question.title = title;
//   question.options = options;
//   question.correctAnswerIndex = correctAnswerIndex;
//   return question;
// }

// let getResult = {
//   isAnswerCorrect: function (index) {
//     return this.correctAnswerIndex === index;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// let firstQuestion = createQuestion(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );
// let secondQuestion = createQuestion(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// console.log(firstQuestion.isAnswerCorrect(1));
// console.log(firstQuestion.isAnswerCorrect(2));
// console.log(firstQuestion.getCorrectAnswer());
// console.log(secondQuestion.isAnswerCorrect(2));
// console.log(secondQuestion.isAnswerCorrect(3));
// console.log(secondQuestion.getCorrectAnswer());

// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

function Question(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
  isAnswerCorrect: function (index) {
    return this.correctAnswerIndex === index;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

console.log(firstQuestion.isAnswerCorrect(1));
console.log(firstQuestion.isAnswerCorrect(2));
console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.isAnswerCorrect(2));
console.log(secondQuestion.isAnswerCorrect(3));
console.log(secondQuestion.getCorrectAnswer());

// - Create using class

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return this.correctAnswerIndex === index;
  }

  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

console.log(firstQuestion.isAnswerCorrect(1));
console.log(firstQuestion.isAnswerCorrect(2));
console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.isAnswerCorrect(2));
console.log(secondQuestion.isAnswerCorrect(3));
console.log(secondQuestion.getCorrectAnswer());
