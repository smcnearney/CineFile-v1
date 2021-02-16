'use strict'

const express = require("express"),
    router = express.Router();
const fetch = require('node-fetch');
// const MyPlaylistModel = require("../models/myplaylists");
const SingleListModel = require('../models/singlelist.js');


// WATCHED LIST
router.get("/", async(req, res, next) => {
    
    // const playlistID = req.params.s_list_id;
    // console.log('PLAYLIST ID', playlistID);
    const playlistData = await SingleListModel.getListData(req.session.user_id);
    console.log(playlistData);
    const movieDetailsArray = await Promise.all(playlistData.map(async movieData => {
        const singleMovie = await fetch(
            `https://api.themoviedb.org/3/movie/${movieData.tmdb_id}?api_key=8fd4ef3265d93db37099c1422dc5f6d9&language=en-US`
        ).then((response) => response.json());

        return singleMovie;
    }));
    console.log(movieDetailsArray);

    res.render("template", {
        locals: {
            title: playlistData.title,
            playlistData,
            movieDetailsArray,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: "partials/myplaylists",
        },
    });
});

// ADD A MOVIE
router.post('/add', async (req, res, next) => {
    const { tmdb_id, user_id } = req.body;
    console.log("ADDING A MOVIE", req.body);
    const response = await SingleListModel.addMovieToList(tmdb_id, user_id);
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('../');
    } else {
        res.sendStatus(500);
    }
});
router.post("/delete", (req, res) => {
    console.log("Delete list");
});


module.exports = router;