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
      <PlaylistsTitle>playlists</PlaylistsTitle>
      {playlists.map((item) => (
        <PlaylistLink key={item.id} id={item.id} name={item.name} />
      ))}
    </StyledPlaylistsList>
  );
};

const PlaylistsTitle = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: .1rem;
  padding: 0 1rem;
`;

const StyledPlaylistsList = styled.ul`
  display: none;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.colors.gray};
  }
`;
export default PlaylistsList;
