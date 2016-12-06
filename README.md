# Emoji_Viz

Projet de Visualisation de données : "Visualisation de dictionnaires d’emojis et leur fréquence"

## Lien

[https://jfourmond.github.io/Emoji_Viz/](https://jfourmond.github.io/Emoji_Viz/)

## Récupération de 100 tweets

Modules utilisés :
- [twitter-node-client](https://www.npmjs.com/package/twitter-node-client) pour la récupération des tweets
- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON

Pour récupérer 100 tweets :
1. Récupérer les modules précédents
2. Créer et remplir le fichier twitter_config.txt
3. Editer le fichier retrieveTweets.js (twitter.getSearch(...)) avec les paramètres adéquats.
4. Exécuter la commande
	node retrieveTweets.js
