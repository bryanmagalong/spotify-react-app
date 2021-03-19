import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Title } from './Title';

const Section = ({ title, display, children, path }) => {
  // const slug = title.split(' ').join('-');

  return (
    <StyledSection display={display}>
      <StyledDiv>
        <Title level="2">{title}</Title>
        <StyledLink extend={display} to={path}>
          Voir tout
        </StyledLink>
      </StyledDiv>
      <StyledLine />
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section.attrs((props) => ({
  display: props.display, // true if list length > 0 else false
}))`
  padding: 1rem 0;
  ${(props) => !props.display && css`display: none;`};
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray};
  margin-top: .8rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: .5rem;
`;

const StyledLink = styled(Link)`
  display: ${(props) => (props.extend > 6 ? 'block' : 'none')};
  align-self: flex-end;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.sm};
  letter-spacing: .1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Section;
