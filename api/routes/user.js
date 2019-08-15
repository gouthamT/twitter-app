var express = require("express");
var twitterClient = require("../common/twitterClient");
var router = express.Router();

router.get("/", function (req, res, next) {
  var queryString = req.query.userName || '', promises = [];
  promises.push(twitterClient.get("users/show", { screen_name: queryString }));
  promises.push(twitterClient.get("statuses/user_timeline", { screen_name: queryString }));
  Promise.all(promises).then(responses => {
    res.jsonp({ user: responses[0], tweets: responses[1] });
  }).catch(function () { res.jsonp({ user: null, tweets: [] }); }
  );
});

module.exports = router;
