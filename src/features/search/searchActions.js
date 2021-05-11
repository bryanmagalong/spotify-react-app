export const SEARCH_ON_CHANGE = 'SEARCH_ON_CHANGE';
export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_TRACKS = 'FETCH_SEARCH_TRACKS';
export const FETCH_SEARCH_TRACKS_SUCCESS = 'FETCH_SEARCH_TRACKS_SUCCESS';
export const FETCH_SEARCH_ARTISTS = 'FETCH_SEARCH_ARTISTS';
export const FETCH_SEARCH_ARTISTS_SUCCESS = 'FETCH_SEARCH_ARTISTS_SUCCESS';
export const FETCH_SEARCH_ALBUMS = 'FETCH_SEARCH_ALBUMS';
export const FETCH_SEARCH_ALBUMS_SUCCESS = 'FETCH_SEARCH_ALBUMS_SUCCESS';
export const FETCH_SEARCH_PLAYLISTS = 'FETCH_SEARCH_PLAYLISTS';
export const FETCH_SEARCH_PLAYLISTS_SUCCESS = 'FETCH_SEARCH_PLAYLISTS_SUCCESS';

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

export const fetchSearchTracks = (payload) => ({
  type: FETCH_SEARCH_TRACKS,
  payload,
});

export const fetchSearchTracksSuccess = (payload) => ({
  type: FETCH_SEARCH_TRACKS_SUCCESS,
  payload,
});

export const fetchSearchArtists = (payload) => ({
  type: FETCH_SEARCH_ARTISTS,
  payload,
});

export const fetchSearchArtistsSuccess = (payload) => ({
  type: FETCH_SEARCH_ARTISTS_SUCCESS,
  payload,
});

export const fetchSearchAlbums = (payload) => ({
  type: FETCH_SEARCH_ALBUMS,
  payload,
});

export const fetchSearchAlbumsSuccess = (payload) => ({
  type: FETCH_SEARCH_ALBUMS_SUCCESS,
  payload,
});

export const fetchSearchPlaylists = (payload) => ({
  type: FETCH_SEARCH_PLAYLISTS,
  payload,
});

export const fetchSearchPlaylistsSuccess = (payload) => ({
  type: FETCH_SEARCH_PLAYLISTS_SUCCESS,
  payload,
});
