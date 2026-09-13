# Mini RPG Python — cours et missions détaillés

Construis un mini RPG textuel en six étapes. Pour chaque étape : lis le cours, prédis l’exemple, expérimente, puis écris ta solution dans l’atelier à rendre. Conserve les six versions pour montrer ta progression.

À rendre : un seul fichier NOM_Prenom_mini_rpg.py exporté depuis le navigateur. Il contient six parties indépendantes sélectionnées au lancement par un menu fourni. Ne modifie pas les marqueurs de partie. Dans chaque partie, écris deux tests en commentaires (entrées, résultat attendu, résultat observé). En tête du fichier, indique les aides utilisées et une correction que tu sais expliquer. Sauvegarde à chaque séance ; une sauvegarde du navigateur ne remplace pas le fichier téléchargé.

Télécharge ton fichier .py en fin de séance. Le bouton de téléchargement ouvre une fenêtre avec un lien explicite et une copie du code en secours. Le bouton Reprendre un fichier .py permet de continuer à la séance suivante.

## Partie 1 — Créer son personnage

### 1. Une variable garde une valeur

Une variable est un nom associé à une valeur. Pour créer ou modifier cette association, on utilise =. Python exécute les lignes dans l’ordre : la dernière affectation remplace la précédente.

```python
pv = 50
pv = pv - 10
print(pv)
```

**À l’écran :**

```text
40
```

À surveiller : = signifie « affecter », pas « est égal à » au sens d’un test. On calcule le côté droit avant de modifier la variable.

### 2. Texte et nombres ne se manipulent pas pareil

Une chaîne de caractères (str) se met entre guillemets. Un entier (int) s’écrit sans guillemets. + additionne des entiers ; entre deux chaînes, il colle les textes.

```python
print(5 + 5)
print("5" + "5")
```

**À l’écran :**

```text
10
55
```

À surveiller : La valeur 5 et le texte « 5 » se ressemblent à l’écran, mais n’ont pas le même type.

### 3. Lire avec input, afficher avec print

input affiche une question, puis renvoie le texte tapé. print affiche une ou plusieurs valeurs. Les virgules dans print séparent les éléments à afficher.

```python
nom = input("Ton nom ? ")
print("Bienvenue", nom)
```

**À l’écran :**

```text
Si tu saisis Lina : Bienvenue Lina
```

À surveiller : input renvoie toujours du texte. Écrire input sans les parenthèses n’appelle pas la fonction.

### 4. Convertir une saisie numérique

Pour calculer avec un nombre saisi, int transforme le texte en entier. Lis de l’intérieur vers l’extérieur : input récupère le texte, int le convertit, puis = affecte le résultat.

```python
force = int(input("Force ? "))
print(force + 2)
```

**À l’écran :**

```text
Si tu saisis 5 : 7
```

À surveiller : Pour cette séance, on suppose que l’élève tape un entier. Si on tape cinq en lettres, int provoque une erreur ; ce cas n’est pas demandé.

### 5. Choisir un chemin avec if, elif et else

== compare deux valeurs. if exécute un bloc si son test est vrai ; elif teste un autre cas ; else traite les autres possibilités. Les quatre espaces au début d’une ligne montrent le bloc auquel elle appartient.

```python
action = "dormir"
if action == "attaquer":
    print("À l’attaque !")
elif action == "soigner":
    print("Une potion !")
else:
    print("Action inconnue")
```

**À l’écran :**

```text
Action inconnue
```

À surveiller : Ne remplace pas elif action == "soigner" par else : sinon dormir déclencherait aussi un soin.

### 6. Vérifier plusieurs contraintes

and signifie que toutes les conditions reliées doivent être vraies. Pour valider le personnage, la somme doit être 15 ET chaque compétence doit être positive ou nulle.

```python
points = 7
valide = points >= 0 and points <= 15
print(valide)
```

**À l’écran :**

```text
True
```

À surveiller : Une somme correcte ne suffit pas : -1 + 8 + 8 vaut 15, mais une compétence négative doit être refusée.

### Petites quêtes

#### Échauffement A · la potion timide

Le héros a 30 PV. Ajoute 12 PV puis affiche sa nouvelle vie. Écris les deux lignes manquantes.

