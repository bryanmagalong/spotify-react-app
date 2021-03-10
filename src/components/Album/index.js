import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import { fetchAlbumById } from '../../features/albums/albumActions';
import Header from '../shared/Header';
import TrackList from '../shared/TrackList';
import TrackItem from '../shared/TrackItem';

const Album = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albums.album);
  const tracks = useSelector((state) => state.albums.trackList);

  useEffect(
    () => {
      dispatch(fetchAlbumById(albumId));
    },
    [ albumId, dispatch ],
  );
  return (
    <Wrapper px pb pt>
      <Header {...album} image={album.images} />
      <TrackList>
        {tracks.map((item, index) => (
          <TrackItem key={item.id} number={index + 1} {...item} />
        ))}
      </TrackList>
    </Wrapper>
  );
};

export default Album;
