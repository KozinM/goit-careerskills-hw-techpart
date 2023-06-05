import styles from './style.module.css';
import { ContactForm } from 'components/ContactForm/contactForm';
import Filter from '../ContactFilter/contactFilter';
import ContactList from '../ContactList/contactList';

const Phonebook = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook/Contacts</h1>
      <Filter />
      <ContactList />
      <h2>Add Contact to the Phonebook</h2>
      <ContactForm />
    </div>
  );
};

export default Phonebook;
