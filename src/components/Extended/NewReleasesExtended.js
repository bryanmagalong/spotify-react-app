import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import TextSpan from '../shared/TextSpan';
import List from '../shared/List';
import Card from '../shared/Card';
import { fetchNewReleases } from '../../features/browse/browseActions';

const NewReleasesExtended = () => {
  const newReleases = useSelector((state) => state.browse.newReleases.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!newReleases.length || newReleases.length < 7)
        dispatch(fetchNewReleases(50));
    },
    [ dispatch, newReleases ],
  );

  return (
    <Wrapper px pt pb>
      <TextSpan as="h1">Les nouvelles sorties</TextSpan>
      <List gutter="2rem 0">
        {newReleases.map((release) => <Card key={release.id} {...release} />)}
      </List>
    </Wrapper>
  );
};

export default NewReleasesExtended;
