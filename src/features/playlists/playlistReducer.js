import { FETCH_PLAYLISTS_SUCCESS } from './playlistActions';

const initialState = {
  playlists: [],
};

const playlistsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: [ ...action.payload ],
      };
    default:
      return state;
  }
};

export default playlistsReducer;
