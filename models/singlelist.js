'use strict'

const { response } = require('express');
const db = require('./conn.js'); 

class SingleList {
    constructor(id, s_list_id, s_movie_id, s_user_id) {
        this.id = id;
        this.s_list_id = s_list_id;
        this.s_movie_id = s_movie_id;
        this.s_user_id = s_user_id;
    }
    
    static async addMovieToList(tmdb_id, user_id) {
    try {
        const query = `INSERT INTO singlelist (tmdb_id, user_id) VALUES (${tmdb_id}, ${user_id});`;
        const response = await db.result(query);
        return response;
    } catch (err) {
        return err.message;
    }
    }

    static async getListData(user_id) {
        try {
            const query = `SELECT * FROM singlelist WHERE singlelist.user_id = ${user_id};`;
            const singlelistData = await db.any(query);
            console.log('singlelistData is:', singlelistData)
            return singlelistData;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = SingleList;