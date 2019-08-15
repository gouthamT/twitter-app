import React from 'react';
import PropTypes from 'prop-types';
import TweetView from './tweetView';

const NoData = ({ label }) => (
  <section className="tweets__section">
    <article className='search__not-found'>
      <p>{label}</p>
    </article>
  </section>
);

NoData.propTypes = {
  label: PropTypes.string.isRequired
};

function tweetsViewList({ tweets, isSearchPerformed }) {
  if (!isSearchPerformed) return <NoData label='Please search :)' />;
  if (!tweets || !tweets.length) return <NoData label='No tweets found :(' />;
  return <section className='tweets__section'>
    <ul className='tweets__unorderd-list'>
      {
        tweets.map((tweet, id) => <TweetView key={id} tweet={tweet} />)
      }
    </ul>
  </section>;
}

tweetsViewList.propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearchPerformed: PropTypes.bool
};

tweetsViewList.defaultProps = {
  tweets: [],
  isSearchPerformed: false
};

export default tweetsViewList;