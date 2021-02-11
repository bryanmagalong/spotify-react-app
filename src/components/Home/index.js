import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../features/auth/authActions';
import Button from '../shared/Button';
import { Title } from '../shared/Title';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title level="2">Accueil</Title>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
    </div>
  );
};

export default Home;
