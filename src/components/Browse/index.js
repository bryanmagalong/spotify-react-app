import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import { StyledTitle as Title } from '../shared/Title';
import { fetchAllCategories } from '../../features/browse/browseActions';
import List from '../shared/List';
import CategoryCard from './CategoryCard';

const Browse = () => {
  const categories = useSelector((state) => state.browse.categories);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!categories.length) dispatch(fetchAllCategories());
    },
    [ dispatch, categories ],
  );

  return (
    <Wrapper pb pt px>
      <Wrapper as="section">
        <Title as="h2">Catégories</Title>
        <StyledList>
          {categories.map((category) => (
            <CategoryCard key={category.id} id={category.id}>
              {category.name}
            </CategoryCard>
          ))}
        </StyledList>
      </Wrapper>
    </Wrapper>
  );
};

const StyledList = styled(List)`
  @media (min-width: ${(props) => props.theme.media.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    padding-bottom: 2rem;
  }
`;

export default Browse;
