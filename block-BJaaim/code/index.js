class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrect(answer) {
    return this.correctAnswer === answer;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
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
  constructor(allQuestions = [], activeIndex, score) {
    this.questions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;

  }
  
  nextQuestion(){

  }
  createUI() {
    this.root.innerText = "";
    this.todos.forEach((todo) => {
      let ui = todo.createUI();
      ui.querySelector("span").addEventListener(
        "click",
        this.handleDelete.bind(this, todo.id)
      );
      this.root.append(ui);
    });

    updateScore(){
     
    }
  }
}
