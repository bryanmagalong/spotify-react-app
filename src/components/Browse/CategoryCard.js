import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usePalette } from 'react-palette';
import axios from 'axios';

import { StyledTitle as Title } from '../shared/Title';
import { fetchCategoryColor } from '../../features/browse/browseActions';

const CategoryCard = ({ id }) => {
  const categoryLink = `/browse/categories/${id}/playlists`;
  const dispatch = useDispatch();
  const { imageUrl, name, icons } = useSelector((state) =>
    state.browse.categories.find((category) => id === category.id),
  );
  let { data } = usePalette(imageUrl);

  useEffect(
    () => {
      if (!imageUrl) {
        const source = axios.CancelToken.source(); // creates a cancel token factory

        dispatch(
          fetchCategoryColor({
            id: id,
            params: { cancelToken: source.token },
          }),
        );

        return () => {
          // clean-up function
          source.cancel('CategoryCard Unmounted, request cancelled'); // cancel all subscriptions & asynchronous tasks on unmount
        };
      }
    },
    [ dispatch, imageUrl, id ],
  );

  return (
    <StyledCard
      as={Link}
      to={categoryLink}
      icon={icons[0].url}
      color={data.vibrant}
    >
      <StyledTitle as="h3">{name}</StyledTitle>
    </StyledCard>
  );
};

const StyledTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.md};
  text-transform: none;
  padding: 1rem .6rem;
`;

const StyledCard = styled.div`
  height: 5rem;
  background: linear-gradient(160deg, rgba(0, 0, 0, 0.5), transparent)
    ${(props) => props.color};
  border-radius: .5rem;

  &:hover {
    ${StyledTitle} {
      text-decoration: underline;
    }
  }
  @media (min-width: ${(props) => props.theme.media.lg}) {
    position: relative;
    z-index: 0;
    width: 12.5rem;
    height: 12.5rem;
    background: url(${(props) => props.icon}) center;
    background-size: contain;
    border-radius: 0;

    ${StyledTitle} {
      position: absolute;
      font-size: ${(props) => props.theme.fontSize.lg};
      padding: 1rem;
      bottom: 0px;
      width: 100%;
      text-align: center;
    }
  }
`;

export default CategoryCard;
