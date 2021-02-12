'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    session = require('express-session'),
    app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'get rad!',
    is_logged_in: false,
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index');
const moviesController = require('./routes/movies');
const reviewsController = require('./routes/reviews');
const usersController = require('./routes/users');
const myplaylistsController = require('./routes/myplaylists');

app.use('/', rootController);
app.use('/movies', moviesController);
app.use('/reviews', reviewsController);
app.use('/users', usersController);
app.use('/myplaylists', myplaylistsController);