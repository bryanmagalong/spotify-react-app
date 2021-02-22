import {
  fetchMyTopArtistsSuccess,
  fetchMyTopTracksSuccess,
  FETCH_MY_TOP_ARTISTS,
  FETCH_MY_TOP_TRACKS,
} from './userActions';
import { get } from '../../utils/api';
import { setError } from '../errors/errorActions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_MY_TOP_TRACKS:
      try {
        const params = action.payload ? { params: { ...action.payload } } : {};
        const data = await get(
          'https://api.spotify.com/v1/me/top/tracks',
          params,
        );

        const myTopTracks = [ ...data.items ].map((item) => {
          return {
            id: item.id,
            href: item.href,
            type: item.type,
            name: item.name,
            album: item.album.name,
            images: item.album.images[0].url,
            owner: item.owner,
          };
        });

        store.dispatch(fetchMyTopTracksSuccess(myTopTracks));
      } catch (error) {
        if (error.response.status === 403)
          store.dispatch(
            setError("Vous n'avez pas les droits d'accès à cette ressource."),
          );
      }
      break;
    case FETCH_MY_TOP_ARTISTS:
      try {
        const params = action.payload ? { params: { ...action.payload } } : {};
        const data = await get(
          'https://api.spotify.com/v1/me/top/artists',
          params,
        );

        const myTopArtists = [ ...data.items ].map((item) => {
          return {
            id: item.id,
            href: item.href,
            type: item.type,
            name: item.name,
            images: item.images[0].url,
          };
        });

        store.dispatch(fetchMyTopArtistsSuccess(myTopArtists));
      } catch (error) {
        if (error.response.status === 403)
          store.dispatch(
            setError("Vous n'avez pas les droits d'accès à cette ressource."),
          );
      }
      break;
    default:
      return next(action);
  }
};

export default userMiddleware;
