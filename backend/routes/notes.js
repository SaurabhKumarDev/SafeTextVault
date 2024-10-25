<<<<<<< HEAD
// Import necessary libraries and modules
const express = require('express')
const router = express.Router();
const fetchUser = require('../middleware/fetchuser')
const notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

// Route 1: Handling GET request at ('/api/notes/fetchallnotes') login required
router.get('/fetchallnotes', fetchUser,
    async (req, res) => {
        try {
            /* notes.find({user: req.User.id})
            notes: our model
            find: searching for something
            req.user: this comes from fetchUser
            req.user.id: taking out the id from loged in user and serching this user in db
            */
            const Notes = await notes.find({ User: req.User.id })
            res.status(200).send(Notes);
            // console.log("All note fetched from the mongoDB");        // Run till project termination 
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

/* Route 2: Adding notes, handle POST request at ('/api/notes/addnote') Login required
 1. location
 2. fetchUser :- Passing (auth-token) using header and it will decode auth-token and get User
 3. validation
 4. asynchronous function
*/
router.post('/addnote', fetchUser,
    [
        body('title', 'Minimum 3 character').isLength({ min: 3 }),
        body('description', 'Minimum 5 character').isLength({ min: 5 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Some validation are predefined so please follow them and retry", error: errors.errors });
            }
            const data = await notes.create({
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag,
                User: req.User.id
            })

            console.log("Addied note");
            res.send(data)
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

// Route 3: Update note, hangle PUT request at ('/api/notes/updatenote) Login required
// First argument : needs ID to manipulate any note
router.put('/updatenote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        try {
            // Updated data will get from the destructuring the body and storing those in new object 'newNote'
            const newNote = {}
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };

            // req.params = It will check out the URL which was written after the colon ':' like id (note id)
            let note = await notes.findById(req.params.id)
            if (!note) { 
                console.error("Sorry but note is not exist with this note id");
                return res.status(404).send("Not found");
            }

            // 1) note.User: This refers to the user ID associated with a note.  
            // 2) req.User: This is the user ID that is provided by the fetchUser function to ensure that the correct user is authenticated. It's used to match against the user ID associated with the note.
            if (note.User.toString() !== req.User.id) {
                console.error("Unauthorized user trying to edit your note");
                return res.status(401).json({ error: "Unauthorized user", note: note.User });
            }

            // Find note via id when found Update note
            note = await notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json(note)
            console.log("Updated your note");
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

// Router 4: Delete note, Handle DELETE request at ('/api/notes/deletenote')
router.delete('/deletenote/:id', fetchUser, 
async (req, res) => {
    try {
        const note = await notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Sorry note is not found") }
        if (note.User.toString() !== req.User.id) { return res.status(401).json({ error: "Unauthorized user", note: note.User }); }
        // Deleting the note
        const del = await notes.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted successfully", DeletedNoteDetail: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
})

=======
// Import necessary libraries and modules
const express = require('express')
const router = express.Router();
const fetchUser = require('../middleware/fetchuser')
const notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

// Route 1: Handling GET request at ('/api/notes/fetchallnotes') login required
router.get('/fetchallnotes', fetchUser,
    async (req, res) => {
        try {
            /* notes.find({user: req.User.id})
            notes: our model
            find: searching for something
            req.user: this comes from fetchUser
            req.user.id: taking out the id from loged in user and serching this user in db
            */
            const Notes = await notes.find({ User: req.User.id })
            res.status(200).send(Notes);
            // console.log("All note fetched from the mongoDB");        // Run till project termination 
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

/* Route 2: Adding notes, handle POST request at ('/api/notes/addnote') Login required
 1. location
 2. fetchUser :- Passing (auth-token) using header and it will decode auth-token and get User
 3. validation
 4. asynchronous function
*/
router.post('/addnote', fetchUser,
    [
        body('title', 'Minimum 3 character').isLength({ min: 3 }),
        body('description', 'Minimum 5 character').isLength({ min: 5 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Some validation are predefined so please follow them and retry", error: errors.errors });
            }
            const data = await notes.create({
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag,
                User: req.User.id
            })

            console.log("Addied note");
            res.send(data)
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

// Route 3: Update note, hangle PUT request at ('/api/notes/updatenote) Login required
// First argument : needs ID to manipulate any note
router.put('/updatenote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        try {
            // Updated data will get from the destructuring the body and storing those in new object 'newNote'
            const newNote = {}
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };

            // req.params = It will check out the URL which was written after the colon ':' like id (note id)
            let note = await notes.findById(req.params.id)
            if (!note) { 
                console.error("Sorry but note is not exist with this note id");
                return res.status(404).send("Not found");
            }

            // 1) note.User: This refers to the user ID associated with a note.  
            // 2) req.User: This is the user ID that is provided by the fetchUser function to ensure that the correct user is authenticated. It's used to match against the user ID associated with the note.
            if (note.User.toString() !== req.User.id) {
                console.error("Unauthorized user trying to edit your note");
                return res.status(401).json({ error: "Unauthorized user", note: note.User });
            }

            // Find note via id when found Update note
            note = await notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json(note)
            console.log("Updated your note");
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Internal Server Error", message: error.message });
        }
    }
)

// Router 4: Delete note, Handle DELETE request at ('/api/notes/deletenote')
router.delete('/deletenote/:id', fetchUser, 
async (req, res) => {
    try {
        const note = await notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Sorry note is not found") }
        if (note.User.toString() !== req.User.id) { return res.status(401).json({ error: "Unauthorized user", note: note.User }); }
        // Deleting the note
        const del = await notes.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted successfully", DeletedNoteDetail: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
})

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
module.exports = router;