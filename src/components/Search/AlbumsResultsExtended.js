import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import TextSpan from '../shared/TextSpan';
import { fetchSearchAlbums } from '../../features/search/searchActions';
import List from '../shared/List';
import Card from '../shared/Card';

const AlbumsResultsExtended = () => {
  const { queryInput } = useParams();
  const albums = useSelector((state) => state.search.albums.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSearchAlbums(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <Wrapper px pt pb>
      <TextSpan as="h1">Tous les albums pour "{queryInput}"</TextSpan>
      <List gutter="2rem 0">
        {albums.map((album) => <Card key={album.id} {...album} />)}
      </List>
    </Wrapper>
  );
};

export default AlbumsResultsExtended;
