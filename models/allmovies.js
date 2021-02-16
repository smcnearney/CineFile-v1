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

    static async getActionMovies() {
        try {
            const actionMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=28&language=en-US&page=1"
            ).then((response) => response.json());
            const actionMovie = actionMovieData.results;
            return actionMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getAdventureMovies() {
        try {
            const adventureMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=12&language=en-US&page=1"
            ).then((response) => response.json());
            const adventureMovie = adventureMovieData.results;
            return adventureMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getAnimationMovies() {
        try {
            const animationMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=16&language=en-US&page=1"
            ).then((response) => response.json());
            const animationMovie = animationMovieData.results;
            return animationMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getComedyMovies() {
        try {
            const comedyMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=35&language=en-US&page=1"
            ).then((response) => response.json());
            const comedyMovie = comedyMovieData.results;
            return comedyMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getCrimeMovies() {
        try {
            const crimeMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=80&language=en-US&page=1"
            ).then((response) => response.json());
            const crimeMovie = crimeMovieData.results;
            return crimeMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getDocumentaryMovies() {
        try {
            const documentaryMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=99&language=en-US&page=1"
            ).then((response) => response.json());
            const documentaryMovie = documentaryMovieData.results;
            return documentaryMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getDramaMovies() {
        try {
            const dramaMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=18&language=en-US&page=1"
            ).then((response) => response.json());
            const dramaMovie = dramaMovieData.results;
            return dramaMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getFamilyMovies() {
        try {
            const familyMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=10751&language=en-US&page=1"
            ).then((response) => response.json());
            const familyMovie = familyMovieData.results;
            return familyMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getFantasyMovies() {
        try {
            const fantasyMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=14&language=en-US&page=1"
            ).then((response) => response.json());
            const fantasyMovie = fantasyMovieData.results;
            return fantasyMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getHistoryMovies() {
        try {
            const historyMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=36&language=en-US&page=1"
            ).then((response) => response.json());
            const historyMovie = historyMovieData.results;
            return historyMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getHorrorMovies() {
        try {
            const horrorMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=27&language=en-US&page=1"
            ).then((response) => response.json());
            const horrorMovie = horrorMovieData.results;
            return horrorMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getMusicMovies() {
        try {
            const musicMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=10402&language=en-US&page=1"
            ).then((response) => response.json());
            const musicMovie = musicMovieData.results;
            return musicMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getMysteryMovies() {
        try {
            const mysteryMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=9648&language=en-US&page=1"
            ).then((response) => response.json());
            const mysteryMovie = mysteryMovieData.results;
            return mysteryMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getRomanceMovies() {
        try {
            const romanceMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=10749&language=en-US&page=1"
            ).then((response) => response.json());
            const romanceMovie = romanceMovieData.results;
            return romanceMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getSciFiMovies() {
        try {
            const scifiMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=878&language=en-US&page=1"
            ).then((response) => response.json());
            const scifiMovie = scifiMovieData.results;
            return scifiMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getTvMovies() {
        try {
            const tvMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=10770&language=en-US&page=1"
            ).then((response) => response.json());
            const tvMovie = tvMovieData.results;
            return tvMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getThrillerMovies() {
        try {
            const thrillerMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=53&language=en-US&page=1"
            ).then((response) => response.json());
            const thrillerMovie = thrillerMovieData.results;
            return thrillerMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getWarMovies() {
        try {
            const warMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=10752&language=en-US&page=1"
            ).then((response) => response.json());
            const warMovie = warMovieData.results;
            return warMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getWesternMovies() {
        try {
            const westernMovieData = await fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=8fd4ef3265d93db37099c1422dc5f6d9&with_genres=37&language=en-US&page=1"
            ).then((response) => response.json());
            const westernMovie = westernMovieData.results;
            return westernMovie;
        } catch (err) {
            return err.message;
        };
    };

    static async getMovieData(movieID) {
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