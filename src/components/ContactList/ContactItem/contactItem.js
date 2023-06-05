import PropTypes from 'prop-types';
import styles from './style.module.css';

// redux's hook import
import { useDispatch } from "react-redux";


import { deleteContact } from 'redux/operations';

const ContactItem = ({id, name, number}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
            return (
              <li className={styles.listItem} id={id}>
                <span>{name}: </span>
                <span>{number}</span>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </li>
            );
          }

ContactItem.propTypes = {

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;