import React, { useContext } from 'react';
import AppContext from '../context/app-context';
import classNames from 'classnames';

const Viewer = ({type}) => {
    
    const context = useContext(AppContext);

    const items = [];
    const posts = [];

    const doorClassNames = classNames({
        'door-viewer': true,
        'black': context.doorColor === 'black',
        'gray': context.doorColor === 'gray',
        'white': context.doorColor === 'white'
    });


    for (let i = 0; i<=context.posts; i++) {
        posts.push(
            <div key={i} className="posts"></div>
        )
    }

    for (let i = 0; i<=context.beams; i++) {
        items.push(
            <div key={i} className="beams">
                {posts}
            </div>
        )
    }

    return (
        <div className="viewer">
            <div className={doorClassNames}> 
                {items}
            </div>
            { type === 'double' && (
                <div className={doorClassNames}> 
                    {items}
                </div>
            )}
        </div>
    )
}

export default Viewer;