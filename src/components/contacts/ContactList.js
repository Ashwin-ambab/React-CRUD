import React from 'react';
import ContactItems from './ContactItems';

import './ContactList.css';

const ContactList = (props) => {
    return(
        <div className='list'>
            {props.contacts.map((contact,index) =>(
              <ContactItems
              key={contact.id}
                id = {index+1}
                username={contact.username}
                lastname={contact.lastname}
                email={contact.email}
                number={contact.number}
              />
            ))}
        </div>
    );
};

export default ContactList;