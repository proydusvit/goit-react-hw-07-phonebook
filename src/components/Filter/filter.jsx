

import style from 'components/Filter/filter.module.css'

import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { selectFilter } from "redux/selectors";
import { setFilter } from 'redux/filter/filter-slice';


export function FilterContacts() {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();    
  const filterId = nanoid();
  
const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  }

  return (
  <div className={style.box}>
    
      
    <label htmlFor={filterId}>
      <p>Find contacts by name </p>

      <input type="text" id={filterId} name="filter" onChange={handleChange} value={filter} /> 
      </label>
   
     
 </div>)
};

