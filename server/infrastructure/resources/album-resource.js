var async = require('asyncawait/async');
var await = require('asyncawait/await');
var albumModel = require(__base + 'server/model/album');

function getAlbums() {
    var users = await(albumModel.find({}));
    return users;
}

function getAlbum(id) {
    var user = await(albumModel.findOne({_id:id}));
    return user;
}

function deleteAlbum(id) {
    var user = await(albumModel.remove({_id:id}));
    return user;
}

function updateAlbum(albumParam) {
    var user = await(albumModel.update({_id:albumParam._id},albumParam));
    return user;
}

function addAlbum(albumParam) {
    var user = await(albumModel.create(albumParam));
    return user;
}

module.exports = {
    getAlbums: async(getAlbums),
    getAlbum: async(getAlbum),
    deleteAlbum: async(deleteAlbum),
    updateAlbum: async(updateAlbum),
    addAlbum: async(addAlbum)
};