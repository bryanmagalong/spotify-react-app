import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ImageWrapper from './ImageWrapper';

const Card = ({ name, images, type, id, owner }) => {
  const path = `/${type}s/${id}`;
  const meta =
    type === 'artist'
        ? 'Artiste'
        : `par ${owner.display_name ?? owner}`;

  return (
    <article>
      <StyledCard to={path}>
        <ImageWrapper type={type} src={images} alt={name} maxWidth="100%" maxHeight="70%"/>
        <DescriptionCard type={type}>
          <h3>{name}</h3>
          <span>{meta}</span>
        </DescriptionCard>
      </StyledCard>
    </article>
  );
};

//===== PropTypes
Card.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['track', 'artist', 'album', 'playlist']).isRequired,
  id: PropTypes.string.isRequired,
  owner: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.object,
  ]),
} 
//===== Styles
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
    overflow-wrap: break-word;
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
