import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { usePalette } from 'react-palette';

import Wrapper from '../shared/Wrapper';
import { StyledTitle } from '../shared/Title';
import List from '../shared/List';
import Card from '../shared/Card';
import { fetchCategoryPlaylistsById } from '../../features/browse/browseActions';

const CategoryPlaylists = () => {
  const { categoryId } = useParams();
  const categoryName = useSelector((state) => state.browse.categoryName);
  const imageUrl = useSelector((state) => state.browse.imageUrl);
  const playlists = useSelector((state) => state.browse.playlists);
  const dispatch = useDispatch();
  const { data } = usePalette(imageUrl); // generates color from the category's image url

  useEffect(
    () => {
      dispatch(fetchCategoryPlaylistsById(categoryId));
    },
    [ dispatch, categoryId, playlists.length ],
  );

  return (
    <Wrapper>
      <CategoryHeader as="section" flex color={data.vibrant} pt>
        <Title>{categoryName}</Title>
      </CategoryHeader>
      <Wrapper as="section" px pb>
        <List>
          {playlists.map((playlist) => (
            <Card key={playlist.id} {...playlist} />
          ))}
        </List>
      </Wrapper>
    </Wrapper>
  );
};

//===== Styles
const Title = styled(StyledTitle)`
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: ${(props) => props.theme.media.md}) {
    font-size: 2.3em;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: ${(props) => props.theme.media.xl}) {
    font-size: ${(props) => props.theme.fontSize.xxl};
  }
`;

const CategoryHeader = styled(Wrapper)`
  background: linear-gradient(0deg, rgba(21, 21, 21, 1), transparent)
    ${(props) => (props.color ? props.color : props.theme.colors.main)};
  height: 8rem;
  align-items: flex-end;

  @media (min-width: ${(props) => props.theme.media.md}) {
    height: 15rem;
    align-items: flex-end;
    column-gap: 2rem;
  }
`;

export default CategoryPlaylists;
