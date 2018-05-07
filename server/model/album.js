var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    artist: { type: Schema.Types.ObjectId, ref: 'artist' }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('album', schema);