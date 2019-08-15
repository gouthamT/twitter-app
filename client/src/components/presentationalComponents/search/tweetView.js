import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Favorite from '../../primitives/favorite';

function tweetView({ tweet }) {
  useEffect(() => {}, tweet);
  return (<li className='tweet__list-item'>
    <article className='tweet-message'>
      <h1 className='tweet-message__head'>
        <img className="avatar tweet-message_user--avatar" src={tweet.image} alt=""></img>
        <br />
      </h1>
      <p className='tweet-message__display'>
        <b className='tweet-message__display--author'>{tweet.displayName}</b>
        <br />
        <span className='tweet-message__display--timeStamp'>{tweet.timeStamp}</span>
      </p>
      <p className='tweet-message__display-label'>
        {tweet.label}
      </p>
      <Favorite isFavorite={tweet.favorited} tweet={tweet} css='tweet-favorite' width='100' height='100' />
    </article>
  </li>);
}

tweetView.propTypes = {
  tweet: PropTypes.object.isRequired
};

tweetView.defaultProps = {
  tweet: {}
};

export default tweetView;