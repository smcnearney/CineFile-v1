'use strict'

const { response } = require('express');
const db = require('./conn.js'); 

class SingleList {
    constructor(id, list_id, movie_id, user_id) {
        this.id = id;
        this.list_id = list_id;
        this.movie_id = movie_id;
        this.user_id = user_id;
    }
    
    async addMovieToList() {
    try {
        const query = `INSERT INTO singlelist (list_id, movie_id, user_id) VALUES (${this.list_id}, ${this.movie_id}, ${this.user_id});`;
        const response = await db.result(query);
        return response;
    } catch (err) {
        return err.message;
    }
    }

    static async getSingleListData(user_id) {
        try {
            console.log(user_id);
            const query = `SELECT myplaylists.list_title, movies.tmdb_id
            FROM singlelist 
            INNER JOIN movies ON singlelist.movie_id  = movies.id
            INNER JOIN myplaylists ON singlelist.list_id = myplaylists.id 
            WHERE singlelist.user_id  = ${user_id};`;
            const singlelistData = await db.any(query);
            console.log('SINGLE LIST DATA IS', singlelistData);
            return singlelistData;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = SingleList;