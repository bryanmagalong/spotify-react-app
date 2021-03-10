import { FETCH_ALBUM_BY_ID } from './albumActions';

const albumMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_ALBUM_BY_ID:
      console.log('Album Middleware');
      return next(action);
    default:
      return next(action);
  }
};

export default albumMiddleware;
