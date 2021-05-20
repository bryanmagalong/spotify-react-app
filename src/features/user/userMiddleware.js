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
        console.log(error);
      }
      return next(action);
    case FETCH_MY_PLAYLISTS:
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

        const extend = data.next
          ? 'https://api.spotify.com/v1/me/playlists '
          : null;
        // console.log(data);
        store.dispatch(fetchMyPlaylistsSuccess({ playlists, extend }));
      } catch (error) {
        console.log(error);
      }
      return next(action);
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
            explicit: item.explicit,
            duration: msToMinutesAndSeconds(item.duration_ms),
            album: {
              name: item.album.name,
              id: item.album.id,
            },
            images: item.album.images[2],
            artist: {
              name: item.artists[0].name,
              id: item.artists[0].id,
              url: item.artists[0].external_urls.spotify,
            },
            owner: item.owner,
          };
        });

        store.dispatch(fetchMyTopTracksSuccess(myTopTracks));
      } catch (error) {
        console.log(error);
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
            images: item.images.length
              ? item.images[0].url
              : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
          };
        });

        store.dispatch(fetchMyTopArtistsSuccess(myTopArtists));
      } catch (error) {
        console.log(error);
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
