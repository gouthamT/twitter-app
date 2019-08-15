import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentUserContext, setAppStatusToLoading, setAppStatusToReady } from '../../../actions';
import { getUserTweetsAsync } from '../../../async/RequestHelper';
import SearchForm from '../../presentationalComponents/search/searchForm';
import UserView from '../../presentationalComponents/user/userView';
import TweetsViewList from '../../presentationalComponents/search/tweetViewList';

class UserContainer extends Component {
  search(inputValue) {
    let self = this;
    self.props.setAppStatusToLoading();
    getUserTweetsAsync(inputValue || '').then(function (response) {
      response && self.props.setCurrentUser(response.data);
    }).finally(() => {
      self.props.setAppStatusToReady();
    });
  }

  render() {
    if (!this.props.user) {
      return <SearchForm onSearch={this.search.bind(this)} label='Login' value='GT20440400' placeHolder='User Name...' />;
    }
    return <section className="user">
      <UserView user={this.props.user}/>
      <TweetsViewList isSearchPerformed={true} tweets={this.props.tweetsByUser}/>
    </section>;
  }
}

UserContainer.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  tweetsByUser: PropTypes.array 
};

const mapStateToProps = (state) => {
  return {
    user: state.app.user ? state.app.user.context : undefined,
    tweetsByUser: state.app.user ? state.app.user.tweets : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser(data) {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
