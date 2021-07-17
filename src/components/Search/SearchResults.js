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
import TextSpan from '../shared/TextSpan';

const SearchResults = () => {
  const { queryInput } = useParams();
  const dispatch = useDispatch();
  const { artists, tracks, playlists, albums } = useSelector(
    (state) => state.search,
  );
  const hasResults =
    artists.total || tracks.total || playlists.total || albums.total;
  const resultsText = hasResults
    ? `Résultats pour la recherche: "${queryInput}"`
    : `Aucun résultat trouvé pour la recherche: "${queryInput}"`;
  const path = `/search/${queryInput}`;

  useEffect(
    () => {
      dispatch(fetchSearchResults(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <Wrapper pt px pb>
      <TextSpan>{resultsText}</TextSpan>
      <Section title="Titres" display={tracks.total} path={`${path}/tracks`}>
        <StyledTrackList>
          {tracks.items.map((item, index) => (
            <TrackItem key={item.id} number={index + 1} {...item} />
          ))}
        </StyledTrackList>
      </Section>
      <Section
        title="Artistes"
        display={artists.total}
        path={`${path}/artists`}
      >
        <List>
          {artists.items.map((artist) => <Card key={artist.id} {...artist} />)}
        </List>
      </Section>
      <Section title="Albums" display={albums.total} path={`${path}/albums`}>
        <List>
          {albums.items.map((album) => <Card key={album.id} {...album} />)}
        </List>
      </Section>
      <Section
        title="Playlists"
        display={playlists.total}
        path={`${path}/playlists`}
      >
        <List>
          {playlists.items.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Section>
    </Wrapper>
  );
};

//===== Styles
const StyledTrackList = styled.ul`padding-top: 1rem;`;

export default SearchResults;
