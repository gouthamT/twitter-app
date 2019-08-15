import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import '../styles/App.scss';
import NavBar from './presentationalComponents/nav/nav';
import Spinner from './containers/app/Spinner';
import Search from './containers/search/search';
import User from './containers/user/user';
import { SearchRoute, HomeRoute } from '../constants/routeConstants';
import Modal from '../components/containers/modal/modalFactory';

const NotFound = () => (
  <article className='app__not-found'>
    <p>Not Found :(</p>
    <Link to={HomeRoute}>Go to Home</Link>
  </article>
);

class App extends Component {  
  render() {
    return (
      <Fragment>
        <Router>
          <header className="app__header">
            <NavBar />
            <Spinner />
            <Modal />
          </header>
          <main>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to={HomeRoute} />;
              }}
            />
            <Route
              render={({ location }) => (
                <Switch location={location}>
                  <Route path={HomeRoute} exact component={User} />
                  <Route path={SearchRoute} exact component={Search} />
                  <Route path="*" component={NotFound} />
                </Switch>
              )}
            />
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default hot(App);
