import React, { useState } from 'react';

import AppContext from './app-context';

const GlobalState = props => {

    const [authenticated, setAuthenticated] = useState(false);

    const setAuth = () => {
        setAuthenticated(true);
    }

    const removeAuth = () => {
        setAuthenticated(false);
    }

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