'use strict';

const numberOfFilms = +prompt('How much films did you watch?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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


let a = prompt('One last watched film', ''),
    b = prompt('How much would you rate it?', '');
while (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
    }


console.log(personalMovieDB);
