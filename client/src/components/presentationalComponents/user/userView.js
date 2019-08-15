import React from 'react';
import PropTypes from 'prop-types';

function userView({ user }) {
  if (!user || !user.name) { return null; }
  return (<article className='user-profile__section'>
    <h1 className='user-profile___header'>
      <img className='user-profile__user--background' src={user.backgroundImage} alt=""></img>
      <img className="avatar user-profile__user--avatar" src={user.image} alt="" data-bg={Boolean(user.backgroundImage)}></img>
    </h1>
    <section className='user-profile___display'>
      <b className='user-profile___display--author'>{user.name}</b>
      <br />
      <b className='user-profile___display--author__screen--name'>@{user.displayName}</b>
    </section>
    <section>
      <ol className='user-profile__counts'>
        <li key={`${user.id}-tweets`}><span>tweets</span> <b>{user.tweetsCount}</b></li>
        <li key={`${user.id}-friends`}><span>friends</span> <b>{user.followersCount}</b></li>
        <li key={`${user.id}-followers`}><span>followers</span> <b>{user.friendsCount}</b></li>
      </ol>
    </section>
  </article>);
}

userView.propTypes = {
  user: PropTypes.object.isRequired
};

userView.defaultProps = {
  user: {}
};

export default userView;