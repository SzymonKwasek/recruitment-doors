import React, { useContext } from 'react';
import AppContext from '../context/app-context';
import classNames from 'classnames';
import room from '../assets/room.png';

import Switch from './utils/Switch';
import Door from './Door';
import Ruler from './utils/Ruler';

const Viewer = ({type}) => {
    
    const context = useContext(AppContext);

    const items = [];
    const posts = [];

    const doorContainer = classNames({
        'door-container': true,
        'door-3d-view': !context.is2d
    })

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
            <Switch />
            {!context.is2d && <div className="room-image-container">
                <img className="room-image"   
                     src={room} 
                     alt="Room"></img>
            </div>
            }
            
            <div className={doorContainer}>
                {type === 'double' && (
                    <div className="ruler-top">
                        <Ruler  className="top-ruler"
                                vertical={false}
                                value={context.width*2}/>
                    </div>
                )}
            <Ruler  vertical={true}
                    value={context.height}/>
                <Door items={items}/>
                { type === 'double' && (
                    <div className="second-door">
                        <Door items={items}/>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Viewer;