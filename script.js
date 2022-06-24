'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How much films did you watch?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films did you watch?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log('few movies watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a cinephile');
    } else {
        console.log('Error');
        }
    },
    showMyDB: function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    },
    toggleVisibleMuBD: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genres number ${i}`);
            
            if (genre === '' || genre == null) {
                console.log('You entered incorrect data or did not enter it at all');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genres ${i + 1} - it's ${item}`);
        });
}
};