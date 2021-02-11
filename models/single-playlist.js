'use strict'
const db = require('./conn.js');

class SinglePlaylist {
    constructor(id, list_title, movie_id) {
        this.id = id;
        this.list_title = list_title;
        this.movie_id = movie_id;
    }
    async getListItems() {
        try {
            const response = await db.any(`SELECT * FROM my_movies_inside_list WHERE id = ${this.id};`);
            return response;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = SinglePlaylist;