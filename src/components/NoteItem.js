<<<<<<< HEAD
import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

// NoteItem component displays a single note.
const NoteItem = (props) => {
    // Accessing deleteNote functions from noteContext
    const { deleteNote } = useContext(noteContext)
    // Destructuring the props
    const { notes, updateNote } = props;

    // Deleting the note when the trash icon is clicked
    const handleDeleteNote = () => {
        deleteNote(notes._id)
    };

    return (
        // Bootstrap card component for styling
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-middle">
                        <h5 className="card-title">{notes.title}</h5>
                        <div>
                            {/* Trash icon for deleting the note */}
                            <i className="fa fa-trash mx-2" onClick={handleDeleteNote}></i>
                            {/* Edit icon for editing the note */}
                            <i className='fas fa-edit mx-2' onClick={()=>{updateNote(notes)}}></i>
                        </div>
                    </div>
                    <p className="card-text">{notes.description}</p>
                </div>
                {/* Additional information about the note */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tag : {notes.tag}</li>
                    <li className="list-group-item">Id : {notes._id}</li>
                    <li className="list-group-item">Date : {new Date(notes.date).toDateString()}</li>
                </ul>
            </div>
        </div>
    );
}

=======
import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

// NoteItem component displays a single note.
const NoteItem = (props) => {
    // Accessing deleteNote functions from noteContext
    const { deleteNote } = useContext(noteContext)
    // Destructuring the props
    const { notes, updateNote } = props;

    // Deleting the note when the trash icon is clicked
    const handleDeleteNote = () => {
        deleteNote(notes._id)
    };

    return (
        // Bootstrap card component for styling
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-middle">
                        <h5 className="card-title">{notes.title}</h5>
                        <div>
                            {/* Trash icon for deleting the note */}
                            <i className="fa fa-trash mx-2" onClick={handleDeleteNote}></i>
                            {/* Edit icon for editing the note */}
                            <i className='fas fa-edit mx-2' onClick={()=>{updateNote(notes)}}></i>
                        </div>
                    </div>
                    <p className="card-text">{notes.description}</p>
                </div>
                {/* Additional information about the note */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tag : {notes.tag}</li>
                    <li className="list-group-item">Id : {notes._id}</li>
                    <li className="list-group-item">Date : {new Date(notes.date).toDateString()}</li>
                </ul>
            </div>
        </div>
    );
}

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
export default NoteItem;