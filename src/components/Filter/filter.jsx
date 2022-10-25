
import style from 'components/Filter/filter.module.css'
import PropTypes from 'prop-types';
export const FilterContacts = ({ filters, handleChange }) => (
     
  <div className={style.box}>
    
       <p> Find contacts by name</p>  
   <label htmlFor="">

 <input type="text" name="filter" onChange={handleChange} value={filters}/> 
      </label>
     
 </div>
);

FilterContacts.prototype = {
  filter: PropTypes.string.isRequired,
 handleChange: PropTypes.func.isRequired,
}