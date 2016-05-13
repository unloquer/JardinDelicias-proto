/* */ 
(function(process) {
  var Twitter = require('./lib/twitter');
  var es = require('event-stream');
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  client.stream('statuses/firehose', function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
      console.log("Get Success !!!");
    });
    stream.on('error', function(error) {
      console.log("Error in stream");
      console.log("" + error);
    });
  });
})(require('process'));
