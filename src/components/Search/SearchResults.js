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
  const hasResults =
    artists.total || tracks.total || playlists.total || albums.total;
  const resultsText = hasResults
    ? `Résultats pour la recherche: "${queryInput}"`
    : `Aucun résultat trouvé pour la recherche: "${queryInput}"`;

  useEffect(
    () => {
      dispatch(fetchSearchResults(queryInput));
    },
    [ queryInput, dispatch ],
  );

  return (
    <Wrapper pt px pb>
      <ResultsSpan>{resultsText}</ResultsSpan>
      <Section
        title="Titres"
        display={tracks.total}
        path={`/search/${queryInput}/tracks`}
      >
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
      <Section title="Albums" display={albums.total} path="/">
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
    </Wrapper>
  );
};

const StyledTrackList = styled.ul`padding-top: 1rem;`;

const ResultsSpan = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export default SearchResults;
