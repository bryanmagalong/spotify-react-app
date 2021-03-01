import {
  FETCH_PLAYLISTS,
  fetchPlaylistsSuccess,
  FETCH_PLAYLIST_BY_ID,
  fetchPlaylistByIdSuccess,
} from './playlistActions';
import { get } from '../../utils/api';
import { setError } from '../errors/errorActions';

const playlistMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      try {
        const params = action.payload ? { params: { ...action.payload } } : {};
        const data = await get(
          'https://api.spotify.com/v1/me/playlists',
          params,
        );

        const playlists = [ ...data.items ].map((item) => {
          return {
            id: item.id,
            href: item.href,
            type: item.type,
            name: item.name,
            images: item.images[0].url,
            owner: item.owner,
          };
        });

        // console.log(data.items);
        store.dispatch(fetchPlaylistsSuccess(playlists));
      } catch (error) {
        console.log(error);
      }
      return next(action);
    case FETCH_PLAYLIST_BY_ID:
      try {
        const playlistId = action.payload;
        const data = await get(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
        );

        const playlist = { ...data, images: data.images[0].url };
        store.dispatch(fetchPlaylistByIdSuccess(playlist));
        console.log(playlist);
      } catch (error) {
        if (error.response.status === 404);
        store.dispatch(
          setError({ message: 'Playlist introuvable!', statusCode: 404 }),
        );
      }
      return next(action);
    default:
      return next(action);
  }
};

export default playlistMiddleware;
