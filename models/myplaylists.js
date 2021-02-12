'use strict'

const db = require('./conn.js'); 
const MoviesModel = require("../models/allmovies");
const fetch = require('node-fetch');


class Lists {
    constructor(id, list_title, movie_id, user_id) {
        this.id = id;
        this.list_title = list_title;
        this.movie_id = movie_id;
    }

    async getMovieData(movieID) {
        try {
            const singleMovieData = await fetch(
                `https://api.themoviedb.org/3/movie/${movieID}?api_key=8fd4ef3265d93db37099c1422dc5f6d9&language=en-US`
            ).then((response) => response.json());
            const singleMovie = singleMovieData;
            return singleMovie;

        } catch (err) {
            return err.message;
        };
    };

    static async addNewMovie(user_id, movie_id) {
        const query = `INSERT INTO movies (movie_id)
            VALUES ('${singleMovieData.id}') RETURNING id;`;
        try {
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    };

    // static async getList() {
    //     try {
    //         const response = await db.any(`SELECT * FROM movie_lists;`);
    //         return response;
    //     } catch (err) {
    //         return err.message;
    //     }
    // }

    // static async addNewList() {
    //     const query = `INSERT INTO movie_lists (list_title, user_id) 
    //     VALUES (${this.list_title}, ${this.user_id});`;
    //     try {
    //         const response = await db.one(query);
    //         return response;
    //     } catch (err) {
    //         return err.message;
    //     }
    // }
};

module.exports = Lists;

// 'use strict'
// const db = require('./conn.js');

// class SinglePlaylist {
//     constructor(id, list_title, movie_id) {
//         this.id = id;
//         this.list_title = list_title;
//         this.movie_id = movie_id;
//     }
//     async getListItems() {
//         try {
//             const response = await db.any(`SELECT * FROM my_movies_inside_list WHERE id = ${this.id};`);
//             return response;
//         } catch (err) {
//             return err.message;
//         }
//     }
// };

// module.exports = SinglePlaylist;