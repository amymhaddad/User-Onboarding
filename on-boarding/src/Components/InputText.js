import React from 'react';

export default function InputText(props) {

    return (
        <div className="form-group">
                <label>{props.label}</label>
                <div className="field">
                    <input 
                        type="text"
                        name={props.name}
                        className="form-control"
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
                {props.error && <div>{props.error}</div>}   
             </div>
    )
}