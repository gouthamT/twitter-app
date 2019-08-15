import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import UserView from '../../user/user';
import TweetsViewList from '../../../presentationalComponents/search/tweetViewList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  app: {
    user: {
      context : {
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

describe('User Container', () => {
  it('load search conatainer without issues ', () => {
    const app = mount(
      <Provider store={store}>
        <UserView />
      </Provider>
    );
    expect(app.find(TweetsViewList)).toHaveLength(1);
  });
  it('should load two tweets & content', () => {
    const app = mount(
      <Provider store={store}>
        <UserView />
      </Provider>
    );
    expect(app.find('.tweet__list-item')).toHaveLength(2);
    expect(app.find('.user-profile___display--author__screen--name')).toHaveLength(1);
  });
});