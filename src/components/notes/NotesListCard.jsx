import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import { formatDate } from "../../helper/datetime";
import "../../styles/components/notesList.css"

const summarize = (body) => {
	const summarize_body = body.substring(0, 163) + "...";
	return summarize_body;
}

const NotesListCard = ({data, notesClicked, isClicked}) => {
  const [isNotesCardClicked, setIsNotesCardClicked] = useState(notesClicked === data.id);

  const nodeRef = React.useRef(null);

	const title = data.title;
	const mostRecentUpdate = data.mostRecentUpdate;
	const brief_summary = summarize(data.body);

  const onClickHandle = () => {

    isClicked(data.id);
  }

  useEffect(() => {
    setIsNotesCardClicked(notesClicked === data.id)
  }, [data, notesClicked])

	return (
		<Draggable
			axis="y"
      nodeRef={nodeRef}
		>
		{
			isNotesCardClicked ? 
			(
				<div ref={nodeRef} className="nl-card-active" onClick={ onClickHandle }>
					<p className="nl-title">{ title }</p>
					<p className="nl-most-recent-update">{ formatDate(mostRecentUpdate) }</p>
					<p className="nl-brief-summary">{ brief_summary }</p>
				</div>
			) :
			(
				<div ref={nodeRef} className="nl-card" onClick={ onClickHandle }>
					<p className="nl-title">{ title }</p>
					<p className="nl-most-recent-update">{ formatDate(mostRecentUpdate) }</p>
				</div>
			)
		}
		</Draggable>

	);
}

export default NotesListCard;