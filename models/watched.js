'use strict'

const db = require('./conn.js'); 

class WatchedMovies {
    constructor(id, tmdb_id, watched, user_ref) {
        this.id = id;
        this.tmdb_id = tmdb_id;
        this.watched = watched;
        this.user_ref = user_ref;
    }

    static async getWatchedList(user_id) {
        try {
            const query = `SELECT tmdb_id FROM movies WHERE user_ref = ${user_id} AND watched = 'true';`;
            const watchedListData = await db.any(query);
            console.log(watchedListData);
            return watchedListData;
        } catch (err) {
            return err.message;
        }
    }


module.exports = WatchedMovies;