import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '../shared/Header';
import Wrapper from '../shared/Wrapper';
import TrackItem from '../shared/TrackItem';
import Section from '../shared/Section';
import List from '../shared/List';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { logout } from '../../features/auth/authActions';
import {
  fetchCurrentUser,
  fetchMyTopArtists,
  fetchMyTopTracks,
} from '../../features/user/userActions';

const User = () => {
  const profile = useSelector((state) => state.user.profile);
  const topTracksList = useSelector((state) => state.user.topTracksList);
  const playlists = useSelector((state) => state.user.playlists);
  const topArtistsList = useSelector((state) => state.user.topArtistsList);
  const playlistsDisplay = [ ...playlists.items ];
  playlistsDisplay.splice(6);
  const TopTracksDisplay = [ ...topTracksList ];
  TopTracksDisplay.splice(5);

  const dispatch = useDispatch();

  useEffect(
    () => {
      // if profile is null, so is topTracksList and topArtistsList
      if (!profile) {
        dispatch(fetchCurrentUser());
        dispatch(fetchMyTopTracks());
        dispatch(fetchMyTopArtists());
      }
    },
    [ profile, dispatch ],
  );
  return (
    <Wrapper pb>
      <UserHeader {...profile} nPlaylists={playlists.items.length} />
      <Wrapper px>
        <Section
          title="Top titres du mois"
          display={topTracksList.length}
          path="/me/top-tracks"
        >
          <StyledTrackList>
            {TopTracksDisplay.map((item, index) => (
              <TrackItem key={item.id} number={index + 1} {...item} />
            ))}
          </StyledTrackList>
        </Section>
        <Section
          title="Top artistes du mois"
          display={topArtistsList.items.length}
          path="/me/playlists"
        >
          <List>
            {topArtistsList.items.map((artists) => (
              <Card key={artists.id} {...artists} />
            ))}
          </List>
        </Section>
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
        <StyledSection>
          <StyledButton type="button" onClick={() => dispatch(logout())}>
            Déconnexion
          </StyledButton>
        </StyledSection>
      </Wrapper>
    </Wrapper>
  );
};

const UserHeader = styled(Header)`padding-bottom: 2rem;`;

const StyledSection = styled(Wrapper)`
  padding: 3rem 0;
  row-gap: 1rem;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 2rem auto;
`;

const StyledTrackList = styled.ul`padding-top: 1rem;`;

export default User;
