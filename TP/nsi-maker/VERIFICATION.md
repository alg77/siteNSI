# Vérification — 23 septembre 2026

## Résultats

- `node --check maker.js` : syntaxe JavaScript valide.
- `tests/interaction.cjs` sous Chromium / Playwright : réussite.
- Chargement direct par `file://`, sans compilation et sans requête HTTP externe.
- 17 liens de sommaire, 7 étapes de chaîne, 4 primitives, curseur de couches et animation avec pause vérifiés.
- Paramètres du disque, synchronisation du code, téléchargements SCAD et Python vérifiés.
- Trois indices séquentiels ; correction indisponible avant leur consultation puis affichable et masquable.
- Quiz : aucune réponse (0/8), toutes correctes (8/8), une erreur (7/8), explications et remise à zéro vérifiés.
- Tous les boutons de copie visibles vérifiés en contexte local ; un repli de sélection est prévu si le navigateur interdit le presse-papiers.
- Largeurs 1440, 768, 390 et 320 px : aucun débordement horizontal du document. Les tableaux et codes longs défilent dans leur conteneur.
- Captures desktop et mobile examinées ; SVG et illustrations sont locaux.
- Aucune erreur JavaScript pendant ces contrôles.
- Programme Python téléchargé exécuté : génération des fichiers séparés et du modèle d’ensemble. `tests/check_python.py` compile les exemples exécutables et teste cinq puis huit disques.

## Documentation consultée

- P1S : boutique officielle Bambu Lab (caractéristiques également obtenues par résultats indexés officiels lorsque l’accès direct était indisponible).
- AMS : article technique officiel `https://blog.bambulab.com/ams/`.
- Bambu Studio : dépôt officiel et wiki, `https://github.com/bambulab/BambuStudio` et sa page `wiki/Command-Line-Usage`.
- OpenSCAD : `https://openscad.org` et manuel officiel hébergé sur `files.openscad.org`, section d’utilisation en ligne de commande (STL/3MF, option `-o`).

Les liens sont accessibles depuis le pied de page du tutoriel. Les contenus ne supposent pas que tout fichier 3MF comporte des profils Bambu Studio.

## Limites explicites

- Le dépôt initial était vide : aucune application existante, compilation antérieure, charte graphique ou navigation hôte à intégrer ou à tester en non-régression. La ressource autonome est prête à être placée dans le site réel.
- OpenSCAD n’est pas disponible dans le PATH de cet environnement. Aucun rendu STL réel ni test dans Bambu Studio ou sur P1S n’a été exécuté. Les essais physiques de jeu restent à réaliser dans l’établissement.
- Tests automatisés sur Chromium ; pas de matrice Safari/Firefox ni de lecteur d’écran réel.
- Les vues JavaScript sont des simulations pédagogiques, sans moteur OpenSCAD ni exécution Python dans le navigateur.


## Passerelle S01 — ajout

Cours p. 4–7, activités 2–5 et 7–8, exercices 2–6 examinés, ainsi que les corrigés fournis. Pages du cours sur LIFO/FIFO et schémas de l’exercice 6 inspectés visuellement. Une convention explicite (sommet à droite, sortie de file à gauche) évite toute ambiguïté d’orientation.

Ajouts : section S01, simulations Hanoï/FIFO/tri de crêpes, correspondance des interfaces, références précises et copies locales des trois PDF élèves. Les deux corrigés ne sont pas publiés. Liens aller-retour avec le chapitre et carte dans l’accueil Terminale, en préservant les modifications déjà présentes (NSI Arcade).

Tests Playwright `tests/s01.cjs` réussis : coups légaux/interdits, pile vide, même tige, résolution complète en 31 coups, ordre FIFO, file vide, capacité visuelle, séquence du tri de crêpes de la fiche, remises à zéro et largeurs 320/390/768/1440 px. Le test général `tests/interaction.cjs` est adapté aux 19 sections.
