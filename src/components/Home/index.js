/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { TitleStyled } from '../shared/Title';
import Button from '../shared/Button';
import Wrapper from '../shared/Wrapper';
import Card from '../shared/Card';
import Section from './Section';
import List from './List';
import { logout } from '../../features/auth/authActions';
import { fetchPlaylist } from '../../features/playlists/playlistActions';
import {
  fetchMyTopArtists,
  fetchMyTopTracks,
} from '../../features/user/userActions';

const StyledHomeTitle = styled(TitleStyled)`
  padding-bottom: 1rem;
`;

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists.list);
  const topTracks = useSelector((state) => state.user.topTracksList);
  const topArtists = useSelector((state) => state.user.topArtistsList);

  useEffect(() => {
    if (!playlists.length) dispatch(fetchPlaylist({ limit: 6 }));
    if (!topTracks.length)
      dispatch(fetchMyTopTracks({ limit: 6, time_range: 'long_term' }));
    if (!topArtists.length)
      dispatch(fetchMyTopArtists({ limit: 6, time_range: 'long_term' }));
  }, []);

  return (
    <Wrapper pb pt px>
      <StyledHomeTitle>Accueil</StyledHomeTitle>
      <Section title="Mes playlists" display={playlists.length}>
        <List>
          {playlists.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Section>
      <Section title="titres les plus écoutés" display={topTracks.length}>
        <List>
          {topTracks.map((track) => <Card key={track.id} {...track} />)}
        </List>
      </Section>
      <Section title="artistes les plus écoutés" display={topArtists.length}>
        <List>
          {topArtists.map((artist) => <Card key={artist.id} {...artist} />)}
        </List>
      </Section>
      <Button type="button" onClick={() => dispatch(logout())}>
        Déconnexion
      </Button>
    </Wrapper>
  );
};

export default Home;
