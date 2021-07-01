let form = document.querySelector("form");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let quizElm = document.querySelector(".quiz");
let totalQues = document.querySelector(".top p");
let showResult = document.querySelector(".show_result");

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isCorrect(answer) {
    return this.options[this.correctAnswerIndex] === answer;
  }

  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }

  createUI() {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isDone;
    input.addEventListener("click", this.handleCheck.bind(this));
    let p = document.createElement("p");
    p.innerText = this.text;
    let span = document.createElement("span");
    span.innerText = "x";
    li.append(input, p, span);
    return li;
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 2;
  }

  incrementScore() {
    this.score = this.score + 1;
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }

  prevQuestion() {
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }

  addQuestion(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.questions.push(question);
  }

  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.visibility = "hidden";
    } else if (this.activeIndex === this.questions.length - 1) {
      next.style.visibility = "hidden";
      showResult.style.display = "block";
    } else {
      prev.style.visibility = "visibile";
      next.style.visibility = "visibile";
      showResult.style.display = "none";
    }
  }

  createUI() {
    quizElm.innerText = "";
    let activeQuestion = this.questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = activeQuestion.title;
    let optionElm = document.createElement("div");
    optionElm.classList.add("options");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");
    button.classList.add("btn-submit");
    button.type = "submit";
    button.innerText = "Submit";
    buttonWrapper.append(button);

    activeQuestion.options.forEach((option, index) => {
      let input = document.createElement("input");
      let div = document.createElement("div");
      input.id = `option-${index}`;
      input.type = "radio";
      input.name = "options";
      input.value = option;
      let label = document.createElement("label");
      label.for = `option-${index}`;
      label.innerText = option;
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          if (activeQuestion.isCorrect(input.value)) {
            this.incrementScore();
          }
        }
      });
      div.append(input, label);
      optionElm.append(div);
    });
    this.handleButtons();
    totalQues.innerText = `Total Questions:${this.questions.length} `;
    fieldset.append(legend, optionElm, buttonWrapper);
    form.append(fieldset);
    quizElm.append(form);
  }
}

function init() {
  let quiz = new Quiz();
  quizCollection.forEach((question) => {
    quiz.addQuestion(question.title, question.options, question.answerIndex);
  });

  quiz.createUI();

  next.addEventListener("click", quiz.nextQuestion.bind(quiz));
  prev.addEventListener("click", quiz.prevQuestion.bind(quiz));
  showResult.addEventListener("click", () => {
    alert(`Your Score is ${quiz.score}`);
  });
}

init();
