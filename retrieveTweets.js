var Twitter = require('twitter-node-client').Twitter;
var jsonFile = require('jsonfile');

var json;
//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%O]', err);
};

var success = function (data) {
	json = JSON.parse(data);
	console.log('Data [%O]', data);

	var outputFile = 'data.json';
	jsonFile.writeFile(outputFile, json, {spaces: 4}, function (err) {
		console.error(err)
	});
};

var inputFile = 'twitter_config.txt';
jsonFile.readFile(inputFile, function(err, obj) {
	var config = obj;
	var twitter = new Twitter(config);
	twitter.getSearch({'q':'emoji', 'lang':'fr', 'count':'100'}, error, success);
});
