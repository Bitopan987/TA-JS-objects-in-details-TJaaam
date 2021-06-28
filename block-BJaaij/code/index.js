class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.currentIndexBook = 0;
  }
  add(books = []) {
    this.books = this.books.concat(books);
    return this.books;
  }
  getCurrentBook() {
    return this.books[this.currentIndexBook];
  }
  getNextBook() {
    this.currentIndexBook = this.currentIndexBook + 1;
    return this.books[this.currentIndexBook];
  }
  getPrevBook() {
    this.currentIndexBook = this.currentIndexBook - 1;
    return this.books[this.currentIndexBook];
  }
  changeCurrentBook(index) {
    this.currentIndexBook = index;
    return this.currentIndexBook;
  }
}

let book1 = new Book("Kill me", "Non-Fiction", "Deka");

let book2 = new Book("My Country", "Fiction", "Kalita");
let book3 = new Book("My Love", "Non-Fiction", "Sharma");
let book4 = new Book("My Bird", "Fiction", "Barman");
let book5 = new Book("Our Home", "Non-Fiction", "Chetry");
let book6 = new Book("Our Past", "Fiction", "J.K");

let library = new BookList();
library.add([book1, book2, book3, book4, book5, book6]);
library.getCurrentBook();
library.getCurrentBook().markBookAsRead();
