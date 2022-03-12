import React from "react"

const NotesButton = (imgSrc, onCallback) => {
  return (
    <button onClick={ onCallback }>
		  <img src={imgSrc} alt="button"></img>
	</button>
  )
}

export default NotesButton;