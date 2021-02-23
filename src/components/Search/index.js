import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const StyledSearch = styled.div`
  background-color: ${(props) => props.theme.colors.subDark};
  height: 3.75rem;
  width: 100%;
  position: sticky;
  top: 0;
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchInput />
    </StyledSearch>
  );
};

export default Search;
