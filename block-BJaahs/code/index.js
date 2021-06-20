// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// title: 'Where is the capital of Jordan',
//   options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex: 1,

// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

// - Without Object

let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return correctAnswerIndex === value;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// - Organize using object

let question = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return question.correctAnswerIndex === index;
  },
  getCorrectAnswer() {
    return question.options[question.correctAnswerIndex];
  },
};

let question2 = {
  title: "Where is the capital of Jamaica",
  options: ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  correctAnswerIndex: 2,
  isAnswerCorrect(index) {
    return question2.correctAnswerIndex === index;
  },
  getCorrectAnswer() {
    return question2.options[question2.correctAnswerIndex];
  },
};
// - Use a function to create object

function createQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return question.correctAnswerIndex === index;
  };
  question.getCorrectAnswer = function () {
    return question.options[question.correctAnswerIndex];
  };
  return question;
}

const firstQuestion = createQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
const secondQuestion = createQuestion(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

// - Convert the function to use `this` keyword

function createQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return this.correctAnswerIndex === index;
  };
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}

const firstQuestion = createQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
const secondQuestion = createQuestion(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

// Test

firstQuestion.getCorrectAnswer();
secondQuestion.getCorrectAnswer();
firstQuestion.isAnswerCorrect(1);
secondQuestion.isAnswerCorrect(2);
