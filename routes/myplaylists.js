const express = require('express'),
    router = express.Router();
const MyPlaylistModel = require("../models/myplaylists")

router.get('/:list_id', async(req, res) => {
    const playlistID = req.params.list_id,
        listData = await MyPlaylistModel.getList(playlistID);

    res.render('template', {
        locals: {
            title: listData.name,
            listData,
            reviewData,
        },
        partials: {
            body: 'partials/myplaylist',
        }
    })
});

router.post('/newList:user_id', async(req, res) => {
    const { user_id } = req.params;
    const { list_title } = req.body;
    const newList = await MyPLaylistModel.addNewList(user_id, name);
    res.render('/${newList.id}');
});

router.post('/newmovie:list_id', async(req, res) => {
    const { list_id } = req.params;
    const { name } = req.body;
    const newItem = await MyPLaylistModel.addNewMovie(list_id, name);
    res.render('/${list_id}');
})

module.exports = router;