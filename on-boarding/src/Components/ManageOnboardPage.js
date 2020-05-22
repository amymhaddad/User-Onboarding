import React, { useState } from "react";
import OnBoardForm from "./OnBoardForm"

export default function ManageOnBoardPage(props) {    

    let [member, setMember] = useState({
        id: null,
        name:"",
        email:"",
        password:"",
        serviceTermsIsChecked:false
    })

    let [error, setError] = useState({})

    function handleInputChange(event) {
        const _member = {...member, [event.target.name]: event.target.value}
        if (event.target.checked) {
            _member.serviceTermsIsChecked = true;
        }
        setMember(_member)
    }

    function isValid() {
        let _error = {}

        if (!member.name)_error.name="You must enter your name."
        if (!member.email)_error.email="You must enter your email."
        if (!member.password)_error.password="You must enter password."
        if (!member.serviceTermsIsChecked)_error.serviceTermsIsChecked="You must accept our service terms."
        
        setError(_error)
      
        return Object.keys(_error).length === 0
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (!isValid()) return;
        
        props.onFormSubmit(member);
        
        setMember({
            name:"",
            email:"",
            password:"",
            serviceTerms:false,
        })
    }

    return (
        <OnBoardForm 
            member={member} 
            onChange={handleInputChange} 
            onSubmit={handleSubmit} 
            error={error}
        />

    )
}