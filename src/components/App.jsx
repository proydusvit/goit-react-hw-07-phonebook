
import ContactList from "./ContactList/contactlist";
import Phonebook from "./Phonebook/phonebook";
 import { FilterContacts } from "./Filter/filter";
 import { useSelector } from "react-redux";
 
 import { getFilter } from 'redux/filter/filter-selectors';
 import { useDispatch } from "react-redux";
 import { addContacts,removeContacts } from "redux/contacts/contacts-slice";
 import { setFilter } from "redux/filter/filter-slice";
 import { getContacts} from "redux/contacts/contacts-selectors";


function  App() {
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const dispatch = useDispatch();

  const onAddContacts = (data) => {
   
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts.`)
    }
 
    const action = addContacts(data);
    dispatch(action);
  
  }
  const onRemoveContacts = (id) => {
    const action = removeContacts(id);
    dispatch(action);
  }
  const isDublicate = ({name, number}) => {
 
    const result = contacts.find(item => item.name === name && item.number === number);
    return result;
  }
  
 
  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  }
  const filterContact = ( ) => {
   
     if (!filter) {
       return contacts;
     }
   
     const normalized = filter.toLocaleLowerCase();
     const filterContacts = contacts.filter(({ name, number }) => {
       const normalizedName = name.toLocaleLowerCase();
       const normalizedNumber = number.toLocaleLowerCase();
       const result = normalizedName.includes(normalized) || normalizedNumber.includes(normalized)
       return result
     })
     return filterContacts
   }
  const contactFilter = filterContact();
  

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
        
    <Phonebook onSubmit={onAddContacts}/>
    <FilterContacts handleChange={handleChange} filters={filter} />
    <ContactList items={contactFilter} removeContacts={onRemoveContacts} />
        
  </div>)
}
export default App;