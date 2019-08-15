import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import combinedReducers from '../../reducers/index';
import { SearchRoute } from '../../constants/routeConstants';

const store = createStore(combinedReducers, applyMiddleware(thunk));

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.find('.app__header')).toHaveLength(1);
  });

  it('search laod search form by default', () => {
    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app.find('.form__search')).toHaveLength(1);
  });

  it('search route should have search form', () => {
    const app = mount(
      <MemoryRouter initialEntries={[SearchRoute]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(app.find('.form__search')).toHaveLength(1);
  });
});