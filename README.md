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

### 100 tweets toutes les minutes pendant [hours] heure(s), [minutes] minute(s) et/ou [n] itérations

Modules Node utilisés :
- [twitter-node-client](https://github.com/BoyCook/TwitterJSClient) pour la récupération des tweets
- [jsonfile](https://www.npmjs.com/package/jsonfile) pour la lecture et l'écriture d'un fichier JSON

Pour récupérer les tweets (mots-clés : "*Star-Wars*", "*Rogue One*") :

1. Récupérer les modules précédents
2. Créer et remplir le fichier ***twitter_config.txt*** avec vos identifiants **Twitter API**
3. Exécuter la commande

	node retrieveTweetsMultiple.js [-n=n] [-hours=hours] [-minutes=minutes]

Un seul des arguments *-n*, *-hours*, *-minutes* est obligatoire dans la commande. Ils peuvent tous être employés dans la commande.

Le nombre d'itération (de recherches effectuées et de fichiers crées) se calcule par :

	var MAX = (hours * 60) + minutes + n;
