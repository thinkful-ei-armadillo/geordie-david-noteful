import React from 'react';
import NoteDetails from './NoteDetails';
import ActiveFolder from './ActiveFolder';
import Header from './Header';

function NotePage (props) {
    return (
        <div>
            <Header />
            <main className='flex main'>
                <ActiveFolder history={props.history}folders={props.folders} match={props.match} notes={props.notes} />
                <NoteDetails folders={props.folders} match={props.match} notes={props.notes} />
            </main>
        </div>
    )
}

export default NotePage;