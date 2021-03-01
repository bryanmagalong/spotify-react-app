import { SEARCH_ON_CHANGE } from './searchActions';

const initialState = {
  value: '',
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_ON_CHANGE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
