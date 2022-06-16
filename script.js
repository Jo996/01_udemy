'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt('How much films did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films did you watch?', '');
    }
}
/* start(); */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One last watched film', ''),
          b = prompt('How much would you rate it?', '');
        if  (a != null && b != null && a != '' && b!= '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
        console.log('error');
        --i;
    }
}
}

/* rememberMyFilms() */

function detectPersonalLevel() {
if (personalMovieDB.count < 10) {
    console.log('few movies watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a cinephile');
} else {
    console.log('Error');
}
}

/* detectPersonalLevel() */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorit genres number ${1}`);
    }
}

writeYourGenres();