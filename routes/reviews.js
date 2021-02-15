"use strict";

const express = require('express'),
    router = express.Router(),
    ReviewsModel = require('../models/reviews');

router.post('/add', async (req, res) => {
    const { score, review_content, user_id, movie_id } = req.body;
    console.log("ADDING A REVIEW", req.body);
    const Review = new ReviewsModel(null, score, review_content, user_id, movie_id);
    const response = await Review.addReview();
    console.log(response);
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});
router.post("/delete", (req, res) => {
    console.log("Delete review");
});

module.exports = router;