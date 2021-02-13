const express = require("express"),
    router = express.Router();
const MyPlaylistModel = require("../models/myplaylists");
const ReviewsModel = require('../models/reviews');
const MoviesModel = require("../models/allmovies");


// MY PLAYLISTS
router.get("/", async(req, res, next) => {
    const playlistData = await MyPlaylistModel.getList();

    res.render("template", {
        locals: {
            title: 'My Playlists',
            playlistData: playlistData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id

            // reviewData,
        },
        partials: {
            body: "partials/myplaylist",
        },
    });
});

router.post("/newMovie", async(req, res) => {
    console.log("PLEASEEE");
    const { user_id, movie_id } = req.body;
    const singleMovieData = await MyPlaylistModel.addNewMovie(user_id, movie_id);
    res.redirect('back');
});

// router.post("/newList:user_id", async(req, res) => {
//     const { user_id } = req.params;
//     const { list_title } = req.body;
//     const newList = await MyPlaylistModel.addNewList(user_id, list_title);
//     console.log("yee")
//     res.render("/${newList.id}");
// });

// router.post("/aaa:list_id", async(req, res) => {
//     const { list_id } = req.params;
//     const { name } = req.body;
//     const newItem = await MyPlaylistModel.addNewMovie(list_id, name);
//     res.render("/${list_id}");
// });

// SINGLE PLAYLIST
// router.get("/:list_id", async(req, res) => {
//     const listID = req.params.list_id,
//         listData = await SinglePlaylistModel.getListItems(listID);

//     res.render("template", {
//         locals: {
//             title: listData.title,
//             listData,
//             is_logged_in: req.session.is_logged_in,
//             user_id: req.session.user_id
//         },
//         partials: {
//             body: "partials/single-playlist",
//         },
//     });
// });

module.exports = router;