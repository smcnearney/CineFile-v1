const express = require('express'),
    router = express.Router(),
    AllMoviesModel = require('../models/allmovies');

router.get('/:movies', async(req, res) => {
    const moviesID = req.params.movies,
        movieData = await AllMoviesModel.getAllMovies(moviesID);
    const apiMovies = await fetch(
        'https://my.api.mockaroo.com/reviewsdata.json?key=32e1e9b0'
    ).then((response) => response.json());

    res.render('template', {
        locals: {
            title: movieData.name,
            movieData,
            apiMovies
        },
        partials: {
            body: 'partials/all_movies',
        }
    });
});

module.exports = router;