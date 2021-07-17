import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyNavLink = ({ to, name, children }) => {
  return (
    <LinkItem>
      <StyledNavLink to={to} activeClassName="selected" exact>
        {children}
        <LinkName>{name}</LinkName>
      </StyledNavLink>
    </LinkItem>
  );
};
//===== PropTypes
MyNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
};

//===== Styles
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items:center;
  color: ${(props) => props.theme.colors.gray};

  &.selected, &:hover{
    color: #FFF;
  }
  
  @media (min-width: ${(props) => props.theme.media.lg}) {
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    padding: .4rem 1rem;

    &.selected{
      background-color: ${(props) => props.theme.colors.subLight};
      border-radius: .2rem;
    }
  }
`;

const LinkName = styled.span`
  font-weight: bold;
  letter-spacing: .1rem;
  font-size: ${(props) => props.theme.fontSize.md};
`;

const LinkItem = styled.li`width: 100%;`;

export default MyNavLink;
