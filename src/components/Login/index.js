import React from 'react';
import styled from 'styled-components';

import { StyledTitle } from '../shared/Title';
import Wrapper from '../shared/Wrapper';
import Button from '../shared/Button';

const Login = () => {
  const {
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL,
    REACT_APP_SCOPES,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=${REACT_APP_SCOPES
      ? encodeURIComponent(REACT_APP_SCOPES)
      : ''}`;
  };

  return (
    <LoginWrapper flex column>
      <LoginTitle>Spotify React App</LoginTitle>
      <Button type="button" onClick={handleLogin}>
        Se connecter à Spotify
      </Button>
    </LoginWrapper>
  );
};

//===== Styles
const LoginTitle = styled(StyledTitle)`
  text-align: center;
  font-size: 2.5em;

  @media(min-width: ${(props) => props.theme.media.md}){
    font-size: 5.625em;
  }
`;

const LoginWrapper = styled(Wrapper)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  row-gap: 2.5rem;
  padding: 0 10px;
`;

export default Login;
