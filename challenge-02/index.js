class Movie{
    constructor(title, director, genre, release,rating){
this.title = title;
this.director = director;
this.genre = genre;
this.release = release;
this.rating = rating


    }
  getReview(){
    console.log(`${this.title} ${this.director} ${this.genre} ${this.release} ${this.release}`)
  }
}