'use strict'

const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static async addUser(username, password) {
        try {
            const query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const { id, username } = response;
                return { isValid, user_id: id, username };
            } else {
                return { isValid };
            }

        } catch (error) {
            return error.message;
        }
    }

    // static async getMyPlaylists(user_id) {
    //     const query = `SELECT * FROM my_movies_list WHERE user_id = '${user_id}';`;
    //     try {
    //         const response = await db.any(query);
    //         return response;
    //     } catch (err) {
    //         return err.message;
    //     }
    // }
}

module.exports = User;