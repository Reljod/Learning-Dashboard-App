import React, { useState, useCallback } from 'react'
import { useQuery } from "react-query";

import { getLearnings, saveLearnings } from "../api/learnings"
import { getNow } from '../helper/datetime';

import NotesEditor from '../components/notes/NotesEditor';
import NotesList from '../components/notes/NotesList';

import "../styles/components/notes.css";

const Notes = () => {
  const { data, isLoading, isError } = useQuery('learnings', getLearnings);

  const now = new Date(Date.now());
  const nowString = now.toString();

	const [notesData, setNotesData] = useState({
    id: -1,
    title: '',
    body: '',
    mostRecentUpdate: nowString,
    createdDate: nowString,
    source: "Self Notes",
    status: "to do"
  });
	const [notesClicked, setNotesClicked] = useState(-1);
  
	const onChangeBody = e => {
	  const notes = e.target.value;
	  setNotesData({
      ...notesData, 
      body: notes,
      mostRecentUpdate: getNow()
    });
	}
	
	const onChangeTitle = e => {
	  const titleText = e.target.value;
	  setNotesData({
      ...notesData, 
      title: titleText,
      mostRecentUpdate: getNow()
    });
	}

  const isNotesListCardClicked = (id) => {
    const item = data.filter(learning => learning.id == id)[0];
    setNotesClicked(id);
    setNotesData({
      id: item.id,
      title: item.title,
      createdDate: item.createdDate,
      mostRecentUpdate: item.mostRecentUpdate,
      source: item.source,
      status: item.status,
      body: item.body,
    });
  }

  return (
    <div className='notes'>
      <NotesEditor 
        notes={ notesData } 
        onChangeTitle = { onChangeTitle }
        onChangeBody = { onChangeBody }
      ></NotesEditor>
      <NotesList 
        data={ data } 
        isLoading={ isLoading } 
        isError={ isError }
        isClicked= { isNotesListCardClicked }
        notesClicked= { notesClicked }
      ></NotesList>
    </div>
  )
}

export default Notes;