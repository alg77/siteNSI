# Atelier Python — TP2

Ouvrir `atelier.html` depuis les boutons « Coder en ligne » de NSI Arcade. Chaque activité dispose de son propre brouillon local. L’export `.py` est la sauvegarde portable ; l’import n’exécute pas le fichier. Le remplacement d’un brouillon et le retour au squelette demandent confirmation.

## Lancement et fonctionnement hors ligne

L’exécution WebAssembly dans un Worker nécessite HTTP(S), pas une URL `file://`. Depuis le dossier `siteNSI`, lancer `python -m http.server 8000 --bind 127.0.0.1` et ouvrir `http://localhost:8000/Cours/Tle/tp/nsi-arcade/atelier.html`. Sur le réseau de l’établissement, servir le dossier avec le serveur statique habituel. Aucun serveur Python d’exécution n’est nécessaire : le serveur distribue seulement les fichiers.

Toutes les ressources indispensables sont locales, environ 14 Mo pour le moteur et l’éditeur. Une fois le site copié sur un serveur local, aucun accès Internet n’est requis. Le site public doit rester accessible pour recharger les ressources : aucun cache hors ligne/service worker n’a été ajouté.

## Composants

- Ace 1.43.3 : coloration Python et indentation ; quatre fichiers locaux, licence BSD dans `vendor/ace/LICENSE`.
- Pyodide 0.27.7 : CPython compilé en WebAssembly, version épinglée ; licence MPL-2.0 et notices dans `vendor/pyodide`. Les archives proviennent des paquets npm officiels `ace-builds` et `pyodide`.
- Documentation de référence : https://pyodide.org/en/0.27.7/usage/webworker.html et https://pyodide.org/en/0.27.7/usage/downloading-and-deploying.html ; https://ace.c9.io/.
- `atelier-worker.js` lance un interpréteur neuf pour chaque programme et chaque test. Arrêt par terminaison du Worker, limite de 10 s d’exécution et 60 s de chargement. Sortie affichée plafonnée à 20 000 caractères.
- `atelier-starters.js` contient les sources initiales, synchronisées depuis les squelettes Python. Snake utilise une version algorithmique sans Tkinter. Le programme graphique original est conservé.
- `atelier-tests.js` contient 25 tests publics (unitaires et scénarios complets). Ces tests ne sont pas une correction secrète ni un système de notation sécurisé. Les TODO doivent initialement échouer ; aucune coche pédagogique n’est validée automatiquement.

## Limites

Pas de Tkinter, de pip automatique ni de paquets scientifiques ajoutés. Bibliothèque standard incluse ; fichiers écrits en Python restent dans le système de fichiers temporaire du Worker et disparaissent à la fin. Les entrées `input()` sont préparées dans un champ, une réponse par ligne. Ce n’est pas un terminal interactif.

Le code n’est pas envoyé à un serveur d’exécution. Il dispose cependant des capacités normales de Pyodide dans le navigateur ; il ne s’agit pas d’un bac à sable pour distribuer du code tiers hostile. Les tests supposent du code élève ordinaire. L’environnement est détruit à chaque lancement pour éviter les effets persistants entre essais.

Les tests ignorent le bloc principal `if __name__ == "__main__"` mais exécutent les autres instructions globales : placer les essais personnels dans ce bloc pour éviter qu’ils interfèrent avec les tests fournis.

## Introduction progressive (TP2)

L’atelier sans paramètre ouvre maintenant `debut01`. `intro.js` ajoute dix étapes indépendantes : lire une liste, suivre puis compléter un parcours, renvoyer une valeur, ajouter un élément, construire une liste, dépiler, défiler, comparer LIFO/FIFO et embarquer trois visiteurs. Les trois étapes d’observation n’ont pas de bouton de test ; les sept autres disposent d’un test ciblé et d’essais supplémentaires, soit 14 vérifications. Les deux indices sont facultatifs et l’affichage attendu est replié pour encourager la prédiction.

Chaque étape a son brouillon, son import/export Python et les fonctions fournies dont elle a besoin. Aucun prérequis POO ni récursivité. Pour cette introduction, un retrait à vide renvoie None ; le contrat différent de la Bataille est signalé à la fin. Les anciens liens explicites vers les jeux conservent leur destination.

Conseil de séance : reprendre les étapes 1–6 ensemble si nécessaire, puis 7–10. Les jeux complets sont des prolongements à choisir avec le professeur.


## Vers le bac : boucles et transferts

`atelier.html?activite=bac01` ouvre sept activités supplémentaires, regroupées à part des dix étapes d’introduction. `bac-data.js` contient les consignes, squelettes et 14 tests (7 tests principaux + 7 suites de cas particuliers). `bac.js` fournit la présentation et les traces pas à pas. Les traces montrent un algorithme de référence, pas le code saisi par l’élève. Les sources officielles sont indiquées dans chaque exercice ; aucun téléchargement ni CDN n’est nécessaire à l’exécution. Seule la consultation du PDF officiel nécessite Internet.

Progression : transvaser une pile ; file vers pile ; compter une file en la restaurant ; compter une pile en la restaurant ; occurrences par rotations bornées ; premier élément d’une file placé au sommet d’une pile ; inversion d’une file (synthèse facultative).

Les fonctions fournies sont sans classes et incluses dans l’export Python. Le bloc est replié dans Ace. Les retraits nécessitent une structure non vide (contrairement à l’introduction qui renvoie None à vide). Le sujet porte sur l’utilisation d’une interface : pas de manipulation directe de listes dans les fonctions à compléter. Les tests vérifient le comportement, pas une preuve ni toutes les contraintes syntaxiques ; la justification de la terminaison et le respect de l’interface restent à discuter sur papier.

Références vérifiées le 27 septembre 2026 :
- Sujet zéro NSI 2021, exercice 1, question 1 (p. 2) et question 2.1 (p. 3) : https://eduscol.education.gouv.fr/sites/default/files/document/s0bac21-tle-spe-nsipdf-68838.pdf
- Bac NSI 2021, repère 21-NSIJ1AN1, exercice 5, questions 1(a), 1(b), 2 et 3 (pp. 11–12) : https://eduscol.education.fr/document/33124/download

Il s’agit d’adaptations pédagogiques avec exemples et guidage originaux, non d’une reproduction complète des annales. Le sujet zéro est distingué d’une épreuve passée. Aucun parenthésage n’a été ajouté.
