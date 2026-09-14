# Mini-RPG
### De la console à l'interface graphique — un programme, six séances

*Première NSI*

Un programme, six séances : vous allez construire, morceau par morceau, un mini jeu de rôle en Python — d'abord dans la console, puis avec une vraie interface graphique. Chaque séance ajoute une brique : variables, conditions, boucles, listes, dictionnaires.

---

## Sommaire
- [Séance 1 — Variables, affichage et premiers choix](#séance-1-—-fondations)
- [Séance 2 — Le hasard et les conditions avancées](#séance-2-—-hasard)
- [Séance 3 — Les boucles for et les rencontres aléatoires](#séance-3-—-boucles-for)
- [Séance 4 — La boucle while, le combat et l'interface graphique](#séance-4-—-while-interface)
- [Séance 5 — Les listes](#séance-5-—-listes)
- [Séance 6 — Les dictionnaires](#séance-6-—-dictionnaires)

---

## Séance 1 — Variables, affichage et premiers choix
*input, print et les premières conditions* — durée indicative : 2h

**Objectifs**
- Exécuter et modifier un programme Python (Spyder)
- Utiliser input() pour récupérer une saisie utilisateur
- Utiliser print() pour afficher un message
- Déclarer et affecter des variables
- Écrire une première condition if / else

### Introduction

« Un ordinateur peut faire bien des choses, mais il faut d'abord les lui expliquer. »

La programmation est bien plus que la simple rédaction de lignes de code : c'est l'art de comprendre sa structure, son fonctionnement et son objectif. Un programme est, dans sa forme la plus basique, un ensemble d'expressions et d'instructions.

Nous allons, dans cette série de séances, construire ensemble un RPG ancré dans un univers de fantasy médiévale. Nous débuterons par une version textuelle du jeu pour progressivement incorporer des éléments graphiques, dans le but de développer un RPG complet.

Pour cette première séance, nous posons les fondations : déclaration et affectation de variables, ordonnancement des opérations et structures conditionnelles — le tout en construisant la première pierre de l'édifice de notre jeu.

### Exécuter et modifier un programme

Avant d'aller plus loin, voyons comment exécuter un programme écrit en Python. Sur votre ordinateur, lancez Spyder. Recopiez et exécutez ce programme :

```python
# Demander au joueur d'entrer le nom de son héros
nom_hero = input("Quel est le nom de ton héros ? ")

# Afficher un message de bienvenue personnalisé
print("Bienvenue dans le monde de l'aventure,", nom_hero, "!")
print("Que ta quête soit remplie de courage et de gloire !")
```

- **input pour récupérer le nom du héros** : le programme utilise la fonction input pour demander au joueur d'écrire le nom de son personnage. Ce nom est ensuite stocké dans la variable nom_hero.
- **Affichage du message personnalisé** : la fonction print est utilisée pour montrer un message de bienvenue qui inclut le nom du personnage. Cela permet de personnaliser l'interaction.

**Questions de compréhension :**
- À quoi sert la fonction input ?
- À quoi sert la fonction print ?

### Exercices

#### Exercice 1.1 — Choisis ton destin

**Objectif :** Modifier et étendre le programme initial pour permettre au joueur de choisir une classe pour son héros et afficher un message de bienvenue.

**Code à compléter :**
```python
# Demander au joueur d'entrer le nom de son héros
nom_hero = input("Quel est le nom de ton héros ? ")

# Demander au joueur de choisir une classe pour son héros
classe_hero = ___("Quelle est la classe de ton héros ?")

# Afficher un message de bienvenue personnalisé
print("Bienvenue dans le monde de l'aventure,", nom_hero, "le", ___)

___("Que ta quête soit remplie de courage et de gloire !")
```

**Explication :**
- `nom_hero = input("Quel est le nom de ton héros ? ")` — Affiche une question à l'écran. Ce qui est tapé est enregistré dans la variable nom_hero.
- `classe_hero = input("Quelle est la classe de ton héros ? ")` — Même principe : on demande la classe (guerrier, mage, archer…) et on la stocke dans classe_hero.
- `print("Bienvenue…", nom_hero, "le", classe_hero)` — Combine les informations saisies pour un message personnalisé.
- `print("Que ta quête…")` — Un message d'encouragement pour débuter l'aventure.

<details><summary>Solution</summary>

```python
# Demander au joueur d'entrer le nom de son héros
nom_hero = input("Quel est le nom de ton héros ? ")

# Demander au joueur de choisir une classe pour son héros
classe_hero = input("Quelle est la classe de ton héros ?")

# Afficher un message de bienvenue personnalisé
print("Bienvenue dans le monde de l'aventure,", nom_hero, "le", classe_hero)

print("Que ta quête soit remplie de courage et de gloire !")
```

</details>

#### Exercice 1.2 — Rencontre avec un gobelin

*Scénario : Votre héros, un jeune aventurier, rencontre un gobelin dans une forêt sombre. Le gobelin est hostile et prêt à attaquer. Vous devez choisir entre attaquer le gobelin ou utiliser un objet de soin pour restaurer vos points de vie.*

**Objectif :** Gérer les points de vie (PV) du héros lors d'une interaction avec un gobelin. Le joueur doit décider d'attaquer ou de se soigner et voir comment cela affecte ses PV.

**Code à compléter :**
```python
# Initialisation des variables
pv_hero = 50       # Points de vie initiaux du héros
pv_gobelin = 30    # Points de vie initiaux du gobelin

# Accueil du joueur
___("Tu rencontres un gobelin !")
___("Tu as", pv_hero, "PV et le gobelin en a", ___, ".")

# Choix de l'action
action = ___("Veux-tu attaquer (tape 'attaquer') ou te soigner (tape 'soigner') ? ")

# Logique du jeu basée sur le choix
if action == 'attaquer':
    # Le héros attaque le gobelin
    degats = 10
    # Soustraire les dégâts des PV du gobelin
    pv_gobelin = pv_gobelin ___ degats
    print("Tu infliges", degats, "points de dégâts au gobelin.")
else:
    # Le héros se soigne
    soin = 15
    # Ajouter le soin aux PV du héros
    pv_hero = pv_hero ___ soin
    print("Tu utilises un objet de soin")

# Afficher le statut après l'action
print("Tes points de vie :", ___)
print("Points de vie du gobelin :", ___)
```

**Explication :**
- `pv_hero, pv_gobelin` — des compteurs qui gardent une trace des points de vie du héros (50) et du gobelin (30).
- `if action == 'attaquer' : …` — si tu attaques, les PV du gobelin sont réduits de 10.
- `else : …` — sinon, tu te soignes : tes PV augmentent de 15.

*Dans une prochaine séance, nous explorerons comment utiliser if, else et elif pour prendre des décisions plus riches dans nos programmes.*

<details><summary>Solution</summary>

```python
# Initialisation des variables
pv_hero = 50
pv_gobelin = 30

print("Tu rencontres un gobelin !")
print("Tu as", pv_hero, "PV et le gobelin en a", pv_gobelin, ".")

action = input("Veux-tu attaquer (tape 'attaquer') ou te soigner (tape 'soigner') ? ")

if action == 'attaquer':
    degats = 10
    pv_gobelin = pv_gobelin - degats
    print("Tu infliges", degats, "points de dégâts au gobelin.")
else:
    soin = 15
    pv_hero = pv_hero + soin
    print("Tu utilises un objet de soin")

print("Tes points de vie :", pv_hero)
print("Points de vie du gobelin :", pv_gobelin)
```

</details>

### 🏆 Challenge — Création de personnage

Dans les jeux de rôle (RPG), un point de compétence est une unité que le joueur peut attribuer à différentes compétences de son personnage pour améliorer ses capacités : force (attaques physiques), intelligence (capacités magiques) et agilité (vitesse, précision). Distribuer des points de compétence permet au joueur de personnaliser son personnage selon son style de jeu préféré.

**Objectif :** Construire la première étape du jeu RPG en permettant au joueur de créer son propre personnage en choisissant son nom, sa classe, et en distribuant des points de compétence.

1. Demander le nom du personnage.
1. Choisir la classe du personnage parmi 3 classes (guerrier, mage, archer).
1. Distribuer un nombre limité de points (15) entre 3 compétences (force, intelligence, agilité).

**Code à compléter :**
```python
# Accueil
______("Bienvenue dans la création de personnage du RPG !")

# Demander le nom du personnage
nom_personnage = ________________________________________

# Choisir la classe du personnage
______("Quelle classe veux-tu choisir pour ton personnage ?")
classe_personnage = _____________________________________

# Attribution des points de compétence
total_points = 15   # Total de points à distribuer
print("Tu as", ________, "points de compétence à distribuer.")

______("Combien de points veux-tu attribuer à la Force ?")
force = int(input())
total_points = ______________________________________________

______("Combien de points veux-tu attribuer à l'Intelligence ?")
intelligence = int(input())
total_points = ______________________________________________

______("Combien de points restants veux-tu attribuer à l'Agilité ?")
agilite = int(input())
total_points = ______________________________________________

# Récapitulatif du personnage créé
______("Création de personnage terminée ! Voici les détails de ton héros :")
print("Nom :", ______________)
print("Classe :", ______________)
print("Force :", ______________)
print("Intelligence :", ______________)
print("Agilité :", ______________)

# Vérifier si tous les points ont été correctement distribués
if total_points == 0:
    print("Tous les points ont été distribués correctement !")
else:
    print("Attention, il semble que la distribution des points soit incorrecte. Il te reste", ______, "points.")
```

<details><summary>Solution</summary>

```python
print("Bienvenue dans la création de personnage du RPG !")

nom_personnage = input("Quel est le nom de ton personnage ? ")

print("Quelle classe veux-tu choisir pour ton personnage ?")
classe_personnage = input()

total_points = 15
print("Tu as", total_points, "points de compétence à distribuer.")

print("Combien de points veux-tu attribuer à la Force ?")
force = int(input())
total_points = total_points - force

print("Combien de points veux-tu attribuer à l'Intelligence ?")
intelligence = int(input())
total_points = total_points - intelligence

print("Combien de points restants veux-tu attribuer à l'Agilité ?")
agilite = int(input())
total_points = total_points - agilite

print("Création de personnage terminée ! Voici les détails de ton héros :")
print("Nom :", nom_personnage)
print("Classe :", classe_personnage)
print("Force :", force)
print("Intelligence :", intelligence)
print("Agilité :", agilite)

if total_points == 0:
    print("Tous les points ont été distribués correctement !")
else:
    print("Attention, il semble que la distribution des points soit incorrecte. Il te reste", total_points, "points.")
```

</details>

---

## Séance 2 — Le hasard et les conditions avancées
*l'indentation qui change tout, et la fonction random* — durée indicative : 2h

**Objectifs**
- Comprendre le rôle de l'indentation dans un bloc if/else
- Utiliser le module random pour introduire du hasard dans un programme
- Comprendre pourquoi le hasard est utile dans un jeu

### Indentation et conditions

Dans un RPG, l'action du héros dépend de ses choix et de ses ressources. Par exemple, si le héros n'a plus de PV, il doit décider quoi faire en fonction du nombre de potions disponibles : s'il en a, il en consomme une et entre dans une grotte ; sinon, il doit se reposer.

Cependant, en modifiant uniquement l'indentation du programme, il est possible de changer complètement le comportement du héros, en lui faisant toujours entrer dans la grotte, qu'il ait des potions ou non.

### Exercice — l'indentation qui change tout

Voici le programme sur lequel vous allez travailler. Lisez-le attentivement et déterminez ce qu'il fait en fonction de la valeur de potions.

```python
if potions == 0:
    print("Vous devez vous reposer.")
else:
    print("Vous buvez une potion.")
    print("Vous entrez dans une grotte pour affronter un monstre.")
```

Maintenant, modifiez uniquement l'indentation du programme pour que le héros entre dans la grotte dans tous les cas, qu'il ait des potions ou non.

### La fonction random

Parmi les opérations de base disponibles en Python, il existe la fonction random, qui renvoie un nombre aléatoire compris entre 0 et 1.

Si l'on s'y arrête quelques secondes, l'existence d'une telle fonction est contradictoire avec la notion même d'algorithme : un processus suffisamment bien décrit et détaillé pour être exécuté sans erreur ni initiative de la part d'une machine ne peut pas mener à un résultat imprévisible et différent à chaque exécution.

Pourtant l'introduction de hasard dans les programmes est indispensable, par exemple pour créer des situations imprévues dans les jeux, mais aussi pour résoudre certains problèmes qui ne peuvent pas être résolus sans une part de hasard.

Dans ce TP, nous utiliserons le module random avec la syntaxe import random, puis random.random(), random.randint(...), etc. — c'est cette syntaxe (plutôt que from random import *) que nous garderons pour toute la suite du projet, afin de toujours savoir d'où vient chaque fonction utilisée.

### Un nombre au hasard entre 0 et 10

```python
import random

# met un nombre au hasard compris entre 0 et 10 dans la variable x
x = int(random.random()*10)

# affiche la valeur de x
print(x)
```

### Exercices

#### Exercice 2.1 — L'attaque surprise

*Contexte : Dans l'univers des RPG, les rencontres aléatoires avec des ennemis sont courantes. Utilisons la fonction random pour simuler une attaque surprise par un ennemi.*

**Objectif :** Écrire un programme qui décide aléatoirement si un héros est surpris par un ennemi lorsqu'il entre dans une nouvelle zone. Le programme affiche "Attaque Surprise" si le héros est attaqué et "Aucun ennemi" sinon.

**Code à compléter :**
```python
# Importer le module nécessaire
import ___

# Générer un événement aléatoire
chance = ___.random()

# Décider si le héros est attaqué par surprise
# Supposons que 50 % du temps, il y a une attaque surprise
if ___ < ___ :
    print("Attaque surprise")
else:
    print("Aucun ennemi")
```

<details><summary>Solution</summary>

```python
import random

chance = random.random()

if chance < 0.5:
    print("Attaque surprise")
else:
    print("Aucun ennemi")
```

</details>

#### Exercice 2.2 — Le butin du coffre

*Contexte : Après une victoire, le héros ouvre un coffre. La rareté du butin dépend d'un tirage aléatoire. Pour gérer plus de deux cas, on enchaîne les conditions avec elif (contraction de « else if ») : Python les teste dans l'ordre et s'arrête à la première qui est vraie.*

**Objectif :** Tirer un nombre entre 1 et 100 et afficher un butin différent selon sa valeur : commun (50 % de chances), rare (30 %), épique (15 %) ou légendaire (5 %).

**Code à compléter :**
```python
import random

tirage = random.___(1, 100)

if tirage <= 50:
    print("Tu trouves une potion de soin. (commun)")
___ tirage <= 80:
    print("Tu trouves une arme rare !")
elif tirage ___ 95:
    print("Tu trouves un objet épique !")
___:
    print("Tu trouves un trésor légendaire !!!")
```

*La suite : en séance 3, on répète ce genre d'événement plusieurs fois de suite grâce à la boucle for.*

<details><summary>Solution</summary>

```python
import random

tirage = random.randint(1, 100)

if tirage <= 50:
    print("Tu trouves une potion de soin. (commun)")
elif tirage <= 80:
    print("Tu trouves une arme rare !")
elif tirage <= 95:
    print("Tu trouves un objet épique !")
else:
    print("Tu trouves un trésor légendaire !!!")
```

</details>

---

## Séance 3 — Les boucles for et les rencontres aléatoires
*répéter des instructions, et pondérer le hasard* — durée indicative : 2h

**Objectifs**
- Écrire et lire une boucle for … in range(...)
- Combiner boucle for et hasard pour simuler des rencontres répétées
- Pondérer des probabilités avec random.choices

### Les boucles for

« Un ordinateur est fait pour effectuer des calculs longs et répétitifs. »

Dans les programmes vus jusqu'ici, chaque instruction est exécutée au plus une fois. Or, on veut souvent exécuter certaines instructions plusieurs fois : c'est le rôle d'une boucle.

La boucle for est une instruction de la forme for i in range(e1, e2): suivie d'un corps indenté p. Exécuter cette boucle exécute p (n-m) fois, où m est la valeur de e1 et n celle de e2, la variable i prenant successivement les valeurs m, m+1, …, n-1.

### Deux exemples de boucle for

```python
for i in range(1, 5):
    print("allô ")
print("tu es où ?")

# --- autre exemple ---

for i in range(1, 11):
    print(i)
```

### Pondérer le hasard avec random.choices

En séance 2, chaque issue avait la même probabilité (50/50). Pour rendre certains événements plus rares que d'autres (par exemple un monstre légendaire rare), on utilise random.choices, qui accepte un paramètre weights : les poids n'ont pas besoin de totaliser 100, seule leur proportion les uns par rapport aux autres compte. Attention : random.choices renvoie toujours une liste, même pour un seul tirage — d'où le [0] pour récupérer l'élément tiré.

```python
import random

monstres = ["gobelin", "araignee", "troll"]
poids    = [50,         30,          20]   # gobelin plus fréquent que troll

ennemi = random.choices(monstres, weights=poids)[0]
print(ennemi)
```

### Exercices

#### Exercice 3.1 — Les ennemis de la forêt interdite

**Objectif :** Le héros doit traverser une forêt interdite où différents types d'ennemis apparaissent à chaque pas. Simulez 10 rencontres aléatoires avec des ennemis, en utilisant une boucle for.

**Code à compléter :**
```python
import random

print("Le héros entre dans la forêt interdite...")

for i in ________(________, ________):
    ennemi = ""
    choix = random.randint(1, 3)
    if choix == 1 : ennemi = "Gobelin"
    if ______ == 2 : ________ = "Troll"
    if ______ == 3 : ________ = "Araignée"
    # Afficher le type d'ennemi rencontré
    print(f"Rencontre {i}: Un {________} apparaît !")

print("Le héros est sorti de la forêt.")
```

<details><summary>Solution</summary>

```python
import random

print("Le héros entre dans la forêt interdite...")

for i in range(1, 11):
    ennemi = ""
    choix = random.randint(1, 3)
    if choix == 1 : ennemi = "Gobelin"
    if choix == 2 : ennemi = "Troll"
    if choix == 3 : ennemi = "Araignée"
    print(f"Rencontre {i}: Un {ennemi} apparaît !")

print("Le héros est sorti de la forêt.")
```

</details>

### 🏆 Challenge — Un peu plus de hasard...

**Objectif :** Reprenez l'exercice précédent et faites en sorte que certains ennemis soient plus rares que d'autres, à l'aide de random.choices et de son paramètre weights vus dans le cours : par exemple 50 % de chances de rencontrer un gobelin, 30 % pour une araignée, 20 % pour un troll.

**Code à compléter :**
```python
import random

noms_ennemis = ["Gobelin", "Araignée", "Troll"]
poids_ennemis = [___, ___, ___]   # doit correspondre à 50 % / 30 % / 20 %

print("Le héros entre dans la forêt interdite...")

for i in range(1, 11):
    ennemi = random.________(noms_ennemis, weights=___________)[___]
    print(f"Rencontre {i}: Un {ennemi} apparaît !")

print("Le héros est sorti de la forêt.")
```

> ⚠️ 🔜 En séance 4, on ajoute la boucle while, un vrai combat au tour par tour, et la première interface graphique (Tkinter) pour donner un visage à ces rencontres — c'est là que l'affichage des images de monstres et le challenge « enrichir le bestiaire » (génération d'image par IA) reprendront.

<details><summary>Solution</summary>

```python
import random

noms_ennemis = ["Gobelin", "Araignée", "Troll"]
poids_ennemis = [50, 30, 20]

print("Le héros entre dans la forêt interdite...")

for i in range(1, 11):
    ennemi = random.choices(noms_ennemis, weights=poids_ennemis)[0]
    print(f"Rencontre {i}: Un {ennemi} apparaît !")

print("Le héros est sorti de la forêt.")
```

</details>

---

## Séance 4 — La boucle while, le combat et l'interface graphique
*répéter tant qu'une condition est vraie — et le voir à l'écran* — durée indicative : 2h (séance dense — voir note pour le professeur)

**Objectifs**
- Comprendre la différence entre for (nombre de répétitions connu) et while (répétition tant qu'une condition est vraie)
- Écrire une boucle while avec une condition d'arrêt
- Simuler un combat au tour par tour avec un dé à 20 faces
- Créer une interface graphique avec Tkinter (Label, Entry, Button)
- Afficher une image dans une interface Tkinter

### Pourquoi une nouvelle boucle ?

La boucle for est parfaite quand on connaît à l'avance le nombre de répétitions. Mais dans un combat, on ne sait pas à l'avance combien de tours vont se dérouler : cela dépend des points de vie, du hasard, des choix du joueur… On a besoin d'une boucle qui se répète tant qu'une condition reste vraie : la boucle while.

### Un premier exemple : le compte à rebours

Avant le combat, un exemple simple pour voir la syntaxe : tant que la condition après while est vraie, le corps indenté se répète. Il faut que quelque chose, à l'intérieur de la boucle, finisse par rendre la condition fausse — sinon la boucle ne s'arrête jamais (boucle infinie).

```python
compte = 5

while compte > 0:
    print(compte)
    compte = compte - 1   # sans cette ligne, la boucle ne s'arrête jamais

print("Décollage !")
```

### Exercices

#### Exercice 4.1 — Un mini-jeu de survie

**Objectif :** Vous contrôlez un personnage dont la vie commence à 100. Créez un programme qui simule le passage du temps et la perte de vie du personnage en fonction des événements qui se produisent.

1. Créez une variable vie et initialisez-la à 100.
1. Utilisez une boucle while pour simuler le passage du temps tant que la vie du personnage est supérieure à 0.
1. À chaque itération, demandez à l'utilisateur ce qu'il souhaite faire ("Attaquer", "Se défendre", "Rien").
1. Mettez à jour la variable vie selon l'action choisie : Attaquer → -20 ; Se défendre → +10 (sans dépasser 100) ; Rien → -5.
1. À la fin de chaque itération, affichez la quantité de vie restante.
1. Si la vie atteint 0 ou moins, terminez la boucle et affichez un message indiquant que le personnage est tombé au combat.

**Code à compléter :**
```python
vie = 100

while vie ___ 0:
    action = input("Que fais-tu ? (Attaquer / Se défendre / Rien) : ")
    if action == "Attaquer":
        vie = vie ___ 20
    elif action == "Se défendre":
        vie = vie ___ 10
        if vie > 100:
            vie = ___
    else:
        vie = vie ___ 5
    print("Vie restante :", vie)

print("Ton personnage est tombé au combat.")
```

<details><summary>Solution</summary>

```python
vie = 100

while vie > 0:
    action = input("Que fais-tu ? (Attaquer / Se défendre / Rien) : ")
    if action == "Attaquer":
        vie = vie - 20
    elif action == "Se défendre":
        vie = vie + 10
        if vie > 100:
            vie = 100
    else:
        vie = vie - 5
    print("Vie restante :", vie)

print("Ton personnage est tombé au combat.")
```

</details>

#### Exercice 4.2 — Combat avec un monstre

*Contexte : Après avoir exploré le mini-jeu de la vie du personnage, ajoutons un combat contre un monstre. Le succès des attaques sera déterminé par le lancement d'un dé à 20 faces.*

**Objectif :** Simuler un combat entre votre personnage et un monstre jusqu'à ce que l'un des deux n'ait plus de points de vie.

**Règles :**
- Votre personnage et le monstre commencent chacun avec 100 points de vie.
- À chaque tour, vous pouvez choisir d'attaquer, de vous défendre ou de ne rien faire.
- Lorsqu'une attaque est lancée, un dé à 20 faces (random.randint(1, 20)) est lancé : si le score est supérieur à 10, l'attaque réussit.
- Une attaque réussie réduit les PV de l'adversaire de 20.
- Se défendre permet de regagner 10 PV, jusqu'à un maximum de 100.
- Le monstre attaque automatiquement à chaque tour, avec le même principe de dé à 20 faces.

**Code à compléter :**
```python
import random

pv_hero = 100
pv_monstre = 100

while pv_hero > 0 and pv_monstre > 0:
    action = input("Attaquer, Se défendre ou Rien ? : ")
    if action == "Attaquer":
        de = random.randint(1, ___)
        if de > 10:
            pv_monstre = pv_monstre ___ 20
            print("Attaque réussie ! PV monstre :", pv_monstre)
        else:
            print("Attaque manquée.")
    elif action == "Se défendre":
        pv_hero = pv_hero + 10
        if pv_hero > ___:
            pv_hero = 100

    # Tour du monstre
    de_monstre = random.randint(1, 20)
    if de_monstre > 10:
        pv_hero = pv_hero - ___
        print("Le monstre vous touche ! PV héros :", pv_hero)

if pv_hero <= 0:
    print("Vous avez été vaincu...")
else:
    print("Victoire ! Le monstre est vaincu.")
```

*Pause : le combat fonctionne, mais on ne voit rien du monstre qu'on affronte. La suite de la séance ajoute une vraie fenêtre — et une image.*

<details><summary>Solution</summary>

```python
import random

pv_hero = 100
pv_monstre = 100

while pv_hero > 0 and pv_monstre > 0:
    action = input("Attaquer, Se défendre ou Rien ? : ")
    if action == "Attaquer":
        de = random.randint(1, 20)
        if de > 10:
            pv_monstre = pv_monstre - 20
            print("Attaque réussie ! PV monstre :", pv_monstre)
        else:
            print("Attaque manquée.")
    elif action == "Se défendre":
        pv_hero = pv_hero + 10
        if pv_hero > 100:
            pv_hero = 100

    de_monstre = random.randint(1, 20)
    if de_monstre > 10:
        pv_hero = pv_hero - 20
        print("Le monstre vous touche ! PV héros :", pv_hero)

if pv_hero <= 0:
    print("Vous avez été vaincu...")
else:
    print("Victoire ! Le monstre est vaincu.")
```

</details>

#### Exercice 4.3 — Ta première fenêtre de personnage

*Contexte : Tkinter est la bibliothèque graphique standard de Python — elle est déjà installée avec Python, inutile d'installer quoi que ce soit. Trois briques suffisent pour commencer : Label (afficher du texte), Entry (un champ de saisie) et Button (un bouton qui déclenche une fonction). Le paramètre command=ma_fonction attend le NOM de la fonction, sans parenthèses — écrire command=ma_fonction() l'appellerait tout de suite, au lieu d'attendre le clic.*

**Objectif :** Prendre en main Tkinter : afficher une fenêtre, un champ de saisie et un bouton, et relier un clic à une fonction Python grâce au paramètre command.

**Code à compléter :**
```python
import tkinter as tk

# Cette fonction récupère le texte saisi et l'affiche dans le label
def afficher_nom():
    nom = entry.get()
    label_resultat.config(text="Bienvenue, " + ___ + " !")

# Création de la fenêtre principale
root = tk.Tk()
root.___("Création de personnage")

# Champ de saisie pour le nom du héros
entry = tk.Entry(root)
entry.pack(pady=10)

# Bouton relié à la fonction afficher_nom
bouton = tk.Button(root, text="Valider", command=___)
bouton.pack(pady=5)

# Label qui affichera le résultat
label_resultat = tk.Label(root, text="")
label_resultat.___(pady=10)

root.___()
```

> ⚠️ Interface graphique Tkinter : à exécuter dans Spyder, pas dans le navigateur.

<details><summary>Solution</summary>

```python
import tkinter as tk

def afficher_nom():
    nom = entry.get()
    label_resultat.config(text="Bienvenue, " + nom + " !")

root = tk.Tk()
root.title("Création de personnage")

entry = tk.Entry(root)
entry.pack(pady=10)

bouton = tk.Button(root, text="Valider", command=afficher_nom)
bouton.pack(pady=5)

label_resultat = tk.Label(root, text="")
label_resultat.pack(pady=10)

root.mainloop()
```

</details>

#### Exercice 4.4 — Affichage graphique des rencontres

*Contexte : Pour afficher une image dans Tkinter, il faut la bibliothèque Pillow (PIL), qui gère l'ouverture et le redimensionnement, puis ImageTk.PhotoImage() qui la convertit dans un format que Tkinter sait afficher. Étapes : 1) importer tkinter et PIL ; 2) créer la fenêtre ; 3) charger l'image avec Image.open() et la redimensionner avec resize() ; 4) la convertir avec ImageTk.PhotoImage() ; 5) l'afficher dans un Label ou un Canvas ; 6) lancer mainloop(). Une ligne à retenir : canvas.image = photo conserve une référence à l'image pour l'empêcher d'être supprimée par le garbage collector avant d'être affichée.*

**Objectif :** Ajouter une image à une interface Tkinter : à chaque clic sur « Nouvelle Rencontre », on affiche le nom d'un ennemi et son image.

**Code à compléter :**
```python
# import des librairies nécessaires
import tkinter as tk
from PIL import Image, ImageTk
import random

# Créer la fenêtre principale
fenetre = tk.Tk()
fenetre.title("Rencontres dans la forêt interdite")
fenetre.geometry("600x400")

# Widgets pour le nom et l'image
label_nom = tk.Label(fenetre, text="", font=("Arial", 20))
label_nom.________()
canvas = tk.Canvas(fenetre, width=300, height=300)
canvas.pack()

def choisir_ennemi():
    choix = random.____________(1, 3)
    if choix == 1 : return "gobelin"
    elif __________ == 2 : __________"araignee"
    else : return "troll"

def afficher_rencontre():
    ennemi = choisir_ennemi()
    label_nom.config(text = f"Un {_________} apparaît !")
    # Charger et afficher l'image correspondante
    image_path = ennemi + ".png"
    image = Image.open(image_path)
    image = image.resize((200, 200))
    photo = ImageTk.PhotoImage(image)
    canvas.delete("all")
    canvas.create_image(150, 150, image=photo)
    canvas.image = photo

bouton = tk.Button(fenetre, text="Nouvelle Rencontre", command=afficher_rencontre)
bouton.pack()

fenetre.__________()
```

> ⚠️ Interface graphique Tkinter + images : à exécuter dans Spyder. Nécessite Pillow (pip install pillow si erreur à l'import). Images fournies sur Classroom.

**Pour aller plus loin :** Enrichir le bestiaire : utilise une IA (Copilot ou autre) pour générer l'image d'un nouveau monstre dans un style rétro (pixel, 8-bits), puis ajoute-le à la liste des ennemis possibles dans choisir_ennemi().

<details><summary>Solution</summary>

```python
import tkinter as tk
from PIL import Image, ImageTk
import random

fenetre = tk.Tk()
fenetre.title("Rencontres dans la forêt interdite")
fenetre.geometry("600x400")

label_nom = tk.Label(fenetre, text="", font=("Arial", 20))
label_nom.pack()
canvas = tk.Canvas(fenetre, width=300, height=300)
canvas.pack()

def choisir_ennemi():
    choix = random.randint(1, 3)
    if choix == 1 : return "gobelin"
    elif choix == 2 : return "araignee"
    else : return "troll"

def afficher_rencontre():
    ennemi = choisir_ennemi()
    label_nom.config(text = f"Un {ennemi} apparaît !")
    image_path = ennemi + ".png"
    image = Image.open(image_path)
    image = image.resize((200, 200))
    photo = ImageTk.PhotoImage(image)
    canvas.delete("all")
    canvas.create_image(150, 150, image=photo)
    canvas.image = photo

bouton = tk.Button(fenetre, text="Nouvelle Rencontre", command=afficher_rencontre)
bouton.pack()

fenetre.mainloop()
```

</details>

### 🏆 Challenge — Gestion d'un combat dans la forêt interdite

**Objectif :** Assembler tout ce qui vient d'être vu : reprendre le combat au dé à 20 faces (exercice 4.2) et lui donner une interface graphique complète, comme dans l'exercice 4.4.

1. Un monstre est choisi au hasard parmi 2 ou 3 (comme en 4.4) et son image s'affiche.
1. Trois boutons permettent d'attaquer, de se défendre ou de ne rien faire (reprendre la logique de dé de l'exercice 4.2).
1. Un bouton « Choisir un nouveau monstre » relance une rencontre.
1. Les points de vie du héros et du monstre sont affichés et mis à jour après chaque tour (label_pv.config(text=...), comme pour le nom de l'ennemi).

> ⚠️ Interface graphique Tkinter : à exécuter dans Spyder.

---

## Séance 5 — Les listes
*stocker, parcourir et modifier des collections d'éléments* — durée indicative : 2h

**Objectifs**
- Créer une liste et accéder à ses éléments par index
- Ajouter (append) et retirer (remove) des éléments
- Utiliser une liste pour stocker un ensemble d'objets du jeu (monstres, potions…)
- Combiner liste et hasard avec random.choice

### Qu'est-ce qu'une liste ?

Une liste en Python est une collection ordonnée d'éléments qui peuvent être de types différents. Les listes sont modifiables : on peut ajouter, supprimer ou modifier des éléments après la création de la liste.

### Manipuler une liste

```python
# Création d'une liste de nombres
nombres = [1, 2, 3, 4, 5]

# Accéder à un élément (le premier élément est à l'index 0)
premier_nombre = nombres[0]  # Résultat : 1

# Modifier un élément de la liste
nombres[0] = 6  # La liste devient [6, 2, 3, 4, 5]

# Ajouter un élément à la fin de la liste
nombres.append(7)  # La liste devient [6, 2, 3, 4, 5, 7]

# Supprimer un élément de la liste
nombres.remove(3)  # La liste devient [6, 2, 4, 5, 7]

print(nombres)
```

### Exercices

#### Exercice 5.1 — La liste de courses

**Objectif :** Créer un programme qui gère une liste de courses : ajouter des articles, les retirer, et les afficher.

1. Créez une liste vide appelée liste_de_courses.
1. Utilisez une boucle while pour un menu interactif : a (ajouter), r (retirer), l (afficher la liste), q (quitter).
1. À chaque itération, demandez à l'utilisateur de choisir une option et effectuez l'action correspondante.

**Code à compléter :**
```python
# Initialisation de la liste de courses
______________________ = []

# Boucle pour le menu interactif
while True:
    choix = input("Choisissez une option (a: ajouter, r: retirer, l: lister, q: quitter): ")
    if choix == 'a':
        article = input("Entrez l'article à ajouter : ")
        liste_de_courses.______________(article)
    elif choix == 'r':
        article = input("Entrez l'article à retirer : ")
        if article in liste_de_courses:
            liste_de_courses.______________(article)
        else:
            print("Cet article n'est pas dans la liste.")
    elif choix == 'l':
        print("Voici votre liste de courses : ", ________________________)
    elif choix == 'q':
        print("Fin du programme.")
        break
```

<details><summary>Solution</summary>

```python
liste_de_courses = []

while True:
    choix = input("Choisissez une option (a: ajouter, r: retirer, l: lister, q: quitter): ")
    if choix == 'a':
        article = input("Entrez l'article à ajouter : ")
        liste_de_courses.append(article)
    elif choix == 'r':
        article = input("Entrez l'article à retirer : ")
        if article in liste_de_courses:
            liste_de_courses.remove(article)
        else:
            print("Cet article n'est pas dans la liste.")
    elif choix == 'l':
        print("Voici votre liste de courses : ", liste_de_courses)
    elif choix == 'q':
        print("Fin du programme.")
        break
```

</details>

### 🏆 Challenge — Suite du challenge de la forêt interdite

**Objectif :** Faire évoluer le combat de la forêt interdite grâce aux listes.

**Étape 1 — une liste de monstres**

Modifiez la fonction choisir_ennemi (vue en séance 4) afin d'utiliser une liste pour stocker tous les noms de monstres. La fonction devra ensuite sélectionner un monstre au hasard dans cette liste (random.choice) et le retourner. Cela rend le code plus clair et facile à étendre si de nouveaux monstres sont ajoutés.

```python
monstres = ["gobelin", "araignee", "troll"]

def choisir_ennemi():
    return random.choice(monstres)
```

**Étape 2 — retirer un monstre vaincu**

Modifiez votre programme pour qu'à chaque fois qu'un monstre est vaincu, il soit retiré de la liste des monstres. Un nouveau monstre apparaîtra ensuite. Si tous les monstres sont vaincus et que la liste est vide, affichez : « Victoire, vous avez débarrassé la forêt interdite de tous ses monstres ! »

**Étape 3 — Attaque et Défense**

Le héros possède deux caractéristiques, Attaque et Défense, entre 1 et 20. Pour ce scénario : héros Attaque 12, Défense 10 ; monstres Attaque 9, Défense 7.

Règle de combat : quand un personnage attaque, un dé à 20 faces est lancé. Si le résultat est inférieur ou égal à sa valeur d'Attaque, l'attaque réussit. Le défenseur lance alors un dé à 20 faces : si le résultat est inférieur ou égal à sa valeur de Défense, il bloque l'attaque ; sinon, il subit 20 points de dégâts.

Avant d'assembler tout le combat, isolons ce mécanisme dans une fonction — ça se teste plus facilement, et ça évite de réécrire le même jet de dé pour l'attaque et pour la défense :

```python
import random

def jet_reussi(valeur_cible):
    de = random.randint(1, 20)
    return de <= valeur_cible

# Test : le héros (Attaque 12) tente une attaque
if jet_reussi(12):
    print("Attaque réussie !")
else:
    print("Attaque manquée.")
```

- Le héros lance un dé pour son attaque et obtient 7 (≤ 12) : l'attaque réussit. L'araignée lance un dé pour sa défense et obtient 17 (> 7) : la défense échoue. L'araignée subit 20 points de dégâts.
- Même attaque réussie (7 ≤ 12), mais l'araignée obtient 5 (≤ 7) pour sa défense : elle pare l'attaque et ne subit aucun dégât.
- Le troll attaque et obtient 8 (≤ 9) : l'attaque réussit. Le héros lance sa défense et obtient 11 (> 10) : la défense échoue, le héros subit 20 points de dégâts.

**Étape 4 — la potion de soin**

Remplacez le bouton « Défendre » par « Boire une potion de soin ». Cette action permet au héros de gagner entre 10 et 20 points de vie (random.randint(10, 20)), mais il subit quand même l'attaque du monstre.

---

## Séance 6 — Les dictionnaires
*associer des clés à des valeurs — la structure du bestiaire final* — durée indicative : 2h

**Objectifs**
- Créer un dictionnaire et accéder à ses valeurs par clé
- Construire des dictionnaires imbriqués
- Ajouter, modifier et supprimer des éléments d'un dictionnaire
- Restructurer le bestiaire du RPG en dictionnaire de dictionnaires

### Qu'est-ce qu'un dictionnaire ?

Un dictionnaire en Python est une structure de données qui permet d'associer des clés à des valeurs. Contrairement aux listes, qui sont indexées par des nombres, les dictionnaires utilisent des clés qui peuvent être de différents types, comme des chaînes de caractères ou des nombres.

### Un premier dictionnaire

```python
# Création d'un dictionnaire
carnet_adresses = {
    "Alice": "123-456-7890",
    "Bob": "987-654-3210",
    "Charlie": "555-555-5555"
}

# Affichage du numéro de téléphone d'Alice
print(carnet_adresses["Alice"])
```

### Dictionnaires imbriqués

Les dictionnaires peuvent également contenir d'autres dictionnaires en tant que valeurs — utile pour stocker plusieurs informations sur un même élément.

```python
# Dictionnaire principal
menu = {
    "Café": {"prix": 2.50, "contient_cafeine": True},
    "Thé Vert": {"prix": 3.00, "contient_cafeine": True},
    "Chocolat Chaud": {"prix": 2.80, "contient_cafeine": False}
}

print("Prix du Café :", menu["Café"]["prix"])
print("Le Thé Vert contient-il de la caféine ? :")
print(menu["Thé Vert"]["contient_cafeine"])
```

### Manipuler un dictionnaire

Ajout d'un élément : affectez une valeur à une nouvelle clé — mon_dictionnaire["nouvelle_cle"] = "nouvelle_valeur".
Modification : affectez une nouvelle valeur à une clé existante.
Suppression : utilisez le mot-clé del — del mon_dictionnaire["cle"].

### Un inventaire de magasin

```python
# Création d'un dictionnaire d'inventaire
inventaire = {"pommes": 30, "bananes": 45, "oranges": 20}

# Ajout de citrons dans l'inventaire
inventaire["citrons"] = 15

# Modification de la quantité de bananes
inventaire["bananes"] = 50

# Suppression des oranges de l'inventaire
del inventaire["oranges"]

# Affichage de l'inventaire mis à jour
print(inventaire)
```

### Naviguer dans une liste en boucle (%)

Pour le challenge de cette séance, il faudra pouvoir passer au héros suivant, et boucler au début de la liste une fois arrivé au dernier — sans jamais sortir des index valides. L'opérateur % (modulo) renvoie le reste d'une division : c'est l'outil qui permet ce bouclage automatique.

```python
noms = ["Guerrier", "Mage", "Archer"]
index = 0

# Passer au suivant : +1, puis modulo la longueur de la liste
index = (index + 1) % len(noms)
print(noms[index])   # Mage

index = (index + 1) % len(noms)
print(noms[index])   # Archer

index = (index + 1) % len(noms)
print(noms[index])   # Guerrier — on a rebouclé au début !

# Passer au précédent fonctionne aussi, y compris pour revenir en arrière
# depuis le premier élément :
index = (index - 1) % len(noms)
print(noms[index])   # Archer
```

### Exercices

#### Exercice 6.1 — Le bestiaire d'un RPG

**Objectif :** Créer un dictionnaire nommé bestiaire contenant différentes créatures. Les clés seront les noms des monstres ("Dragon", "Troll", "Gobelin"...), les valeurs une description de chaque créature.

**Code à compléter :**
```python
bestiaire = {
    "Dragon": ___________________________________,
    "Troll": ____________________________________,
    "Gobelin": __________________________________
}

print(bestiaire["Dragon"])
```

<details><summary>Solution</summary>

```python
bestiaire = {
    "Dragon": "Une créature ailée cracheuse de feu, redoutée de tous.",
    "Troll": "Un colosse lent mais capable de régénérer ses blessures.",
    "Gobelin": "Une petite créature rusée qui chasse en groupe."
}

print(bestiaire["Dragon"])
```

</details>

#### Exercice 6.2 — Le bestiaire de la forêt interdite

**Objectif :** En vous basant sur l'exemple du menu imbriqué, modifiez le code de la forêt interdite en créant un dictionnaire bestiaire qui contient, pour chaque monstre, ses points de vie (PV), son attaque, sa défense et une description. Adaptez ensuite votre programme pour utiliser ce dictionnaire lors des combats.

**Code à compléter :**
```python
bestiaire = {
    "gobelin": {"pv": 40, "attaque": ___, "defense": ___, "description": "___________"},
    "araignee": {"pv": 30, "attaque": ___, "defense": ___, "description": "___________"},
    "troll": {"pv": 70, "attaque": ___, "defense": ___, "description": "___________"}
}

ennemi = random.choice(list(bestiaire.keys()))
stats = bestiaire[___]
print("Un", ennemi, "apparaît !", stats["description"])
print("PV :", stats[___], "- Attaque :", stats["attaque"], "- Défense :", stats[___])
```

*Cet extrait utilise `random` : ajoutez `import random` en haut du fichier pour le tester seul.*

<details><summary>Solution</summary>

```python
bestiaire = {
    "gobelin": {"pv": 40, "attaque": 9, "defense": 7, "description": "Rapide et rusé, il chasse en groupe."},
    "araignee": {"pv": 30, "attaque": 11, "defense": 6, "description": "Venimeuse et discrète."},
    "troll": {"pv": 70, "attaque": 14, "defense": 9, "description": "Lent mais redoutablement puissant."}
}

ennemi = random.choice(list(bestiaire.keys()))
stats = bestiaire[ennemi]
print("Un", ennemi, "apparaît !", stats["description"])
print("PV :", stats["pv"], "- Attaque :", stats["attaque"], "- Défense :", stats["defense"])
```

</details>

### 🏆 Challenge — Ajout des héros

**Objectif :** Dans un RPG, le joueur peut choisir un type de héros parmi plusieurs archétypes (Mage, Guerrier, Voleur...). Intégrez cette mécanique :

1. Créer un dictionnaire heros contenant, pour chaque archétype : un nom, une description, une valeur d'attaque, une valeur de défense et le nom de l'image associée.
1. Générer avec une IA (Copilot ou autre) une image pour chaque archétype de héros, dans le même style rétro que celles du bestiaire (séance 4).
1. Ajouter une nouvelle fenêtre permettant au joueur de sélectionner son héros avant d'entrer dans la forêt interdite. Cette fenêtre affiche toutes les caractéristiques du héros et son image, avec trois boutons : « Choisir ce héros », « Héros suivant », « Héros précédent » — utilise l'indexation cyclique (%) vue dans le cours pour naviguer entre les héros.
1. Mettre à jour les caractéristiques du joueur après le choix du héros et le lancement du jeu.

> ⚠️ Interface graphique Tkinter : à exécuter dans Spyder.
