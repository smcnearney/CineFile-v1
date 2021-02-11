'use strict'

const db = require('./conn.js');

class AllMovies {
    constructor(id, title, year, director, actors, language, rated, plot, poster, user_id) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.actors = actors;
        this.language = language;
        this.rated = rated;
        this.plot = plot;
        this.poster = poster;
        this.user_id = user_id;

    };

    static async getAllMovies() {
        try {
            const response = await db.any(`SELECT * FROM movies;`);
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = AllMovies;