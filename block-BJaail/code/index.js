let form = document.querySelector(".form");
let bookListRoot = document.querySelector(".book_list");
const nameElm = form.elements.bookName;
const authorElm = form.elements.bookAuthor;
const imageElm = form.elements.bookImage;

class Book {
  constructor(name, author, img) {
    this.name = name;
    this.author = author;
    this.img = img;
    this.createUI;
    this.isRead = false;
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  addBook(name, author, img) {
    let book = new Book(name, author, img);
    this.books.push(book);
    this.createUI();
  }
  createUI() {
    bookListRoot.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = book.img;
      let h2 = document.createElement("h2");
      h2.innerText = book.name;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.classList.add("form_button");
      button.classList.add("btn_read");
      button.innerText = book.isRead ? "Completed" : "mark as read";
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });
      li.append(img, h2, p, button);
      bookListRoot.append(li);
    });
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  const name = nameElm.value;
  const author = authorElm.value;
  const img = imageElm.value;
  library.addBook(name, author, img);
  nameElm.value = "";
  authorElm.value = "";
  imageElm.value = "";
}

form.addEventListener("submit", handleSubmit);
