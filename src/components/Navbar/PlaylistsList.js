import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import PlaylistLink from './PlaylistLink';
import { fetchMyPlaylists } from '../../features/user/userActions';

const PlaylistsList = () => {
  const playlists = useSelector((state) => state.user.playlists.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!playlists.length) dispatch(fetchMyPlaylists());
    },
    [ playlists, dispatch ],
  );
  return (
    <StyledPlaylistsList>
      {playlists.map((item) => (
        <PlaylistLink key={item.id} id={item.id} name={item.name} />
      ))}
    </StyledPlaylistsList>
  );
};

const StyledPlaylistsList = styled.ul`
  display: none;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(178, 178, 178, .4);
    border-radius: .5rem;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(178, 178, 178, .6);
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-bottom: 1rem;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
  }
`;
export default PlaylistsList;
