import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContacts } from 'redux/operations';

import styles from './style.module.css';
import ContactItem from './ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';


const ContactList = () => {

  const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(selectContacts);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p><strong>We've got this error: </strong>{error}</p>}
      {items.length>0 && <ul className={styles.contactsList}>
        {getVisibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem 
             key={id}
             id={id}
             name={name} 
             number={number}
             />
          );
        })}
      </ul>
      }
      
    </div>
  );
};

export default ContactList;