import React from 'react';
import styled from 'styled-components';

import { TitleStyled } from '../shared/Title';
import Wrapper from '../shared/Wrapper';
import Button from '../shared/Button';

const LoginTitle = styled(TitleStyled)`
  text-align: center;
  font-size: 2.5em;

  @media(min-width: ${(props) => props.theme.media.md}){
    font-size: 5.625em;
  }
`;

const LoginWrapper = styled(Wrapper)`
  min-height: inherit;
  justify-content: center;
  align-items: center;
  row-gap: 2.5rem;
`;

const Login = () => (
  <LoginWrapper column>
    <LoginTitle>Spotify React App</LoginTitle>
    <Button href="#">Se connecter</Button>
  </LoginWrapper>
);

export default Login;
