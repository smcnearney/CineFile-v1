'use strict'

const host = 'ziggy.db.elephantsql.com',
    database = 'mzbavhee',
    user = 'mzbavhee',
    password = '0hHUt8LyNYEe1_fS14loANZ6sc2L8W_Z';

const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY:', e.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;