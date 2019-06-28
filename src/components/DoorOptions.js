import React, { useContext } from 'react';

import Viewer from './Viewer';
import DoorType from './DoorOptions/DoorType';
import DoorDivision from './DoorOptions/DoorDivision';
import DoorColor from './DoorOptions/DoorColor';
import AppContext from '../context/app-context';

const DoorOptions = ({optionType}) => {
    
    const context = useContext(AppContext);

    return (
        <div className="main-container">
            <div className="viewer-container">
                <Viewer type={context.doorType}/>
            </div>
            <div className="options-container">
                {optionType === 'type' && (
                    <DoorType />
                )}
                {optionType === 'division' && (
                    <DoorDivision />
                )}
                {optionType === 'color' && (
                    <DoorColor />
                )}
            </div>
        </div>
    )
}

export default DoorOptions;