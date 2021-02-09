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
  padding: 0 10px;
`;

const Login = () => {
  const {
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <LoginWrapper column>
      <LoginTitle>Spotify React App</LoginTitle>
      <Button type="button" onClick={handleLogin}>
        Se connecter à Spotify
      </Button>
    </LoginWrapper>
  );
};

export default Login;
