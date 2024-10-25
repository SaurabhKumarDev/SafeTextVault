# MERN Stack

MERN Stack name was introduce the four technologies that make up the stack

1. #### MongoDB
    - Document database, stores data in JSON format.
    - https://www.mongodb.com/try/download/community
    #### Mongoose 
    - Abstraction layer for MongoDB, helps connect with MongoDB
    - Install: `npm i mongoose`
    #### MongoDB Compass
    - It is an application, used at localhost
    #### MongoDB Atlas
    - To connect to MongoDB Atlas, you only need a single link provided by MongoDB Atlas from the cloud. You'll take this link and paste it into your backend code. This link contains all the necessary information for your backend to establish a connection with your MongoDB database hosted on Atlas.

2. #### Express
    - Backend web application framework for building RESTful APIs with Node.js.
    - Install: `npm install express --save`
    ```js
      const express = require ('express')
    ```
    - Above code is used to importing the express
    - Express will provide us the accessibility of localhost, router, connect
    ```js
    require('express').listen (3000, () => {
      console.log('I am in express)
    })
    ```
    - http://localhost:3000

3. #### React
    - Client-side JavaScript framework for building user interfaces.

4. #### Node
    - JavaScript runtime, majorly used for server-side scripting.
    - Install nodemon : `npm i -g nodemon`
    - Run with Nodemon: `npx nodemon .\filename.js`

### Project : Text Note
- App for saving text notes with authentication.
- Custom API built with Express.js, storing data in MongoDB.
- MongoDB Compass/Atlas used for database visualization.
- Client and server components built separately.
- Later, they connect and communicate.

### Major Notes 
  - <b>-g</b>: Global Installation, applied to the entire system.
  - <b>-D</b>: DevDependencies, used during development.
  - <b>localhost</b>
    - Refers to the local machine, typically for testing.
    - When ever your app is crashed then your localhost also stopped running 
    - for resolving this you have to modifing your app or correct the errors
  - <b>Backend stack</b>
    - Express, Mongoose, MongoDBCompass, MongoDB Atlas
    - Express is used to manipulate and perform db operation 
  - <b>Checking API/WebPage</b>
    - Thunder-client extension(VS Code)
    - PostMan app
  - Backend functionality is often referred to as an API.
  - <b>Modern js syntax for object</b>
    - {{state, update}} == {{state: state, update: update}}

### `require('')`
- Used to import libraries and modules.
- Examples: 
  1. For Modules: `require('mongoose')` 
  2. For files: `require('../routes/auth')`

### `express.Router()`
- Provides routers for switching webpages.
- Offers methods like `router.get`, `router.post`, `router.PUT`, etc.

### Export
```js
module.exports = router;
```
- Node.js way of exporting a module.
- Allows other parts of the code to use the exported content.
```js
module.exports = mongoose.model('user', userScheme)
```
- `mongoose.model('user', userScheme)`: This line creates a model using Mongoose, a MongoDB object modeling tool for Node.js. The model is associated with the `'user'` collection in the MongoDB database, and it follows the <b>schema</b> defined in `userScheme`. 
```js
module.exports = connectToMongo;
```
- `connectToMongo` : exporting an asynchronous function.

### Returning json 
```js
router.get ('/', (req, res) => {
  obj={
    name:"Saurabh",
    roll:39
  }
  res.json(obj);
})  
```
- Sends JSON response to the client.

### Storing data into mongoDB
```js
router.get ('/', (req, res) => {
  const User = user (req.body)
  User.save();
})
```
- `router.get` => `router` is `express.router()` used to switch webpages
- `'/'` => Location of URL
- Second argument is a callBackFunction
- `user()` => this is a model which is present in backed files
- `req.body` => all body inclued with this or inputs, req is request
- `User.save()` => Directly save in DB

### Schema
`const { Schema } = mongoose;`
- Defines the structure/format of data in MongoDB.

### app.use (express.json())
- Enables JSON parsing middleware in Express.js.
- `app.use` : This is an Express.js method used to mount middleware functions in the request-response cycle. Middleware functions have access to the request object (`req`), the response object (`res`), and the next function in the application's request-response cycle.
- `express.json()` : This is a built-in middleware provided by Express.js. It parses incoming requests with JSON payloads. It parses the request body, which is typically sent in JSON format, and makes the parsed data available in the `req.body` property.
- So, when you use `app.use(express.json())`, you are telling your Express.js application to use the `express.json()` middleware for all incoming requests. This is particularly useful when your application expects JSON data in the request body, common in scenarios like handling API requests where data is often sent in JSON format.

### Mandatory for Data Transmission to MongoDB
- Manually add `Content-type = application/json`
- `app.use = (express.json)`  must be placed before route definitions.

### Bcrypt
- Used to generate hash passwords for security.
- Install: `npm install bcrypt`
```js
const salt = await bcrypt.gensalt (10);
const secPass = await bcrypt.hash(Password, salt)
```

### Tokens
- Session and JSON tokens for user authentication. 
- JWT (JSON Web Token) used in the project.
- https://www.npmjs.com/package/jsonwebtoken

