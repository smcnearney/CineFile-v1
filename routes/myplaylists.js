const express = require("express"),
    router = express.Router();
const MyPlaylistModel = require("../models/myplaylists");
const SingleListModel = require('../models/singlelist.js');
const fetch = require('node-fetch');

// MY PLAYLISTS
router.get("/", async(req, res) => {
    console.log('MY PLAYLISTS REQ PARAMs ARE', req.params);
    const allListsData = await MyPlaylistModel.getAllLists(req.session.user_id);
    console.log('CONSOLE LOG allListData', allListsData);

    const singlelistData = await SingleListModel.getSingleListData(req.session.user_id);
    console.log('CONSOLE LOG singleListData', singlelistData);
    
    res.render("template", {
        locals: {
            title: 'My Playlists',
            allListsData,
            singlelistData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/myplaylists",
        },
    });

});


// SINGLE PLAYLIST
router.get("/:list_id", async(req, res) => {
    const playlistID = req.params.list_id;
    const playlistData = await MyPlaylistModel.getListData(playlistID);
    const movieDetailsArray = await Promise.all(playlistData.map(async movieData => {
        const singleMovie = await fetch(
            `https://api.themoviedb.org/3/movie/${movieData.tmdb_id}?api_key=8fd4ef3265d93db37099c1422dc5f6d9&language=en-US`
        ).then((response) => response.json());
        return singleMovie;
    }));
    console.log(movieDetailsArray);

    res.render("template", {
        locals: {
            playlistData,
            movieDetailsArray,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/single-list",
        },
    });
});


// ADD A PLAYLIST
router.post('/add', async (req, res) => {
    const { list_title, user_id } = req.body;
    console.log("ADDING A PLAYLIST", req.body);
    const Playlist = new MyPlaylistModel(null, list_title, user_id);
    const response = await Playlist.addNewList();
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});
router.post("/delete", (req, res) => {
    console.log("Delete list");
});


// ADD A MOVIE TO A PLAYLIST
router.post('/:list_id/add', async (req, res) => {
    const { list_id, movie_id, user_id } = req.body;
    console.log("ADDING A MOVIE TO A PLAYLIST", req.body);
    const SingleList = new SingleListModel(null, list_id, movie_id, user_id);
    const response = await SingleList.addMovieToList();
    console.log('ADD A MOVIE TO A PLAY?LIST', response);
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});
router.post("/delete", (req, res) => {
    console.log("Delete list");
});

module.exports = router;