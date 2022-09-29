import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';

import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import PhoneBookButton from './PhoneBookButton/PhoneBookButton';
import Filter from './Filter/Filter';

// localization
import { useContext } from 'react';
import { langContext } from 'LangContext';
import locale from 'components/PhoneBook/local.json';
const { phone_title, search_title, contacts_title } = locale;
//end localization

const KEY = 'contacts';

const defaultContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY)) ?? defaultContact;
  });
  const [filter, setFilter] = useState('');
  const [isOpenPhoneBook, setIsOpenPhoneBook] = useState(true);

  const { lang } = useContext(langContext);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const togglePhoneBookButton = () => {
    setIsOpenPhoneBook(!isOpenPhoneBook);
  };

  const addContacts = data => {
    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForDublicate) {
      return toast.info(`${data.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const searchContact = event => {
    const { value } = event.target;

    setFilter(value);
  };

  let normalizeFilter = filter.toLowerCase();

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return (
    <>
      <PhoneBookButton
        isOpen={isOpenPhoneBook}
        onClick={togglePhoneBookButton}
      />
      {isOpenPhoneBook && (
        <Box
          p={2}
          textAlign="center"
          borderRadius="6px"
          minHeight="240px"
          bg="phoneBook.bgContainer"
        >
          <PhoneBookSection title={phone_title[lang]}>
            <ContactForm onSubmit={addContacts} />
          </PhoneBookSection>
          {contacts.length >= 1 && (
            <>
              <PhoneBookSection title={search_title[lang]}>
                <Filter onChange={searchContact} filter={filter} />
              </PhoneBookSection>
              <PhoneBookSection title={contacts_title[lang]}>
                <Contacts
                  contacts={filteredContacts}
                  onClick={deleteContacts}
                />
              </PhoneBookSection>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default PhoneBook;
