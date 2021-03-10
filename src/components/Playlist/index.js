import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import Header from '../shared/Header';
import TrackList from '../shared/TrackList';
import TrackItem from '../shared/TrackItem';
import { fetchPlaylistById } from '../../features/playlists/playlistActions';

const Playlist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlists.playlist);
  const tracks = useSelector((state) => state.playlists.trackList);

  useEffect(
    () => {
      dispatch(fetchPlaylistById(playlistId));
    },
    [ playlistId, dispatch ],
  );

  return (
    <Wrapper px pb pt>
      <Header {...playlist} />
      <TrackList type={playlist.type}>
        {tracks.map((item, index) => (
          <TrackItem
            key={item.id}
            type={playlist.type}
            number={index + 1}
            {...item}
          />
        ))}
      </TrackList>
    </Wrapper>
  );
};

export default Playlist;
