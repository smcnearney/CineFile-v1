'use strict'

const { response } = require('express');
const db = require('./conn.js'); 

class Lists {
    constructor(id, list_title, user_id) {
        this.id = id;
        this.list_title = list_title;
        this.user_id = user_id;
    }

    static async getAllLists() {
        try {
            const query = `SELECT * FROM myplaylists;`;
            const allListsData = await db.any(query);
            return allListsData;
        } catch (err) {
            return err.message;
        }
    }

    async getListData() {
        try {
            const query = `SELECT * FROM myplaylists WHERE id = ${this.id}`;
            const playlistData = await db.one(query);
            return playlistData;
        } catch (err) {
            return err.message;
        }
    }

    async addNewList() {
        try {
            const query = `INSERT INTO myplaylists (list_title, user_id) VALUES ('${this.list_title}', ${this.user_id});`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = Lists;