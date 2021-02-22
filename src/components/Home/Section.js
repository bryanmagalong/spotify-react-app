import React from 'react';
import styled, { css } from 'styled-components';

import { Title } from '../shared/Title';

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

const Section = ({ title, display, children }) => {
  return (
    <StyledSection display={display}>
      <Title level="2">{title}</Title>
      <StyledLine />
      {children}
    </StyledSection>
  );
};

export default Section;
