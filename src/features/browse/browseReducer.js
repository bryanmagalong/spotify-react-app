import {
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS,
} from './browseActions';

const initialState = {
  categories: [],
  playlists: [],
  categoryName: null,
  imageUrl: '',
};

const browseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [ ...action.payload ],
      };
    case FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS:
      return {
        ...state,
        playlists: [ ...action.payload.playlists ],
        categoryName: action.payload.name,
        imageUrl: action.payload.imageUrl,
      };
    default:
      return state;
  }
};

export default browseReducer;
