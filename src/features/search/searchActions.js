export const SEARCH_ON_CHANGE = 'SEARCH_ON_CHANGE';
export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';

export const searchOnChange = (payload) => ({
  type: SEARCH_ON_CHANGE,
  payload,
});

export const fetchSearchResults = (payload) => ({
  type: FETCH_SEARCH_RESULTS,
  payload,
});

export const fetchSearchResultsSuccess = (payload) => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload,
});
