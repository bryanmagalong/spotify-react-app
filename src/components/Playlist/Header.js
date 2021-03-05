import React from 'react';
import styled from 'styled-components';

import { TitleStyled } from '../shared/Title';
import ImageWrapper from '../shared/ImageWrapper';
import Wrapper from '../shared/Wrapper';

const StyledHeaderWrapper = styled(Wrapper)`
  row-gap: 1rem;

  @media (min-width: ${(props) => props.theme.media.md}) {
    height: 15rem;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 2rem;
  }
`;

const StyledTextWrapper = styled(Wrapper)`
  color: #fff;
  height: inherit;
  row-gap: 1rem;

  @media (min-width: ${(props) => props.theme.media.md}) {
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  display: none;

  @media (min-width: ${(props) => props.theme.media.md}) {
    display: block;
  }
`;

const StyledType = styled.span`
  display: none;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.media.md}) {
    display: inline;
  }
`;

const StyledHeaderTitle = styled(TitleStyled)`
  text-transform: capitalize;

  @media (min-width: ${(props) => props.theme.media.md}) {
    font-size: 3em;
  }

  @media (min-width: ${(props) => props.theme.media.xl}) {
    font-size: ${(props) => props.theme.fontSize.xxl};
  }
`;

const Header = ({ name, image, description, owner, followers, type }) => {
  return (
    <StyledHeaderWrapper flex column itemsCenter>
      <ImageWrapper
        marginBottom="0"
        maxWidth="192px"
        maxHeight="192px"
        src={image}
        alt={name}
      />
      <StyledTextWrapper as="section" flex column itemsCenter>
        <StyledType>{type}</StyledType>
        <StyledHeaderTitle>{name}</StyledHeaderTitle>
        <StyledDescription>{description}</StyledDescription>
        <span>
          par {owner} • {followers} Abonnés
        </span>
      </StyledTextWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
