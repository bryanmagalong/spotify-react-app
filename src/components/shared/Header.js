import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { usePalette } from "react-palette";

import { StyledTitle } from "./Title";
import ImageWrapper from "./ImageWrapper";
import Wrapper from "./Wrapper";
import CustomLink from "./CustomLink";
import LogoutButton from "../User/LougoutButton";

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
  nPlaylists,
  pb,
}) => {
  const headerType = album_type
    ? album_type
    : type === "user"
    ? "profil"
    : type;
  const meta = album_type
    ? `${release_year} • ${total_tracks} titre${total_tracks > 1 ? "s" : ""}`
    : type === "user"
    ? `${nPlaylists} playlists publiques • ${followers} Abonnés`
    : `${followers} Abonnés`;

  const { data } = usePalette(image);

  return (
    <StyledHeaderWrapper
      pb
      as="section"
      flex
      column
      itemsCenter
      color={data.vibrant}
      px
      pt
    >
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
            par <CustomLink href={ownerUrl}>{owner}</CustomLink> •{" "}
          </StyledOwner>
          {meta}
        </StyledMeta>
      </StyledTextWrapper>
      {type === "user" && (
        <ButtonWrapper flex>
          <LogoutButton />
        </ButtonWrapper>
      )}
    </StyledHeaderWrapper>
  );
};

//===== PropTypes
Header.defaultProps = {
  name: "chargement...",
  image:
    "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png",
  type: "album",
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["user", "album", "playlist"]).isRequired,
  description: PropTypes.string,
  owner: PropTypes.string,
  ownerUrl: PropTypes.string,
  followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  album_type: PropTypes.string,
  total_tracks: PropTypes.number,
  release_year: PropTypes.string,
  nPlaylists: PropTypes.number,
  pb: PropTypes.string,
};

//===== Styles
const StyledOwner = styled.span`
  display: ${(props) => props.type === "user" && "none"};
`;

const StyledHeaderWrapper = styled(Wrapper)`
  row-gap: 1rem;
  padding-bottom: ${(props) => props.pb && "2rem"};

  background: linear-gradient(0deg, rgba(21, 21, 21, 1), transparent)
    ${(props) => (props.color ? props.color : props.theme.colors.main)};

  @media (min-width: ${(props) => props.theme.media.md}) {
    height: 18rem;
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

const ButtonWrapper = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.media.lg}) {
    flex-grow: 1;
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
    font-size: 2.14em;
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

  @media (min-width: ${(props) => props.theme.media.md}) {
    text-align: left;
  }
`;

export default Header;
