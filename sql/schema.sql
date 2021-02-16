CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100)
);

CREATE TABLE movies (
    id serial PRIMARY KEY,
    tmdb_id integer
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    review_content varchar(10000),
    user_id integer REFERENCES users (id),
    movie_id integer
);

CREATE TABLE myplaylists (
    id serial PRIMARY KEY,
    list_title varchar(300),
    user_id integer REFERENCES users (id)
);

CREATE TABLE singlelist (
    id serial PRIMARY KEY,
    tmdb_id integer,
    user_id integer REFERENCES users (id)
)
