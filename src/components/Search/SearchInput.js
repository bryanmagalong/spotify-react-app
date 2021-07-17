import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { searchOnChange } from '../../features/search/searchActions';

const SearchInput = () => {
  const inputValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove whitespaces at the beginning and at the end of the string
    const input = e.target[1].value.trim();
    if (input !== '') history.push(`/search/${input}`);
  };

  return (
    <StyledForm role="search" id="searchForm" onSubmit={handleSubmit}>
      <StyledSearchButton type="submit">
        <Search />
      </StyledSearchButton>
      <StyledSearchInput
        aria-label="Rechercher un artiste, un titre ou un album"
        type="text"
        value={inputValue}
        placeholder="Artistes, titres ou albums"
        onChange={(e) => {
          dispatch(searchOnChange(e.target.value));
        }}
      />
    </StyledForm>
  );
};

//===== Styles
const StyledSearchInput = styled.input`
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 0 .4rem .4rem 0;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    width: 60%;
  }
`;

const StyledForm = styled.form`
  height: 100%;
  display: flex;
`;

const StyledSearchButton = styled.button`
  background-color: white;
  padding: 0 .6rem;
  font-size: 1em;
  border-radius: .4rem 0 0 .4rem;
  border: none;
`;

export default SearchInput;
