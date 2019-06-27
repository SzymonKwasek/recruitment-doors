import React, { useState, useEffect } from 'react';

import AppContext from './app-context';

const GlobalState = props => {

    const [authenticated, setAuthenticated] = useState(false);
    
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
            removeAuth: removeAuth
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default GlobalState;