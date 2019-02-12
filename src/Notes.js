import React from 'react'

function Notes(props) {

  const filteredNotes = props.notes.filter(note =>
    note.folderId === props.active
    );

  return (
    <div>
      <ul>
        {console.log(filteredNotes)}
        {filteredNotes.map((note, index) => 
          <li key={index}><h2>{note.name}</h2>{note.modified}</li>
          )}
      </ul>
    </div>
  )
}

export default Notes;