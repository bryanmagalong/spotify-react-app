/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledTitle } from '../shared/Title';
import Button from '../shared/Button';
import Wrapper from '../shared/Wrapper';
import Card from '../shared/Card';
import Section from '../shared/Section';
import List from '../shared/List';
import { logout } from '../../features/auth/authActions';
import { fetchMyPlaylists } from '../../features/user/userActions';

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.user.playlists);
  const playlistsDisplay = [ ...playlists.items ];
  playlistsDisplay.splice(6);

  useEffect(
    () => {
      if (!playlists.items.length) dispatch(fetchMyPlaylists());
    },
    [ dispatch ],
  );

  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Accueil</StyledTitle>
      <Section
        title="mes playlists"
        display={playlists.items.length}
        path="/me/playlists"
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
