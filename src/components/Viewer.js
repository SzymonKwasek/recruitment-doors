import React, { useContext, useMemo, useState, useEffect } from 'react';
import AppContext from '../context/app-context';
import classNames from 'classnames';
import room from '../assets/room.png';

import Switch from './utils/Switch';
import Door from './Door';
import Ruler from './utils/Ruler';

const Viewer = React.memo(({type}) => {
    
    const context = useContext(AppContext);

    const [items, setItems] = useState([]);
    const [posts, setPosts] = useState([]);

    const doorContainer = classNames({
        'door-container': true,
        'door-3d-view': !context.is2d
    });

    useEffect(() => {
        const itemsTemp = Array.from(Array(context.beams + 1)).map((items, index) => {
            return (
                <div key={index} className="beams">
                    {posts}
                </div>
            )
        });
        setItems(itemsTemp);
    }, [posts])
    

    useMemo(() => {
        const postsTemp = Array.from(Array(context.posts + 1)).map((items, index) => {
            return (
                <div key={index} className="posts"></div>
            )
        });
        setPosts(postsTemp);
    }, [context.posts, context.beams]);

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
});

export default Viewer;