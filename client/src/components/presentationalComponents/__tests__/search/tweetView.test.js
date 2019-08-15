import React from 'react';
import { shallow } from 'enzyme';
import TweetView from '../../Search/tweetView';

const myMock = {
  'id': 1124609323479519200,
  'label': 'RT @nautilusdrift: Se veía venir. Inmigrantes con becas, vivienda y ayudas sociales mientras los chilenos postergados y debiendo pagar en t…',
  'image': 'http://pbs.twimg.com/profile_images/1121849883462393856/bbUOF4fy_normal.jpg',
  'backgroundImage': 'http://abs.twimg.com/images/themes/theme1/bg.png',
  'displayName': 'belincob',
  'timeStamp': 'Sat May 04 09:38:51 +0000 2019'
};

describe('Tweet View', () => {
  it('renders without crashing', () => {
    const tweetView = shallow(<TweetView tweet={myMock} />);
    expect(tweetView.find('.tweet__list-item')).toHaveLength(1);
    expect(tweetView.find('.tweet-message')).toHaveLength(1);
    expect(tweetView.find('.tweet-message_user--avatar')).toHaveLength(1);
    expect(tweetView.find('.tweet-message__display')).toHaveLength(1);
    expect(tweetView.find('.tweet-message__display--author')).toHaveLength(1);
    expect(tweetView.find('.tweet-message__display-label')).toHaveLength(1);
    expect(tweetView.find('.tweet-message__display--timeStamp')).toHaveLength(1);
  });
});