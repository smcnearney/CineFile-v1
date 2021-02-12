'use strict'


const db = require('./conn.js');

class Reviews {
    constructor(id, score, tmdb_id, user_id, content, movie_id) {
        this.id = id;
        this.score = score;
        this.tmdb_id = tmdb_id;
        this.uer = user_id
        this.content = content;
        this.movie_id = movie_id;
    };

    async getAllReviewsForSingleMovie() {
        try {
            const query = `SELECT * FROM reviews WHERE reviews.movie_id = ${tmdb_id} ORDER BY score ASC;`;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        };
    };

    async addReview() {
        try {
            const checkExisting =
                `SELECT * FROM movies WHERE tmdb_id = ${tmdb_id}`;
            const checkResponse = db.any(checkExisting);
            if (!!checkResponse) {
                const query2 = `INSERT INTO reviews (movie_id, user_id) VALUES (${movieInsertResponse.id}, ${user_id};)`;
                const response = await db.one(query2);
            } else {
                const query2 = `INSERT INTO reviews (score, content, user_id, movie_id) VALUES (${this.score}, '${this.content}', ${this.user_id}, ${this.movie_id});`;
                const response = await db.result(query);
            }
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = Reviews;