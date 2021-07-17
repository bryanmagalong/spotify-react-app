import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlaylistLink = ({ name, id }) => {
  const path = `/playlists/${id}`;

  return (
    <li>
      <StyledPlaylistLink to={path}>{name}</StyledPlaylistLink>
    </li>
  );
};
//===== PropTypes
PlaylistLink.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

//===== Styles
const StyledPlaylistLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSize.md};
  padding: .4rem 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  max-width: 200px;

  &:hover {
    color: #FFF;
  }
`;

export default PlaylistLink;
