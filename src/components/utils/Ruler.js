import React from 'react';

const Ruler = ({ vertical, value }) => {

    return (
        <div className={vertical ? "ruler-container-vertical" : "ruler-container-horizontal"}>
            <div className={vertical ? "ruler-vertical" : "ruler-horizontal"}>
            </div>
            <div className={vertical ? "dimension-display-vertical" : "dimension-display-horizontal"}>
                {value}
            </div>
        </div>
    )
}

export default Ruler;