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
