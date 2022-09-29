import { StyledButton } from './PhoneBookButton.styled';
import { useContext } from 'react';
import { langContext } from 'LangContext';
import locale from 'components/PhoneBook/local.json';

const { phone_title } = locale;

const PhoneBookButton = ({ onClick }) => {
  const { lang } = useContext(langContext);

  return <StyledButton onClick={onClick}>{phone_title[lang]}</StyledButton>;
};
export default PhoneBookButton;
