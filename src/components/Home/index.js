import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledTitle } from '../shared/Title';
import Wrapper from '../shared/Wrapper';
import Card from '../shared/Card';
import Section from '../shared/Section';
import List from '../shared/List';
import { fetchMyPlaylists } from '../../features/user/userActions';
import { fetchNewReleases } from '../../features/browse/browseActions';

const Home = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.user.playlists);
  const newReleases = useSelector((state) => state.browse.newReleases);

  useEffect(
    () => {
      if (!playlists.items.length) dispatch(fetchMyPlaylists());
    },
    [ dispatch, playlists ],
  );

  useEffect(
    () => {
      if (!newReleases.items.length || newReleases.items.length > 6)
        dispatch(fetchNewReleases());
    },
    [ dispatch, newReleases ],
  );

  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Accueil</StyledTitle>
      <Section
        title="nouvelles sorties"
        display={newReleases.total}
        path="/browse/new-releases"
      >
        <List>
          {newReleases.items.map((album) => <Card key={album.id} {...album} />)}
        </List>
      </Section>
      <Section
        title="mes playlists"
        display={playlists.total}
        path="/me/playlists"
      >
        <List>
          {playlists.itemsHome.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Section>
    </Wrapper>
  );
};

export default Home;
