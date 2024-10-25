<<<<<<< HEAD
import { createContext } from "react";

// Here, we're utilizing the Context API.
// This allows us to manage global state across components.

// We're creating a new context.
// Context acts as a container to hold states related to notes.
// We'll create the states in the NoteState.js file

// This creates a new context using React's createContext function.
const noteContext = createContext ();

=======
import { createContext } from "react";

// Here, we're utilizing the Context API.
// This allows us to manage global state across components.

// We're creating a new context.
// Context acts as a container to hold states related to notes.
// We'll create the states in the NoteState.js file

// This creates a new context using React's createContext function.
const noteContext = createContext ();

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
export default noteContext;