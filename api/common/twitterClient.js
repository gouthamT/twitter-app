var TwitterClient = require("twitter");

var client = new TwitterClient({
  consumer_key: "xxxxxxxxxxxxxxxxxxxxxxx",
  consumer_secret: "xxxxxxxxxxxxxxxxxxxxxxx",
  access_token_key: "xxxxxxxxxxxxxxxxxxxxxxx",
  access_token_secret: "xxxxxxxxxxxxxxxxxxxxxxx"
});

module.exports = client;
