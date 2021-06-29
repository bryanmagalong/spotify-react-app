export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES';
export const FETCH_ALL_CATEGORIES_SUCCESS = 'FETCH_ALL_CATEGORIES_SUCCESS';
export const FETCH_CATEGORY_PLAYLISTS_BY_ID = 'FETCH_CATEGORY_PLAYLISTS_BY_ID';
export const FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS =
  'FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS';
export const FETCH_CATEGORY_COLOR = 'FETCH_CATEGORY_COLOR';
export const FETCH_CATEGORY_COLOR_SUCCESS = 'FETCH_CATEGORY_COLOR_SUCCESS';
export const FETCH_NEW_RELEASES = 'FETCH_NEW_RELEASES';
export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS';

export const fetchAllCategories = () => ({
  type: FETCH_ALL_CATEGORIES,
});

export const fetchAllCategoriesSuccess = (payload) => ({
  type: FETCH_ALL_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoryPlaylistsById = (payload) => ({
  type: FETCH_CATEGORY_PLAYLISTS_BY_ID,
  payload,
});

export const fetchCategoryPlaylistsByIdSuccess = (payload) => ({
  type: FETCH_CATEGORY_PLAYLISTS_BY_ID_SUCCESS,
  payload,
});

export const fetchCategoryColor = (payload) => ({
  type: FETCH_CATEGORY_COLOR,
  payload,
});

export const fetchCategoryColorSuccess = (payload) => ({
  type: FETCH_CATEGORY_COLOR_SUCCESS,
  payload,
});

export const fetchNewReleases = (payload) => ({
  type: FETCH_NEW_RELEASES,
  payload,
});

export const fetchNewReleasesSuccess = (payload) => ({
  type: FETCH_NEW_RELEASES_SUCCESS,
  payload,
});
