import React from 'react';
import styled from 'styled-components';

const StyledTrackList = styled.div`padding: 2rem 0;`;

const StyledTrackListHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.theme.template.trackGridColumns};
  grid-gap: 1rem;
  height: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  & div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.gray};

    &:last-child {
      justify-self: flex-end;
    }
  }
`;
const StyledTrackListBody = styled.div`padding: 1rem 0;`;

const TrackList = ({ children }) => {
  return (
    <StyledTrackList>
      <StyledTrackListHeader>
        <div>#</div>
        <div>Titre</div>
        <div>Album</div>
        <div>Durée</div>
      </StyledTrackListHeader>
      <StyledTrackListBody>{children}</StyledTrackListBody>
    </StyledTrackList>
  );
};

export default TrackList;
