var d3 = require("d3");
var fs = require("fs");

var outputFile = "tweets_clean.json";

fs.readFile("tweets.json", 'utf8' , function(error, tweetsD){
	var tweets = JSON.parse(tweetsD);
	console.log("AVANT : " + tweets.length);
	fs.readFile("emoji.csv", "utf8", function(error, emojiD) {
		var emojis = d3.csvParse(emojiD);
		filterTweets(tweets, emojis);
		console.log("APRES : " + tweets.length);
		writeTweets(tweets);
	})
});

function filterTweets(tweets, emojis) {
	for(var i = tweets.length-1 ; i>=0  ; i--) {
		var tweet = tweets[i];
		var found = false;
		for(var emoji of emojis) {
			var e = emoji["Brow."] + "";
			try {
				var o = tweet.text.search(e);
				if(o != -1) {
					found = true;
					break;
				}
			} catch(err) {}
		}
		// Si un emoji est trouvé...
		if(!found)
			tweets.splice(i, 1);
	}
}

function writeTweets(tweets) {
	var string_tweets = JSON.stringify(tweets, null, "\t");

	fs.writeFile(outputFile, string_tweets, function(err) {
		if(err) return console.error(err);
	});
}
