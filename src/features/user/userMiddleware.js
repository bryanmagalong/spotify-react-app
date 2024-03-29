import {
  fetchMyTopArtistsSuccess,
  fetchMyTopTracksSuccess,
  fetchMyPlaylistsSuccess,
  fetchCurrentUserSuccess,
  FETCH_MY_TOP_ARTISTS,
  FETCH_MY_TOP_TRACKS,
  FETCH_MY_PLAYLISTS,
  FETCH_CURRENT_USER,
} from './userActions';
import { get } from '../../utils/api';
import { setError } from '../errors/errorActions';
import { msToMinutesAndSeconds } from '../../utils/functions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      try {
        const data = await get('https://api.spotify.com/v1/me');

        const userProfile = {
          name: data.display_name,
          id: data.id,
          followers: data.followers.total,
          type: data.type,
          image: data.images[0].url,
        };

        store.dispatch(fetchCurrentUserSuccess(userProfile));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }
      return next(action);
    case FETCH_MY_PLAYLISTS:
      try {
        const limit = action.payload ? `?limit=${action.payload}` : '';
        const data = await get(
          `https://api.spotify.com/v1/me/playlists${limit}`,
        );

        const playlists = {
          items: [ ...data.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              images: item.images.length
                ? item.images[0].url
                : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
              owner: item.owner,
            };
          }),
          total: data.total,
        };

        store.dispatch(fetchMyPlaylistsSuccess(playlists));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }
      return next(action);
    case FETCH_MY_TOP_TRACKS:
      try {
        const limit = action.payload ? `?limit=${action.payload}` : '';
        const data = await get(
          `https://api.spotify.com/v1/me/top/tracks${limit}`,
        );

        const myTopTracks = {
          items: [ ...data.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              preview_url: item.preview_url,
              explicit: item.explicit,
              duration: msToMinutesAndSeconds(item.duration_ms),
              album: {
                name: item.album.name,
                id: item.album.id,
              },
              image: item.album.images[2],
              artist: {
                name: item.artists[0].name,
                id: item.artists[0].id,
                url: item.artists[0].external_urls.spotify,
              },
              owner: item.owner,
            };
          }),
          total: data.total,
        };

        store.dispatch(fetchMyTopTracksSuccess(myTopTracks));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);

        store.dispatch(
          setError({
            message: error.message,
            status: error.response.status,
          }),
        );
      }
      break;
    case FETCH_MY_TOP_ARTISTS:
      try {
        const limit = action.payload ? `?limit=${action.payload}` : '';
        const data = await get(
          `https://api.spotify.com/v1/me/top/artists${limit}`,
        );

        const myTopArtists = {
          items: [ ...data.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              images: item.images.length
                ? item.images[0].url
                : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
            };
          }),
          total: data.total,
        };

        store.dispatch(fetchMyTopArtistsSuccess(myTopArtists));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);

        store.dispatch(
          setError({
            message: error.message,
            status: error.response.status,
          }),
        );
      }
      break;
    default:
      return next(action);
  }
};

export default userMiddleware;
