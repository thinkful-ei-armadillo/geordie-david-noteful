import React from 'react';
import Notes from './Notes';
import Header from './Header';
import Folders from './Folders';
// import {Link} from 'react-router-dom';

function FolderPage (props) {
    return (
        <div>
            <Header />
            <main className='flex main'>
                <Folders
                    folders={props.folders}
                />
            <Notes folders={props.folders} match={props.match} notes={props.notes} />
            </main>
        </div>
    )
}

export default FolderPage;