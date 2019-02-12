import React from 'react';
// import Link from 'react-router-dom';

function NoteDetails (props) {
    
    const note = props.notes.find(note => note.id === props.match.params.NoteId);
    return (
        <div>
            <ul>
                <li>
                    <h2>{note.name}</h2>
                    {note.modified}
                    {note.content}
                </li>
            </ul>
        </div>
    )
}

export default NoteDetails;