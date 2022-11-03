import style from 'components/Filter/filter.module.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';
import { deleteContact} from 'redux/services/services';
// import { selectContacts } from 'redux/selectors';
import { selectFilterdContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/services/services';
import { useEffect } from 'react';


export default function ContactList() {
    // const { isLoading } = useSelector(selectContacts);
    const dispatch = useDispatch();  
    const contacts = useSelector(selectFilterdContacts);

      useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
      


    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
        if (contacts.length === 1) {
            dispatch(setFilter(""));
            
         alert('No more contacts matching the filter.');
       }   
     }  
    


    const elem = contacts.map(({ name, phone , id}) => {
        return <li key={id}> {name} , {phone} <button className={style.btn} onClick={() => removeContact(id)}>delete</button> </li>
    })
    return (
        <div className={style.box}>
            <h2>Contacts</h2>
            <ol>{elem}</ol>

        </div>
    )

    }

ContactList.prototype = {
     items: PropTypes.arrayOf(
         PropTypes.shape({
             id: PropTypes.string.isRequired,
             number: PropTypes.string.isRequired,
             name: PropTypes.string.isRequired,
             
        })).isRequired

}