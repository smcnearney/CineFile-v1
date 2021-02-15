const express = require("express"),
    router = express.Router();
const MyPlaylistModel = require("../models/myplaylists");
const SingleListModel = require('../models/singlelist.js');

// MY PLAYLISTS
router.get("/", async(req, res, next) => {
    const allListsData = await MyPlaylistModel.getAllLists();
    
    res.render("template", {
        locals: {
            title: 'My Playlists',
            allListsData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/myplaylists",
        },
    });
});

// SINGLE PLAYLIST
router.get("/:list_id", async(req, res, next) => {
    console.log('SINGLE PLAYLIST req params are', req.params);
    const playlistID = req.params.list_id;
    const Playlist = new MyPlaylistModel(playlistID);
    const playlistData = await Playlist.getListData(playlistID);
    const SingleList = new SingleListModel();
    const singlelistData = await SingleList.getSingleListData();
    console.log('SINGLELISTDATA IS', singlelistData);
  

    res.render("template", {
        locals: {
            title: playlistData.title,
            playlistData,
            singlelistData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/single-list",
        },
    });
});

// ADD A PLAYLIST
router.post('/add', async (req, res, next) => {
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
router.post('/:list_id/add', async (req, res, next) => {
    const { list_id, movie_id, user_id } = req.body;
    console.log("ADDING A MOVIE TO A PLAYLIST", req.body);
    const SingleList = new SingleListModel(null, list_id, movie_id, user_id);
    const response = await SingleList.addMovieToList();
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

module.exports = router;