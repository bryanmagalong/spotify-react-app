/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { PlayCircleFill, PauseCircleFill } from 'react-bootstrap-icons';
import {
  fetchUserCurrentPlaybackInfo,
  pauseSong,
  playSong,
} from '../../features/player/playerActions';
import ImageWrapper from '../shared/ImageWrapper';

const Player = () => {
  const dispatch = useDispatch();
  const track = useSelector((state) => state.player.track);
  const { isPlaying, audio: audioObject } = useSelector(
    (state) => state.player,
  );
  
  // i want to apply an auto-scroll effect (marquee) wether the track title is too long or not
  // to do so, i need to get the scrollWidth and offsetWidth of <TrackTitle /> every time it is mounted
  // i pass a function wrapped with useCallback to ref attribute to get the latest DOM node reference
  const myRef = useCallback((node) => {
    if (node !== null) setMarquee(node.scrollWidth > node.offsetWidth); // if true (title too long), i apply the marquee effect
  });
  const [ marquee, setMarquee ] = useState();

  const handleEnded = () => {
    dispatch(pauseSong());
  };

  useEffect(
    () => {
      dispatch(fetchUserCurrentPlaybackInfo());
    },
    [ dispatch ],
  );

  useEffect(
    () => {
      if (audioObject) {
        audioObject.addEventListener('ended', handleEnded);
      }

      return () => {
        //clean-up function
        if (audioObject) audioObject.removeEventListener('ended', handleEnded); // remove eventListener on unmount
      };
    },
    [ audioObject ],
  );

  return (
    <StyledPlayer>
      <ImageWrapper
        src={
          track.image ? (
            track.image
          ) : (
            'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png'
          )
        }
        maxWidth="64px"
        maxHeight="64px"
        size="64"
        marginBottom="0"
      />
      <Description>
        <TrackTitle ref={myRef} marquee={marquee}>
          {track.name ? track.name : 'Aucune musique sélectionnée'}
        </TrackTitle>
        <ArtistName>{track.artist}</ArtistName>
      </Description>
      {track.preview_url !== null ? (
        <PLayPauseButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (isPlaying) {
              dispatch(pauseSong());
            }
            else {
              dispatch(playSong());
            }
          }}
        >
          {isPlaying ? <PauseCircleFill /> : <PlayCircleFill />}
        </PLayPauseButton>
      ) : (
        'Preview indisponible'
      )}
    </StyledPlayer>
  );
};

//===== Styles
const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.subLight};
  color: #fff;
  font-weight: bold;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    flex-direction: column;
    justify-content: space-evenly;
    /* gap: 1rem; */
    padding: 1rem;
    height: 14.5rem;
  }
`;

const PLayPauseButton = styled.button`
  background-color: transparent;
  font-size: 2em;
  color: ${(props) => props.theme.colors.gray};
  text-align: right;
  cursor: pointer;

  & svg {
    vertical-align: middle;
  }

  &:hover {
    transition: all .2s ease-in-out;
    color: #fff;
  }

  @media (min-width: ${(props) => props.theme.media.md}) {
    text-align: start;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    text-align: center;
  }
`;

const Description = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: hidden;
`;

const ArtistName = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: normal;
  color: ${(props) => props.theme.colors.gray};

  @media (min-width: ${(props) => props.theme.media.lg}) {
    text-align: center;
  }
`;

const TrackTitle = styled.div`
  transform: ${(props) => (props.marquee ? 'translate(100%)' : 'none')};
  animation: ${(props) =>
    props.marquee ? 'marquee 7s linear infinite' : 'none'};

  @keyframes marquee {
    to {
      transform: translate(-200%);
    }
  }
  @media (min-width: ${(props) => props.theme.media.md}) {
    transform: none;
    animation: none;
  }
  @media (min-width: ${(props) => props.theme.media.lg}) {
    transform: ${(props) => (props.marquee ? 'translate(100%)' : 'none')};
    animation: ${(props) =>
      props.marquee ? 'marquee 7s linear infinite' : 'none'};
    text-align: center;
  }
`;
export default Player;
