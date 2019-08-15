import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchResults, setAppStatusToLoading, setAppStatusToReady, clearSearchResults } from '../../../actions';
import { searchAsync } from '../../../async/RequestHelper';
import SearchForm from '../../presentationalComponents/search/searchForm';
import TweetsViewList from '../../presentationalComponents/search/tweetViewList';

class SearchContainer extends Component {
  
  componentDidMount() {
    this.props.clearSearchResults();
  }

  search(inputValue) {
    let self = this;
    self.props.setAppStatusToLoading();
    searchAsync(inputValue || '').then(function (response) {
      self.props.setSearchResults(response);
    }).finally(() => {
      self.props.setAppStatusToReady();
    });
  }

  render() {
    return <Fragment>
      <SearchForm onSearch={this.search.bind(this)} value="reactjs"/>
      <TweetsViewList tweets={this.props.tweets} isSearchPerformed={this.props.isSearchPerformed}/>
    </Fragment>;
  }
}

SearchContainer.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setAppStatusToLoading: PropTypes.func.isRequired,
  setAppStatusToReady: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
  tweets: PropTypes.array.isRequired,
  isSearchPerformed: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    tweets: state.search.tweets,
    isSearchPerformed: state.search.isActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchResults(data) {
      dispatch(setSearchResults(data));
    },
    clearSearchResults() {
      dispatch(clearSearchResults());
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
)(SearchContainer);
