import React from 'react';

export default React.createContext({
    authenticated: false,
    setAuth: () => {},
    removeAuth: () => {},
    doorType: '',
    setDoorType: () => {},
    beams: 4,
    setBeams: () => {},
    posts: 2,
    setPosts: () => {},
    doorColor: '',
    setDoorColor: () => {}
});