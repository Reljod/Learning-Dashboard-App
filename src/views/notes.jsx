import React from 'react'
import NotesEditor from '../components/notes/NotesEditor';
import NotesList from '../components/notes/NotesList';

const Notes = () => {
  return (
    <div className='notes'>
      <NotesEditor></NotesEditor>
      <NotesList></NotesList>
    </div>
  )
}

export default Notes;