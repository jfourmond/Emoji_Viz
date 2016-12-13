// Récupération des Tweets toutes les minutes pendant (hours) heure(s)
// Mots clés : "Star-Wars""
var Twitter = require('twitter-node-client').Twitter;
var jsonFile = require('jsonfile');

var n = 0;
var hours = 0;
var minutes = 0;

if (process.argv.length <= 2) {
	console.log("Usage: node retrieveTweetsMultiple.js [-n] [-hours] [-minutes]");
	process.exit(-1);
}

//	Gestion des paramètres
var params = process.argv;
params.splice(0, 2);
for(var param of params) {
	var a = param.split("=");
	var arg = a[0];
	var value = a[1];
	switch(arg) {
		case "-hours":
			hours = parseInt(value);
			break;
		case "-minutes":
			minutes = parseInt(value);
			break;
		case "-n":
			n = parseInt(value);
			break;
		default:
			throw "Wrong argument";
	}
}

//	Max search iteration
var MAX = (60 * hours) + minutes + n;
//	Current search iteration
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
	var outputFile = 'data/data_' + date.valueOf() + '.json';
	jsonFile.writeFile(outputFile, json, {spaces: 4}, function (err) {
		console.error(err)
	});
	if(count == MAX) clearInterval(id);
	console.log((MAX - count) + " exécutions restantes. (Dernière : " + date.toString() + ")");
};

var inputFile = 'twitter_config.txt';
jsonFile.readFile(inputFile, function(err, obj) {
	var config = obj;
	console.log("Nombre d'itérations attendu : " + MAX);
	//	Linking
	twitter = new Twitter(config);
	// First launch
	search(config);
	// Then on a one minute interval
	id = setInterval(search, 60 * 1000, config);
});

function search(config) {
	twitter.getSearch({ 'q':'star-wars', 'count':"100", 'include_entities':'false' }, error, success);
}
