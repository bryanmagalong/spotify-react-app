import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import Section from '../shared/Section';
import { fetchSearchResults } from '../../features/search/searchActions';
import TrackItem from '../shared/TrackItem';
import Card from '../shared/Card';
import List from '../shared/List';

const SearchResults = () => {
  const { queryInput } = useParams();
  const dispatch = useDispatch();
  const { artists, tracks, playlists, albums } = useSelector(
    (state) => state.search,
  );

  useEffect(
    () => {
      dispatch(fetchSearchResults(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <StyledWrapper pt px pb>
      <Section title="Titres" display={tracks.total} path="/">
        <StyledTrackList>
          {tracks.items.map((item, index) => (
            <TrackItem key={item.id} number={index + 1} {...item} />
          ))}
        </StyledTrackList>
      </Section>
      <Section title="Artistes" display={artists.total} path="/">
        <List>
          {artists.items.map((artist) => <Card key={artist.id} {...artist} />)}
        </List>
      </Section>
      <Section title="Albums" display="1" path="/">
        <List>
          {albums.items.map((album) => <Card key={album.id} {...album} />)}
        </List>
      </Section>
      <Section title="Playlists" display={playlists.total} path="/">
        <List>
          {playlists.items.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Section>
    </StyledWrapper>
  );
};

const StyledTrackList = styled.ul`padding-top: 1rem;`;

const StyledWrapper = styled(Wrapper)`

`;

export default SearchResults;
