import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/app-context';

export default function(ComposedComponent) {

  const RequireAuth = (props) => {

    const context = useContext(AppContext);

    useEffect(() => {
        console.log(context.authenticated)
        context.authenticated ? props.history.push('/main') : props.history.push('/');
    }, [context.authenticated]);

    return <ComposedComponent {...props}/>
  }
  
  return RequireAuth
}