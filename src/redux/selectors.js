export const selectContacts = ({contacts})=> contacts;
export const selectFilter = ({filter}) => filter;


export const selectFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };