import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledTitle as Title } from '../shared/Title';

const CategoryCard = ({ name, id, icons }) => {
  const categoryLink = `/browse/categories/${id}/playlists`;

  return (
    <StyledCard as={Link} to={categoryLink} icon={icons[0].url}>
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
  background: linear-gradient(160deg, rgba(0, 0, 0, 0.5), transparent)
    ${(props) => props.theme.colors.green};
  border-radius: .5rem;

  &:hover {
    ${StyledTitle} {
      text-decoration: underline;
    }
  }
  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: relative;
    z-index: 0;
    width: 12.5rem;
    height: 12.5rem;
    background: url(${(props) => props.icon}) center;
    background-size: contain;
    border-radius: 0;

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
