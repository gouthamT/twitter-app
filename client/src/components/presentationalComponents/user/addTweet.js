import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {  HomeRoute } from '../../../constants/routeConstants';
import { addTweetAsync, getUserTweetsAsync } from '../../../async/RequestHelper';
import { setAppStatusToLoading, setAppStatusToReady, setCurrentUserContext } from '../../../actions';
import modalService from '../../../helpers/modalService';

function AddTweet(props) {
  const [value, setValue] = useState('');

  const onsubmit = (event) => {
    if (!IsSearchValid()) return;
    event && event.preventDefault();
    props.setAppStatusToLoading();
    modalService.hide();
    props.addTweet(value).then(() => {
      getUserTweetsAsync(props.user.displayName || '').then((response) => {
        response && props.updateUserContext(response.data);
      });
    }).finally(() => {
      props.setAppStatusToReady();
    });
  };

  const IsSearchValid = () => {
    return value && value.match(/^(?!\s*$).+/igm);
  };
  
  const closeModal =() => {
    modalService.hide();
  };
  
  if(!props.user || !props.user.displayName)
    return <article className='user__not--athorized'>
      <p>Not Authorized</p>
      <NavLink to={HomeRoute} onClick={closeModal}>Please Login</NavLink>
    </article>;

  return <section className='section__add-tweet'>
    <form onSubmit={onsubmit} className="form__add-tweet" autoComplete='off'>
      <textarea id="textareaAddTweet" placeholder='add tweet' onChange={e => setValue(e.target.value)} value={value}
        autoComplete='off' type='text' className="textarea--add-tweet"></textarea>
      <button id='btnAddTweet' data-disabled={!IsSearchValid()} className='btn btn--add-tweet'>tweet</button>
    </form>
  </section>;
}

AddTweet.propTypes = {
  addTweet: PropTypes.func.isRequired,
  updateUserContext: PropTypes.func.isRequired,
  setAppStatusToLoading: PropTypes.func.isRequired,
  setAppStatusToReady: PropTypes.func.isRequired,
  user: PropTypes.object
};

AddTweet.defaultProps = {
  addTweet: null
};

const mapDispatchToProps = dispatch => {
  return {
    addTweet(data) {
      return addTweetAsync(data);
    },
    updateUserContext(data) {
      dispatch(setCurrentUserContext(data));
    },
    setAppStatusToLoading() {
      dispatch(setAppStatusToLoading());
    },
    setAppStatusToReady() {
      dispatch(setAppStatusToReady());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.app.user ? state.app.user.context : undefined
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTweet);