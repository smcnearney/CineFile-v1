CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100)
);

CREATE TABLE movies (
    id serial PRIMARY KEY,
    movie_id varchar(1000)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    user_id integer REFERENCES users (id),
    movie_id REFERENCES movies(tmdb_id)
  
);

CREATE TABLE movie_lists (
    id serial PRIMARY KEY,
    list_title varchar(100),
    user_id integer REFERENCES users (id)
);

CREATE TABLE my_movies (
    id serial PRIMARY KEY,
    list_id integer REFERENCES movie_lists (id),
    movie_id integer REFERENCES movies (id),
    user_id integer REFERENCES users (id)
);