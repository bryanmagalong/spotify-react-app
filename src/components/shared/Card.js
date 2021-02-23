import React from 'react';
import styled, { css } from 'styled-components';

const ImageCard = styled.div`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;

  & img {
    object-fit: cover;
    width: 100%;
  }

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
    font-weight: bold;
    margin-bottom: .5rem;
    min-width: 166px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & span {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.gray};
    text-transform: capitalize;
  }
`;

const Card = ({ name, images, type, album }) => {
  return (
    <article>
      <ImageCard type={type}>
        <img src={images} alt={name} />
      </ImageCard>
      <DescriptionCard type={type}>
        <h3>{name}</h3>
        <span>{type === 'track' ? album : type}</span>
      </DescriptionCard>
    </article>
  );
};

export default Card;
