CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100)
);

CREATE TABLE movies (
    id serial PRIMARY KEY,
    title varchar(100),
    year integer,
    director varchar(100),
    actors varchar(1000),
    language varchar(100),
    rated integer,
    plot varchar(10000),
    poster varchar(100),
    user_id integer REFERENCES users (id)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    user_id integer REFERENCES users (id),
    movie_id integer REFERENCES movies (id)
);

CREATE TABLE my_movies_list (
    id serial PRIMARY KEY,
    list_title varchar(100),
    movie_id varchar(100),
    user_id integer REFERENCES users (id),
    -- movie_id integer REFERENCES movies (id)
);

CREATE TABLE my_movies_inside_list (
    id serial PRIMARY KEY,
    list_id integer REFERENCES my_movies_list (id),
    movie_id integer REFERENCES movies (id)
);