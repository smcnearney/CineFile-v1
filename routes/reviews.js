"use strict";

const express = require("express"),
  router = express.Router(),
  ReviewsModel = require("../models/reviews");

router.post("/add", async (req, res) => {
  const { reviews_id, score, content } = req.body;
  const Reviews = new ReviewsModel(null, reviews_id, score, content);
  const response = await Reviews.addReview();
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
