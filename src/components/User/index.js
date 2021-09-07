import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '../shared/Header';
import Wrapper from '../shared/Wrapper';
import TrackItem from '../shared/TrackItem';
import Section from '../shared/Section';
import List from '../shared/List';
import Card from '../shared/Card';
import LogoutButton from './LougoutButton';
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

  const dispatch = useDispatch();

  useEffect(
    () => {
      // if profile is null, so is topTracksList and topArtistsList
      if (!profile) {
        dispatch(fetchCurrentUser());
        dispatch(fetchMyTopTracks(5));
        dispatch(fetchMyTopArtists(6));
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
          display={topTracksList.total}
          path="/me/top-tracks"
        >
          <StyledTrackList>
            {topTracksList.items.map((item, index) => (
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
            {playlists.itemsHome.map((playlist) => (
              <Card key={playlist.id} {...playlist} />
            ))}
          </List>
        </Section>
        <StyledSection>
          <LogoutButton />
        </StyledSection>
      </Wrapper>
    </Wrapper>
  );
};

//===== Styles
const UserHeader = styled(Header)`padding-bottom: 2rem;`;

const StyledSection = styled(Wrapper)`
  padding: 3rem 0;
  row-gap: 1rem;
`;

const StyledTrackList = styled.ul`padding-top: 1rem;`;

export default User;
