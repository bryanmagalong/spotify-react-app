import { get } from '../../utils/api';
import { msToMinutesAndSeconds } from '../../utils/functions';
import {
  fetchSearchResultsSuccess,
  FETCH_SEARCH_RESULTS,
} from './searchActions';

const searchMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      // Encoding spaces with "%20"
      const queryInput = action.payload.split(' ').join('%20');
      console.log(queryInput);
      try {
        const data = await get(
          `https://api.spotify.com/v1/search?q=${queryInput}&type=track,playlist,artist,album`,
        );

        console.log(data);

        const tracks = {
          items: [ ...data.tracks.items ].map((item) => {
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
          }),
          total: data.tracks.total,
        };

        const artists = {
          items: [ ...data.artists.items ].map((item) => {
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
          total: data.artists.total,
        };

        const albums = {
          items: [ ...data.albums.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              owner: item.artists[0].name,
              images: item.images.length
                ? item.images[0].url
                : 'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png',
            };
          }),
          total: data.albums.total,
        };

        const playlists = {
          items: [ ...data.playlists.items ].map((item) => {
            return {
              id: item.id,
              href: item.href,
              type: item.type,
              name: item.name,
              images: item.images[0].url,
              owner: item.owner,
            };
          }),
          total: data.playlists.total,
        };

        store.dispatch(
          fetchSearchResultsSuccess({ albums, artists, playlists, tracks }),
        );
      } catch (error) {
        console.log(error);
      }
      return next(action);
    default:
      return next(action);
  }
};
export default searchMiddleware;
