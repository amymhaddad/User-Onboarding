import React from "react";

export default function MembersList({member}) {
    const { name, email, password, serviceTermsIsChecked } = member;
    
    return (
        <>
        <div>Welcome, {name}!</div>

        <div>
            Name: {name}
            Email: {email}
            Password: {password}
            ServiceTerms: {serviceTermsIsChecked == true ? "Recieved": "Information Needed"}
        </div>
        </>
    )
}