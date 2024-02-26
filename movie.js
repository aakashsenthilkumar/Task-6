
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Creating an array of Movie instances
const moviesArray = [
    new Movie("Remo", "Zee Studios", "PG"),
    new Movie("Animal", "Jio Studios", "PG-13"),
    new Movie("Devil", "Dharma Studio", "R"),
    new Movie("RDX", "Viacom18", "PG"),
];

// Getting only PG-rated movies from the array
const pgMoviesArray = Movie.getPG(moviesArray);

console.log(casinoRoyale);
console.log(pgMoviesArray);