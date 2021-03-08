import React from 'react';
import styled from 'styled-components';

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  padding: 1rem 0;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    gap: 2rem;
  }
`;

export default List;
