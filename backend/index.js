// Importing the Express.js framework
const express = require ('express')
// Importing CORS middleware to handle Cross-Origin Resource Sharing
var cors = require('cors')

// Importing the function to connect to MongoDB from the local './db' file
const connectToMongo = require ('./db');

// Call the function to connect to the MongoDB database
connectToMongo()

// Creating an Express application instance
const app = express ()
// Setting the port for the Express application
const port = 5000

// Enabling CORS for the Express application
app.use(cors())

// Parsing incoming request bodies as JSON
app.use (express.json())

// Mounting the authentication routes from './routes/auth' under the '/api/auth' endpoint
app.use ('/api/auth', require ('./routes/auth'))
// Mounting the notes routes from './routes/notes' under the '/api/notes' endpoint
app.use ('/api/notes', require ('./routes/notes'))

// Route for the home page
// http://localhost:5000
app.get('/', (req, res) => {
  res.send('Hello World!, index.js')
})

// Starting the Express server to listen on the specified port
app.listen(port, () => {
  console.log(`Listening port - http://localhost:${port}`)
})