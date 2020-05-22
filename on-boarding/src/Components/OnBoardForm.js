import React from 'react';
import InputText from "./InputText";
import CheckBox from './CheckBox';

export default function OnBoardForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <InputText
                type="text"
                name="name"
                label="Name"
                className="form-control"
                value={props.member.name}
                onChange={props.onChange}
                error={props.error.name}
            />

             <InputText
                type="text"
                name="email"
                label="Email"
                className="form-control"
                value={props.member.email}
                onChange={props.onChange}
                error={props.error.email}                         
            />
                   
            <InputText
                type="text"
                name="password"
                label="Password"
                className="form-control"
                value={props.member.password}
                onChange={props.onChange}
                error={props.error.password}    
            />
                 
            <CheckBox
                type="checkbox"
                name="serviceTerms"
                className="form-control"
                label="Service Terms"
                onChange={props.onChange}
                error={props.error.serviceTermsIsChecked}    
            />
            
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    )
}