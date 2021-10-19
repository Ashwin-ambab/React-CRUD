import axios from "axios";
import React,{ useState} from "react";
import { useHistory } from "react-router-dom";
import ContactForm from "./ContactForm";

const NewContacts = (props) => {
  const history = useHistory();
    // const[username,setUsername] = useState('');
    // const[lastname,setLastname] = useState('');
    // const[email,setEmail] = useState('');
    // const[number,setNumber] = useState('');


  const onAddContactHandler = (contactData) => {
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push('/');
    });
    // console.log(contactData);
  };

  // const onFormHandler = () => {
  //     axios.post("http://localhost:3001/contacts",{
        
  //     })
  // };

  return (
    <div>
      <ContactForm addContact={onAddContactHandler} />
    </div>
  );
};

export default NewContacts;
