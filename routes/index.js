'use strict';

// console.log("We made it to index");

const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
    res.render('template', {
        locals: {
            title: 'CineFILE',
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;