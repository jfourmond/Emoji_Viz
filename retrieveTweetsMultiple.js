// Récupération des Tweets toutes les minutes pendant (hours) heure(s)
// Mots clés : "Star-Wars""
var Twitter = require('twitter-node-client').Twitter;
var jsonFile = require('jsonfile');

var hours = 2;

var MAX = 60 * hours;
var count = 0;

var twitter;
var json;
var id;

//Callback functions
var error = function (err, response, body) {
	console.log('ERROR [%O]', err);
};

var success = function (data) {
	count ++;
	json = JSON.parse(data);
	console.log('Data [%O]', data);

	var date = new Date();
	var outputFile = 'data/data_' + Date.now() + '.json';
	jsonFile.writeFile(outputFile, json, {spaces: 4}, function (err) {
		console.error(err)
	});
	if(count == MAX) clearInterval(id);
	console.log((MAX - count) + " exécutions restantes.");
};

var inputFile = 'twitter_config.txt';
jsonFile.readFile(inputFile, function(err, obj) {
	var config = obj;
	//	Linking
	twitter = new Twitter(config);
	// Premier lancement
	search(config);
	// Puis sur un intervalle régulier de 1 minute
	id = setInterval(search, 60 * 1000, config);
});

function search(config) {
	twitter.getSearch({ 'q':'star-wars', 'count':"100", 'include_entities':'false' }, error, success);
}
