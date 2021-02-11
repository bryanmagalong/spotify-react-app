import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from '../shared/Title';
import Button from '../shared/Button';
import Wrapper from '../shared/Wrapper';
import { logout } from '../../features/auth/authActions';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper pb>
      <Title level="2">Accueil</Title>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
    </Wrapper>
  );
};

export default Home;
