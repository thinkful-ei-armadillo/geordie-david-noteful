import React from 'react';
import { Link } from 'react-router-dom'

function Folders(props){
  return (
    <div>
      {props.folders.map((folder, index) => 
        <Link to={`/FolderPage/${folder.id}`}>
          <h2 key={index}>{folder.name}</h2> 
        </Link>
        )}
    </div>
  )
}

export default Folders