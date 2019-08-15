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
    let tweets;
    if (action.id && state.user && state.user.tweets) {
      tweets = state.user.tweets.map(tweet => {
        if(tweet && tweet.id === action.id) {
          tweet.favorited = !tweet.favorited;
        }
        return tweet;
      })
    }
    return {...state, user: {...state.user, tweets}};
  }

  default:
    return state;
  }
};

export default search;
