import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';
import { StyledTitle } from '../shared/Title';
import List from '../shared/List';
import Card from '../shared/Card';
import { fetchCategoryPlaylistsById } from '../../features/browse/browseActions';

const CategoryPlaylists = () => {
  const { categoryId } = useParams();
  const categoryName = useSelector((state) => state.browse.categoryName);
  const playlists = useSelector((state) => state.browse.playlists);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchCategoryPlaylistsById(categoryId));
    },
    [ dispatch, categoryId, playlists.length ],
  );

  return (
    <CategoryHeader px pt pb>
      <section>
        <Title>{categoryName}</Title>
      </section>
      <section>
        <List>
          {playlists.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </section>
    </CategoryHeader>
  );
};
const Title = styled(StyledTitle)``;

const CategoryHeader = styled(Wrapper)``;

export default CategoryPlaylists;
