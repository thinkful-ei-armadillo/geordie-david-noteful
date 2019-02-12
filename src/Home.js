import React from 'react';
import Header from './Header';
import Folders from './Folders';
import Notes from './Notes';

function Home(props){
  return (
    <div>
      <Header />
      <main className='flex main'>
        <Folders 
          folders={props.folders} 
        />
        <Notes 
          notes={props.notes}        />
      </main>
    </div>
  )
}

export default Home