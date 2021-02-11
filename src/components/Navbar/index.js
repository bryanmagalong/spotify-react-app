import React from 'react';
import styled from 'styled-components';
import { HouseDoor, Folder2Open, Person } from 'react-bootstrap-icons';

import NavLink from './NavLink';
import Wrapper from '../shared/Wrapper';
import Player from './Player';

const StyledNavbar = styled.nav`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  order: 1;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    order: 0;
    height: 75%;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

const NavLinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
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
  height: 10rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: sticky;
    top: 0px;
    max-width: 14.5rem;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.subDark};
  };
`;

const Navbar = () => {
  return (
    <NavWrapper flex column>
      <StyledNavbar>
        <NavLinkList>
          <NavLink name="Accueil" to="/">
            <HouseDoor size="30" />
          </NavLink>
          <NavLink name="Parcourir" to="/browse">
            <Folder2Open size="30" />
          </NavLink>
          <NavLink name="Profil" to="/profile">
            <Person size="30" />
          </NavLink>
        </NavLinkList>
      </StyledNavbar>
      <Player />
    </NavWrapper>
  );
};

export default Navbar;
