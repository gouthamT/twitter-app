var express = require("express");
var twitterClient = require("../common/twitterClient");
var router = express.Router();

router.get("/", function(req, res, next) {
  var queryString = req.query.searchString || '';
  twitterClient.get("search/tweets", { q: queryString }, function(
    error,
    tweets,
    response
  ) {
    res.jsonp({ tweets: tweets });
  });
});

module.exports = router;
