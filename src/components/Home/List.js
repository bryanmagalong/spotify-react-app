import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 1rem 0;

  @media (min-width: ${(props) => props.theme.media.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${(props) => props.theme.media.xl}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
