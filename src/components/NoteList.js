import React, { useContext } from 'react' 
import Note from './note'
import NoteContext from '../context/note-context'

const NoteList = () => {
    const { notes } = useContext(NoteContext)

    return notes.map((note) => (
        <Note key={note.title} note={note} />
      ))
}

export default NoteList
