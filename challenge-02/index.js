class Movie{
    constructor(title, director, genre, release,rating){
this.title = title;
this.director = director;
this.genre = genre;
this.release = release;
this.rating = rating


    }
  movie.prototype.getReview = function(){
    console.log(`movie by${this.title}, directed by ${this.director},has a genre ${this.genre}, was released ${this.release}. `)
  }
}