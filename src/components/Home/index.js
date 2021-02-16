/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Title } from '../shared/Title';
import Button from '../shared/Button';
import Wrapper from '../shared/Wrapper';
import Card from '../shared/Card';
import Section from './Section';
import List from './List';
import { logout } from '../../features/auth/authActions';

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists.list);

  useEffect(() => {
    if (!playlists.lenght) dispatch({ type: 'FETCH_PLAYLISTS' });
  }, []);

  return (
    <Wrapper pb pt px>
      <Title>Accueil</Title>
      <Section title="Mes playlists">
        <List>
          {playlists.map((playlist) => <Card name={playlist.name} />)}
        </List>
      </Section>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
    </Wrapper>
  );
};

export default Home;
