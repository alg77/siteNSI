# NSI Arcade — Piles & Files

Espace statique de Terminale, ouvert depuis `../../index.html`.

## Organisation

- `index.html` : cinq niveaux, 24 missions, encadrés et sources Python intégrées.
- `arcade.css` : compléments limités au corps `.arcade`, réutilisant `../../css/style.css`.
- `engine.js` : règles pures des quatre démonstrations, également importables par Node.
- `app.js` : interactions, indices successifs, coloration locale, copie, téléchargements et progression.
- `python/` : quatre programmes de départ. Tkinter fournit l'interface du Snake ; ses fonctions algorithmiques lèvent volontairement `NotImplementedError`.
- `engine.test.cjs` : tests de conservation des cartes, égalités, collisions, Hanoï et explorations.

Pas de compilation, framework, dépendance JavaScript, CDN ni API externe. Servir le dépôt avec n'importe quel serveur HTTP statique. On peut également ouvrir directement la page HTML ; si le presse-papiers est indisponible, un champ sélectionné permet de copier manuellement.

Les sources Python complètes sont intégrées dans des zones de texte masquées de la page. Les téléchargements utilisent ces sources pour rester disponibles hors connexion une fois la page chargée. Les fichiers `python/*.py` restent aussi accessibles directement. En cas de modification d'un squelette, synchroniser le fichier Python, la zone de texte correspondante et l'aperçu (pour Snake, seul le début algorithmique est affiché).

## Conventions

- Cartes : `(valeur, couleur)` en Python ; valeurs de 2 à 14, As fort. Une comparaison visible = un tour. Égalité : enjeu conservé, une carte cachée chacun, puis nouvelle comparaison. Manque de cartes : le joueur conservant le plus de cartes gagne ; mêmes effectifs : nul. Les cartes du nul restent dans l'enjeu. La démo est bornée à 1 000 tours, le squelette suggère 10 000.
- Snake : tuples `(ligne, colonne)`, queue au début, tête à la fin. Sans croissance, la case de la queue est libérée avant le test d'occupation du prochain état. La démo est dirigée vers la droite ; le programme Python gère quatre directions.
- Hanoï : bas au début, sommet à la fin. Les déplacements interdits ne mutent jamais les piles. Minimum affiché seulement après victoire ou ouverture du bonus.
- Labyrinthe : voisins dans l'ordre haut, gauche, bas, droite. Découverte marquée à l'ajout, visite au retrait. Même politique de voisins pour pile et file. Les prédécesseurs reconstruisent un chemin distinct de la trace de visite. Dans le labyrinthe fourni : DFS, 16 visites / 15 pas ; BFS, 29 visites / 13 pas.

Les indices 2 et 3 deviennent disponibles après les précédents. Aucun corrigé intégral n'est fourni. 

## Données et hors connexion

Seules 24 valeurs booléennes de progression sont conservées dans `localStorage`, clé `nsi-arcade-progress-v1`. Pas d'identité, télémétrie ou transmission. Si le stockage est bloqué, l'activité continue pour la visite. Les contrôles restent utilisables hors connexion une fois les ressources chargées. Aucun service worker n'est ajouté : un rechargement hors connexion n'est pas garanti, et les autres pages du site suivent leur propre politique de cache.

## Vérification

Depuis ce dossier : `node --test engine.test.cjs` (Node 18+).

Le navigateur doit permettre : pause/reprise/remise à zéro des démos ; égalités à la bataille ; ajout/retrait et croissance du Snake ; victoire en 7 coups à Hanoï avec 3 disques ; sélections 4/5 disques ; fin de DFS et BFS ; indices successifs ; copie et téléchargement ; progression après rechargement. Vérifier aussi les largeurs 320, 390, 768 et 1440 px, et les interactions après passage hors connexion.

L'accueil existant reçoit seulement une carte dans « Exercices et révisions ». Les styles et scripts partagés ne sont pas modifiés. `main.js` n'est pas chargé par l'arcade : ses boutons de copie génériques feraient doublon avec la copie robuste de fichiers complets de cet espace.


## TP2 — PyLand Adventure Park

Activité 02, après Bataille et avant Snake. Reprise du contexte du PDF enseignant « TNSI-S01-TP02-Files-dattente-PyLand Adventure Park-v2 », avec contrats explicités et scénario déterministe. Cinq nouvelles missions (p1–p5) conservent les identifiants de progression des anciennes missions.

- `pyland-engine.js` : modèle pur déterministe ; `pyland.js` : contrôles et affichage.
- `python/pyland.py` : squelette sans classes, orchestration fournie ; `python/test_pyland.py` : tests par fonctions/assertions, sans classes. Les échecs initiaux sont attendus tant que les TODO ne sont pas implémentés.
- Pas d’exécution Python dans le navigateur, pas de serveur ni dépendance supplémentaire.
- Départ à t ; arrivées à t après départ ; attente de 2 min ; retour à t+2. Satisfaction −5 pour ceux qui attendent, +10 pour les passagers ; bornes [0,100]. Mascotte optionnelle après l’attente.
- Attente mesurée à l’embarquement, hors durée d’attraction. Statistiques sur les 20 premiers sortants (provisoires avant 20). Au plus 12 visiteurs affichés, compteur de la file entière. Arrêt après 30 tours.
- Tests : `node --test engine.test.cjs pyland.test.cjs`.
