# Emoji Viz

Projet de Visualisation de données : "Visualisation de dictionnaires d’emojis et leur fréquence"

Par :
- [FOURMOND Jérôme](https://github.com/jfourmond/)
- [LANGLOIS Aurelien](https://github.com/Aurelink)

Dans le cadre de l'Unité d'Enseignement **Visualisation de Données** du [Master 2 Informatique - Parcours Intelligence Artificielle](http://master-info.univ-lyon1.fr/IA/) de l'[Université Claude Bernard Lyon 1](http://www.univ-lyon1.fr/).

Langage :
- Javascript (& Node JS)

## Lien

[https://jfourmond.github.io/Emoji_Viz/](https://jfourmond.github.io/Emoji_Viz/)

[https://jfourmond.github.io/Emoji_Viz/test.html](https://jfourmond.github.io/Emoji_Viz/test.html)

[https://jfourmond.github.io/Emoji_Viz/test1.html](https://jfourmond.github.io/Emoji_Viz/test1.html)

## Cahier d'avancement

https://goo.gl/yrl04A

## Récupération des tweets

***Il est fortement découragé d'utiliser OAuth 1.0A avec du Javascript client***.

### Récupération de 100 tweets

Modules Node utilisés :
- [twitter-node-client](https://www.npmjs.com/package/twitter-node-client) pour la récupération des tweets
- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON

Pour récupérer 100 tweets (mots-clés : "*Star-Wars*", "*Rogue One*") :

1. Récupérer les modules précédents
2. Créer et remplir le fichier twitter_config.txt
3. Editer le fichier retrieveTweets.js (twitter.getSearch(...)) avec les paramètres adéquats.
4. Exécuter la commande
	node retrieveTweets.js

### Récupération de 100 tweets toutes les minutes pendant (n) heure(s)

Pour récupérer les tweets (mots-clés : "*Star-Wars*", "*Rogue One*") :

1. Récupérer les modules précédents
2. Créer et remplir le fichier ***twitter_config.txt***
3. Editer le fichier ***retrieveTweetsMultiple.js*** **(twitter.getSearch(...))** & **var hours = ?** avec les paramètres adéquats.
4. Exécuter la commande

	node retrieveTweetsOneHour.js
