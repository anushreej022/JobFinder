var mongoose = require('mongoose');

module.exports = mongoose.model('Assn9', {
    full_name : {type: String, require: true},
    email : {type: String, require: true},
    password : {type: String, require: true},
    imagePath: { type: String, require: true}, // Add this field for storing image path
    type: {type: String, require: true, enum: ['employee', 'admin']} // New field for user type

});