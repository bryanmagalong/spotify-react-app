import React from 'react';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { playlistId } = useParams();
  return <div>Playlist: {playlistId}</div>;
};

export default Playlist;
