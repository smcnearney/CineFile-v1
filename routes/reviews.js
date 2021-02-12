"use strict";

const express = require("express"),
    router = express.Router(),
    ReviewsModel = require("../models/reviews");

router.post("/add", async(req, res) => {
    const { user_id, movie_id, review_content, score, tmdb_id } = req.body;
    console.log("Add a Review", req.body);
    const Review = new ReviewsModel(null, score, user_id, review_content, movie_id, tmdb);
    const response = await Review.addReview();
    console.log(response)
    if (response.rowCount >= 1) {
        res.redirect("back");
    } else {
        res.sendStatus(600);
    }
});
router.post("/delete", (req, res) => {
    console.log("Delete review");
});

module.exports = router;