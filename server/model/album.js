var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('album', schema);