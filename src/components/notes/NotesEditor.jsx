import React, { useState, useCallback } from 'react';
import "../../styles/components/notes.css";

import NotesButton from "./notesTools";
import AutoSave from "../autosave"

const NotesEditor = () => {
  const [notesData, setNotesData] = useState('');
  const [titleData, setTitleData] = useState('');

  const mostRecentUpdate = new Date(Date.now());
  const createdByDate = new Date(Date.now());
  const status = {
    "tag": "To Do",
    "style": "ne-status-todo" // "ne-status-on-going", "ne-status-todo"
  }

  const onChangeBody = useCallback(e => {
    const notes = e.target.value;
    setNotesData(notes);
  }, [])
  
  const onChangeTitle = useCallback(e => {
    const titleText = e.target.value;
    setTitleData(titleText);
  }, [])

  // ne = notes-editor
  return (
	
    <div className='ne-guidance'>
	    <AutoSave title={ titleData } body={ notesData }></AutoSave>
      <input 
        type="text" 
        className='ne-title' 
        placeholder='Title'
        onChange={ onChangeTitle }
        value={ titleData }
        autoFocus
      />
      <div className='ne-body'>
        <div className='ne-tags'>
          <p className="ne-dates">{ "Most Recent Update: " + mostRecentUpdate.toDateString() }</p>
          <div className={'ne-status-tag ' + status.style}>
            { status.tag }
          </div>
          <p className="ne-dates">{ "Created by: " + createdByDate.toDateString() }</p>
        </div>
        <textarea
          className="ne-text-area"
          placeholder="Add your notes here..."
          row="50"
          onChange={ onChangeBody }
          value={ notesData }
        />
      </div>
    </div>
  );
}

export default NotesEditor;