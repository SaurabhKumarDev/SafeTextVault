// Import mongoose library
const mongoose = require('mongoose');

// Making an asynchronous function for connect to mongoDB
const connectToMongo = async () => {
    try {
        // const mongoURL = 'mongodb://localhost:27017/textnote';
        const mongoURL = 'mongodb+srv://saurabhkumarcse:9osD55AtvfcUi00m@textnote.1qmix7v.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(mongoURL, {
        })
        console.log('Connected mongoDB');
    } catch (error) {
        console.log('Server error occure, Solution: Check db.js file', error);
    }
}

// Export the connectToMongo function to be used in other parts of the application
module.exports = connectToMongo;