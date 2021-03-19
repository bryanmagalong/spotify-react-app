import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '../shared/Header';
import {
  fetchCurrentUser,
  fetchMyTopArtists,
  fetchMyTopTracks,
} from '../../features/user/userActions';

import Wrapper from '../shared/Wrapper';
import { Title } from '../shared/Title';
import TrackItem from '../shared/TrackItem';
import Section from '../shared/Section';
import List from '../shared/List';
import Card from '../shared/Card';

const User = () => {
  const profile = useSelector((state) => state.user.profile);
  const topTracksList = useSelector((state) => state.user.topTracksList);
  const playlists = useSelector((state) => state.user.playlists);
  const playlistsDisplay = [ ...playlists.items ];
  playlistsDisplay.splice(6);

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
    <Wrapper px pb pt>
      <Header {...profile} />
      <StyledSection as="section" flex column>
        <Title level="2">Top titres du mois</Title>
        <ul>
          {topTracksList.map((item, index) => (
            <TrackItem key={item.id} number={index + 1} {...item} />
          ))}
        </ul>
      </StyledSection>
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
    </Wrapper>
  );
};

const StyledSection = styled(Wrapper)`
  padding: 3rem 0;
  row-gap: 1rem;
`;

export default User;
