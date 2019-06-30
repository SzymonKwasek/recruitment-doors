import React, { useState, useEffect } from 'react';

import AppContext from './app-context';

const GlobalState = props => {

    const [authenticated, setAuthenticated] = useState(false);
    const [doorType, setDoorType] = useState('single');
    const [beams, setBeams] = useState(4);
    const [posts, setPosts] = useState(2);
    const [doorColor, setDoorColor] = useState('black');
    
    useEffect( () => {
        const token = localStorage.getItem('token');
        token ? setAuth() : removeAuth();
    }, []);

    const setAuth = () => {
        setAuthenticated(true);
    };

    const removeAuth = () => {
        setAuthenticated(false);
    };


    return (
        <AppContext.Provider value={{
            authenticated: authenticated,
            setAuth: setAuth,
            removeAuth: removeAuth,
            doorType: doorType,
            setDoorType: setDoorType,
            beams: beams,
            setBeams: setBeams,
            posts: posts,
            setPosts: setPosts,
            doorColor: doorColor,
            setDoorColor: setDoorColor
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default GlobalState;