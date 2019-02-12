import React from 'react';
import {Link} from 'react-router-dom';

function Notes(props) {
  console.log(props.match);
  if(props.match) {
      const filteredNotes = props.notes.filter(note =>
      note.folderId === props.match.params.folderId
    );
    console.log(filteredNotes);

    return (
      <div>
        <ul>
          {filteredNotes.map((note, index) =>
            <li key={index}>
              <Link to={`/NotePage/${note.id}`}>
                <h2>{note.name}</h2>
              </Link>
              {note.modified}
            </li>
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {props.notes.map((note, index) =>
            <li key={index}>
              <Link to={`/NotePage/${note.id}`}>
                <h2>{note.name}</h2>
              </Link>
              {note.modified}
            </li>
        )}
        </ul>
      </div>
    )
  }
}

export default Notes;