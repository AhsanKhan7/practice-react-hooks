import React, { useEffect, useReducer } from 'react'
import NoteReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NoteContext from '../context/note-context'

const NoteApp = () => {
    const [notes, dispatch] = useReducer(NoteReducer, [])
    
    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('notes'))
  
      if (notes) {
        dispatch({ type: 'POPULATE_NOTES', notes })
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
  
    return (
      <NoteContext.Provider value={{ notes, dispatch }}>
        <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
      </NoteContext.Provider>
    )
  }
  
  export default NoteApp