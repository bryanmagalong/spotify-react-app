import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylistById } from '../../features/playlists/playlistActions';
import Wrapper from '../shared/Wrapper';
import Header from './Header';
import TrackList from './TrackList';

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
        followers={playlist.followers}
      />
      <TrackList>
        {tracks.map((item) => <div key={item.id}>{item.name}</div>)}
      </TrackList>
    </Wrapper>
  );
};

export default Playlist;
