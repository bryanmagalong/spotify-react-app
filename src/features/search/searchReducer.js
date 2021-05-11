import {
  FETCH_SEARCH_ALBUMS_SUCCESS,
  FETCH_SEARCH_ARTISTS_SUCCESS,
  FETCH_SEARCH_PLAYLISTS_SUCCESS,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_TRACKS_SUCCESS,
  SEARCH_ON_CHANGE,
} from './searchActions';

const initialState = {
  value: '',
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
          items: [ ...action.payload.albums.items ],
          total: action.payload.albums.total,
        },
        artists: {
          items: [ ...action.payload.artists.items ],
          total: action.payload.artists.total,
        },
        tracks: {
          items: [ ...action.payload.tracks.items ],
          total: action.payload.tracks.total,
        },
        playlists: {
          items: [ ...action.payload.playlists.items ],
          total: action.payload.playlists.total,
        },
      };
    case FETCH_SEARCH_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: {
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };

    case FETCH_SEARCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: {
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    case FETCH_SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: {
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    case FETCH_SEARCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: {
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
