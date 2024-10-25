// Mongoose library importing
const mongoose = require('mongoose');
const { Schema } = mongoose;

// We are coping the schema's from https://mongoosejs.com/docs/guide.html
// This schema is used to define format of our data
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: { 
        type: Date,
        default: Date.now
    }
});

// Line number 14 will not work properly beacuse it does not check any index for the email
// For checking the indexes
const User = mongoose.model('User', userScheme);
User.createIndexes;

module.exports = User