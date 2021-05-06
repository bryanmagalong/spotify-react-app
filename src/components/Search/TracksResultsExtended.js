import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import { StyledTitle } from '../shared/Title';
import TrackList from '../shared/TrackList';
import TrackItem from '../shared/TrackItem';
import { fetchSearchTracks } from '../../features/search/searchActions';

const TracksResultsExtended = () => {
  const { queryInput } = useParams();
  const tracks = useSelector((state) => state.search.tracks.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSearchTracks(queryInput));
    },
    [ dispatch, queryInput ],
  );
  return (
    <Wrapper px pt pb>
      <StyledTitle pb>Tous les titres pour "{queryInput}"</StyledTitle>
      <TrackList type="playlist">
        {tracks.map((track, index) => (
          <TrackItem
            key={track.id}
            typ="playlist"
            number={index + 1}
            {...track}
          />
        ))}
      </TrackList>
    </Wrapper>
  );
};

export default TracksResultsExtended;
