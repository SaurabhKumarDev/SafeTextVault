// Import necessary libraries and modules
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const user = require('../models/User')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

// Secret code for the jwt
const JWT_SECRET = 'ItIsASecretCodeUsedToSecureUser'

// Router 1: Handling POST request at ('/api/auth/createuser') No login required
// Validation rules provided using express-validator
// Asynchronous function to handle the request in the third argument
router.post('/createuser',
    [
        // Validate name - must be at least 3 characters long
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        // Validate email - must be a valid email format
        body('email', 'Enter a valid email').isEmail(),
        // Validate password - must be at least 5 characters longs
        body('password', 'At least 5 character use for password').isLength({ min: 5 }),
    ],
    async (req, res) => {
        // Check for validation errors in the input data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Some validation are predefined so please follow them and retry");
            return res.status(400).json({ message: "Some validation are predefined so please follow them and retry", errors: errors.errors });
        }

        try {
            // Check if a user with the provided email already exists
            let User = await user.findOne({ email: req.body.email })
            let Signed = false;
            if (User) {
                console.error("Attempting to create a duplicate user with the same credentials");
                return res.status(409).json({ message: "Attempting to create a duplicate user with the same credentials", suggestion: "Try with new detail", Signed: false });
            }

            // Hash the password for security before storing it in MongoDB
            const salt = await bcrypt.genSalt(10);
            const secPassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user in MongoDB with the provided data
            User = await user.create({
                name: req.body.name,
                gender: req.body.gender,
                password: secPassword,
                email: req.body.email
            })

            // Generate JWT token
            const data = { User: { id: User.id } };
            const authToken = jwt.sign(data, JWT_SECRET);

            // Respond with the newly created user data and authentication token
            console.log("Signed In successful, AuthToken: ",authToken);
            return res.send({ Signed: true, authToken: authToken });            
        } catch (err) {
            // Handle any errors that occur during the process
            console.error(err.message);
            res.status(400).send({ Signed: false, error: "Some error occured while procesing User creation", error: err.message });
        }
    }
)

// Router 2: Handling POST request at ('/api/auth/login') No login required
router.post('/login',
    [
        // Validate email and password
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Enter a valid password').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Double-check the username and password, you're using wrong credential.");
            return res.status(400).json({ error: "Double-check the username and password, you're using wrong credential.", errors: errors.errors })
        }

        // Destructure email and password from request body
        const { email, password } = req.body;

        try {
            // Find user by email
            let User = await user.findOne({ email: email });
            let LogedIn = false;
            if (User) {
                // Compare provided password with the hashed password stored in the database
                const isPasswordCorrect = await bcrypt.compare(password, User.password);
                if (isPasswordCorrect) {
                    // Generate JWT Token
                    const data = { User: { id: User.id } };
                    const authToken = jwt.sign(data, JWT_SECRET);

                    // Respond with login success message and authentication token
                    console.log("Log In successful, AuthToken: ",authToken);
                    return res.send({ LogedIn : true, authToken: authToken });
                } else {
                    console.error("Incorrect password entered");
                    return res.send({ LogedIn: false, supporter: "Incorrect password entered"});
                }
            } else {
                console.error("User not foundied");
                return res.status(404).send({ LogedIn: false, error: "User not foundied" });
            }
        } catch (error) {
            console.error(error.message);
            res.json({ LogedIn: false, error: "Some error occured while processing your job", error: error.message });
        }
    }
)

// Router 3 :- Handling POST request at (/api/auth/getuser) Login required
// We use auth token for verify the correct user
// here, fetchuser will do job first then third argument start its own job
router.post('/getuser', fetchuser,
    async (req, res) => {
        try {
            // req.User : got from fetchuser
            // User fetch all data same as findOne
            const User = await user.findById(req.User.id);

            if (!User) {
                console.error("User not found");
                return res.status(404).json({ error: "User not foundied" });
            }

            res.send({ User })
        } catch (error) {
            console.error(error.message);
            res.json({ error: "Some error occured while fetching", message: error.message })
        }
    }
)

// Export the router for use in the main application
module.exports = router;