import React from 'react';
import {Link} from 'react-router-dom';

function ActiveFolder (props) {
    
    const note = props.notes.find(note => note.id === props.match.params.NoteId);
    const folder = props.folders.find(folder => folder.id === note.folderId);


    return (
        <div>
            <Link to={`/FolderPage/${folder.id}`}>
                <h3>{folder.name}</h3>
            </Link>
            <button onClick={props.history.goBack}>Go Back</button>
        </div>
    )
}

export default ActiveFolder;