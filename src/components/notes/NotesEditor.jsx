import React, { useState, useCallback } from 'react';
import AutoSave from "../autosave";
import NotesButton from "./notesTools";

import { formatDate } from "../../helper/datetime"
import "../../styles/components/notes.css";

const NotesEditor = ({notes, onChangeTitle, onChangeBody}) => {

	const [isSaving, setIsSaving] = useState(false);

  const titleData = notes.title;
  const notesData = notes.body;
  const mostRecentUpdate = notes.mostRecentUpdate;
  const createdDate = notes.createdDate;
  const status = notes.status;

  const statusStyleMap = {
    "to do": "ne-status-todo",
    "ongoing": "ne-status-ongoing",
    "done": "ne-status-done"
  }

  const onChangeTitleHandle = (e) => {
	  onChangeTitle(e);
    setIsSaving(!isSaving);
  }

  const onChangeBodyHandle = (e) => {
    onChangeBody(e);
    setIsSaving(!isSaving);
  }

  // ne = notes-editor
  return (
    <div className='ne-guidance'>
      <input 
        type="text" 
        className='ne-title' 
        placeholder='Title'
        onInput={ onChangeTitleHandle }
        value={ titleData }
        autoFocus
      />
      <div className='ne-body'>
        <AutoSave data={ notes } isSavingHandle = { isSaving }></AutoSave>
        <div className='ne-tags'>
          <p className="ne-dates">{ "Most Recent Update: " + formatDate(mostRecentUpdate) }</p>
          <div className={'ne-status-tag ' + statusStyleMap[status] }>
            { status }
          </div>
          <p className="ne-dates">{ "Created by: " + formatDate(createdDate) }</p>
        </div>
        <textarea
          className="ne-text-area"
          placeholder="Add your notes here..."
          row="50"
          onInput={ onChangeBodyHandle }
          value={ notesData }
        />
      </div>
    </div>
  );
}

export default NotesEditor;