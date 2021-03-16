import React from 'react';
import styled from 'styled-components';

import { StyledTitle } from './Title';
import ImageWrapper from './ImageWrapper';
import Wrapper from './Wrapper';
import CustomLink from './CustomLink';

const Header = ({
  name,
  image,
  description,
  owner,
  ownerUrl,
  followers,
  type,
  album_type,
  total_tracks,
  release_year,
}) => {
  const headerType = album_type
    ? album_type
    : type === 'user' ? 'profil' : type;
  const meta = album_type
    ? `${release_year} • ${total_tracks} titre${total_tracks > 1 ? 's' : ''}`
    : type === 'user'
      ? `# playlists publiques • ${followers} Abonnés`
      : `${followers} Abonnés`;

  return (
    <StyledHeaderWrapper as="section" flex column itemsCenter>
      <ImageWrapper
        type={type}
        marginBottom="0"
        maxWidth="192px"
        maxHeight="192px"
        size="192"
        boxShadow
        src={image}
        alt={name}
      />
      <StyledTextWrapper as="section" flex column itemsCenter>
        <StyledType>{headerType}</StyledType>
        <StyledHeaderTitle>{name}</StyledHeaderTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledMeta>
          <StyledOwner type={type}>
            par <CustomLink href={ownerUrl}>{owner}</CustomLink> •{' '}
          </StyledOwner>
          {meta}
        </StyledMeta>
      </StyledTextWrapper>
    </StyledHeaderWrapper>
  );
};
const StyledOwner = styled.span`
  display: ${(props) => props.type === 'user' && 'none'};
`;

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

const StyledType = styled.span`
  display: none;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.media.md}) {
    display: inline;
  }
`;

const StyledHeaderTitle = styled(StyledTitle)`
  text-transform: capitalize;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media.md}) {
    font-size: 2.3em;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.media.xl}) {
    font-size: ${(props) => props.theme.fontSize.xxl};
  }
`;

const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  display: none;

  @media (min-width: ${(props) => props.theme.media.md}) {
    display: block;
  }
`;

const StyledMeta = styled.p`
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 3px;
  text-align: center;

  ${CustomLink} {
    color: #fff;
    font-weight: bold;
  }
`;

export default Header;
