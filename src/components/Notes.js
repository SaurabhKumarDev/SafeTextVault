import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    // UseNavigate : React router to navigate programmitically to different pages
    const Navigate = useNavigate();
    // Context : Changing Data Globally with Context and accessing
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    
    /* useEffect
    - `useEffect` Functions: The code inside the `useEffect` block will be executed after the component has been rendered.
    - `[]`: The second argument is an array dependencies. Whent this array is empty, it indicated that the useEffect should only run once, immediately after the initial render of the component. 
    */
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    // Use State
    const [note, setNote] = useState({ Etitle: "", Edescription: "", Etag: "General" })
    // Use Ref : used to provide the one functionality to another function to do multiple job simultaneously
    const ref = useRef(null)
    const refClose = useRef(null)

    if (!localStorage.getItem('token')) {
        Navigate('/login')
    }

    // Update the note with the current note received from the NoteItem component
    const updateNote = (currentNote) => {
        // Click the reference (ref) element, usually triggered by a button clicked
        ref.current.click();
        // Set the note state with the properties of the current note
        setNote({ Eid: currentNote._id, Etitle: currentNote.title, Edescription: currentNote.description, Etag: currentNote.tag })
    };

    // Handle changes in form inputs
    const onChange = (e) => {
        // Update the note state with the changed value from the input
        setNote({
            // Spread operator used to create a shallow copy of the note object
            ...note,
            // Dynamically update the property based on the input's name attribute
            [e.target.name]: e.target.value
        });
    };

    const update = () => {
        editNote(note.Eid, note.Etitle, note.Edescription, note.Etag);
        refClose.current.click();
    }

    return (
        <>
            <div>
                <AddNote />

                <button ref={ref} type="button" className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update Note
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                                <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="Etitle" className="form-label">Title</label>
                                        <input type="text" value={note.Etitle} className="form-control" name='Etitle' id="Etitle" aria-describedby="EtitleHelp" onChange={onChange} />
                                        <div id="EtitleHelp" className="form-text text-danger">You have to enter more than 3 character for the title.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Edescription" className="form-label">Description</label>
                                        <input type="text" value={note.Edescription} className="form-control" name='Edescription' id="Edescription" aria-describedby='EdescriptionHelp' onChange={onChange} />
                                        <div id='EdescriptionHelp' className='form-text text-danger'>Description must be written more than 5 character.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Etag" className="form-label">Tag</label>
                                        <input type="text" value={note.Etag} className="form-control" name='Etag' id="Etag" aria-describedby='EtagHelp' onChange={onChange} />
                                        <div id='EtagHelp' className='form-text text-danger'>It can be empty and default value is General.</div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* We want to close this modal if updated, so use ref and provide functionality to it [Close model] */}
                                <button type="button" disabled={note.Etitle.length < 3 || note.Edescription.length < 5 || note.Etag.length < 3} className="btn btn-primary" onClick={update}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row container my-3">
                    <h1>Preview notes</h1>
                    <div className="container my-3">
                        { notes.length === 0 && "No notes available" }
                    </div>
                    {
                        notes.map((current) => {
                            return <NoteItem key={current._id} updateNote={updateNote} notes={current} />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Notes;