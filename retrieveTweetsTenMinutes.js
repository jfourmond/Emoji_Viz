var Twitter = require('twitter-node-client').Twitter;
var jsonFile = require('jsonfile');

var json;
var id;
var count = 0;
//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%O]', err);
};

var success = function (data) {
	count ++;
	json = JSON.parse(data);
	console.log('Data [%O]', data);

	var date = new Date();
	var outputFile = 'data_test' + Date.now() + '.json';
	jsonFile.writeFile(outputFile, json, {spaces: 4}, function (err) {
		console.error(err)
	});
	if(count == 10) clearInterval(id);
};

var inputFile = 'twitter_config.txt';
jsonFile.readFile(inputFile, function(err, obj) {
	var config = obj;
	id = setInterval(search, 60 * 1000, config);
});

function search(config) {
	var twitter = new Twitter(config);
	twitter.getSearch({'q':'emoji', 'lang':'fr', 'count':'100'}, error, success);
}
