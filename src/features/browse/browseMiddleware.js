import axios from 'axios';
import {
  fetchAllCategoriesSuccess,
  FETCH_ALL_CATEGORIES,
  fetchCategoryPlaylistsByIdSuccess,
  FETCH_CATEGORY_PLAYLISTS_BY_ID,
  FETCH_CATEGORY_COLOR,
  fetchCategoryColorSuccess,
  FETCH_NEW_RELEASES,
  fetchNewReleasesSuccess,
} from './browseActions';
import { get } from '../../utils/api';

const browseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      try {
        const params = {
          limit: 40,
        };
        const data = await get(
          'https://api.spotify.com/v1/browse/categories?country=FR&locale=fr_FR',
          params,
        );
        const categories = [ ...data.categories.items ].map((category) => ({
          ...category,
          imageUrl: '',
        }));

        store.dispatch(fetchAllCategoriesSuccess(categories));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }
      return next(action);
    case FETCH_CATEGORY_PLAYLISTS_BY_ID:
      try {
        const data = await get(
          `https://api.spotify.com/v1/browse/categories/${action.payload}/playlists?country=FR&locale=fr_FR`,
        );

        const data2 = await get(
          `https://api.spotify.com/v1/browse/categories/${action.payload}?country=FR&locale=fr_FR`,
        );

        const playlists = [ ...data.playlists.items ].map((item) => {
          return {
            id: item.id,
            href: item.href,
            type: item.type,
            name: item.name,
            images: item.images[0].url,
            owner: item.owner,
          };
        });
        const name = data2.name;
        const imageUrl = playlists[0]
          ? playlists[0].images
          : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png';

        store.dispatch(
          fetchCategoryPlaylistsByIdSuccess({ playlists, name, imageUrl }),
        );
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }

      return next(action);
    case FETCH_CATEGORY_COLOR:
      try {
        const params = { ...action.payload.params };
        const data = await get(
          `https://api.spotify.com/v1/browse/categories/${action.payload
            .id}/playlists?country=FR&locale=fr_FR`,
          params,
        );

        const { url } = data.playlists.items[0].images[0];
        store.dispatch(
          fetchCategoryColorSuccess({ id: action.payload.id, url }),
        );
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error.message);
        }
        else {
          if (process.env.NODE_ENV === 'development') console.log(error);
        }
      }

      return next(action);
    case FETCH_NEW_RELEASES:
      try {
        const data = await get(
          'https://api.spotify.com/v1/browse/new-releases?limit=6',
        );

        const newReleases = {
          items: [ ...data.albums.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              owner: item.artists[0].name,
              images: item.images.length
                ? item.images[0].url
                : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
            };
          }),
          total: data.albums.total,
        };

        store.dispatch(fetchNewReleasesSuccess(newReleases));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }
      return next(action);
    default:
      return next(action);
  }
};

export default browseMiddleware;
