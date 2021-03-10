import React from 'react';
import { useParams } from 'react-router-dom';

import Wrapper from '../shared/Wrapper';

const Album = () => {
  const { albumId } = useParams();
  return (
    <Wrapper px pb pt>
      Album id: {albumId}
    </Wrapper>
  );
};

export default Album;
