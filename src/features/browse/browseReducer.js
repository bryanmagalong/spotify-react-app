import {
  FETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_COLOR_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS,
  FETCH_NEW_RELEASES_SUCCESS,
} from './browseActions';

const initialState = {
  categories: [],
  playlists: [],
  newReleases: {
    items: [],
    total: 0,
  },
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
    case FETCH_CATEGORY_COLOR_SUCCESS:
      return {
        ...state,
        categories: [ ...state.categories ].map((category) => ({
          ...category,
          imageUrl:
            action.payload.id === category.id
              ? action.payload.url
              : category.imageUrl,
        })),
      };
    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        newReleases: {
          items: [ ...action.payload.items ],
          total: action.payload.total,
        },
      };
    default:
      return state;
  }
};

export default browseReducer;
