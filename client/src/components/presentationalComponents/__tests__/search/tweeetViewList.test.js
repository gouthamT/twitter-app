import React from 'react';
import { shallow } from 'enzyme';
import TweetViewList from '../../Search/tweetViewList';
import TweetView from '../../Search/tweetView';

const myMock = [{
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
}];

describe('Tweet View List', () => {
  it('renders without crashing and has 2 tweets within', () => {
    const tweetViewList = shallow(<TweetViewList tweets={myMock} isSearchPerformed={true} />);
    expect(tweetViewList.find('.tweets__section')).toHaveLength(1);
    expect(tweetViewList.find('.tweets__unorderd-list')).toHaveLength(1);
    expect(tweetViewList.find(TweetView)).toHaveLength(2);
  });
  
  it('renders not render tweets if search is not performed', () => {
    const tweetViewList = shallow(<TweetViewList tweets={myMock} isSearchPerformed={false} />);
    expect(tweetViewList.find(TweetView)).toHaveLength(0);
  });
});