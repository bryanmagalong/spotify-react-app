/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PLAYLISTS, fetchPlaylistSuccess } from './playlistActions';
import { get } from '../../utils/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      try {
        const urlAPI = 'https://api.spotify.com/v1/me/playlists';
        const data = await get(urlAPI, '');
        const playlists = [ ...data.items ].map((item) => {
          return {
            id: item.id,
            href: item.href,
            name: item.name,
            images: item.images[0].url,
            owner: item.owner,
          };
        });

        console.log(playlists);
        store.dispatch(fetchPlaylistSuccess(playlists));
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      return next(action);
  }
};
