import {
  FETCH_MY_TOP_ARTISTS_SUCCESS,
  FETCH_MY_TOP_TRACKS_SUCCESS,
  FETCH_MY_PLAYLISTS_SUCCESS,
  FETCH_CURRENT_USER_SUCCESS,
} from './userActions';

const initialState = {
  profile: null,
  playlists: {
    items: [],
    extend: null,
  },
  topArtistsList: [],
  topTracksList: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        profile: { ...action.payload }
      };
    case FETCH_MY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: {
          ...state.playlists,
          items: [ ...action.payload.playlists ],
          extend: action.payload.extend,
        },
      };
    case FETCH_MY_TOP_ARTISTS_SUCCESS:
      return {
        ...state,
        topArtistsList: [ ...action.payload ],
      };
    case FETCH_MY_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        topTracksList: [ ...action.payload ],
      };
    default:
      return state;
  }
};

export default userReducer;
