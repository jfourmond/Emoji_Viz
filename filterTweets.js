var jsonFile = require('jsonfile');

var inputFile = 'data.json';
var tweets = [];

jsonFile.readFile(inputFile, function(err, obj) {
	var data = obj;
	// Filtre sur les tweets
	tweets = filterTweets(data);
	console.log(tweets.length + " TWEETS");
	// Ecriture des tweets
	writeTweets(tweets);
});

function filterTweets(data) {
	var T = data.statuses;
	var tweets_1 = [];
	//	Suppression des retweets
	for(var tweet of T) {
		if(!tweet.text.startsWith("RT"))
			tweets_1.push(tweet);
	}
	var tweets_2 = [];
	//	Suppression des doublons
	for(var i=0 ; i<tweets_1.length ; i++) {
		var found = false;
		var tweet_i = tweets_1[i];
		for(var j=0 ; j<tweets_2.length ; j++) {
			var tweet_j = tweets_2[j];
			if(tweet_i.text.localeCompare(tweet_j.text) == 0) {
				found = true;
				break;
			}
		}
		if(!found)
			tweets_2.push(tweet_i)
	}
	return tweets_2;
}

function writeTweets(tweets) {
	var outputFile = 'tweets.json';
	jsonFile.writeFile(outputFile, tweets, {spaces: 4}, function (err) {
		console.error(err)
	});
}
