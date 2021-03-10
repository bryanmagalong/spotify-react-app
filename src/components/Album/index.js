import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import { fetchAlbumById } from '../../features/albums/albumActions';
import Header from '../shared/Header';
import TrackList from '../shared/TrackList';
import TrackItem from '../shared/TrackItem';
import Copyrights from './Copyrights';

const Album = () => {
  const { albumId } = useParams();
  console.log(albumId);
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albums.album);
  const tracks = useSelector((state) => state.albums.trackList);
  const copyrights = useSelector((state) => state.albums.copyrights);

  useEffect(
    () => {
      dispatch(fetchAlbumById(albumId));
    },
    [ albumId, dispatch ],
  );

  return (
    <Wrapper px pb pt>
      <Header {...album} />
      <TrackList>
        {tracks.map((item, index) => (
          <TrackItem key={item.id} number={index + 1} {...item} />
        ))}
      </TrackList>
      <Copyrights copyrights={copyrights} />
    </Wrapper>
  );
};

export default Album;