```python
pv = 30
# TODO : augmenter les PV de 12
# TODO : afficher les PV
```

Objectif : 42

Indice : Réutilise pv = pv + ... puis print(...).

#### Échauffement B · une force bien réelle

Demande la force sous forme d’un entier, puis affiche le double. Teste avec 4 puis 7.

```python
# TODO : demander et convertir la force
# TODO : afficher son double
```

Objectif : 4 → 8 ; 7 → 14

Indice : Utilise int(input(...)) ; le double se calcule avec * 2.

### Mission

Une création de personnage en console. On ne combat pas encore dans le programme à rendre de cette partie.

1. Dans Mon travail, écris nom = input(...) et classe = input(...). Les trois classes reconnues sont exactement guerrier, mage et archer, en minuscules.

2. Avec if / elif / else, affiche un accueil pour une classe reconnue et « Classe inconnue » sinon. Tu n’as pas à redemander la classe dans cette partie.

3. Demande force, intelligence et agilite avec int(input(...)). Les saisies sont supposées être des entiers.

4. Calcule total = force + intelligence + agilite. Affiche le nom, la classe, les trois valeurs et le total.

5. Affiche « Répartition valide » seulement si total vaut 15 ET si aucune des trois valeurs n’est négative. Sinon, affiche « Répartition invalide ». Le contrôle de la répartition est indépendant du contrôle de classe.

6. Lance les tests proposés et ajoute deux commentaires : entrées, résultat attendu, résultat observé. Télécharge ensuite ton fichier .py.

### Tests

- Lina, mage, 5, 4, 6 → total 15 et répartition valide.
- 5, 5, 6 → total 16, invalide ; -1, 8, 8 → total 15 mais invalide.
- Classe dragon → classe inconnue ; dormir dans l’exemple → PV inchangés.

### Barème sur 5

- Nom, classe et accueil cohérents : 1 point(s)
- Conversions et calcul du total : 1 point(s)
- Somme 15 et non-négativité vérifiées : 2 point(s)
- Deux tests commentés avec attendu et observé : 1 point(s)

## Partie 2 — Maîtriser le hasard et les fonctions

### 1. Utiliser un module

Un module regroupe des fonctions. import random permet d’utiliser celles du hasard. On écrit le nom du module, un point, puis le nom de la fonction.

```python
import random
de = random.randint(1, 20)
print(de)
```

**À l’écran :**

```text
Un entier entre 1 et 20, bornes incluses.
```

À surveiller : Ne nomme pas ton fichier random.py : il risquerait de masquer le module fourni avec Python.

### 2. Comprendre les bornes du hasard

random.random() donne un nombre supérieur ou égal à 0 et strictement inférieur à 1. random.randint(a, b) donne un entier entre a et b inclus. Le hasard est produit par un algorithme : il est pseudo-aléatoire.

```python
import random
print(random.random())
print(random.randint(0, 10))
```

**À l’écran :**

```text
Par exemple 0.37 puis 8. Le résultat peut changer.
```

À surveiller : int(random.random()*10) donne 0 à 9, pas 0 à 10. Une petite série de tirages n’a pas forcément les proportions prévues.

### 3. Définir puis appeler une fonction

def définit un traitement réutilisable. Le paramètre est une variable qui reçoit la valeur donnée à l’appel. Le corps de la fonction ne s’exécute pas au moment du def, mais quand on appelle la fonction.

```python
def doubler(nombre):
    return nombre * 2

print(doubler(4))
print(doubler(7))
```

**À l’écran :**

```text
8
14
```

À surveiller : doubler est le nom de la fonction ; doubler(4) est un appel avec la valeur 4.

### 4. Renvoyer avec return

return transmet un résultat au code qui a appelé la fonction et termine cet appel. print montre du texte à l’écran. Si tu veux réutiliser une valeur dans un calcul ou un test, il faut la renvoyer.

```python
def bonus(force):
    return force + 2

attaque = bonus(5)
print(attaque)
```

**À l’écran :**

```text
7
```

À surveiller : Une fonction qui ne rencontre aucun return renvoie None. Afficher une valeur ne la renvoie pas.

### 5. Tester les frontières avant le hasard

Pour vérifier une règle, commence avec des valeurs choisies. Si la surprise se produit pour chance < 0.5, vérifie notamment 0.49 et 0.5. Remets le hasard seulement après ces essais.

