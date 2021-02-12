"use strict";

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const MoviesModel = require("../models/allmovies");
const ReviewsModel = require("../models/reviews");

router.get("/", async(req, res, next) => {
    const popularMovieData = await MoviesModel.getAllMovies();
    console.log(popularMovieData);

    res.render("template", {
        locals: {
            title: 'Popular Movies',
            popularMovieData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/allmovies",
        },
    });
});

router.get("/:id", async(req, res, next) => {
    console.log('req params are', req.params);
    const { id } = req.params;
    const movieID = parseInt(id);
    console.log('what is the id saying', id);
    console.log('what is the movieID saying', movieID);
    const Movie = new MoviesModel(movieID);
    const singleMovieData = await Movie.getMovieData(movieID);
    console.log('single movie:', singleMovieData);
    // const Reviews = new ReviewsModel(null, movieID);
    // const reviewData = await Reviews.getAllReviewsForSingleMovie();

    res.render("template", {
        locals: {
            title: singleMovieData.title,
            singleMovieData,
            // reviewData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: "partials/single-movie",
        },
    });
});

module.exports = router;