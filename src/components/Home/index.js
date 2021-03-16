/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledTitle } from '../shared/Title';
import Button from '../shared/Button';
import Wrapper from '../shared/Wrapper';
import Card from '../shared/Card';
import Section from './Section';
import List from '../shared/List';
import { logout } from '../../features/auth/authActions';
import { fetchPlaylists } from '../../features/playlists/playlistActions';

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists.list);
  const playlistsDisplay = [ ...playlists.items ];
  playlistsDisplay.splice(6);

  useEffect(
    () => {
      if (!playlists.items.length) dispatch(fetchPlaylists());
    },
    [ dispatch ],
  );

  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Accueil</StyledTitle>
      <Section
        title="mes playlists"
        display={playlists.items.length}
        path="/user/playlists"
      >
        <List>
          {playlistsDisplay.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Section>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
    </Wrapper>
  );
};

export default Home;
