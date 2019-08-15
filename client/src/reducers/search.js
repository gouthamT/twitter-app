import {
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS,
  SET_FAVORITE_TWEET
} from '../constants/actionConstants';

import { transformSourceTweets } from '../models/tweets/tweetModel';

const DefaultState = { isActive: false, searchParams: {}, tweets: [], sourceTweets: [] };

const search = (state = { ...DefaultState }, action) => {
  switch (action.type) {
  case SET_SEARCH_RESULTS:
    return {
      ...state,
      isActive: true,
      sourceTweets: action.data.tweets ? action.data.tweets.statuses : [],
      tweets: action.data.tweets ? transformSourceTweets(action.data.tweets.statuses) : [],
      searchParams: action.data.tweets ? action.data.tweets.search_metadata : {}
    };
  case CLEAR_SEARCH_RESULTS:
    return { ...DefaultState };
    
  case SET_FAVORITE_TWEET: {
    if (action.id && state.tweets && state.tweets) {
      let actionedTweetIdx = state.tweets.findIndex(t => t.id === action.id);
      if (actionedTweetIdx > -1) { state.tweets[actionedTweetIdx].favorited = !state.tweets[actionedTweetIdx].favorited; }
    }
    return {...state};
  }

  default:
    return state;
  }
};

export default search;
