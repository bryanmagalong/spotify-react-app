import {
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLIST_BY_ID_SUCCESS,
} from './playlistActions';

const initialState = {
  list: [],
  playlist: {},
  trackList: [],
};

const playlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        list: [ ...action.payload ],
      };
    case FETCH_PLAYLIST_BY_ID_SUCCESS:
      return {
        ...state,
        playlist: { ...action.payload.playlist },
        trackList: [ ...action.payload.trackList ],
      };
    default:
      return state;
  }
};

export default playlistReducer;
