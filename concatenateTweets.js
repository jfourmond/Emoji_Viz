var fs = require('fs');
var jsonFile = require('jsonfile');

if (process.argv.length <= 2) {
	console.log("Usage: node concatTweets.js [inputFile1] ... [inputFileN]");
	process.exit(-1);
}

var inputFiles = [];
var outputFile = "tweets.json";
var tweets = [];
//	Gestion des paramètres
for(var i=0 ; i<process.argv.length ; i++) {
	if(i > 1) {
		inputFiles.push(process.argv[i]);
	}
}

console.log(inputFiles);

var nbFiles = inputFiles.length;

var i = 0;
for(var inputFile of inputFiles) {
	jsonFile.readFile(inputFile, function(err, obj) {
		var data = obj;
		tweets = tweets.concat(data);
		i++;
		console.log(i);
		if(i == nbFiles)
			writeTweets(tweets);
	});
}

function writeTweets(tweets) {
	var string_tweets = JSON.stringify(tweets);

	/*
	jsonFile.writeFile(outputFile, tweets, {spaces: 4}, function (err) {
		console.error(err)
	});
	*/

	fs.writeFile(outputFile, string_tweets, function(err) {
		if(err) return console.error(err);
	});

	console.log("%d tweets", tweets.length);
}
