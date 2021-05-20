import { get } from '../../utils/api';
import {
  fetchUserCurrentPlaybackInfoSuccess,
  FETCH_USER_CURRENT_PLAYBACK_INFO,
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
        const context = { ...data.context };

        store.dispatch(
          fetchUserCurrentPlaybackInfoSuccess({
            track: track,
            context: context,
          }),
        );
      } catch (error) {
        console.log(error);
      }
      return next(action);
    default:
      return next(action);
  }
};

export default playerMiddleware;
