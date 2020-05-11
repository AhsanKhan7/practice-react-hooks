import React, { useState, useContext } from 'react'
import NoteContext from '../context/note-context'


const AddNoteForm = () => {
    const { dispatch } = useContext(NoteContext)
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const AddNote = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', title, body })
        setTitle('')
        setBody('')
    }
    return (
        <>    
            <h2>Add title</h2>
             <form onSubmit={AddNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>Add note</button>
        </form>
    </>
    )
}
    


export default AddNoteForm