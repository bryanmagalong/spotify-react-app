/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
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
  const handleEnded = () => {
    console.log('ended');
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
        marginBottom="0"
      />
      <div>{track.name}</div>
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
    gap: 1rem;
    padding: 1rem;
  }
`;

const PLayPauseButton = styled.button`
  background-color: transparent;
  font-size: 2em;
  color: #fff;
  text-align: center;
  & svg {
    vertical-align: middle;
  }
`;

export default Player;
