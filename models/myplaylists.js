'use strict'
const db = require('./conn.js');

class Lists {
    constructor(id, list_title, movie_id, user_id) {
        this.id = id;
        this.list_title = list_title;
        this.movie_id = movie_id;
        this.user_id = user_id;
    }
    async getList() {
        try {
            const response = await db.any(`SELECT * FROM my_movies_list WHERE id = ${this.id};`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async addNewList() {
        const query = `INSERT INTO my_movies_list (list_title, user_id) 
        VALUES (${this.list_title}, ${this.user_id});`;
        try {
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async addNewMovie() {
        const query = `INSERT INTO my_movies_inside_list (movie_id)
            VALUES (${this.movie_id});`;
        try {
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = Lists;