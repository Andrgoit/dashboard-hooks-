import { StyledInput, StyledForm } from './SearchForm.styled';

const SearchForm = ({ filter, onChange }) => {
  return (
    <StyledForm action="#">
      <StyledInput
        onChange={onChange}
        value={filter}
        name="filter"
        type="text"
      />
    </StyledForm>
  );
};

export default SearchForm;
