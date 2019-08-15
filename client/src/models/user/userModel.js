import { transformSourceTweets } from '../tweets/tweetModel';

export class UserModel {
  constructor(props) {
    if (!props || !props.user) return;
    
    const { user } = props;

    this.id= user.id;
    this.name = user.name;
    this.displayName = user.screen_name;
    
    this.tweetsCount = user.statuses_count;
    this.followersCount = user.followers_count;
    this.friendsCount = user.friends_count;
    
    this.image = user.profile_image_url || user.profile_image_url_https;
    this.backgroundImage  = user.profile_banner_url || 'http://abs.twimg.com/images/themes/theme1/bg.png';
  }
}

export function transformSource(source) {
  this.context = new UserModel(source);
  if (source && source.tweets) { this.tweets = new transformSourceTweets(source.tweets); }
}