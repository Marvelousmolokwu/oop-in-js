class Book {
    constructor(title, author,ISBN, NumCopies, getAvailbility){

    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.NumCopies = NumCopies;
   
}
getAvailbility(){
    if (this.NumCopies = 0){
        console.log("out of stock")
    }
    else if(this.NumCopies <=10){
        console.log("low stock")
    }
    else{
        console.log("in stock")
    }
}
}