import React from 'react';
import styled from 'styled-components';

import { TitleStyled } from '../shared/Title';
import ImageWrapper from '../shared/ImageWrapper';

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
      <ImageWrapper src={image} alt={name} />
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
