import React, { useState } from "react";
import './App.css';
import ManageOnBoardPage from "./Components/ManageOnboardPage";
import MembersList from "./Components/MembersList";
import axios from "axios";

function App() {
  const url = "https://reqres.in/api/users"

  const [members, setMember] = useState([])


    function handleFormSubmit(member) {
       
      axios({
        method: "post",
        url: url, 
        data: member, 
        headers: {
           'Content-Type': 'application/json'
        }
  
      })
    .then(function (response) {
      const newMember = {...member, id: response.data.id}
      setMember([...members, newMember])
    })
    }

  return (
    <>
      <ManageOnBoardPage  onFormSubmit={handleFormSubmit} />
      {members.map(newMember => (
        <MembersList 
          key={newMember.email} 
          member={newMember}
          />
      ))} 
    </>

  );
}

export default App;