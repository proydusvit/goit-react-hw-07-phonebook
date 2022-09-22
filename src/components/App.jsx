import React, { Component } from "react";
import ContactList from "./ContactList/contactlist";
import Phonebook from "./Phonebook/phonebook";
import { nanoid } from 'nanoid';
 import { FilterContacts } from "./Filter/filter";
class App extends Component {
     state = {
       contacts: [],
       filter: '',
      
     }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    console.log("contacts", contacts);
    if (contacts?.length) {
      this.setState({
        contacts,
      })
    }

  }
  componentDidUpdate(prevProps, prevState) {
    
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
       localStorage.setItem("contacts", JSON.stringify(contacts))
    }
   
  }
  addContacts = (data) => {
    if (this.isDublicate(data)) {
     return alert (`${data.name} is already in contacts.`)
   }
   this.setState((prev) => {
     const newContact = {
       id: nanoid(),
       ...data
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
  })
 }
   removeContacts = (id) => {
    this.setState(( prev ) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);

      return {
        contacts: newContacts
      }
    }
    )
   }
  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find((item) => item.name === name && item.number === number);
    return result;
  }
  
  
  filterContact() {
    const { contacts, filter } = this.state
    if (!filter) {
      return contacts;
    }

    const normalized = filter.toLocaleLowerCase();
    const filterContact = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalized) || normalizedNumber.includes(normalized) 
      return result
    } )
return filterContact
  }

 handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    
    })
 }
  
  render() {
    const { addContacts,handleChange,removeContacts } = this;
    const { filter } = this.state;
    const contacts = this.filterContact()
    return <div
       style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      
      <Phonebook onSubmit={addContacts} />
      <FilterContacts  handleChange={handleChange} filter={filter} /> 
      <ContactList items={contacts} removeContacts={removeContacts} />
        
    </div>
    }

};
export default App;