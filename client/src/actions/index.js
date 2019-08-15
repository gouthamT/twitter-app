import {
  SET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS,
  SET_APP_STATUS_LOADING,
  SET_APP_STATUS_READY,
  SET_CURRENT_USER,
  SET_FAVORITE_TWEET
} from '../constants/actionConstants';

export const setSearchResults = data => ({
  type: SET_SEARCH_RESULTS,
  data
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export const setAppStatusToLoading = () => ({
  type: SET_APP_STATUS_LOADING
});

export const setAppStatusToReady = () => ({
  type: SET_APP_STATUS_READY
});

export const setCurrentUserContext = data => ({
  type: SET_CURRENT_USER,
  data
});

export const setFavoriteTweet = id => ({
  type: SET_FAVORITE_TWEET,
  id
});