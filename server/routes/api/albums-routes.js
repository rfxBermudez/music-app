'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getAlbums(request, response) {
    var result;
    try {
        result = await (service.albumService.getAlbum(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteAlbums(request, response) {
    var result;
    try {
        result = await (service.albumService.deleteAlbum(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateAlbums(request, response) {
    var result;
    try {
        result = await (service.albumService.updateAlbum(request.body.album));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postAlbums(request, response) {
    var result;
    try {
        result = await (service.albumService.postAlbum(request.body.album));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getAlbums));
routes.get('/', async(getAlbums));
routes.delete('/:id', async(deleteAlbums));
routes.put('/:id', async(updateAlbums));
routes.post('/', async(postAlbums));

module.exports = routes;