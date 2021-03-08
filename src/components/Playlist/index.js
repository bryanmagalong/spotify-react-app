import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../shared/Wrapper';
import Header from './Header';
import TrackList from './TrackList';
import TrackItem from './TrackItem';
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
      <Header
        image={playlist.images}
        name={playlist.name}
        description={playlist.description}
        owner={playlist.owner}
        ownerUrl={playlist.ownerUrl}
        followers={playlist.followers}
        type={playlist.type}
      />
      <TrackList>
        {tracks.map((item, index) => (
          <TrackItem key={item.id} number={index + 1} {...item} />
        ))}
      </TrackList>
    </Wrapper>
  );
};

export default Playlist;
