import React from 'react';

export default function CheckBox(props) {

    return (
        <div className="form-group">
        <label>{props.label}</label>
        <div className="field">
            <input 
                type="checkbox"
                name={props.name}
                className="form-control"
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.error && <div>{props.error}</div>}
        </div>
     </div>
   )
