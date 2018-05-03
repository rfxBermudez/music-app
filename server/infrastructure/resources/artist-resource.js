var async = require('asyncawait/async');
var await = require('asyncawait/await');
var artistModel = require(__base + 'server/model/artist');

function getArtists() {
    var products = await(artistModel.find({}));
    return products;
}

function getArtist(id) {
    var product = await(artistModel.findOne({_id:id}));
    return product;
}

function deleteArtist(id) {
    var product = await(artistModel.remove({_id:id}));
    return product;
}

function updateArtist(artistParam) {
    var product = await(artistModel.update({_id:artistParam._id},artistParam));
    return product;
}

function addArtist(artistParam) {
    var product = await(artistModel.create(artistParam));
    return product;
}

module.exports = {
    getArtists: async(getArtists),
    getArtist: async(getArtist),
    deleteArtist: async(deleteArtist),
    updateArtist: async(updateArtist),
    addArtist: async(addArtist)
};