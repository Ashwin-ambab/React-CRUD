import React, { useRef} from "react";

import './ContactForm.css'

const ContactForm = (props) => {
    const usernameInputRef = useRef();
    const lastnameInputRef = useRef();
    const emailInputRef = useRef();
    const numberInputRef = useRef();

  
  const onFormHandler = (e) => {
      e.preventDefault();
      
      const enteredUsername = usernameInputRef.current.value;
      const enteredLastname = lastnameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredNumber = numberInputRef.current.value;

      const contactsData = {
          username: enteredUsername,
          lastname: enteredLastname,
          email: enteredEmail,
          number: enteredNumber,
      }
      props.addContact(contactsData);
      // console.log(contactsData);
  };

  return (
    <div className="main-controls">
    <h1 className="form-header">Add a Contact</h1>
    <form className="form" onSubmit={onFormHandler}>
        <div className="control">
          <label htmlFor="name" >
            UserName
          </label>
          <input type="text" id="name" ref={usernameInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="name" >
            LastName
          </label>
          <input type="text" id="name" ref={lastnameInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="gmail" >
            Email
          </label>
          <input type="email" id="gmail" ref={emailInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="number" >
            Phone Number
          </label>
          <input type="number" id="number" ref={numberInputRef}/>
        </div>
        <div className="actions">
      <button>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
