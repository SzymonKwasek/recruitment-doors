import React, { useContext } from 'react';

import AppContext from '../../context/app-context';

const Switch = () => {

    const context = useContext(AppContext);

    const on2dChange = (event) => {
        context.setIs2d(!context.is2d);
    }

    return (
        <div className="switch">
            <input  className="switch-button"
                    type="radio"
                    id="3d"
                    checked={!context.is2d}
                    value={context.is2d}
                    name="2dgroup"
                    onChange={on2dChange}>
            </input>
            <label  className={"switch-button-replacer " + (!context.is2d ? 'switched' : null)}
                    htmlFor="3d">
                    3D
            </label>
            <input  className="switch-button"
                    type="radio"
                    id="2d"
                    checked={context.is2d}
                    value={context.is2d}
                    name="2dgroup"
                    onChange={on2dChange}>
            </input>
            <label  className={"switch-button-replacer " + (context.is2d ? 'switched' : null)}
                    htmlFor="2d">
                    2D
            </label>
        </div>
    )
}

export default Switch;