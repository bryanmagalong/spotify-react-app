import {
  fetchAllCategoriesSuccess,
  FETCH_ALL_CATEGORIES,
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

        console.log(data);
        store.dispatch(fetchAllCategoriesSuccess(categories));
      } catch (error) {
        console.log(error);
      }
      return next(action);
    default:
      return next(action);
  }
};

export default browseMiddleware;
