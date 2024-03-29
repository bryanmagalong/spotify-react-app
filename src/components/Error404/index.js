import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import { StyledTitle } from '../shared/Title';

const Error404 = () => {
  return (
    <Wrapper pb pt px>
      <Styled404Title>404</Styled404Title>
      <StyledSubtitle>
        Ooops ! La page que vous recherchez semble introuvable.
      </StyledSubtitle>
      <StyledLink to="/">Revenir à la page d'accueil</StyledLink>
    </Wrapper>
  );
};

//===== Styles
const Styled404Title = styled(StyledTitle)`
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: .2rem;
  font-size: 6rem;
`;

const StyledSubtitle = styled.p`
  color: #fff;
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export default Error404;
