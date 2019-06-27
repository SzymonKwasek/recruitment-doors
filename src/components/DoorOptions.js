import React from 'react';

import Viewer from './Viewer';
import DoorType from './DoorOptions/DoorType';
import DoorDivision from './DoorOptions/DoorDivision';
import DoorColor from './DoorOptions/DoorColor';

const DoorOptions = ({optionType}) => {

    return (
        <div className="main-container">
            <div className="viewer-container">
                <Viewer/>
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