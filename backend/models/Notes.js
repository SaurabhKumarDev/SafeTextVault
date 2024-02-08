const mongoose = require ('mongoose');
const { Schema } = mongoose;

// Define the schema for the "notes" collection
const notesScheme = new Schema({
    // The User field associates each note with a user by storing the user's ObjectID
    // It acts as a foreign key referencing the User model
    User: {
        // I have said here that I will keep the object id of some other model here.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // References the 'User' model
    },
    // Title for the note
    title: {
        type:String, 
        required: true,     // Title is required
    },
    // Description of the note
    description: {
        type:String,
        required: true,     
    },
    // Tag associated with the note, defaults to "General" if not provided.
    tag: {
        type:String,
        default: "General"  
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
});

// Export the mongoose model for the "notes" collection
module.exports = mongoose.model ('notes', notesScheme)