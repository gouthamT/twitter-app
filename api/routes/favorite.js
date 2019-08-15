var express = require("express");
var twitterClient = require("../common/twitterClient");
var router = express.Router();

router.post("/", function(req, res, next) {
  var payload = req.body || {};
  twitterClient.post("favorites/create", { 'id' : payload.id }, function(
    error,
    tweet,
    response
  ) {
    res.jsonp({ tweet: tweet });
  });
});

module.exports = router;
