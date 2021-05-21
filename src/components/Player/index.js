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
  const track = useSelector((state) => state.player.playback.track);
  const { isPlaying, audio } = useSelector((state) => state.player);
  const myRef = useCallback((node) => {
    if (node !== null) setMarquee(node.scrollWidth > node.offsetWidth);
  });
  const [ marquee, setMarquee ] = useState();
  const handleEnded = () => {
    // console.log('ended');
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
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
        audio.addEventListener('ended', handleEnded);
      }
    },
    [ audio ],
  );

  return (
    <StyledPlayer>
      <ImageWrapper
        src={track.image}
        maxWidth="64px"
        maxHeight="64px"
        size="64"
        marginBottom="0"
      />
      <Description>
        <TrackTitle ref={myRef} marquee={marquee}>
          {track.name}
        </TrackTitle>
        <ArtistName>{track.artist}</ArtistName>
      </Description>
      <PLayPauseButton
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (isPlaying) {
            audio.pause();
            dispatch(pauseSong());
          }
          else {
            audio.play();
            dispatch(playSong());
          }
        }}
      >
        {isPlaying ? <PauseCircleFill /> : <PlayCircleFill />}
      </PLayPauseButton>
    </StyledPlayer>
  );
};

const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.subLight};
  color: #fff;
  font-weight: bold;
  height: 50%;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    height: 25%;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 1rem; */
    padding: 1rem;
  }
`;

const PLayPauseButton = styled.button`
  background-color: transparent;
  font-size: 2.3em;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  width: 50%;
  cursor: pointer;
  & svg {
    vertical-align: middle;
  }
  &:hover {
    transition: all .2s ease-in-out;
    color: #fff;
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
