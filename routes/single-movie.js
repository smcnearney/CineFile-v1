const express = require('express'),
    router = express.Router();
const SingleMovieModel = require("../models/single-movie");
const ReviewsModel = require('../models/reviews');

router.get('/:movie_id', async(req, res) => {
    const movieID = req.params.movie_id,
        Movie = new SingleMovieModel(movieID),
        movieData = await Movie.getSingleMovie();
    const Reviews = new ReviewsModel(null, movieID),
        reviewData = await Reviews.getAllReviewsForSingleMovie();

    res.render('template', {
        locals: {
            title: movieData.name,
            movieData,
            reviewData,
        },
        partials: {
            body: 'partials/single-movie',
        },
    });
})


module.exports = router;