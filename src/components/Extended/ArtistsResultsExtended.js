import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import TextSpan from '../shared/TextSpan';
import { fetchSearchArtists } from '../../features/search/searchActions';
import List from '../shared/List';
import Card from '../shared/Card';

const ArtistsResultsExtended = () => {
  const { queryInput } = useParams();
  const artists = useSelector((state) => state.search.artists.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSearchArtists(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <Wrapper px pt pb>
      <TextSpan as="h1">Tous les artistes pour "{queryInput}"</TextSpan>
      <List gutter="2rem 0">
        {artists.map((artist) => <Card key={artist.id} {...artist} />)}
      </List>
    </Wrapper>
  );
};

export default ArtistsResultsExtended;
