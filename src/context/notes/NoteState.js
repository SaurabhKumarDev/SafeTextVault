<<<<<<< HEAD
// Import necessary dependencies
import NoteContext from "./noteContext";
import { useState } from "react";

/*  React Context for Notes: Managing State and API Calls
    This file defines the note state and related API calls.
    NoteContext is already created in noteContext.js.
*/

// Define a functional component called NoteState
const NoteState = (props) => { 
    // Set the API host URL
    const host = "http://localhost:5000";
    // Default notes data
    const data = []
    // UseState hook for managing notes state
    const [notes, setNote] = useState(data)

    // Function to fetch notes data from the API
    const getNotes = async () => {
        // Fetch user authentication token
        const authToken = localStorage.getItem('token');
        
        // API Call to fetch
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": authToken
            }
        });
        const json = await response.json()
        // Set the retrieved notes data to the state
        return setNote (json)
    }

    // Function to add a new note
    const addNote = async (title, description, tag) => {
        // API Call using fetch for add a new note
        const addNoteToDB = await fetch (`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, description, tag})
        })

        // Add the new note to the existing notes state
        const note = await addNoteToDB.json();
        setNote(notes.concat(note))
    }

    // Function to delete a note by ID
    const deleteNote = async (id) => {
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        // Filter out the note with the specified ID
        const newNote = notes.filter((note) => { return note._id !== id });
        // Update the notes state without the deleted note
        setNote(newNote)
    }

    // Function to edit/update a note by ID
    const editNote = async (id, title, description, tag) => {
        // API call to update a note
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }), 
        });

        // Update the ntoes state with the edited note
        const newNote = JSON.parse(JSON.stringify(notes));
        // Iterate all the notes for update the notes state with the edited note
        // onChange when value is updated, also show in the screen 
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNote (newNote)
    }

    return (
        // Provide NoteContext.Provider with the value of notes and CRUD functions
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

=======
// Import necessary dependencies
import NoteContext from "./noteContext";
import { useState } from "react";

/*  React Context for Notes: Managing State and API Calls
    This file defines the note state and related API calls.
    NoteContext is already created in noteContext.js.
*/

// Define a functional component called NoteState
const NoteState = (props) => { 
    // Set the API host URL
    const host = "http://localhost:5000";
    // Default notes data
    const data = []
    // UseState hook for managing notes state
    const [notes, setNote] = useState(data)

    // Function to fetch notes data from the API
    const getNotes = async () => {
        // Fetch user authentication token
        const authToken = localStorage.getItem('token');
        
        // API Call to fetch
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": authToken
            }
        });
        const json = await response.json()
        // Set the retrieved notes data to the state
        return setNote (json)
    }

    // Function to add a new note
    const addNote = async (title, description, tag) => {
        // API Call using fetch for add a new note
        const addNoteToDB = await fetch (`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, description, tag})
        })

        // Add the new note to the existing notes state
        const note = await addNoteToDB.json();
        setNote(notes.concat(note))
    }

    // Function to delete a note by ID
    const deleteNote = async (id) => {
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "auth-token": localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        // Filter out the note with the specified ID
        const newNote = notes.filter((note) => { return note._id !== id });
        // Update the notes state without the deleted note
        setNote(newNote)
    }

    // Function to edit/update a note by ID
    const editNote = async (id, title, description, tag) => {
        // API call to update a note
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }), 
        });

        // Update the ntoes state with the edited note
        const newNote = JSON.parse(JSON.stringify(notes));
        // Iterate all the notes for update the notes state with the edited note
        // onChange when value is updated, also show in the screen 
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNote (newNote)
    }

    return (
        // Provide NoteContext.Provider with the value of notes and CRUD functions
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
export default NoteState;