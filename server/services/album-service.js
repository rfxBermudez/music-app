'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var AlbumRsrc = require(__base + 'server/infrastructure/resources').album;

function getAlbum(id) {
    var result;
    try {
    	if(id){
        	result = await (AlbumRsrc.getAlbum(id));
        } else {
        	result = await (AlbumRsrc.getAlbums());
        }   
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function updateAlbum(album) {
    var result;
    try {
        result = await (AlbumRsrc.updateAlbum(album));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function deleteAlbum(id) {
    var result;
    try {
        result = await (AlbumRsrc.deleteAlbum(id));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

function postAlbum(album) {
    var result;
    try {
        result = await (AlbumRsrc.addAlbum(album));
    } catch(error) {
        throw error;
    }
    return { album: result };
}

module.exports.getAlbum = async(getAlbum);
module.exports.updateAlbum = async(updateAlbum);
module.exports.deleteAlbum = async(deleteAlbum);
module.exports.postAlbum = async(postAlbum);