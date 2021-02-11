import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../features/auth/authActions';
import Button from '../shared/Button';
import { Title } from '../shared/Title';
// import Navbar from '../Navbar';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title level="2">Accueil</Title>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
