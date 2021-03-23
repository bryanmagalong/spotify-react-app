export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const FETCH_ALL_CATEGORIES_SUCCESS = 'FETCH_ALL_CATEGORIES_SUCCESS';

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES,
});

export const fetchAllCategoriesSuccess = (payload) => ({
  type: FETCH_ALL_CATEGORIES_SUCCESS,
  payload,
});
