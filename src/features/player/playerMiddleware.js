import { get } from '../../utils/api';
import {
  fetchUserCurrentPlaybackInfoSuccess,
  FETCH_USER_CURRENT_PLAYBACK_INFO,
  playSong,
  START_NEW_PLAYBACK,
} from './playerActions';

const playerMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USER_CURRENT_PLAYBACK_INFO:
      try {
        const data = await get(`https://api.spotify.com/v1/me/player`);

        const track = {
          id: data.item.id,
          name: data.item.name,
          artist: data.item.artists[0].name,
          preview_url: data.item.preview_url,
          image: data.item.album.images.length
            ? data.item.album.images[0].url
            : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
        };

        store.dispatch(fetchUserCurrentPlaybackInfoSuccess(track));
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }
      return next(action);
    case START_NEW_PLAYBACK:
      try {
        const data = await get(
          `https://api.spotify.com/v1/tracks/${action.payload}`,
        );

        const track = {
          id: data.id,
          name: data.name,
          artist: data.artists[0].name,
          preview_url: data.preview_url,
          image: data.album.images.length
            ? data.album.images[0].url
            : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
        };

        store.dispatch(fetchUserCurrentPlaybackInfoSuccess(track));
        if (track.preview_url !== null) store.dispatch(playSong());
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.log(error);
      }

      return next(action);
    default:
      return next(action);
  }
};

export default playerMiddleware;
