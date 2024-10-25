import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote(props) {
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({ title: "", description: "", tag: "General" })

    const handleAddNote = (e) => {
        // Prevent the page from reloading when the form is submitted
        e.preventDefault()

        // Add the note with the provided title, description, and tag
        addNote(note.title, note.description, note.tag);

        // Clear the input fields after adding the note
        setNote ({title:"",description:"",tag:""})
    }

    const onChange = (e) => {
        setNote ({...note, [e.target.name] : e.target.value})
    }

    return (
        <div className='container my-5'>
            <h2 className='my-2'>Add a note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' id="title" aria-describedby="titleHelp" onChange={onChange} value={note.title} minLength={3} required/>
                    <div id="titleHelp" className="form-text text-danger">You have to enter more than 3 character for the title.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name='description' id="description" aria-describedby='descriptionHelp' onChange={onChange}  value={note.description} minLength={5} required/>
                    <div id='descriptionHelp' className='form-text text-danger'>Description must be written more than 5 character.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name='tag' id="tag" aria-describedby='tagHelp' onChange={onChange} value={note.tag} minLength={3} />
                    <div id='tagHelp' className='form-text text-danger'>It can be empty and default value is General.</div>
                </div>
                
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5 || note.tag.length < 3} className="btn btn-primary" onClick={handleAddNote}>Submit</button>
            </form>
        </div>
    )
}