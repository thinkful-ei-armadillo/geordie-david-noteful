import React from 'react'

function Notes(props) {

  if(props.active) {
      const filteredNotes = props.notes.filter(note =>
      note.folderId === props.active
    );

    return (
      <div>
        <ul>
          {filteredNotes.map((note, index) =>
            <li key={index}><h2>{note.name}</h2>{note.modified}</li>
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {props.notes.map((note, index) =>
            <li key={index}><h2>{note.name}</h2>{note.modified}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Notes;