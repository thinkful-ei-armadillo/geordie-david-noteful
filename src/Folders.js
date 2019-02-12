import React from 'react';

function Folders(props){
  return (
    <div>
      {props.folders.map((folder, index) => 
        <h2 key={index}>{folder.name}</h2> 
        )}
    </div>
  )
}

export default Folders