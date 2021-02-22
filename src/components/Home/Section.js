import React from 'react';
import styled from 'styled-components';

import { Title } from '../shared/Title';

const StyledSection = styled.section`padding: 1rem 0;`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray};
  margin-top: .8rem;
`;

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title level="2">{title}</Title>
      <StyledLine />
      {children}
    </StyledSection>
  );
};

export default Section;
