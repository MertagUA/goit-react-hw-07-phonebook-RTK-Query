import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Div, Frame, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/Slices/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/Slices/contactsSlice';
import { NoContacts } from './NoContacts/NoContacts';

export function App() {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const dispatch = useDispatch();

  const onContactFormSubmit = async (newContact, { resetForm }) => {
    try {
      const alreadyExist = contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
      if (alreadyExist) {
        resetForm();
        return alert(`${newContact.name} is already in contacts`);
      }

      await addContact(newContact);
      toast.success(`New contact ${newContact.name} created!`);
    } catch (error) {
      toast.error('Error!');
    }
    resetForm();
  };

  const filterContacts = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <>
      <Frame>
        <Div>
          <Title>Phonebook</Title>
          <ContactForm onContactFormSubmit={onContactFormSubmit} />
          <h2>Contacts</h2>
          <Filter OnChange={filterContacts} />
          {error ? (
            <NoContacts />
          ) : (
            !isLoading && <ContactList contacts={contacts} />
          )}
        </Div>
      </Frame>
      <ToastContainer />
    </>
  );
}
