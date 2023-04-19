import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/Slices/filterSlice';
import { useSelector } from 'react-redux';
import { NoContacts } from 'components/NoContacts/NoContacts';

export const ContactList = ({ contacts }) => {
  const filterValue = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  let noContacts = false;

  if (filteredContacts.length === 0) {
    noContacts = true;
  }

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
      {noContacts && <NoContacts />}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
