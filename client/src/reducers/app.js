import {
  SET_APP_STATUS_LOADING,
  SET_APP_STATUS_READY,
  SET_CURRENT_USER,
  SET_FAVORITE_TWEET
} from '../constants/actionConstants';
import { transformSource as user } from '../models/user/userModel';

const DefaultState = { isLoading: false, user: undefined };

const app = (state = { ...DefaultState }, action) => {
  switch (action.type) {
  case SET_APP_STATUS_LOADING:
    return {
      ...state,
      isLoading: true
    };

  case SET_CURRENT_USER:
    return {
      ...state,
      user: new user(action.data)
    };

  case SET_APP_STATUS_READY:
    return { ...state, isLoading: false };

  case SET_FAVORITE_TWEET: {
    if (action.id && state.user && state.user.tweets) {
      let actionedTweetIdx = state.user.tweets.findIndex(t => t.id === action.id);
      if (actionedTweetIdx > -1) { state.user.tweets[actionedTweetIdx].favorited = !state.user.tweets[actionedTweetIdx].favorited; }
    }
    return {...state};
  }

  default: 
    return state;
  }
};

export default app;
