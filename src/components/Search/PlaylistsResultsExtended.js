import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import TextSpan from '../shared/TextSpan';
import { fetchSearchPlaylists } from '../../features/search/searchActions';
import List from '../shared/List';
import Card from '../shared/Card';

const PlaylistsResultsExtended = () => {
  const { queryInput } = useParams();
  const playlists = useSelector((state) => state.search.playlists.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSearchPlaylists(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <Wrapper px pt pb>
      <TextSpan as="h1">Tous les playlists pour "{queryInput}"</TextSpan>
      <List gutter="2rem 0">
        {playlists.map((playlist) => <Card key={playlist.id} {...playlist} />)}
      </List>
    </Wrapper>
  );
};

export default PlaylistsResultsExtended;
