import axios from 'axios';
import configuration from '../../env/environment';

const { search, user, tweet, favorite } = configuration.endPoints;
const SUCCESS_RES = { success: true }, ERROR_RES = { success: false };

export async function searchAsync(queryString) {
  let result = {};
  await axios
    .get(`${search}${queryString || ''}`)
    .then(function({data}) {
      result = { ...SUCCESS_RES, tweets: data.tweets };
    })
    .catch(function() {
      result = { ...ERROR_RES, tweets: null };
    });
  return result;
}

export async function addTweetAsync(queryString) {
  let result = {};
  await axios
    .post(tweet, {payload: queryString})
    .then(function({data}) {
      result = { ...SUCCESS_RES, tweet: data.tweet };
    })
    .catch(function() {
      result = { ...ERROR_RES, tweet: null };
    });
  return result;
}

export async function getUserTweetsAsync(queryString) {
  let result = {};
  await axios
    .get(`${user}${queryString || ''}`)
    .then(function({data}) {
      result = { ...SUCCESS_RES, data: { user: data.user, tweets: data.tweets } };
    })
    .catch(function() {
      result = { ...ERROR_RES, data: { user: { name: queryString }, tweets: null } };
    });
  return result;
}

export async function favoriteTweet(id) {
  let result = {};
  await axios
    .post(`${favorite}`, {id: id})
    .then(function({data}) {
      result = { ...SUCCESS_RES, data: { tweet: data.tweet } };
    })
    .catch(function() {
      result = { ...ERROR_RES, data: { tweet: null } };
    });
  return result;
}