import React from 'react';

export default React.createContext({
    authenticated: false,
    setAuth: () => {},
    removeAuth: () => {}
});