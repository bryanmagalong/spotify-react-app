import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ImageWrapper from './ImageWrapper';

const Card = ({ name, images, type, album, id, owner }) => {
  const path = `/${type}s/${id}`;

  return (
    <article>
      <StyledCard to={path}>
        <ImageCard type={type} src={images} alt={name} maxWidth="100%" />
        <DescriptionCard type={type}>
          <h3>{name}</h3>
          <span>{type === 'track' ? album : `par ${owner.display_name}`}</span>
        </DescriptionCard>
      </StyledCard>
    </article>
  );
};

const ImageCard = styled(ImageWrapper)`
  ${(props) =>
    props.type === 'artist' &&
    css`
      & img {
        border-radius: 100%;
      }
    `};
`;

const DescriptionCard = styled.div`
  color: white;
  letter-spacing: .1rem;

  ${(props) => props.type === 'artist' && css`text-align: center;`};

  & h3 {
    margin-bottom: .5rem;
    min-width: 128px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
  }

  & span {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.gray};
  }
`;

const StyledCard = styled(Link)`
  color: #FFF;
  &:hover {
    & h3 {
      text-decoration: underline; 
    }

    & img {
      transition: all ease-in-out .3s;
      box-shadow: 0px 0px 30px 0px rgba(178, 178, 178, 0.2);
    }
  }
`;

export default Card;
