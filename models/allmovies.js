'use strict'

const db = require('./conn.js');
const fetch = require('node-fetch')

class AllMovies {
    constructor(id, title, year, director, actors, language, rated, plot, poster, release_date, overview, poster_path, user_id) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.actors = actors;
        this.language = language;
        this.rated = rated;
        this.plot = plot;
        this.poster = poster;
        this.release_date = release_date;
        this.overview = overview;
        this.poster_path = poster_path;
        this.user_id = user_id;

    };

    static async getPopularMovies() {
        try {
            const popularMovieData = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=8fd4ef3265d93db37099c1422dc5f6d9&language=en-US&page=1"
            ).then((response) => response.json());
            const popularMovie = popularMovieData.results;
            return popularMovie;
        } catch (err) {
            return err.message;
        };
    };

    async getMovieData(movieID) {
        try {
            const singleMovieData = await fetch(
                `https://api.themoviedb.org/3/movie/${movieID}?api_key=8fd4ef3265d93db37099c1422dc5f6d9&language=en-US`
            ).then((response) => response.json());
            const singleMovie = singleMovieData;
            return singleMovie;

        } catch (err) {
            return err.message;
        };
    };
};


module.exports = AllMovies;