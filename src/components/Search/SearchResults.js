import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchResults = () => {
  const { queryInput } = useParams();
  return <Div>{queryInput}</Div>;
};

const Div = styled.div`color: white;`;
export default SearchResults;
