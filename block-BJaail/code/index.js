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
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  addBook(name, author, img) {
    let book = new Book(name, author, img);
    this.books.push(book);
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  const name = nameElm.value;
  const author = authorElm.value;
  const img = imageElm.value;
  library.addBook(name, author, img);
}

form.addEventListener("submit", handleSubmit);
