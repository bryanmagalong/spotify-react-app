import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <StyledSearch>
      <SearchInput />
    </StyledSearch>
  );
};

//===== Styles
const StyledSearch = styled.div`
  background-color: ${(props) => props.theme.colors.subDark};
  height: 3.75rem;
  width: 100%;
  position: sticky;
  top: 0;
  padding: .5rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding-left: 2rem;
    z-index: 2;
  }
`;

export default Search;
