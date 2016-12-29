# Emoji Viz

Projet de Visualisation de données : "Visualisation de dictionnaires d’emojis et leur fréquence"

Par :
- [FOURMOND Jérôme](https://github.com/jfourmond/)
- [LANGLOIS Aurelien](https://github.com/Aurelink)

Dans le cadre de l'Unité d'Enseignement **Visualisation de Données** du [Master 2 Informatique - Parcours Intelligence Artificielle](http://master-info.univ-lyon1.fr/IA/) de l'[Université Claude Bernard Lyon 1](http://www.univ-lyon1.fr/).

Langage :
- Javascript (& Node JS)

## Lien

- [Accueil](https://jfourmond.github.io/Emoji_Viz/)
	- [Liste des Emojis](https://jfourmond.github.io/Emoji_Viz/emojis.html)
	- [Diagramme en barre](https://jfourmond.github.io/Emoji_Viz/bar_view.html)
	- [Diagramme en barre avec slider](https://jfourmond.github.io/Emoji_Viz/bar_view_time.html)
	- [Nuage d'Emoji](https://jfourmond.github.io/Emoji_Viz/cloud_view.html)

## Cahier d'avancement

https://goo.gl/yrl04A

## Scripts de récupération & tri des tweets

***Il est fortement découragé d'utiliser OAuth 1.0A avec du Javascript client***.

### 100 tweets toutes les minutes pendant [hours] heure(s), [minutes] minute(s) et/ou [n] itérations

Modules Node JS utilisés :
- [Twitter API](https://dev.twitter.com/streaming/public)
- [twitter-node-client](https://github.com/BoyCook/TwitterJSClient) pour la récupération des tweets
- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON

Pour récupérer les tweets (mots-clés : "*Star-Wars*", "*Rogue One*") :

1. Récupérer les modules précédents
2. Créer et remplir le fichier ***twitter_config.txt*** avec vos identifiants **Twitter API**
3. Créer le répertoire ***data*** dans le projet
4. Exécuter la commande

	node retrieveTweetsMultiple.js [-n=n] [-hours=hours] [-minutes=minutes]

Un seul des arguments *-n*, *-hours*, *-minutes* est obligatoire dans la commande. Ils peuvent tous être employés dans la commande.
Par exemple :

	node retrieveTweetsMultiple.js -hours=24 -minutes=10 -n=2

Qui signifie que le programme récupérera des tweets pendant 24 heures, 10 minutes avec 2 itérations bonus.
Le nombre d'itération (de recherches effectuées et de fichiers crées) se calcule par :

	var MAX = (hours * 60) + minutes + n;

### Filtrage des tweets - Pas de doublons, pas de retweets

Module Node utilisé :
- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON

Pour filtrer les tweets :

1. Récupérer les modules précédents
2. Exécuter la commande

	node filterTweets.js [inputFile] [outputFile]

L'argument *inputFile* représente le nom du fichier contenant les tweets. Le fichier en sortie portera le nom *outputFile*.
Par exemple :

	node filterTweets.js data.json tweets.json

## Concaténation des tweets

Modules Node utilisés :

- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON
- **fs**

	node concatTweets.js [inputFile1] ... [inputFileN]

Script de concaténation de fichiers de tweets "purs", en un tableau de tweets. La sortie de ce script est le fichier ***tweets_raw.json***.

## Filtre des tweets sur les emojis

Modules Node utilisés :

- **fs**
- [d3](https://www.npmjs.com/package/d3) pour la lecture d'un fichier CSV

	node filterTweetsEmoji.js

Pour l'optimisation de la visualisation, seuls les tweets contenant au moins un emoji ont été conservés. La sortie de ce script est le fichier ***tweets.json***
