import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return(
        <header className="header">
            <div className="logo">Contacts</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">AllContacts</Link>
                    </li>
                    <li>
                        <Link to="/newcontact">Add Contact</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;