### Bcrypt and jwtWebToken
- Use 'bcrypt' to securely encrypt passwords.
- Generate a random "salt" and hash the password.
- To handle logins, use TOKENS (JWT in this case).
- Provide users with a token upon registration.
- Tokens ensure secure communication between client and server.
- Implement JWT in your project using 'jsonwebtoken' npm package.
- 'jwt verify' is used to validate and decode the token.

- we have to decode the authtoken to get the user id
joa joa request ye mangti hai ki user authenticate hona chiaye mai unme ak header bhej dunga indication token naam ka or uss header ka kya karunga
us header mai se jo bhi data hoga usse nikal kar mai fetch kar lunga

### Status
- Always consideer providing status messages along with appropriate HTTP status codes when handling errors
in your application
- Use `res.status(code)` to set the HTTP status code for the response, where `code` is the appropriate status code (e.g., 400 for Bad Request, 404 for Not Found, 500 for Internal Server Error).
- Include a JSON response using `.json({ message: "Your message here" })` to convey additional information about the error or status.

### MongoDB
1. `findOne`
    - The `findOne` method retrieves the first document matching specified criteria from the database.
    - The result is an object containing all related data of that document.
    - Example: When finding a user by email using `findOne`, the returned object includes all linked properties.
    - Usage: `let User = await user.findOne({ email: req.body.email });`

2. `.send` and `.json`
    - To view any output in the response window, use `res.send(variableName/eitherMessage)`.
    - Attempting to use `res.send`, `res.json`, or `res.send` more than once causes an error.
    - Error Message: "Cannot set headers after they are sent to the client."
    - Solution: Ensure that response (res) is sent only once.
    - JSON requires quotes around keys and string values.
    - Field names and data are case-sensitive.

3. `findById`
    - The code `const User = await user.findById(passID);` retrieves a user from the database based on the provided ID.
    - Using this code, you can access all the fields associated with that user through the User object.
    - To exclude specific details, like the password, the `select('-password')` method is added.
    - This modification ensures that the password field is not included in the retrieved user data.

### Concurrently 
- To start both backend and frontend npm scripts in parallel
  1. Navigate to the root folder.
  2. Open the package.json file.
  3. Add the following line of code to the "scripts" object:
  `"both": "concurrently \"npm run start\" \"npx nodemon backend/index.js\""`
  4. `npm run both` for the both fronted and backend simiultaneously, `npm run start` for the frontend and `npx nodemon backend/index.js` for the backend.

### Middleware
- Middleware in Express is a set of functions executed during the request-response cycle. They can manipulate requests, responses, and control the flow of the application.

### Backend 
- Backend components include mongoose for the database, express for code manipulation, and json for handling input and displaying results.

--------------- Our backend done -----------

# FrontEnd
- Frontend written at root folder of textnote
- Install : `npm i/install react-router-dom concurrently` react-router-dom allow us to change pages without loading, concurrently when do you want to run more than one server at a same time than use this

### Hooks
1. `useContext`
    - Changing Data Globally with Context
    - <b>Why needed</b>
      - In scenarios, where global data needs alteration across components like Grandfather, Father, and Son, a typical approach involves using props.
      - The data might be stored in an intermediate component (Father) even if it's not needed there, just to transmit it between Grandfather and Son.
    - <b>Introducing Context</b>
      - To share state or data across multiple components in your React application, you can use a concept called "context". Context allows you to create a global state accessible to all components in your app without having to pass props down manually through each level of the component tree. You can wrap your components with a context provider, which makes the state available to all children components. This way, you can easily access and update the shared state from any part of your application without the need for prop drilling.
      - To simplify this process, the Context API is employed.
      - Utilize the `useContext` hook by importing it from 'react'.
      - Create a context using `createContext()` in the desired module.
      - `import { createContext } from 'react'` and after this return the createContext()
      - This context can now be used to share and access values between components without the need for intermediaries like Father.
    - <b>Context Overview</b>
      1. Creation of Context
          - Import the context module: `import {  createContext } from 'react';`
          - Call the createContext function and store it  in a variable: `const context = createContext  ();`
          - Providing the state to the context,   Component.
          - `<context.Provider value={state}> {props. childern} </context.Provider>`
          - `props` is passed as an argument to the   function.
          - `value={state}` assigns the state, a JSON   code, API, or data circulating throughout the   file.
      2. Define where to use the context-state in app.js.Define all components between the state in app.js.
      3. Using Context in a File for the Value
          - Import the context and `useContext` as a  module.
          - Store it in any variable using `useContext  (context)`.
          - This allows access to all state values via  object calling.
        - Necessary Code for fetching when webpages loaded first time
          ```js
          useEffect ( () => {
            homePageContent(); // load at time of page  loading
          })
          ```
