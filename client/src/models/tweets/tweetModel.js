export class TweetModel {
  constructor(props) {
    if (!props) return;
    this.id = props.id_str;
    this.label = props.text;
    this.name = props.name;
    
    if (props.user) {
      this.image = props.user.profile_image_url || props.user.profile_image_url_https;
      this.backgroundImage  = props.user.profile_background_image_url || props.user.profile_background_image_url_https || 'http://abs.twimg.com/images/themes/theme1/bg.png';
      this.displayName = props.user.screen_name;
    }
    
    this.favorited = props.favorited;
    
    this.timeStamp = props.created_at;
    this.background = props.profile_background_color;
    if (props.entities && props.entities.hashTags) {
      this.hashTags = props.entities.hashTags.map(h => h.text);
    } else {
      this.hashTags = [];
    }
    if (props.entities && props.entities.user_mentions) {
      this.userMentions = props.entities.user_mentions.map(u => u.screen_name);
    } else {
      this.userMentions = [];
    }
  }
}

export function transformSourceTweets(source) {
  if (source && source.length) {
    return source.map(unformattedTweet => new TweetModel(unformattedTweet));
  } else {
    return [];
  }
}