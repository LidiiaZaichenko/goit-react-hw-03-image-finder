import {
  SearchForm,
  SearchFormButton,
  SearchbarStyled,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <SearchbarStyled>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            onChange={evt => onSubmit(evt.target.value)}
          />
        </SearchForm>
      </SearchbarStyled>
    </div>
  );
};