2. `useLocation` with `useEffect` 
    - The `useLocation` hook is commonly used in React applications with React    Router to access the current URL location.
    - Get path like `/about` , `/`, etc
    - We use the `useEffect` hook to execute a function whenever the location object changes.
    - In the `useEffect` callback, we log the `location.pathname`. You can  perform  any other actions based on the current path inside this callback.
    - `[]`: The second argument is an array dependencies. Whent this array is empty, it indicated that the useEffect should only run once, immediately after the initial render of the component. 
      ```jsx
      import React, { useEffect } from 'react';
      import { useLocation } from 'react-router-dom';
      
      export default function MyComponent() {
        const location = useLocation();
        useEffect(() => {
          console.log(location.pathname);
        }, [location]);
        return (
            <p>Current Path: {location.pathname}</p>
        );
      }
      ```
4. `useRef`
    - It is used for accessing and storing references to DOM elements ot other values that persist between renders of a component.
      1. <b>Creating a ref</b>
          ```jsx
          import React, { useRef } from 'react';
          function MyComponent() {
            const myRef = useRef();
          }
          ```
      2. <b>Attaching to DOM elements</b>
          ```js
          <input ref={myRef}>
          ```
      3. <b>Accessing the current value</b>
          ```
          console.log(myRef.current)
          ```
      4. <b>Holding other mutable values</b>: `useRef` can also hold other mutable values.
          ```jsx
          const countRef = useRef(0);
          countRef.current++; // Now countRef.current is 1
          ```
    - ref is used to provide the one functionality to another function to do multiple job simultaneously
5. `useHistory`
    - `useHistory` is a hook used in React Router to navigate programmatically to     different pages within your application. It provides a way to interact with the     browser's history stack.
    - With React Router version 6, `useHistory` has been replaced with    `useNavigate`. The syntax for navigating using `useNavigate` is slightly    different:
      ```js
      // React Router version 5:
      import { useHistory } from 'react-router-dom';
      let history = useHistory();
      history.push('/');

      // React Router version 6:
      import { useNavigate } from 'react-router-dom';
      let navigate = useNavigate();
      navigate('/');
      ```

### Execution of API at beginning page Load
1. Create an api call
2. Call it in the useEffect()
3. Example: 
    ```js
    const getUser = async () => { 
      const response = await fetch ('http://localhost:5000/api/auth/getuser', {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      })
      const json = await response.json()
      console.log({location: "I am in the user.js file for checking the user is fetched or not",json:json});
    }
    // execution
    useEffect (()=>{
      getUser();
    },[])
    ```
### Braces
1. Correct way
    - [ {  }, {  } ]
2. Error occure
    - { [ {  }, {  } ] }

### Events
- React events are written in camelCase syntax
- React event handlers are written inside curly braces:
1. `onClick`
    - Syntax : `onClick={shoot}`
    - Here, `shoot` is an function which perform some operation when clicked this event
2. `onChange`
    - props
    - When you pass value, you must also pass an onChange handler that updates the passed value.

### Spread Operator
  - ```...variableName```
  - The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
  - add the values with existing one

### JS Filter
- The "filter" command is used to sift through data and only keep the items that match certain criteria. When you use "filter", you provide a function that specifies what conditions the items must meet to be kept. Anything that doesn't meet those conditions will be removed from the data.

### Warning
1. To ignore, add // eslint-disable-next-line to the line before.
    - This issue commonly arises when using the "useEffect" hook in React. To solve it, you simply add the comment "// eslint-disable-next-line" at the end of the "useEffect" function.

### Bootstrap
1. `modal` gives you the button and pop up window

### Destructuring
- Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and store them in variables in a concise and readable way.
- `const { kiseNikalRaheHoa } = kismaiSeNikalRaheHoa;`

### Storage
1. <strong>`localStorage`</strong> 
- `localStorage` is a built-in feature in web browsers that allows you to store key-value pairs locally within the user's browser. These key-value pairs can be accessed and modified even after the user navigates away from your website, making it a convenient tool for persisting data.
1. `setItem(key, value)`: Adds a key-value pair to the `localStorage`. The key is a string that acts as a unique identifier for the value. The value can be any data type that can be serialized into a string.
2. `getItem(key)`: Retrieves the value associated with the specified key from the `localStorage`. Returns null if the key does not exist.
3. `removeItem(key)`: Removes the key-value pair associated with the specified key from the `localStorage`.
4. `clear()`: Removes all key-value pairs from the `localStorage`, effectively clearing it.
5. `key(index)`: Retrieves the key at the specified index in the `localStorage`. This method is rarely used, as it's more common to access values directly by their keys.
6. `length`: Returns the number of key-value pairs stored in the `localStorage`.

### JSON.stringify
- Purpose: JSON.stringify is a method in JavaScript used to convert a JavaScript object   into a JSON string.
- Usage: It takes an object as input and returns a JSON string representing that object.
```js
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"John","age":30}'
```

### JSON.parse
- Purpose: JSON.parse is a method in JavaScript used to parse a JSON string and convert it back into a JavaScript object.
- Usage: It takes a JSON string as input and returns a JavaScript object representing that JSON data.
```js
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj); // Output: { name: "John", age: 30 }
```
### stringify and parse 
- In summary, JSON.stringify converts a JavaScript object into a JSON string, while JSON.parse converts a JSON string back into a JavaScript object. These methods are commonly used for serializing and deserializing data when working with JSON in JavaScript applications, especially when sending data between a client and a server.