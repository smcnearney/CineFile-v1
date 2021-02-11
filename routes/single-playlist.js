const express = require('express'),
    router = express.Router();
const SinglePlaylistModel = require("../models/single-playlist")

router.get('/:list_id', async(req, res) => {
    const listID = req.params.list_id,
        listData = await SinglePlaylistModel.getListItems(listID);

    res.render('template', {
        locals: {
            title: listData.title,
            listData
        },
        partials: {
            body: 'partials/single-playlist',
        }
    });
});

module.exports = router;