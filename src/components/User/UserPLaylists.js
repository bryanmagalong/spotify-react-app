import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import List from '../shared/List';
import Card from '../shared/Card';
import { StyledTitle } from '../shared/Title';
import { fetchPlaylists } from '../../features/playlists/playlistActions';

const UserPLaylists = () => {
  const playlists = useSelector((state) => state.playlists.list.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!playlists.length) dispatch(fetchPlaylists());
    },
    [ dispatch, playlists ],
  );
  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Mes playlists</StyledTitle>
      <List>
        {playlists.map((playlist) => <Card key={playlist.id} {...playlist} />)}
      </List>
    </Wrapper>
  );
};

export default UserPLaylists;
