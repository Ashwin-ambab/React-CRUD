import React, { useRef, useState} from "react";

import './ContactForm.css'

const EditForm = (props) => {
    const idInputRef = useRef(null);
    const usernameInputRef = useRef('');
    const lastnameInputRef = useRef('');
    const emailInputRef = useRef('');
    const numberInputRef = useRef('');

    // const[id,setId] = useState(null);
    // const[username,setUsername] = useState('');
    // const[lastname,setLastname] = useState('');
    // const[email,setEmail] = useState('');
    // const[number,setNumber] = useState('');

  
  const onFormHandler = (e) => {
      e.preventDefault();

      const enteredId = idInputRef.current.value;
      const enteredUsername = usernameInputRef.current.value;
      const enteredLastname = lastnameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredNumber = numberInputRef.current.value;

      const editData = {
          id: enteredId,
          username: enteredUsername,
          lastname: enteredLastname,
          email: enteredEmail,
          number: enteredNumber,
      }
      props.editContact(editData);
      // props.editContact(contactsData);
      console.log(editData);
  };

  return (
    <form className="form" onSubmit={onFormHandler}>
        <div className="control">
          <label htmlFor="name" >
            UserName
          </label>
          <input type="text" id="name" value={usernameInputRef}  ref={usernameInputRef} 
           />
        </div>
        <div className="control">
          <label htmlFor="name" >
            LastName
          </label>
          <input type="text" id="name" value={lastnameInputRef} ref={lastnameInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="gmail" >
            Email
          </label>
          <input type="email" id="gmail" value={emailInputRef} ref={emailInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="number" >
            Phone Number
          </label>
          <input type="number" id="number" value={numberInputRef} ref={numberInputRef}/>
        </div>
        <div className="actions">
      <button type="submit">update</button>
      </div>
    </form>
  );
};

export default EditForm;
