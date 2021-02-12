const express = require("express"),
    router = express.Router();
const MyPlaylistModel = require("../models/myplaylists");
const ReviewsModel = require('../models/reviews');

// MY PLAYLISTS
router.get("/", async(req, res, next) => {
    const playlistData = await MyPlaylistModel.getList();

    res.render("template", {
        locals: {
            title: 'My Playlists',
            playlistData: playlistData,
            // reviewData,
        },
        partials: {
            body: "partials/myplaylist",
        },
    });
});

router.post("/newList:user_id", async(req, res) => {
    const { user_id } = req.params;
    const { list_title } = req.body;
    const newList = await MyPLaylistModel.addNewList(user_id, name);
    res.render("/${newList.id}");
});

router.post("/newmovie:list_id", async(req, res) => {
    const { list_id } = req.params;
    const { name } = req.body;
    const newItem = await MyPLaylistModel.addNewMovie(list_id, name);
    res.render("/${list_id}");
});

// SINGLE PLAYLIST
router.get("/:list_id", async(req, res) => {
    const listID = req.params.list_id,
        listData = await SinglePlaylistModel.getListItems(listID);

    res.render("template", {
        locals: {
            title: listData.title,
            listData,
        },
        partials: {
            body: "partials/single-playlist",
        },
    });
});

module.exports = router;