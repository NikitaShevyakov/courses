"use sctrct";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchingFilm = prompt("Один из последних просмотренных фильмов?"),
      lastWatchingFilmRating = prompt("На сколько оцените его?");

personalMovieDB.movies[lastWatchingFilm] = lastWatchingFilmRating;

console.log(personalMovieDB);
