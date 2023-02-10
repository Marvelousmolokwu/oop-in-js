class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getReview = function () {
    console.log(
      `movie name ${this.title}, directed by ${this.director},has a genre ${this.genre}, was released ${this.release} and has ${this.rating}. `
    );
  };
}
const movie1 = new Movie("thor", "marvel", "action", "2007", "⭐⭐⭐⭐");
console.log(movie1);
movie1.getReview();
