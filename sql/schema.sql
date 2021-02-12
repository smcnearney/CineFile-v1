CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100)
);

CREATE TABLE movies (
    id serial PRIMARY KEY,
    tmdb_id INTEGER NOT NULL,
    user_id integer REFERENCES users (id)
    movie_id varchar (100)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    user_id integer REFERENCES users (id),
    movie_id REFERENCES movies(tmdb_id)
  
);

CREATE TABLE my_movies_list (
    id serial PRIMARY KEY,
    list_title varchar(100),
    movie_id varchar(100),
    user_id integer REFERENCES users (id),
    
);

CREATE TABLE my_movies_inside_list (
    id serial PRIMARY KEY,
    list_id integer REFERENCES my_movies_list (id),
    movie_id integer REFERENCES movies (id)
);