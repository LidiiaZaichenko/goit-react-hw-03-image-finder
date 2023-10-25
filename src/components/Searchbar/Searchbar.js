import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchbarStyled,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // if (!this.state.query.trim()) {
    //   return;
    // }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div>
        <SearchbarStyled>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <AiOutlineSearch size={32} />
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </SearchForm>
        </SearchbarStyled>
      </div>
    );
  }
}
