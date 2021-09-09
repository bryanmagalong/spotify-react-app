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
      <DescriptionWrapper flex column>
        <p>
          Spotify React App est une application web utilisant l'API du service
          de streaming Spotify.
        </p>
        <p>
          L'application ne propose que des fonctionnalités en lecture seule. De
          plus, compte tenu des restrictions liées à l'utilisation de l'API
          Spotify, une session de connexion est limitée à une durée de 1 heure
          et seules les previews des morceaux peuvent être écoutées.
        </p>
        <p>
          N'hésitez donc pas à visiter le site ou l'application officielle de
          Spotify pour profiter pleinement des fonctionnalités sans contraintes.
        </p>
      </DescriptionWrapper>
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

const DescriptionWrapper = styled(Wrapper)`
  color: #FFF;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
  line-height: 1rem;
  text-align: center;
  gap: 0.5rem;
  max-width: 85%;
`;

export default Login;
