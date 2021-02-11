'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    session = require('express-session'),
    app = express();

const axios = require('axios');

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
const usersController = require('./routes/users');
const allmoviesController = require('./routes/allmovies');
const single_movieController = require('./routes/single-movie');
const myplaylistsController = require('./routes/myplaylists');
const single_playlistController = require('./routes/single-playlist');

app.use('/', rootController);
app.use('/users', usersController);
app.use('/allmovies', allmoviesController);
app.use('/singlemovies', single_movieController);
app.use('/myplaylists', myplaylistsController);
app.use('/singleplaylist', single_playlistController);