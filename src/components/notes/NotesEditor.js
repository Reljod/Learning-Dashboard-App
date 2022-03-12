import React from 'react';
import "../../styles/components/notes.css";

import NotesButton from "./notesTools";

const NotesEditor = () => {
  const mostRecentUpdate = new Date(Date.now());
  const createdByDate = new Date(Date.now());
  const status = {
    "tag": "To Do",
    "style": "ne-status-todo" // "ne-status-on-going", "ne-status-todo"
  }
  
  // ne = notes-editor
  return (
    <div className='ne-guidance'>
      <input type="text" className='ne-title' placeholder='Title' autoFocus></input>
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
          row="50"
          placeholder="Add your notes here..."
        />
      </div>
    </div>
  );
}

export default NotesEditor;