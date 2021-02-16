import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`border-radius: .5rem;`;

const ImageCard = styled.div`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;

  & img {
    object-fit: cover;
    width: 100%;
  }
`;

const DescriptionCard = styled.div`
  color: white;
  letter-spacing: .1rem;

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
  }
`;

const Card = ({ name, images, type }) => {
  return (
    <StyledCard>
      <ImageCard>
        <img src={images} alt={name} />
      </ImageCard>
      <DescriptionCard>
        <h3>{name}</h3>
        <span>{type}</span>
      </DescriptionCard>
    </StyledCard>
  );
};

export default Card;
