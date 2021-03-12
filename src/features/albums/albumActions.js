export const FETCH_ALBUM_BY_ID = 'FETCH_ALBUM_BY_ID';
export const FETCH_ALBUM_BY_ID_SUCCESS = 'FETCH_ALBUM_BY_ID_SUCCESS';

export const fetchAlbumById = (payload) => ({
  type: FETCH_ALBUM_BY_ID,
  payload,
});

export const fetchAlbumByIdSuccess = (payload) => ({
  type: FETCH_ALBUM_BY_ID_SUCCESS,
  payload,
});
