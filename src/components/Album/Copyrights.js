import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';

const Copyrights = ({ copyrights }) => {
  return (
    <StyledCopyrights as="section" flex column>
      {copyrights.map((item, index) => <p key={`${item}_${index}`}>{item}</p>)}
    </StyledCopyrights>
  );
};

//===== PropTypes
Copyrights.propTypes = {
  copyrights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

//===== Styles
const StyledCopyrights = styled(Wrapper)`
  color: ${(props) => props.theme.colors.gray};
  row-gap: .5rem;
  padding-bottom: 1.5rem;
  font-size: ${(props) => props.theme.fontSize.md}
`;

export default Copyrights;
