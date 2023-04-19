import { useDeleteContactMutation } from 'redux/Slices/contactsSlice';
import { Item, Div, ContactName, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Spinner } from 'utils/spinner';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item>
      <Div />
      <ContactName>{name}</ContactName>
      <p>{phone}</p>
      <DeleteButton
        type="button"
        onClick={() => {
          deleteContact(id);
          toast.success(`Contact ${name} deleted!`);
        }}
      >
        Delete {isLoading && <Spinner />}
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