```python
chance = 0.5
print(chance < 0.5)
```

**À l’écran :**

```text
False
```

À surveiller : Une égalité avec le seuil change le résultat de <. Lis la règle de l’exercice avant de choisir < ou <=.

### Petites quêtes

#### Échauffement A · le dé miniature

Importe random et lance un dé à 6 faces. Affiche son résultat.

```python
# TODO : import
# TODO : tirer un entier entre 1 et 6
# TODO : afficher
```

Objectif : Toujours un entier de 1 à 6.

Indice : La borne supérieure de randint est incluse.

#### Échauffement B · trois points de courage

Écris une fonction ajouter_bonus(points) qui renvoie points + 3. Appelle-la avec 4 et affiche le résultat.

```python
def ajouter_bonus(points):
    # TODO : renvoyer le résultat
    pass

print(ajouter_bonus(4))
```

Objectif : 7

Indice : Remplace pass par return suivi du calcul.

### Mission

Deux petits programmes dans la même partie : une surprise aléatoire et une fonction testant la réussite d’une attaque. Tkinter reste facultatif.

1. Importe random au début de Mon travail.

2. Tire chance avec random.random(). Affiche « Attaque surprise » si chance < 0.5, sinon « Aucun ennemi ».

3. Écris def attaque_reussie(de): avec un paramètre de. La fonction doit renvoyer le booléen du test de > 10.

4. Affiche attaque_reussie(10), puis attaque_reussie(11). Tu dois voir False, puis True.

5. Tire un entier de 1 à 20 avec randint, puis affiche ce dé et le résultat renvoyé par attaque_reussie pour ce dé.

6. Ajoute tes tests et deux commentaires expliquant def/appel et print/return. Exporte le .py.

### Tests

- chance = 0.49 → surprise ; chance = 0.5 → aucun ennemi.
- attaque_reussie(1) et (10) → False ; (11) et (20) → True.
- Le dé vaut toujours entre 1 et 20 ; ne pas exiger un nombre précis de surprises.

### Barème sur 5

- Surprise et seuil 0.5 corrects : 1 point(s)
- Dé entier entre 1 et 20 : 1 point(s)
- Fonction avec paramètre et return corrects : 2 point(s)
- Tests de seuil et explications : 1 point(s)

## Partie 3 — Explorer avec une boucle for

### 1. L’indentation change le sens

Les lignes indentées appartiennent au bloc situé au-dessus. Une ligne revenue à gauche est exécutée après ce bloc, quel que soit le chemin pris dans le if.

```python
potions = 0
if potions == 0:
    print("Repos")
else:
    print("Boire")
print("Départ")
```

**À l’écran :**

```text
Repos
Départ
```

À surveiller : Si Départ est indenté dans else, il ne s’affiche plus lorsque potions vaut 0.

### 2. Répéter avec for et range

for fait prendre successivement plusieurs valeurs à une variable. Avec range(début, fin), le début est inclus et la fin exclue. Chaque valeur déclenche une exécution du bloc indenté.

```python
for numero in range(1, 4):
    print("Pas", numero)
print("Arrivée")
```

**À l’écran :**

```text
Pas 1
Pas 2
Pas 3
Arrivée
```

À surveiller : Pour afficher les nombres 1 à 10, il faut range(1, 11). range(10) donne 0 à 9.

### 3. Compter sans tout remettre à zéro

Initialise un compteur avant la boucle. Augmente-le dans la boucle lorsque l’événement se produit. Affiche le bilan après la boucle pour l’obtenir une seule fois.

```python
compteur = 0
for i in range(3):
    compteur = compteur + 1
print(compteur)
```

**À l’écran :**

```text
3
```

À surveiller : Placer compteur = 0 dans la boucle efface le total précédent à chaque tour.

### 4. Découper un tirage en intervalles

if / elif / else sélectionne un seul cas. Le elif n’est testé que si le if était faux : il n’est donc pas nécessaire de répéter la borne basse.

```python
x = 0.6
if x < 0.5:
    print("A")
elif x < 0.8:
    print("B")
else:
    print("C")
```

**À l’écran :**

```text
B
```

