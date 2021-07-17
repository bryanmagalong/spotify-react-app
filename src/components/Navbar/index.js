import React from 'react';
import styled from 'styled-components';
import { HouseDoor, Folder2Open, Person } from 'react-bootstrap-icons';

import NavLink from './NavLink';
import Wrapper from '../shared/Wrapper';
import PlaylistsList from './PlaylistsList';
import Player from '../Player';

const Navbar = () => {
  return (
    <NavWrapper flex column>
      <StyledNavbar>
        <NavLinkList>
          <NavLink name="Accueil" to="/">
            <HouseDoor size="26" />
          </NavLink>
          <NavLink name="Parcourir" to="/browse">
            <Folder2Open size="26" />
          </NavLink>
          <NavLink name="Profil" to="/me">
            <Person size="26" />
          </NavLink>
          <PlaylistsTitle>playlists</PlaylistsTitle>
          <PlaylistsList />
        </NavLinkList>
      </StyledNavbar>
      <Player />
    </NavWrapper>
  );
};

//===== Styles
const StyledNavbar = styled.nav`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  order: 1;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    order: 0;
    height: 70%;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

const NavLinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 .5rem;
  }
`;

const NavWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.subDark};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: sticky;
    top: 0px;
    max-width: 14.5rem;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.subDark};
    justify-content: space-between;
  };
`;

const PlaylistsTitle = styled.span`
  display: none;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: block;
    color: ${(props) => props.theme.colors.gray};
    font-size: ${(props) => props.theme.fontSize.sm};
    text-transform: uppercase;
    letter-spacing: .1rem;
    padding: 0 1rem;
    padding-top: 1.5rem;
  }
`;

export default Navbar;
