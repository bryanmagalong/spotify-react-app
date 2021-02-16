/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PLAYLISTS, fetchPlaylistSuccess } from './playlistActions';
import { get } from '../../utils/api';

export default (store) => (next) => async (action) => {
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
        store.dispatch(fetchPlaylistSuccess(playlists));
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      return next(action);
  }
};
