import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Clock } from 'react-bootstrap-icons';

const TrackList = ({ children, type }) => {
  return (
    <StyledTrackList>
      <StyledTrackListHeader type={type}>
        <div>#</div>
        <div>Titre</div>
        {type === 'playlist' && <div>Album</div>}
        <div>
          <Clock />
        </div>
      </StyledTrackListHeader>
      <StyledTrackListBody>{children}</StyledTrackListBody>
    </StyledTrackList>
  );
};

//===== PropTypes
TrackList.defaultProps = {
  type: 'playlist',
};

TrackList.propTypes = {
  type: PropTypes.oneOf([ 'album', 'playlist' ]).isRequired,
};

//===== Styles
const StyledTrackList = styled.div`padding: 2rem 0;`;

const StyledTrackListHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.media.md}) {
    display: grid;
    padding: 0 .8rem;
    grid-template-columns: ${(props) =>
      props.type === 'playlist'
        ? props.theme.template.trackGridColumns
        : props.theme.template.albumTrackGridColumns};
    grid-gap: 1rem;
    height: 2rem;
    border-bottom: 1px solid rgba(178, 178, 178, 0.4);

    & div {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.gray};

      &:last-child {
        justify-self: flex-end;
      }
    }
  }
`;

const StyledTrackListBody = styled.div`padding: 1rem 0;`;

export default TrackList;
