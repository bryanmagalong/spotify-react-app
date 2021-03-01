import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPlaylistById } from '../../features/playlists/playlistActions';
import Wrapper from '../shared/Wrapper';

const Playlist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchPlaylistById(playlistId));
    },
    [ playlistId, dispatch ],
  );

  return (
    <Wrapper px pb pt>
      Playlist: {playlistId}
    </Wrapper>
  );
};

export default Playlist;
