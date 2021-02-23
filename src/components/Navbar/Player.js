import React from 'react';
import styled from 'styled-components';

const StyledPlayer = styled.div`
  background-color: ${(props) => props.theme.colors.subLight};
  height: 50%;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    height: 25%;
  }
`;

const Player = () => {
  return <StyledPlayer>PLAYER</StyledPlayer>;
};

export default Player;
