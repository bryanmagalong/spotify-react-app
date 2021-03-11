import {
  FETCH_PLAYLISTS,
  fetchPlaylistsSuccess,
  FETCH_PLAYLIST_BY_ID,
  fetchPlaylistByIdSuccess,
} from './playlistActions';
import { get } from '../../utils/api';
import { setError } from '../errors/errorActions';
import { msToMinutesAndSeconds } from '../../utils/functions';

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

        const playlist = {
          id: data.id,
          name: data.name,
          description: data.description,
          type: data.type,
          image: data.images[0].url,
          owner: data.owner.display_name,
          ownerUrl: data.owner.external_urls.spotify,
          followers: data.followers.total.toLocaleString(),
        };

        const trackList = [ ...data.tracks.items ].map((item) => ({
          added_at: item.added_at,
          duration: msToMinutesAndSeconds(item.track.duration_ms),
          id: item.track.id,
          name: item.track.name,
          explicit: item.track.explicit,
          artist: {
            name: item.track.artists[0].name,
            id: item.track.artists[0].id,
            url: item.track.artists[0].external_urls.spotify,
          },
          album: {
            name: item.track.album.name,
            id: item.track.album.id,
          },
          images: item.track.album.images[2],
        }));

        store.dispatch(fetchPlaylistByIdSuccess({ playlist, trackList }));
        console.log(playlist);
      } catch (error) {
        console.log(error);
        if (error.response.status === 404);
        store.dispatch(
          setError({ message: 'Playlist introuvable!', status: 404 }),
        );
      }
      return next(action);
    default:
      return next(action);
  }
};

export default playlistMiddleware;
