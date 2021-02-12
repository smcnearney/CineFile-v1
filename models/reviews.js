'use strict'

const db = require('./conn.js');

class Reviews {
    constructor(id, score, content, user_id, movie_id) {
        this.id = id;
        this.score = score;
        this.content = content;
        this.user_id = user_id;
        this.movie_id = movie_id;
    };

    async getAllReviewsForSingleMovie() {
        try {
            const query = `SELECT * FROM reviews WHERE movie_id = ${this.movie_id}`;
            const response = await db.any(query);
            return response;
        } catch (err) {
            return err.message;
        };
    };

    async addReview() {
        try {
            const query = `INSERT INTO reviews (score, content, user_id, movie_id) VALUES (${this.score}, ${this.content}, ${this.user_id}, ${this.movie_id})`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = Reviews;