class Book {
  constructor(title, author, ISBN, NumCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.NumCopies = NumCopies;
  }
  get availability() {
    return this.getAvailability();
  }
  getAvailbility() {
    if (this.NumCopies === 0) {
      console.log("out of stock");
    } else if (this.NumCopies <= 10) {
      console.log("low stock");
    } else {
      console.log("in stock");
    }
  }
  sell(numSold = 3) {
    console.log((this.NumCopies -= numSold));
  }
  restock(TotalnumCopiesadded = 2) {
    console.log((this.NumCopies += TotalnumCopiesadded));
  }
}
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numberOfCopies, edition) {
    super(title, author, ISBN, numberOfCopies);
    this.edition = edition;
  }
  getEdition() {
    console.log(`The current edition of this book is ${this.edition}`);
  }
}
const book1 = new Book(
  "last_days_at_forcados_high_school",
  "A.H mohammed",
  "6273573",
  "3"
);
