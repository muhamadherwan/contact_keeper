import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer'; 

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const  initialState = {
    contacts:[
      { 
        id: 1, 
        name: "Mark Zukerberg",
        email: "zuck@gmail.com",
        phone: "111-111-111",
        types: "personal"
      },
      { 
        id: 2, 
        name: "Sean Parker",
        email: "sean@gmail.com",
        phone: "222-222-222",
        types: "professional"
      },
      { 
        id: 3, 
        name: "Dustin Mazkovitz",
        email: "dustin@gmail.com",
        phone: "333-333-333",
        types: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  
  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Comtact
  
  // Update Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

