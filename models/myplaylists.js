'use strict'

const db = require('./conn.js'); 

class Lists {
    constructor(id, list_title, user_id) {
        this.id = id;
        this.list_title = list_title;
        this.user_id = user_id;
    }

    static async getAllLists(userID) {
        try {
            const query = `SELECT * FROM myplaylists WHERE user_id = ${userID};`;
            const allListsData = await db.any(query);
            return allListsData;
        } catch (err) {
            return err.message;
        }
    }

    static async getListData(list_id) {
        try {
            const query = `SELECT myplaylists.list_title, movies.tmdb_id
            FROM singlelist 
            INNER JOIN movies ON singlelist.movie_id  = movies.id
            INNER JOIN myplaylists ON singlelist.list_id = myplaylists.id 
            WHERE singlelist.id  = ${list_id};`;
            const playlistData = await db.any(query);
            return playlistData;
        } catch (err) {
            return err.message;
        }
    }

    async addNewList() {
        try {
            const query = `INSERT INTO myplaylists (list_title, user_id) VALUES ('${this.list_title}', ${this.user_id});`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = Lists;