À surveiller : Les intervalles sont [0 ; 0.5[, [0.5 ; 0.8[ et [0.8 ; 1[. Ils représentent 50 %, 30 % et 20 % des tirages, en théorie.

### Petites quêtes

#### Échauffement A · trois portes

Affiche Porte 1, Porte 2, Porte 3 avec une boucle. Ajoute une ligne Fin affichée une seule fois.

```python
# TODO : une boucle et son affichage
# TODO : Fin après la boucle
```

Objectif : Porte 1
Porte 2
Porte 3
Fin

Indice : range(1, 4) ; Fin reste sans indentation.

#### Échauffement B · une bourse qui se remplit

Commence avec 0 pièce. Gagne 2 pièces à chacun des 4 tours. Affiche seulement le total final.

```python
pieces = 0
for tour in range(4):
    # TODO : augmenter la bourse
    pass
print(pieces)
```

Objectif : 8

Indice : Augmente pieces dans le bloc ; ne remets pas pieces à 0 à chaque tour.

### Mission

L’exercice d’indentation suivi d’une exploration de dix rencontres, avec un bilan final.

1. Recopie l’exemple sur les potions dans Mon travail. Déplace seulement l’indentation de la ligne « Entrer dans la grotte » pour qu’elle soit exécutée uniquement lorsqu’on boit une potion.

2. Définis choisir_ennemi(x). Elle renvoie gobelin si x < 0.5, araignee si x < 0.8 après le premier test, troll sinon. Utilise if / elif / else.

3. Initialise nombre_gobelins à 0 avant la boucle des rencontres.

4. Écris une boucle de 1 à 10 inclus. À chaque tour, tire x avec random.random(), appelle choisir_ennemi(x), puis affiche le numéro et le nom de l’ennemi.

5. Si l’ennemi vaut gobelin, augmente le compteur. Après la boucle, affiche le nombre de gobelins une seule fois.

6. Teste les frontières de la fonction, puis remplace temporairement le tirage par 0.2 : tu dois compter 10 gobelins. Remets le hasard et exporte.

### Tests

- 0 et 0.49 → gobelin ; 0.5 et 0.79 → araignee ; 0.8 et 0.99 → troll.
- Exactement dix lignes de rencontre, puis un bilan ; le compteur vaut entre 0 et 10.
- En remplaçant tous les tirages par 0.2, le bilan doit compter 10 gobelins.

### Barème sur 5

- Indentation expliquée et modifiée : 1 point(s)
- Dix rencontres numérotées correctement : 1 point(s)
- Trois intervalles et return corrects : 1 point(s)
- Compteur initialisé et mis à jour au bon endroit : 1 point(s)
- Tests de frontières et bilan unique : 1 point(s)

## Partie 4 — Faire durer le combat avec while

### 1. Répéter tant qu’une condition est vraie

while vérifie une condition avant chaque tour. Si elle est vraie, le bloc s’exécute puis le test recommence. Si elle est fausse dès le départ, le bloc ne s’exécute jamais.

```python
vie = 30
while vie > 0:
    vie = vie - 10
    print(vie)
```

**À l’écran :**

```text
20
10
0
```

À surveiller : Sans mise à jour de vie, cette boucle pourrait ne jamais se terminer. Le bouton Arrêter permet de reprendre la main.

### 2. Deux survivants sont nécessaires au combat

and exige deux conditions vraies à la fois. Le combat doit continuer si le héros ET le monstre sont vivants. or suffirait si un seul était vivant : ce n’est pas la bonne règle.

```python
pv_hero = 0
pv_monstre = 40
print(pv_hero > 0 and pv_monstre > 0)
```

**À l’écran :**

```text
False
```

À surveiller : Le héros est à 0 : aucun nouveau tour ne doit démarrer.

### 3. Sortir volontairement avec break

break quitte immédiatement la boucle en cours. On peut s’en servir pour la fuite. Une variable booléenne peut mémoriser cette décision pour choisir le message final. not inverse un booléen.

```python
fuite = False
while not fuite:
    fuite = True
    break
print("Sortie")
```

**À l’écran :**

```text
Sortie
```

À surveiller : break quitte uniquement la boucle qui le contient, pas toutes les boucles imbriquées.

### 4. Limiter les points de vie

Après un soin, il faut vérifier que les PV ne dépassent pas 100. min renvoie la plus petite des valeurs données ; max la plus grande.

```python
pv = 95
pv = min(100, pv + 10)
print(pv)
print(max(0, -5))
```

**À l’écran :**

```text
100
0
```

À surveiller : Plafonne le soin avant l’attaque du monstre. Un héros peut ensuite redescendre à 80 après la riposte.

### 5. Respecter l’ordre d’un tour

Le héros agit d’abord. Ensuite, vérifie si le monstre vit encore avant de le faire riposter. Il faut distinguer une action valide d’une saisie inconnue : cette dernière ne déclenche pas de tour.

```python
pv_monstre = 20
pv_monstre = pv_monstre - 20
if pv_monstre > 0:
    print("Riposte")
else:
    print("Monstre vaincu")
```

**À l’écran :**

```text
Monstre vaincu
```

À surveiller : Ne place pas l’attaque du monstre avant le contrôle de ses PV : un ennemi vaincu ne riposte pas.

### Petites quêtes

#### Échauffement A · compte à rebours

Avec while, affiche 3, 2, 1, puis « Départ ».

```python
compte = 3
# TODO : boucle qui diminue compte
print("Départ")
```

Objectif : 3
2
1
Départ

Indice : Affiche compte puis retire 1 dans la boucle.

#### Échauffement B · soin sans débordement

Un héros possède 97 PV. Ajoute 10 PV et limite le résultat à 100. Fais aussi le test avec 50 PV.

```python
pv = 97
# TODO : soigner et plafonner
print(pv)
```

Objectif : 97 → 100 ; 50 → 60

Indice : Utilise un if après l’addition, ou min(100, pv + 10).

### Mission

Deux blocs successifs : le mini-jeu d’échauffement puis un combat indépendant. Dans les saisies du navigateur, prévoir aussi les réponses de l’échauffement, par exemple fuir pour le quitter.

1. Échauffement dans Mon travail : crée un mini-jeu indépendant avec vie = 100. attaquer enlève 20 PV au héros, defendre rend 10 (plafond 100), rien enlève 5, fuir sort. Affiche la vie après chaque action et termine si vie <= 0.

2. Après l’échauffement, initialise un nouveau combat : pv_hero = 100 et pv_monstre = 100. Ces valeurs ne dépendent pas de l’échauffement.

3. Répète tant que les deux PV sont > 0. Demande exactement attaquer, defendre, rien ou fuir. Ici, attaquer ne retire pas directement de PV au héros.

4. Action du héros : attaquer lance un dé de 1 à 20, et enlève 20 PV au monstre si le dé > 10 ; defendre soigne de 10, plafond 100 ; rien ne fait rien ; fuir termine le combat.

5. Après attaquer, defendre ou rien, si le monstre est encore vivant, lance son dé. Il retire 20 PV au héros si le résultat > 10. Pour une action inconnue : affiche un message et redemande sans riposte.

6. Affiche les deux PV après chaque tour. À la fin, affiche une seule issue : Victoire, Défaite ou Fuite. Teste les cas proposés puis exporte.

### Tests

- Dé 10 → échec ; dé 11 → 20 dégâts ; héros 95 + soin → 100 avant riposte.
- Monstre à 20, attaque du héros réussie → victoire et aucune riposte.
- Héros à 20, attaque du monstre réussie → défaite ; fuir → fin immédiate.
- Action xyz → message puis nouvelle saisie, PV inchangés.

### Barème sur 5

- Boucle et trois issues correctes : 1 point(s)
- Actions et plafonnement du soin : 1 point(s)
- Dés et dégâts corrects des deux côtés : 1 point(s)
- Ordre du tour et absence de riposte après victoire : 1 point(s)
- Saisie invalide, fuite et tests : 1 point(s)

## Partie 5 — Gérer les monstres avec une liste

### 1. Créer une liste et lire un élément

Une liste conserve plusieurs valeurs dans un ordre. Les éléments sont séparés par des virgules, entre crochets. Le premier élément a l’indice 0 ; len donne le nombre d’éléments.

```python
sac = ["potion", "cle", "carte"]
print(sac[0])
print(len(sac))
```

**À l’écran :**

```text
potion
3
```

À surveiller : sac[3] serait hors de la liste : les indices valides sont ici 0, 1 et 2.

### 2. Ajouter et retirer

append ajoute à la fin. remove retire la première occurrence de la valeur demandée. Vérifie avec in si cette valeur est présente avant de la retirer.

```python
sac = ["cle"]
sac.append("potion")
if "cle" in sac:
    sac.remove("cle")
print(sac)
```

**À l’écran :**

```text
['potion']
```

À surveiller : remove sur un élément absent provoque une erreur. On retire une valeur, pas un indice.

### 3. Choisir sans tirer dans une liste vide

random.choice choisit un élément parmi les positions de la liste. Une liste vide vaut faux dans un test ; if monstres protège donc l’appel à choice.

```python
import random
monstres = []
if monstres:
    print(random.choice(monstres))
else:
    print("Forêt libérée !")
```

**À l’écran :**

```text
Forêt libérée !
```

À surveiller : Après la défaite du dernier monstre, il faut tester la liste avant de choisir un nouvel adversaire.

### 4. Nouvelle règle de combat

À partir de cette partie, on remplace le test > 10. L’attaque touche si son dé est <= attaque. Le défenseur bloque si son dé est <= defense. Les dégâts arrivent seulement si l’attaque touche ET si la défense ne bloque pas.

```python
attaque = 12
defense = 7
de_attaque = 12
de_defense = 8
print(de_attaque <= attaque and de_defense > defense)
```

**À l’écran :**

```text
True : cette attaque inflige 20 dégâts.
```

À surveiller : Avec un dé de défense égal à 7, il n’y a pas de dégâts. La valeur limite compte comme une défense réussie.

### 5. Garder l’état entre les combats

Initialise les PV du héros avant la boucle des monstres. Initialise les PV du nouveau monstre à l’intérieur. Le héros conserve ainsi sa fatigue, tandis que chaque nouveau monstre arrive avec tous ses PV.

```python
pv_hero = 80
monstres = ["gobelin", "troll"]
monstres.remove("gobelin")
print(pv_hero)
print(monstres)
```

**À l’écran :**

```text
80
['troll']
```

À surveiller : Ne recrée pas la liste complète au début de chaque tour : les ennemis vaincus reviendraient.

### Petites quêtes

#### Échauffement A · sac à dos

Crée une liste contenant cle, ajoute potion puis affiche la liste. Retire ensuite cle sans erreur.

```python
sac = ["cle"]
# TODO : ajouter potion
# TODO : retirer cle si présente
print(sac)
```

Objectif : ['potion']

Indice : Utilise append, puis if ... in ... et remove.

#### Échauffement B · dernier ennemi

Retire troll de la liste puis affiche « Victoire » si elle est vide. Ne fais aucun tirage.

```python
monstres = ["troll"]
# TODO : retirer le troll
# TODO : tester la liste vide
```

Objectif : Victoire

Indice : not monstres est vrai si la liste est vide ; len(monstres) == 0 fonctionne aussi.

### Mission

Le menu de courses, puis une exploration de trois combats. Quitte les courses avec q avant de préparer les actions de combat dans les saisies.

1. Échauffement : crée une liste de courses vide et un menu a / r / l / q. a demande un article et l’ajoute ; r demande un article et le retire si présent ; l affiche ; q quitte cet échauffement.

2. Dans la partie 5, recopie le combat de la partie 4 sans effacer la partie 4. Crée monstres = ["gobelin", "araignee", "troll"]. Initialise le héros une seule fois à 100 PV.

3. Tant qu’il reste des monstres et que le héros vit, choisis un ennemi avec random.choice et donne-lui 100 PV. Le héros garde les PV du combat précédent.

4. Remplace la règle du dé > 10 par attaque/défense : héros (12,10), monstre (9,7). Une attaque qui touche et n’est pas bloquée retire 20 PV. Applique cette règle aux deux côtés.

5. Remplace defendre par potion : gain aléatoire de 10 à 20, plafond 100, puis riposte du monstre vivant. Les potions sont illimitées ici. Garde attaquer, rien et fuir ; une saisie inconnue ne consomme pas de tour.

6. Retire le monstre uniquement après sa défaite. Choisis ensuite un autre ennemi seulement s’il en reste. La liste vide donne « Victoire de la forêt ». Une fuite ou une défaite termine toute l’exploration.

7. Teste la dernière victoire, les seuils de défense et la conservation des PV, puis exporte.

### Tests

- Retirer un article absent → message, pas d’erreur.
- Attaque 12, dé 12 → touche ; dé 13 → rate. Défense 7, dé 7 → bloque ; dé 8 → dégâts.
- Dernier monstre vaincu → liste vide et victoire, aucun choice([]).
- Potion à 95 PV avec gain 20 → 100 avant la riposte ; héros non réinitialisé entre deux monstres.

### Barème sur 5

- Menu de liste avec ajout et retrait sûr : 1 point(s)
- Choix sûr et retrait après défaite seulement : 1 point(s)
- Victoire finale et continuité des PV : 1 point(s)
- Attaque, défense et potion conformes : 1 point(s)
- Tests des seuils et de la liste vide : 1 point(s)

## Partie 6 — Construire le bestiaire avec des dictionnaires

### 1. Lire une valeur grâce à sa clé

Un dictionnaire associe des clés à des valeurs. On écrit des paires clé: valeur entre accolades. Ici les clés sont des textes ; le nom de la clé indique le sens de la donnée.

```python
hero = {"nom": "Lina", "pv": 100}
print(hero["nom"])
print(hero["pv"])
```

**À l’écran :**

```text
Lina
100
```

À surveiller : hero[0] ne désigne pas la première valeur. Un dictionnaire se lit par clé, pas par position.

### 2. Ajouter, modifier, supprimer

Affecter une valeur à une nouvelle clé ajoute cette entrée. Affecter une valeur à une clé existante la modifie. del supprime une entrée. in teste la présence d’une clé.

```python
hero = {"pv": 100}
hero["attaque"] = 12
hero["pv"] = 80
del hero["attaque"]
print(hero)
```

**À l’écran :**

```text
{'pv': 80}
```

À surveiller : Accéder à une clé absente produit une erreur. Vérifie sa présence si elle vient d’une saisie.

### 3. Imbriquer pour décrire plusieurs monstres

Un dictionnaire peut contenir d’autres dictionnaires. La première paire de crochets choisit le monstre ; la seconde choisit une de ses caractéristiques.

```python
bestiaire = {
    "gobelin": {"pv": 60, "attaque": 9},
    "troll": {"pv": 100, "attaque": 8}
}
print(bestiaire["troll"]["attaque"])
```

**À l’écran :**

```text
8
```

À surveiller : Les nombres sont des valeurs, pas des textes : écris 100 sans guillemets si tu veux faire des calculs.

### 4. Séparer le modèle et le combattant

Avec monstre = modele, les deux noms désignent le même dictionnaire. copy() crée un nouveau dictionnaire pour le combat. La copie est superficielle : elle suffit ici car les valeurs du modèle sont des nombres ou des chaînes.

```python
modele = {"pv": 60}
monstre = modele.copy()
monstre["pv"] = 40
print(monstre["pv"])
print(modele["pv"])
```

**À l’écran :**

```text
40
60
```

À surveiller : Sans copy(), blesser le combattant modifierait aussi ses PV de départ dans le bestiaire.

### 5. Choisir parmi des clés

list(dictionnaire) construit la liste de ses clés. Pour valider un choix, teste si le texte saisi est une clé du dictionnaire. Redemande tant que ce n’est pas le cas.

```python
heros = {"mage": 14, "guerrier": 12}
print(list(heros))
print("dragon" in heros)
```

**À l’écran :**

```text
['mage', 'guerrier']
False
```

À surveiller : Dans le jeu final, copie le dictionnaire du héros choisi avant de modifier ses PV.

### Petites quêtes

#### Échauffement A · panneau du bestiaire

Crée le dictionnaire indiqué, puis ajoute la clé defense avec la valeur 7. Affiche seulement cette défense.

```python
gobelin = {"pv": 60, "attaque": 9}
# TODO : ajouter puis afficher defense
```

Objectif : 7

Indice : gobelin["defense"] = ... ajoute la clé.

#### Échauffement B · garde le modèle neuf

Complète pour que le monstre perde 20 PV sans changer le modèle.

```python
modele = {"pv": 60}
# TODO : copier dans monstre
# TODO : retirer 20 PV au monstre
print(modele["pv"])
```

Objectif : Le modèle doit encore afficher 60.

Indice : Utilise .copy() avant de modifier monstre["pv"].

### Mission

Le bestiaire de descriptions, puis le jeu complet utilisant les dictionnaires. Le héros sélectionné peut maintenant changer les caractéristiques du combat.

1. Échauffement : crée trois descriptions dans un dictionnaire. Affiche l’une d’elles. Ajoute dragon, modifie sa description puis supprime cette entrée avec del.

2. Construis bestiaire avec les champs pv, attaque, defense, description. Valeurs (PV, attaque, défense) : gobelin (60,9,7), araignee (40,11,5), troll (100,8,9).

3. Construis heros avec pv, attaque, defense, description et image. Valeurs : mage (100,14,6), guerrier (100,12,10), archer (100,13,8). image contient seulement un nom de fichier, par exemple mage.png ; aucune image n’est chargée par le code console.

4. Demande mage, guerrier ou archer. Tant que le choix n’est pas une clé de heros, redemande. Copie ensuite le héros sélectionné avec .copy().

5. Recopie le combat de la partie 5 dans cette partie. Remplace les caractéristiques fixes par les valeurs des dictionnaires. Initialise les ennemis restants avec list(bestiaire). À chaque rencontre, copie le modèle du monstre choisi.

6. Conserve les règles de la partie 5 : test <= attaque, blocage <= defense, dégâts 20, potion 10 à 20 plafonnée à 100, pas de riposte après une victoire, fuite possible et PV du héros conservés.

7. Teste un choix inconnu, les trois monstres et l’absence de modification des modèles. Exporte ton fichier final en conservant les six parties.

### Tests

- Héros dragon → nouvelle demande ; mage → attaque 14, défense 6.
- Gobelin 60, dégâts 20 → monstre courant 40, modèle du bestiaire toujours 60.
- Ajout puis suppression de dragon → les trois descriptions d’origine restent.
- Vaincre les trois monstres → victoire ; les PV du héros persistent, les caractéristiques changent selon le monstre.

### Barème sur 5

- Descriptions avec ajout, modification et suppression : 1 point(s)
- Bestiaire imbriqué et champs exacts : 1 point(s)
- Héros et sélection validée : 1 point(s)
- Combat utilisant les données et des copies : 1 point(s)
- Tests de copie et intégration : 1 point(s)

## Atelier Tkinter facultatif

Cet atelier reprend les interfaces des parties 2, 3, 4 et 6 originales. Il s’exécute dans Python sur ordinateur avec Tkinter disponible, pas dans l’atelier Python du navigateur. Commencer après les fonctions ; réaliser le combat graphique après le parcours principal. Le fichier atelier_tkinter.py fournit une base exécutable.

Tk() crée la fenêtre ; Label affiche un texte ; Entry reçoit une saisie ; get() lit le champ ; config(text=...) met à jour un label ; pack() place le widget. mainloop() attend les événements. command=afficher transmet une fonction à appeler au clic ; command=afficher() l’appellerait tout de suite.

Mission G1 : compléter la base avec des champs classe, force, intelligence, agilite et un bouton de validation du budget de 15. Vérifier les entiers non négatifs ; signaler les conversions invalides avec un message adapté. Tester 5/4/6 et 5/5/6.

Mission G2 : ajouter Nouvelle rencontre, choisir un ennemi et afficher son nom. Si les PNG sont fournis, utiliser tk.PhotoImage(file=chemin) et conserver la référence dans label.image. Pour redimensionner avec Pillow, utiliser Image.open, resize puis ImageTk.PhotoImage ; cette extension nécessite Pillow. Le texte doit rester utilisable si les images manquent.

Mission G3 : transformer un tour de combat en fonction appelée par un bouton Attaquer, Potion ou Rien. Ne pas lancer de while bloquant dans le rappel d’un bouton : la boucle d’événements attend le clic suivant. Mettre les PV à jour après chaque tour ; désactiver les actions quand le combat se termine ; réactiver pour un nouveau monstre.

Mission G4 : ajouter la sélection du héros avec Précédent, Suivant et Choisir ce héros. Parcourir une liste des clés de heros ; afficher description, attaque, défense et image si disponible. Copier le héros choisi pour commencer. Tester le passage du premier au dernier héros et le retour au premier.