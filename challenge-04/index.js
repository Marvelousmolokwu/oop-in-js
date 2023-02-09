class Book {
  constructor(title, author, ISBN, NumCopies, edition) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.NumCopies = NumCopies;
    this.edition = edition;
  }
  getAvailbility() {
    if ((this.NumCopies = 0)) {
      console.log("out of stock");
    } else if (this.NumCopies <= 10) {
      console.log("low stock");
    } else {
      console.log("in stock");
    }
  }
}
class TechnicalBook extends Book {
  getEdition() {
    super(edition);
    console.log(`the current edition of this book is ${this.edition}`);
  }
}
