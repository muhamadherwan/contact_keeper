import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer'; 
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
  conts initialState = {
    contact: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Mark Zuckerberg',
        email: 'zuck@gmail.com',
        phone: '999-111-1111',
        type: 'professional'
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
    <ContactContext.Provider>
      value={{
        contacts: state.contacts
      }}
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

