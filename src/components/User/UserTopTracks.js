import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import { StyledTitle } from '../shared/Title';
import { fetchMyTopTracks } from '../../features/user/userActions';
import TrackList from '../shared/TrackList';
import TrackItem from '../shared/TrackItem';

const UserTopTracks = () => {
  const topTracksList = useSelector((state) => state.user.topTracksList);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!topTracksList.total) dispatch(fetchMyTopTracks());
    },
    [ dispatch, topTracksList ],
  );
  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Top titres du mois</StyledTitle>
      <TrackList type="playlist">
        {topTracksList.items.map((track, index) => (
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

export default UserTopTracks;
