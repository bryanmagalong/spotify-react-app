import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import List from '../shared/List';
import Card from '../shared/Card';
import { StyledTitle } from '../shared/Title';
import { fetchMyTopArtists } from '../../features/user/userActions';

const UserTopArtists = () => {
  const topArtistsList = useSelector((state) => state.user.topArtistsList);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (
        !topArtistsList.items.length ||
        topArtistsList.items.length < topArtistsList.total
      )
        dispatch(fetchMyTopArtists(50));
    },
    [ dispatch, topArtistsList ],
  );

  return (
    <Wrapper pb pt px>
      <StyledTitle pb>Top artistes du mois</StyledTitle>
      <List>
        {topArtistsList.items.map((artist) => (
          <Card key={artist.id} {...artist} />
        ))}
      </List>
    </Wrapper>
  );
};

export default UserTopArtists;
