import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items:center;
  color: ${(props) => props.theme.colors.gray};

  &.selected, &:hover{
    color: #FFF;
  }
`;

const LinkName = styled.span`
  font-weight: bold;
  letter-spacing: .1rem;
`;

const MyNavLink = ({ to, name, children }) => {
  return (
    <li>
      <StyledNavLink to={to} activeClassName="selected">
        {children}
        <LinkName>{name}</LinkName>
      </StyledNavLink>
    </li>
  );
};

export default MyNavLink;
