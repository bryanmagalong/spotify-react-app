import { FETCH_ALL_CATEGORIES_SUCCESS } from './browseActions';

const initialState = {
  categories: [],
};

const browseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [ ...action.payload ],
      };
    default:
      return state;
  }
};

export default browseReducer;
