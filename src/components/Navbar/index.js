import React from 'react';
import styled from 'styled-components';
import { HouseDoor, Folder2Open, Person } from 'react-bootstrap-icons';

import NavLink from './NavLink';

const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.colors.subLight};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
`;

const NavLinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
`;

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
