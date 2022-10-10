// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let dramaArr = moviesArray.filter((movie) => {

        const genreArr = movie.genre;

        for (let i = 0; i < genreArr.length; i += 1) {
            if (genreArr[i] === 'Drama') {
                return true;
            }
        }
    }).filter(movie => movie.director === 'Steven Spielberg');

    return dramaArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let sum = moviesArray.reduce((previousValue, currentValue) => {
        if (typeof currentValue.score === "number") {
            return previousValue + currentValue.score
        }
        else {
            return previousValue;
        }
    }, 0)

    let average = +(sum / moviesArray.length).toFixed(2);
    console.log(average)
    return +average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
