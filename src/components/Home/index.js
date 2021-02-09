import React from 'react';
import Button from '../shared/Button';
import { Title } from '../shared/Title';

const Home = ({ logout }) => {
  return (
    <div>
      <Title level="2">Accueil</Title>
      <Button type="button" onClick={logout}>
        Déconnexion
      </Button>
    </div>
  );
};

export default Home;
