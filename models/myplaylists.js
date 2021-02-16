'use strict'

const db = require('./conn.js'); 

class Lists {
    constructor(id, list_title, user_id) {
        this.id = id;
        this.list_title = list_title;
        this.user_id = user_id;
    }

    static async getSingleListData() {
        try {
            const query = `SELECT myplaylists.list_title, movies.tmdb_id
            FROM singlelist 
            INNER JOIN movies ON singlelist.s_movie_id  = movies.id
            INNER JOIN myplaylists ON singlelist.s_list_id = myplaylists.id 
            WHERE singlelist.s_user_id  = ${user_id};`;
            const singlelistData = await db.any(query);
            return singlelistData;
        } catch (err) {
            return err.message;
        }
    }

    static async getListData() {
        try {
            const query = `SELECT * FROM myplaylists;`;
            const allListsData = await db.any(query);
            return allListsData;
        } catch (err) {
            return err.message;
        }
    }

   
};

module.exports = Lists;