import {
  FETCH_MY_TOP_ARTISTS_SUCCESS,
  FETCH_MY_TOP_TRACKS_SUCCESS,
} from './userActions';

const initialState = {
  topArtistsList: [],
  topTracksList: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
