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
            const query = `SELECT * FROM reviews WHERE movie_ref = ${this.movie_ref};`;
            const reviewData = await db.any(query);
            return reviewData;
        } catch (err) {
            return err.message;
        };
    };

    async addReview() {
        try {
            const query2 = `INSERT INTO reviews (score, review_content, user_ref, movie_ref) VALUES (${this.score}, ${this.review_content}, '${this.user_ref}', ${this.movie_ref});`;
            const response = await db.result(query2);
            return response;
        } catch (err) {
            return err.message;
        };
    };
};

module.exports = Reviews;