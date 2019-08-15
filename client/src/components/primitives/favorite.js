/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavoriteTweet } from '../../actions/index';
import { favoriteTweet } from '../../async/RequestHelper';

function Favorite(props) {
  useEffect(() => {}, [props.tweet]);

  const onFavoriteClick = () =>  {
    if(!props || !props.tweet || !props.tweet.id) return;
    favoriteTweet(props.tweet.id).finally(() => {
      props.setFavorite(props.tweet.id);
    });
  };

  return <div className={props.css} onClick={onFavoriteClick}>
    <svg width={`${props.width}%`} height={`${props.height}%`} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" style={{'enableBackground':'new 0 0 50 50'}} xmlSpace="preserve">
      <path style={{'fill':`${props.tweet.favorited && '#1da1f2'}`}} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" />
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  </div>;
}

Favorite.propTypes = {
  css: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  tweet: PropTypes.object.isRequired,
  setFavorite: PropTypes.func.isRequired
};

Favorite.defaultProps = {
  css: '',
  width: '10',
  height: '10',
  isFavorite: false,
  tweet: null
};


const mapDispatchToProps = dispatch => {
  return {
    setFavorite(id) {
      dispatch(setFavoriteTweet(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Favorite);