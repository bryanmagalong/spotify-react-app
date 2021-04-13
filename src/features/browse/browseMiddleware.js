import {
  fetchAllCategoriesSuccess,
  FETCH_ALL_CATEGORIES,
  fetchCategoryPlaylistsByIdSuccess,
  FETCH_CATEGORY_PLAYLISTS_BY_ID,
} from './browseActions';
import { get } from '../../utils/api';

const browseMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      try {
        const data = await get(
          'https://api.spotify.com/v1/browse/categories?country=FR&locale=fr_FR',
          {
            params: { limit: 40 },
          },
        );
        const categories = [ ...data.categories.items ];

        // console.log(data);
        store.dispatch(fetchAllCategoriesSuccess(categories));
      } catch (error) {
        console.log(error);
      }
      return next(action);
    case FETCH_CATEGORY_PLAYLISTS_BY_ID:
      try {
        const data = await get(
          `https://api.spotify.com/v1/browse/categories/${action.payload}/playlists`,
        );

        const data2 = await get(
          `https://api.spotify.com/v1/browse/categories/${action.payload}/`,
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
        const imageUrl = playlists[0].images;
        console.log(name);
        // console.log(playlists);
        store.dispatch(
          fetchCategoryPlaylistsByIdSuccess({ playlists, name, imageUrl }),
        );
      } catch (error) {
        console.og(error);
      }

      return next(action);
    default:
      return next(action);
  }
};

export default browseMiddleware;
