import React, { useContext } from 'react';
import classNames from 'classnames';

import AppContext from '../context/app-context';
import Ruler from './utils/Ruler';

const Door = ({items}) => {

    const context = useContext(AppContext);

    const doorClassNames = classNames({
        'door-viewer': true,
        'black-door': context.doorColor === 'black',
        'gray-door': context.doorColor === 'gray',
        'white-door': context.doorColor === 'white'
    });


    return (
        <div className="door-wrapper">
            <div className={doorClassNames}> 
                {items}
            </div>
            <Ruler  vertical={false} 
                    value={context.width}/>
        </div>
    )
}

export default Door;