import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import { StyledTitle as Title } from '../shared/Title';
import { fetchAllCategories } from '../../features/browse/browseActions';

const Browse = () => {
  const categories = useSelector((state) => state.browse.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) dispatch(fetchAllCategories());
  });

  return (
    <Wrapper pb pt px>
      <Wrapper as="section">
        <Title as="h2">Catégories</Title>
        {categories.map((category) => (
          <Title as="h2" key={category.id}>
            {category.name}
          </Title>
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default Browse;
