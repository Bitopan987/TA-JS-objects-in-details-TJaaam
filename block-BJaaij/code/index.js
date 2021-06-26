class Book {
  constructor(title, category, author, isRead = false, finishedDate) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class BookList {
  constructor(arrOfBook, bookIndex) {
    this.arrOfBook = arrOfBook;
    this.bookIndex = bookIndex;
  }
  add() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
  getCurrentBook() {}
  getNextBook() {}
  getPrevBook() {}
  changeCurrentBook() {}
}
