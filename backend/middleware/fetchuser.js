// Authentication
// JSON Web Tokens (JWT) are an industry standard method for securely representing claims between parties.
// JWTs can be decoded, verified, and generated using libraries like jwt.
var jwt = require('jsonwebtoken');

// Secret code for the jwt 
// It should be match with the encrypted secert key
const JWT_SECRET = 'ItIsASecretCodeUsedToSecureUser'

// Middleware function fetchuser
// It take req, res, next as an arguments as a middleware
// The next() function is called at the end to pass controld to other
// In auth.js, req will contain the user, triggering the execution of the third argument.
const fetchuser = (req, res, next) => {
    // Get the user from the JWT token and add it to the req object in auth.js.
    // The token is retrieved from the request header with the name 'auth-token'.
    // When making a request, this header is set with the authentication token.
    // You can check this in the Thunder Client header:
    // Header - auth-token && Value - authentication key provided by the logged-in user.
    const token = req.header('auth-token');

    // Use try-catch to handle potential errors with token verification.
    try {
        // If no token is provided, return a 401 status indicating unauthorized access.
        if (!token) {
            // Unauthorized access
            return res.status(401).send({ error: "please authenticate useing a valid token" });
        }

        // If the token is valid, extract the user ID.
        // We verify our token here.
        const data = jwt.verify(token, JWT_SECRET)

        // After decryption, the data might look like this:
        // {
        //     "User": {
        //         "id": "65bb2ea0b8bcaf3f82db7770"
        //     },
        //     "iat": 1706776225
        // }

        // Add the user obtained from the token to the req object.
        // This user information is then passed to the next middleware using next().
        req.User = data.User

        // console helper
        // console.log("User fetched successfully");        // Run till termination

        // Move to the next middleware
        next()
    } catch (error) {
        // If an error occurs during token verification, return a 401 status.
        console.error({support: "Token is incorrect, check me in the fetchuser.js file", error:  "JsonWebTokenError: jwt malformed"});
        res.status(401).send({ error: "Token is not correct, check Header" });
    }
}

module.exports = fetchuser;