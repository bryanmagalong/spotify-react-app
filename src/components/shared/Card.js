import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.subLight};
`;

const Card = ({ name }) => {
  return <StyledCard>{name}</StyledCard>;
};

export default Card;
