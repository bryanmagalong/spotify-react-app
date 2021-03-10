import { fetchAlbumByIdSuccess, FETCH_ALBUM_BY_ID } from './albumActions';
import { setError } from '../errors/errorActions';
import { get } from '../../utils/api';

const albumMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_ALBUM_BY_ID:
      console.log('//========== Album Middleware');
      const albumId = action.payload;

      try {
        const data = await get(`https://api.spotify.com/v1/albums/${albumId}`);
        // console.log(data);

        const album = {
          name: data.name,
          images: data.images[0].url,
          owner: data.artists[0].name,
          ownerUrl: data.artists[0].external_urls.spotify,
          album_type: data.album_type,
          type: data.type,
          total_tracks: data.total_tracks,
          copyrights: [ ...data.copyrights ],
        };

        const trackList = [ ...data.tracks.items ];

        // console.log(album);
        // console.log(trackList);

        store.dispatch(fetchAlbumByIdSuccess({ album, trackList }));
      } catch (error) {
        console.log(error);
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

export default albumMiddleware;
