import React from 'react';
import styled from 'styled-components';

import ImageWrapper from '../shared/ImageWrapper';

const StyledTrackItem = styled.div`
  padding: .5rem .8rem;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-gap: 1rem;
  color: ${(props) => props.theme.colors.gray};

  &:hover {
    background-color: rgba(178, 178, 178, 0.1);
  }

  @media (min-width: ${(props) => props.theme.media.md}) {
    grid-template-columns: ${(props) => props.theme.template.trackGridColumns};
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${(props) => props.columnGap && '1rem'};
`;

const StyledTitleDiv = styled(StyledDiv)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  row-gap: .3rem;
`;

const StyledText = styled.div`
  letter-spacing: .1rem;
  color: ${(props) => props.white && '#FFF'};
  display: ${(props) => props.flex && 'flex'};
  column-gap: ${(props) => props.columnGap && '.5rem'};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
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

const TrackItem = ({
  number,
  images,
  name,
  artist,
  album,
  explicit,
  duration,
}) => {
  return (
    <StyledTrackItem>
      <StyledDiv>{number}</StyledDiv>
      <StyledDiv columnGap>
        <ImageWrapper
          src={images.url}
          alt={name}
          maxWidth="30%"
          marginBottom="0"
          size={images.width}
        />
        <StyledTitleDiv>
          <StyledText white>{name}</StyledText>
          <StyledText flex columnGap fontSize=".9rem">
            <StyledExplicitTag show={explicit}>E</StyledExplicitTag>
            {artist.name}
          </StyledText>
        </StyledTitleDiv>
      </StyledDiv>
      <StyledTrackAlbum>{album.name}</StyledTrackAlbum>
      <StyledTrackDuration>{duration}</StyledTrackDuration>
    </StyledTrackItem>
  );
};

export default TrackItem;
