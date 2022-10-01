import { useState, useEffect } from 'react'
import ContactList from "./ContactList/contactlist";
import Phonebook from "./Phonebook/phonebook";
import { nanoid } from 'nanoid';
 import { FilterContacts } from "./Filter/filter";

function  App() {
  const [contacts, setConstacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts'))
      ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
 
  const addContacts = (data) => {
   
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts.`)
    }
 
    const newContact = {
      id: nanoid(),
      ...data
    }
   setConstacts((prev) => ([...prev, newContact]))
  
  }
  const removeContacts = (id) => {
    setConstacts((prev) => {
      const newContacts = prev.filter((item) => item.id !== id);

      return newContacts
    })
    if (conFilter.length === 1) {
            
      setFilter('');
    }
  }
  const isDublicate = (name, number) => {
 
    const result = contacts.find((item) => item.name === name && item.number === number);
    return result;
  }
  
  
  const filterContact = () => {
    if (!filter) {
      return contacts;
    }

    const normalized = filter.toLocaleLowerCase();
    const filterContact = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalized) || normalizedNumber.includes(normalized)
      return result
    })
    return filterContact
  }
  
  const conFilter = filterContact();

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value)
  }
    
  return (<div
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
    <FilterContacts handleChange={handleChange} filter={filter} />
    <ContactList items={contacts} removeContacts={removeContacts} />
        
  </div>)
}
export default App;