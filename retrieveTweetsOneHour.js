// Récupération des Tweets toutes les 15 minutes pendant une heure
//

var Twitter = require('twitter-node-client').Twitter;
var jsonFile = require('jsonfile');

var json;
var id;
var count = 0;
var MAX = 4;

//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%O]', err);
};

var success = function (data) {
	count ++;
	json = JSON.parse(data);
	console.log('Data [%O]', data);

	var date = new Date();
	var outputFile = 'data_' + Date.now() + '.json';
	jsonFile.writeFile(outputFile, json, {spaces: 4}, function (err) {
		console.error(err)
	});
	if(count == 30) clearInterval(id);
};

var inputFile = 'twitter_config.txt';
jsonFile.readFile(inputFile, function(err, obj) {
	var config = obj;
	// Premier lancement
	search(config);
	// Puis sur un intervalle régulier de 15 minutes
	id = setInterval(search, 60 * 15000, config);
});

function search(config) {
	var twitter = new Twitter(config);
	twitter.getSearch({'q':'emoji', 'lang':'fr', 'count':'100'}, error, success);
}
