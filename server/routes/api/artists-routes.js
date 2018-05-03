'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getArtists(request, response) {
    var result;
    try {
        result = await (service.artistService.getArtist(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteArtists(request, response) {
    var result;
    try {
        result = await (service.artistService.deleteArtist(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateArtists(request, response) {
    var result;
    try {
        result = await (service.artistService.updateArtist(request.body.artist));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postArtists(request, response) {
    var result;
    try {
        result = await (service.artistService.postArtist(request.body.artist));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getArtists));
routes.get('/', async(getArtists));
routes.delete('/:id', async(deleteArtists));
routes.put('/:id', async(updateArtists));
routes.post('/', async(postArtists));

module.exports = routes;