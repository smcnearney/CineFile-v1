"use strict";

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const MoviesModel = require("../models/allmovies");
const ReviewsModel = require("../models/reviews");
const SingleListModel = require('../models/singlelist.js');
const MyPlaylistModel = require('../models/myplaylists.js');

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

router.get("/:id", async(req, res, next) => {
    // console.log('req params are', req.params);
    const { id } = req.params;
    const movieID = parseInt(id);
    // console.log('what is the id saying', id);
    // console.log('what is the movieID saying', movieID);
    const Movie = new MoviesModel(movieID);
    const singleMovieData = await Movie.getMovieData(movieID);
    console.log('singleMovieData is', singleMovieData);
    const Reviews = new ReviewsModel(null, null, null, null, movieID);
    const reviewData = await Reviews.getMovieReviews(movieID);
    console.log('reviewData is:', reviewData);
    

    const singlelistData = await SingleListModel.getSingleListData(req.session.user_id);
    console.log('singlelistData is:', singlelistData);
    
    const playlistData = await MyPlaylistModel.getListData(req.session.user_id);
    console.log('playlistData is:', playlistData);

    res.render("template", {
        locals: {
            title: singleMovieData.title,
            singleMovieData,
            reviewData,
            singlelistData,
            playlistData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/single-movie",
        },
    });
});

module.exports = router;