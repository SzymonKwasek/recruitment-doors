import React from 'react';

const Checkbox = props => {
    return (
        <div className="checkbox-container">
            <input  className="checkbox" 
                    type="checkbox" 
                    {...props} />
            <label  className={"checkbox-replacer " + (props.checked ? 'checked' : 'unchecked')}
                    htmlFor={props.id}> 
                    {props.label} 
            </label>
        </div>
    )
}

export default Checkbox;