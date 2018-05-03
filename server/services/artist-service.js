'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var ArtistRsrc = require(__base + 'server/infrastructure/resources').artist;

function getArtist(id) {
    var result;
    try {
        if(id){
            result = await (ArtistRsrc.getArtist(id));
        } else {
            result = await (ArtistRsrc.getArtists());
        }   
    } catch(error) {
        throw error;
    }
    return { artist: result };
}

function updateArtist(artist) {
    var result;
    try {
        result = await (ArtistRsrc.updateArtist(artist));  
    } catch(error) {
        throw error;
    }
    return { artist: result };
}

function deleteArtist(id) {
    var result;
    try {
        result = await (ArtistRsrc.deleteArtist(id));   
    } catch(error) {
        throw error;
    }
    return { artist: result };
}

function postArtist(artist) {
    var result;
    try {
        result = await (ArtistRsrc.addArtist(artist));   
    } catch(error) {
        throw error;
    }
    return { artist: result };
}

module.exports.getArtist = async(getArtist);
module.exports.updateArtist = async(updateArtist);
module.exports.deleteArtist = async(deleteArtist);
module.exports.postArtist = async(postArtist);