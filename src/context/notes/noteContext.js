import { createContext } from "react";

// Here, we're utilizing the Context API.
// This allows us to manage global state across components.

// We're creating a new context.
// Context acts as a container to hold states related to notes.
// We'll create the states in the NoteState.js file

// This creates a new context using React's createContext function.
const noteContext = createContext ();

export default noteContext;