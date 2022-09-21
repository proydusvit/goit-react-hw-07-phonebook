import style from 'components/Filter/filter.module.css'
import PropTypes from 'prop-types';
export default function ContactList({ items, removeContacts }) {
    console.log(items);
    const elem = items.map(({ name, number, id }) => {
        return <li key={id}> {name} , {number} <button className={style.btn} onClick={() => removeContacts(id)}>delete</button></li>
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