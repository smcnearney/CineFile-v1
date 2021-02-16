'use strict';

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const MoviesModel = require("../models/allmovies");
const ReviewsModel = require("../models/reviews");
const SingleListModel = require('../models/singlelist.js');
// const MyPlaylistModel = require('../models/myplaylists.js');

router.get("/", async(req, res, next) => {
    const popularMovieData = await MoviesModel.getPopularMovies();
    const actionMovieData = await MoviesModel.getActionMovies();
    const adventureMovieData = await MoviesModel.getAdventureMovies();
    const animationMovieData = await MoviesModel.getAnimationMovies();
    const comedyMovieData = await MoviesModel.getComedyMovies();
    const crimeMovieData = await MoviesModel.getCrimeMovies();
    const documentaryMovieData = await MoviesModel.getDocumentaryMovies();
    const dramaMovieData = await MoviesModel.getDramaMovies();
    const familyMovieData = await MoviesModel.getFamilyMovies();
    const fantasyMovieData = await MoviesModel.getFantasyMovies();
    const historyMovieData = await MoviesModel.getHistoryMovies();
    const horrorMovieData = await MoviesModel.getHorrorMovies();
    const musicMovieData = await MoviesModel.getMusicMovies();
    const mysteryMovieData = await MoviesModel.getMysteryMovies();
    const romanceMovieData = await MoviesModel.getRomanceMovies();
    const scifiMovieData = await MoviesModel.getSciFiMovies();
    const tvMovieData = await MoviesModel.getTvMovies();
    const thrillerMovieData = await MoviesModel.getThrillerMovies();
    const warMovieData = await MoviesModel.getWarMovies();
    const westernMovieData = await MoviesModel.getWesternMovies();

    res.render("template", {
        locals: {
            title: 'CineFile: The Movie Filing Cabinet',
            popularMovieData,
            actionMovieData,
            adventureMovieData,
            animationMovieData,
            comedyMovieData,
            crimeMovieData,
            documentaryMovieData,
            dramaMovieData,
            familyMovieData,
            fantasyMovieData,
            historyMovieData,
            horrorMovieData,
            musicMovieData,
            mysteryMovieData,
            romanceMovieData,
            scifiMovieData,
            tvMovieData,
            thrillerMovieData,
            warMovieData,
            westernMovieData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/allmovies",
        },
    });
});


module.exports = router;