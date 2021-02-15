'use strict'

const db = require('./conn.js');

class Reviews {
    constructor(id, score, review_content, user_id, movie_id) {
        this.id = id;
        this.score = score;
        this.review_content = review_content;
        this.user_id = user_id;
        this.movie_id = movie_id;
    };

    async getMovieReviews() {
        try {
            const query = `SELECT * FROM reviews WHERE movie_id = ${this.movie_id};`;
            const reviewData = await db.any(query);
            return reviewData;
        } catch (err) {
            return err.message;
        };
    };

    async addReview() {
        try {
            const query2 = `INSERT INTO reviews (movie_id, user_id, review_content, score) VALUES (${this.movie_id}, ${this.user_id}, '${this.review_content}', ${this.score});`;
            const response = await db.result(query2);
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = Reviews;