'use strict'

const db = require('./conn.js');

class SingleMovie {
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

    async getSingleMovie() {
        try {
            const query = `Select * FROM movies WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = SingleMovie;