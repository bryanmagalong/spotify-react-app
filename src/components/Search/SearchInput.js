import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import { searchOnChange } from '../../features/search/searchActions';

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

const SearchInput = () => {
  // TODO: form/input verification
  const inputValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('Submit event');
    e.preventDefault();
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
          console.log(e.target.value);
        }}
      />
    </StyledForm>
  );
};

export default SearchInput;
