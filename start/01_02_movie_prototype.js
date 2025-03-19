// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return this.getOverview();
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }

}

const Magnolia = new Movie ("Magnolia", "Paul Thomas Anderson", "Classic Drama", 1999, 80);
const LuisWain = new Movie ("The Electrical Life of Louis Wain", "Will Sharpe", "Melodrama", 2021, 68);

console.log(Magnolia);
console.log(Magnolia.getOverview());
console.log(LuisWain.getOverview());