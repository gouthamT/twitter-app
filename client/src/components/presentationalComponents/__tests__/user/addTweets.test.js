import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AddTweet from '../../user/addTweet';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  app: {
    user: {
      context: {
        id: 1124160963714752500,
        name: 'GT',
        displayName: 'GT20440400',
        tweetsCount: 2,
        followersCount: 0,
        friendsCount: 0,
        image: 'http://pbs.twimg.com/profile_images/1124695596319686656/Wy2meLWr_normal.jpg',
        backgroundImage: 'http://abs.twimg.com/images/themes/theme1/bg.png'
      },
      tweets: [{
        'id': 1124609323479519200,
        'label': 'RT @nautilusdrift: Se veía venir. Inmigrantes con becas, vivienda y ayudas sociales mientras los chilenos postergados y debiendo pagar en t…',
        'image': 'http://pbs.twimg.com/profile_images/1121849883462393856/bbUOF4fy_normal.jpg',
        'backgroundImage': 'http://abs.twimg.com/images/themes/theme1/bg.png',
        'displayName': 'belincob',
        'timeStamp': 'Sat May 04 09:38:51 +0000 2019'
      },
      {
        'id': 1124609323479519201,
        'label': 'RT @nautilusdrift: Se veía venir. Inmigrantes con becas, vivienda y ayudas sociales mientras los chilenos postergados y debiendo pagar en t…',
        'image': 'http://pbs.twimg.com/profile_images/1121849883462393856/bbUOF4fy_normal.jpg',
        'backgroundImage': 'http://abs.twimg.com/images/themes/theme1/bg.png',
        'displayName': 'belincob',
        'timeStamp': 'Sat May 04 09:38:51 +0000 2019'
      }]
    }
  }
});

const emptyStore = mockStore({ app: { user: {} }});

describe('addTweets', () => {
  it('renders without crashing', () => {
    const addTweets = mount(
      <Provider store={store}>
        <AddTweet />
      </Provider>);
    expect(addTweets.find('.section__add-tweet')).toHaveLength(1);
    expect(addTweets.find('.form__add-tweet')).toHaveLength(1);
    expect(addTweets.find('.textarea--add-tweet')).toHaveLength(1);
    expect(addTweets.find('.btn--add-tweet')).toHaveLength(1);
  });
  it('renders not authorized if user context is missing', () => {
    const addTweets = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={emptyStore} >
          <AddTweet />
        </Provider>
      </MemoryRouter>);
    expect(addTweets.find('.user__not--athorized')).toHaveLength(1);
  });
});