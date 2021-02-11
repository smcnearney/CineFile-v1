'use strict';

console.log("We made it to index");

const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
    res.render('template', {
        locals: {
            title: 'Welcome to the greatest movie site in the world!',
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;