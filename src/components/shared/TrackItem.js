import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImageWrapper from './ImageWrapper';
import Wrapper from './Wrapper';
import StyledCustomLink from './CustomLink';
import {
  pauseSong,
  startNewPlayback,
} from '../../features/player/playerActions';
import { PlayCircleFill, PauseCircleFill } from 'react-bootstrap-icons';

const TrackItem = ({
  number,
  image,
  name,
  artist,
  album,
  explicit,
  duration,
  type,
  id,
}) => {
  const albumPath = album ? `/albums/${album.id}` : '';
  const dispatch = useDispatch();
  const { isPlaying, track } = useSelector((state) => state.player);
  const displayPauseButton =
    track.preview_url !== null && track.id === id && isPlaying;

  const handleOnClick = (e) => {
    e.preventDefault();
    if (!displayPauseButton) dispatch(startNewPlayback(id));
    else dispatch(pauseSong());
  };

  return (
    <StyledTrackItem type={type}>
      <StyledPlayButton flex itemsCenter onClick={handleOnClick}>
        <span>{number}</span>
        <div>
          {displayPauseButton ? <PauseCircleFill /> : <PlayCircleFill />}
        </div>
      </StyledPlayButton>
      <StyledDiv flex itemsCenter columnGap>
        {image && (
          <ImageWrapper
            src={image.url}
            alt={name ? name : 'spotify logo image'}
            maxWidth="30%"
            marginBottom="0"
            size={image.width}
          />
        )}
        <StyledTitleDiv flex column fullWidth>
          <StyledText white>{name}</StyledText>
          <StyledText flex columnGap fontSize=".9rem">
            <StyledExplicitTag show={explicit}>E</StyledExplicitTag>
            <StyledCustomLink href={artist.url}>{artist.name}</StyledCustomLink>
          </StyledText>
        </StyledTitleDiv>
      </StyledDiv>
      {album && (
        <StyledTrackAlbum>
          <StyledInternLink to={albumPath}>{album.name}</StyledInternLink>
        </StyledTrackAlbum>
      )}
      <StyledTrackDuration>{duration}</StyledTrackDuration>
    </StyledTrackItem>
  );
};

//===== PropTypes
TrackItem.defaultProps = {
  type: 'album',
};

TrackItem.propTypes = {
  number: PropTypes.number.isRequired,
  image: PropTypes.object,
  name: PropTypes.string.isRequired,
  artist: PropTypes.object.isRequired,
  album: PropTypes.object,
  explicit: PropTypes.bool,
  duration: PropTypes.string.isRequired,
  type: PropTypes.oneOf([ 'album', 'playlist', 'track' ]).isRequired,
  id: PropTypes.string.isRequired,
};

//===== Styles
const StyledDiv = styled(Wrapper)`
  column-gap: ${(props) => props.columnGap && '1rem'};
`;

const StyledPlayButton = styled(StyledDiv)`
  cursor: pointer;

  & div {
    display: none;
  }
`;

const StyledTitleDiv = styled(Wrapper)`
  align-items: flex-start;
  row-gap: .3rem;
`;

const StyledText = styled.div`
  letter-spacing: .1rem;
  color: ${(props) => (props.white ? '#FFF' : props.theme.colors.gray)};
  display: ${(props) => props.flex && 'flex'};
  column-gap: ${(props) => props.columnGap && '.5rem'};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};

  ${StyledCustomLink} {
    color: ${(props) => props.theme.colors.gray};

    &:hover {
      color: #fff;
    }
  }
`;

const StyledExplicitTag = styled.span`
  display: ${(props) => (!props.show ? 'none' : 'inline')};
  font-size: .6em;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.main};
  padding: .2rem .3rem;
  border-radius: 3px;
`;

const StyledTrackAlbum = styled(StyledDiv)`
  display: none;
  
  @media (min-width: ${(props) => props.theme.media.md}) {
    display: flex;
    align-items: center;
  }
`;

const StyledTrackDuration = styled(StyledTrackAlbum)`
  @media (min-width: ${(props) => props.theme.media.md}) {
  justify-self: flex-end;
  }
`;

const StyledInternLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const StyledTrackItem = styled.div`
  padding: .5rem .8rem;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-gap: 1rem;
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    background-color: rgba(178, 178, 178, 0.1);
    & ${StyledPlayButton} {
      & span {
        display: none;
      }

      & div {
        display: block;
        font-size: 1.5rem;
        transition: all ease-in-out .2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.media.md}) {
    grid-template-columns: ${(props) =>
      props.type === 'playlist' || props.type === 'track'
        ? props.theme.template.trackGridColumns
        : props.theme.template.albumTrackGridColumns};
  }
`;

export default TrackItem;
