import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Title } from './Title';

const Section = ({ title, total, length, children, path }) => {
  return (
    <StyledSection total={total}>
      <StyledDiv>
        <Title level="2">{title}</Title>
        <StyledLink total={total} length={length} to={path}>
          Voir tout
        </StyledLink>
      </StyledDiv>
      <StyledLine />
      {children}
    </StyledSection>
  );
};

//===== PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  path: PropTypes.string,
};

//===== Styles
const StyledSection = styled.section.attrs((props) => ({
  display: props.total, // true if list length > 0 else false
}))`
  padding: 1rem 0;
  ${(props) => !props.display && css`display: none;`};
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(178, 178, 178, 0.4);
  margin-top: .8rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: .5rem;
`;

const StyledLink = styled(Link)`
  display: ${(props) => (props.total > props.length ? 'block' : 'none')};
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
