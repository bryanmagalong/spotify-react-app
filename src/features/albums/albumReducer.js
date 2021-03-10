import { FETCH_ALBUM_BY_ID_SUCCESS } from './albumActions';
import { msToMinutesAndSeconds } from '../../utils/functions';

const initialState = {
  album: {},
  trackList: [],
};

const albumReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALBUM_BY_ID_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        album: { ...action.payload.album },
        trackList: [ ...action.payload.trackList ].map((item) => ({
          added_at: item.added_at,
          duration: msToMinutesAndSeconds(item.duration_ms),
          id: item.id,
          name: item.name,
          explicit: item.explicit,
          artist: {
            name: item.artists[0].name,
            id: item.artists[0].id,
            url: item.artists[0].external_urls.spotify,
          },
        })),
      };
    default:
      return state;
  }
};

export default albumReducer;
