import { fetchAlbumByIdSuccess, FETCH_ALBUM_BY_ID } from './albumActions';
import { setError } from '../errors/errorActions';
import { get } from '../../utils/api';

const albumMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_ALBUM_BY_ID:
      try {
        const albumId = action.payload;
        const data = await get(`https://api.spotify.com/v1/albums/${albumId}`);

        const album = {
          name: data.name,
          image: data.images[0].url,
          owner: data.artists[0].name,
          ownerUrl: data.artists[0].external_urls.spotify,
          album_type: data.album_type,
          type: data.type,
          total_tracks: data.total_tracks,
          release_year: data.release_date.split('-')[0],
        };

        const trackList = [ ...data.tracks.items ];
        const copyrights = data.copyrights.map((item) => item.text);

        store.dispatch(fetchAlbumByIdSuccess({ album, trackList, copyrights }));
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

export default albumMiddleware;
