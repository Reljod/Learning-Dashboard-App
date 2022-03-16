import React, { useState } from 'react';

import NotesListCard from './NotesListCard';
import "../../styles/components/notesList.css"

const NotesList = ({ data, isLoading, isError, isClicked, notesClicked }) => {

  const onNotesCardClick = (id) => {
    isClicked(id);
	}

  return (
    <div className="notes-list">
      <SearchBar></SearchBar>
      <div className='nl-cards-panel'>
        {
          data && data.map((item, i) => {
            return (
              <NotesListCard 
                key= { item.id }
                data={ item }
                notesClicked = { notesClicked }
                isClicked = { onNotesCardClick }
              />
            )
          })
        }
      </div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className='search'>
      <p>Search...</p>
    </div>
  )
};

export default NotesList;