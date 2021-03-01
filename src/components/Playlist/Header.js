import React from 'react';
import styled from 'styled-components';

import { TitleStyled } from '../shared/Title';

const StyledImageWrapper = styled.div`
  max-width: 50%;
  height: auto;
  margin-bottom: 1rem;

  & img {
    object-fit: cover;
    width: 100%;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextWrapper = styled.section`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  & p {
    display: none;
  }
`;

const StyledHeaderTitle = styled(TitleStyled)`
  text-transform: capitalize;
`;

const Header = ({ name, image, description, owner, followers }) => {
  return (
    <StyledHeaderWrapper>
      <StyledImageWrapper>
        <img src={image} alt={name} />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledHeaderTitle>{name}</StyledHeaderTitle>
        <p>{description}</p>
        <span>
          par {owner} • {followers} Abonnés
        </span>
      </StyledTextWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
