import React from 'react';
import styled from 'styled-components';

import { StyledTitle as Title } from '../shared/Title';

const CategoryCard = ({ name, id, icons }) => {
  return (
    <StyledCard icon={icons[0].url}>
      <StyledTitle as="h3">{name}</StyledTitle>
    </StyledCard>
  );
};

const StyledTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.md};
  text-transform: none;
  padding: 1rem .6rem;
`;

const StyledCard = styled.div`
  height: 5rem;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: .5rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: relative;
    z-index: 0;
    width: 12.5rem;
    height: 12.5rem;
    background: url(${(props) => props.icon}) center;
    background-size: contain;

    ${StyledTitle} {
      position: absolute;
      font-size: ${(props) => props.theme.fontSize.lg};
      padding: 1rem;
      bottom: 0px;
      width: 100%;
      text-align: center;
    }
  }
`;

export default CategoryCard;
