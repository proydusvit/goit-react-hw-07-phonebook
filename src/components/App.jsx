
import ContactList from "./ContactList/contactlist";
import Phonebook from "./Phonebook/phonebook";
 import { FilterContacts } from "./Filter/filter";

import { selectIsLoading } from "redux/selectors";
import { selectError } from "redux/selectors";
 import { useSelector } from "react-redux";


function  App() {

const isLoading = useSelector(selectIsLoading );
const error = useSelector(selectError);

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
        
    <Phonebook/>
    <FilterContacts/>
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList/>
        
  </div>)
}
export default App;