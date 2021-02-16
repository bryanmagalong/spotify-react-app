import React from 'react';
import styled from 'styled-components';

import { Title } from '../shared/Title';

const StyledSection = styled.section`padding: 1rem 0;`;

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title level="2">{title}</Title>
      {children}
    </StyledSection>
  );
};

export default Section;
