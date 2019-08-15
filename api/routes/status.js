var express = require("express");
var twitterClient = require("../common/twitterClient");
var router = express.Router();

router.post("/", function(req, res, next) {
  var payload = req.body.payload || '';
  twitterClient.post("statuses/update", { status : payload }, function(
    error,
    tweets,
    response
  ) {
    res.jsonp({ tweet: tweets });
  });
});

module.exports = router;
