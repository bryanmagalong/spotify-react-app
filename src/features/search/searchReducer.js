import {
  FETCH_SEARCH_RESULTS_SUCCESS,
  SEARCH_ON_CHANGE,
} from './searchActions';

const initialState = {
  value: '',
  limit: 6,
  albums: {
    items: [],
    total: 0,
  },
  artists: {
    items: [],
    total: 0,
  },
  tracks: {
    items: [],
    total: 0,
  },
  playlists: {
    items: [],
    total: 0,
  },
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_ON_CHANGE:
      return {
        ...state,
        value: action.payload,
      };
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        albums: {
          items: [ ...action.payload.albums.items ].slice(0, state.limit),
          total: action.payload.albums.total,
        },
        artists: {
          items: [ ...action.payload.artists.items ].slice(0, state.limit),
          total: action.payload.artists.total,
        },
        tracks: {
          items: [ ...action.payload.tracks.items ].slice(0, state.limit),
          total: action.payload.tracks.total,
        },
        playlists: {
          items: [ ...action.payload.playlists.items ].slice(0, state.limit),
          total: action.payload.playlists.total,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
