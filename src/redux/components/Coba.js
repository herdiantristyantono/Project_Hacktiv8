import React, { Component } from 'react';
import ContactList from '../containers/contact-list'
import ContactDetail from '../containers/contact-detail'

export default class Coba extends Component {
  render() {
    return (
      <div className="page" style={{maxWidth:"auto",marginLeft:"500px"}}>
      	<ContactDetail />
        <ContactList />
      	
      </div>
    );
  }
}
