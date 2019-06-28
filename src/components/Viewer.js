import React from 'react';

const Viewer = ({type}) => {
    
    return (
        <div className="viewer">
            <div className="door-viewer"> 

            </div>
            { type === 'double' && (
                <div className="door-viewer"> 

                </div>
            )}
        </div>
    )
}

export default Viewer;