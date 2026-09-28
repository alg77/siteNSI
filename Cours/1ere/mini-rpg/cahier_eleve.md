# Mini RPG Python — cours et missions détaillés

Construis un mini RPG textuel en six étapes. Pour chaque étape : lis le cours, prédis l’exemple, expérimente, puis écris ta solution dans l’atelier à rendre. Conserve les six versions pour montrer ta progression.

À rendre : un seul fichier NOM_Prenom_mini_rpg.py exporté depuis le navigateur. Il contient six parties indépendantes sélectionnées au lancement par un menu fourni. Ne modifie pas les marqueurs de partie. Pour le TP2, écris 19 appels de test avec print et vérifie les trois scénarios de la scène. Pour les autres parties, écris au moins deux tests commentés (entrées, attendu, observé). En tête du fichier, indique les aides utilisées et une correction que tu sais expliquer. Sauvegarde à chaque séance ; une sauvegarde du navigateur ne remplace pas le fichier téléchargé.

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

## Partie 2 — Hasard, bibliothèques et premières fonctions

TP2 · séance de 2 h. Repères indicatifs : 15 min de cours ciblé, 10 min d’échauffement, 55 min pour définir et tester les fonctions, 25 min pour la scène, 15 min de vérification et de sauvegarde. Les six fonctions et leurs tests font partie du rendu. Écris toi-même chaque ligne def, ses paramètres, les deux-points et son corps. Les indices 3 sont réservés aux deux premières étapes de mission et aux deux premiers échauffements. Si tout est terminé et expliqué, commence le TP3.

### 1. Une fonction : un petit programme que l’on peut appeler

Une fonction est un bloc d’instructions auquel on donne un nom pour pouvoir le réutiliser. def signifie définir : Python mémorise ce bloc, mais ne l’exécute pas encore. saluer() appelle la fonction et exécute son corps. Après l’appel, le programme continue à la ligne suivante.

```python
def saluer():
    print("Bienvenue dans la forêt")

print("Avant")
saluer()
print("Après")
```

**À l’écran :**

```text
Avant
Bienvenue dans la forêt
Après
```

À surveiller : Les deux-points terminent la ligne def. Les quatre espaces placent print dans la fonction. Ici, saluer affiche un message ; elle ne fournit pas de résultat utile à réutiliser.

### 2. Recevoir des valeurs : paramètres et arguments

Dans la définition, force et bonus sont les paramètres : des noms qui recevront des valeurs. Dans calculer_degats(8, 3), 8 et 3 sont les arguments. Pendant cet appel, force vaut 8 et bonus vaut 3. La fonction calcule 11 et le renvoie ; la variable degats reçoit ce résultat.

```python
def calculer_degats(force, bonus):
    total = force + bonus
    return total

degats = calculer_degats(8, 3)
print(degats)
```

**À l’écran :**

```text
11
```

À surveiller : On définit la fonction une fois, puis on peut l’appeler plusieurs fois. Les paramètres appartiennent à l’appel de la fonction ; utilise le résultat renvoyé pour récupérer le calcul.

### 3. Renvoyer une valeur : suivre le trajet de return

return transmet une valeur au code qui a appelé la fonction et termine immédiatement cet appel. Lis dans cet ordre : ajouter_bonus(4) reçoit 4 ; resultat devient 7 ; return renvoie 7 ; points reçoit 7 ; print affiche 7. Renvoyer ne signifie pas afficher.

```python
def ajouter_bonus(points):
    resultat = points + 3
    return resultat

points = ajouter_bonus(4)
print(points)
print(points + 1)
```

**À l’écran :**

```text
7
8
```

À surveiller : return s’écrit à l’intérieur d’une fonction. Il termine l’appel de cette fonction, pas tout le programme. Une instruction placée après un return exécuté dans le même bloc ne sera pas exécutée.

### 4. Renvoyer avec return

return transmet un résultat au code qui a appelé la fonction et termine cet appel. print montre du texte à l’écran. Si tu veux réutiliser une valeur dans un calcul ou un test, il faut la renvoyer.

```python
def bonus_affiche(force):
    print(force + 2)

def bonus_renvoie(force):
    return force + 2

bonus_affiche(5)
attaque = bonus_renvoie(5)
print(attaque + 1)
```

**À l’écran :**

```text
7
8
```

À surveiller : Le premier 7 est seulement affiché. Le second 7 est d’abord renvoyé, stocké, puis réutilisé pour calculer 8.

### 5. Un booléen : une valeur qui répond vrai ou faux

Le type bool possède deux valeurs : True (vrai) et False (faux). Comme un bit possède deux états, on peut coder une information vrai/faux avec 1/0. Mais bool désigne ici une valeur logique ; la numération binaire sert à écrire des nombres avec les chiffres 0 et 1. Écris True et False avec une majuscule et sans guillemets.

```python
porte_ouverte = True
print(porte_ouverte)
print(type(porte_ouverte))
print(type("True"))
```

**À l’écran :**

```text
True
<class 'bool'>
<class 'str'>
```

À surveiller : "True" est du texte, pas un booléen. On utilise True et False pour exprimer une réponse logique dans ce TP, plutôt que les nombres 1 et 0.

### 6. Une comparaison fabrique un booléen

Une comparaison est une expression dont le résultat vaut True ou False. > signifie strictement supérieur ; >= signifie supérieur ou égal ; == teste l’égalité. On peut stocker le résultat dans une variable avant de l’utiliser dans un if.

```python
de = 11
seuil = 11
reussite = de >= seuil
print(reussite)
print(de > seuil)
if reussite:
    print("Touché !")
```

**À l’écran :**

```text
True
False
Touché !
```

À surveiller : Le signe = stocke une valeur ; == compare deux valeurs. À la frontière 11, > et >= ne donnent pas la même réponse.

### 7. Renvoyer vrai ou faux avec if et else

Commence par la version détaillée. La fonction pose la question « le dé atteint-il le seuil ? ». Si oui, elle renvoie True. Sinon, elle renvoie False. Chaque appel ne suit qu’un seul chemin et renvoie une seule valeur. Le premier appel ci-dessous suit else ; le second suit if.

```python
def attaque_reussie(de, seuil):
    if de >= seuil:
        return True
    else:
        return False

print(attaque_reussie(10, 11))
print(attaque_reussie(11, 11))
```

**À l’écran :**

```text
False
True
```

À surveiller : if est indenté de quatre espaces dans def ; return est indenté de huit espaces dans if ou else. Renvoyer "True" serait renvoyer du texte. Sans le return False, le cas raté renverrait None, pas False.

### 8. Utiliser la réponse de la fonction

On distingue trois étapes : appeler la fonction, stocker sa réponse, puis décider quoi afficher. reussite contient un booléen. if reussite: lit « si la réponse est vraie ». Le print se trouve dans le programme qui appelle la fonction.

```python
def attaque_reussie(de, seuil):
    if de >= seuil:
        return True
    else:
        return False

reussite = attaque_reussie(12, 11)
print(reussite)
if reussite:
    print("Touché !")
else:
    print("Raté !")
```

**À l’écran :**

```text
True
Touché !
```

À surveiller : La fonction décide si l’attaque réussit ; le programme utilise cette réponse. Remplace 12 par 10 et prédis les deux affichages avant de relancer.

### 9. Pour aller plus loin : comprendre l’écriture courte

La version avec if / else est une solution complète et acceptée. Quand tu la comprends, tu peux lire return a > b : Python calcule d’abord a > b, obtient True ou False, puis renvoie cette valeur. Les parenthèses dans return (a > b) sont facultatives. Il n’est pas nécessaire d’utiliser cette écriture courte dans ton rendu.

```python
def est_superieur(a, b):
    if a > b:
        return True
    else:
        return False

def est_superieur_court(a, b):
    return a > b

print(est_superieur(5, 3))
print(est_superieur_court(5, 3))
print(est_superieur(3, 3))
print(est_superieur_court(3, 3))
```

**À l’écran :**

```text
True
True
False
False
```

À surveiller : Dans la mission, la règle est de >= seuil : le seuil lui-même réussit. Le raccourci ne change jamais la règle choisie.

### 10. Utiliser un module

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

### 11. Comprendre les bornes du hasard

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

### 12. Une fonction sans paramètre

Une fonction peut ne recevoir aucune information. Les parenthèses restent obligatoires dans la définition et dans l’appel. Ici chaque appel effectue un nouveau tirage.

```python
import random
def lancer_piece():
    return random.choice(["pile", "face"])

print(lancer_piece())
```

**À l’écran :**

```text
pile ou face
```

À surveiller : Écrire print(lancer_piece) affiche une représentation de la fonction. Il faut les parenthèses pour l’appeler.

### 13. Fabriquer un dé réutilisable

Une fonction peut utiliser un paramètre dans l’appel d’une fonction de bibliothèque. lancer_de(6) et lancer_de(20) exécutent le même algorithme avec des bornes différentes.

```python
import random
def lancer_de(nb_faces):
    return random.randint(1, nb_faces)

print(lancer_de(6))
print(lancer_de(20))
```

**À l’écran :**

```text
Un entier de 1 à 6, puis un entier de 1 à 20.
```

À surveiller : La fonction renvoie le tirage. Elle ne doit pas toujours utiliser 20 à la place du paramètre nb_faces.

### 14. Tester avant de remettre le hasard

Pour vérifier une règle, commence avec des valeurs choisies. Vérifie les frontières, puis remets le tirage aléatoire. Un petit nombre de tirages n’a pas forcément les proportions théoriques.

```python
def attaque_reussie(de, seuil):
    if de >= seuil:
        return True
    else:
        return False

print(attaque_reussie(10, 11))
print(attaque_reussie(11, 11))
print(attaque_reussie(12, 11))
```

**À l’écran :**

```text
False
True
True
```

À surveiller : Un test aléatoire peut réussir par hasard malgré une erreur. Les valeurs fixes rendent le test reproductible.

### 15. Faire entrer une valeur dans une fonction

input lit toujours du texte. Convertis la saisie, puis donne la valeur obtenue comme argument de la fonction. Tu peux changer la réponse ci-dessous avant chaque exécution.

```python
import random
def lancer_de(nb_faces):
    return random.randint(1, nb_faces)

faces = int(input("Nombre de faces ? "))
resultat = lancer_de(faces)
print("Résultat :", resultat)
```

**À l’écran :**

```text
Avec 6 : un entier entre 1 et 6.
```

À surveiller : La valeur saisie doit être un entier positif. Dans cet exercice, on ne traite pas encore une saisie non numérique.

### 16. Tester une fonction avec print

Un test consiste à choisir des entrées, prévoir le résultat à partir de la consigne, exécuter le programme, puis comparer le résultat obtenu au résultat attendu. Calcule l’attendu avant de lancer le code : il ne doit pas être recopié depuis la sortie de ta fonction. Ici, on vérifie une fonction indépendante du RPG. Chaque print précise l’appel, l’attendu et l’obtenu.

```python
def prix_places(nombre, tarif):
    return nombre * tarif

# Cas ordinaire : 3 places à 4 euros coûtent 12 euros.
print("prix_places(3, 4) | attendu : 12 | obtenu :", prix_places(3, 4))
# Cas particulier : aucune place ne coûte rien.
print("prix_places(0, 4) | attendu : 0 | obtenu :", prix_places(0, 4))
```

**À l’écran :**

```text
prix_places(3, 4) | attendu : 12 | obtenu : 12
prix_places(0, 4) | attendu : 0 | obtenu : 0
```

À surveiller : Ces print ne décident pas automatiquement si le test réussit : c’est à toi de comparer. Un résultat None peut signaler un return oublié. Une erreur Python est aussi un résultat à analyser.

### 17. Choisir des cas qui peuvent révéler une erreur

Un cas ordinaire vérifie une situation courante. Un test de frontière vérifie l’endroit où la règle change : juste avant, exactement à la limite, juste après. Pour un accès autorisé à partir de 12 ans, on teste 11, 12 et 13. Le cas 12 distingue >= de >. Teste aussi chaque branche : une réponse True et une réponse False. Pour une fonction paramétrable, change le paramètre : cela révèle une valeur écrite en dur.

```python
def acces_autorise(age):
    if age >= 12:
        return True
    else:
        return False

print("11 ans | attendu : False | obtenu :", acces_autorise(11))
print("12 ans | attendu : True | obtenu :", acces_autorise(12))
print("13 ans | attendu : True | obtenu :", acces_autorise(13))
```

**À l’écran :**

```text
11 ans | attendu : False | obtenu : False
12 ans | attendu : True | obtenu : True
13 ans | attendu : True | obtenu : True
```

À surveiller : Un test a une raison d’être. Trois valeurs toutes éloignées de la limite peuvent laisser passer une erreur. Quelques tests réussis ne prouvent pas que le programme est correct pour toutes les entrées.

### 18. Tester une règle et tester le hasard

Pour une fonction déterministe, les mêmes entrées donnent le même résultat : tu peux prévoir une valeur précise. Pour un dé, tu ne peux généralement pas prévoir le nombre tiré ; tu vérifies plutôt qu’il s’agit d’un entier entre les bornes autorisées. Stocke un seul tirage et vérifie cette même valeur. Tester un dé à une face donne un cas particulier dont le résultat est certain : 1.

```python
import random

tirage = random.randint(1, 6)
print("Dé 6 faces | attendu : entier de 1 à 6 | obtenu :", tirage)
print("Type attendu : int | obtenu :", type(tirage))
print("Bornes attendues : True | obtenu :", 1 <= tirage <= 6)
```

**À l’écran :**

```text
Le nombre varie de 1 à 6.
Le type est <class 'int'>.
Le contrôle des bornes affiche True.
```

À surveiller : 1 <= tirage <= 6 signifie que tirage est au moins 1 et au plus 6. Un tirage correct ne suffit pas à valider toute une fonction aléatoire. Vérifie aussi le code, change le nombre de faces et relance. Ne demande pas au hasard de produire un résultat fixé.

### 19. Passer des tests de fonctions au test du programme

Teste d’abord chaque fonction seule, puis leur assemblage. Une fonction peut être correcte alors que le programme oublie de récupérer son résultat. Ici, le premier appel renvoie bien 12, mais stock reste 9. Le second appel affecte le résultat à stock. Pour le RPG, pense à réaffecter les PV renvoyés par les fonctions.

```python
def ajouter_stock(stock, livraison):
    return stock + livraison

stock = 9
ajouter_stock(stock, 3)
print("Sans récupération :", stock)
stock = ajouter_stock(stock, 3)
print("Avec récupération :", stock)
```

**À l’écran :**

```text
Sans récupération : 9
Avec récupération : 12
```

À surveiller : Si attendu et obtenu diffèrent, garde une trace du test, recherche l’erreur, corrige puis relance. Pour tester une scène avec un dé, remplace temporairement le hasard par une valeur choisie, puis restaure le tirage après vérification.

### Petites quêtes

#### Échauffement A · le dé miniature

Importe random et lance un dé à 6 faces. Affiche son résultat.

```python
# TODO : import
# TODO : tirer un entier entre 1 et 6
# TODO : afficher
```

Objectif : Toujours un entier de 1 à 6.

**Indice 1** — Il faut obtenir un nombre, puis l’afficher.

**Indice 2** — Importe random. randint reçoit deux bornes incluses.

**Indice 3** — Complète les bornes et la variable affichée.

```python
import random
de = random.randint(___, ___)
print(___)
```

#### Échauffement B · trois points de courage

Écris une fonction ajouter_bonus(points) qui renvoie points + 3. Ajoute toi-même sa définition au-dessus de l’appel proposé. Remplace les ... par 4 pour appeler la fonction et afficher le résultat. Les ... indiquent ici du code à compléter, pas une valeur à conserver.

```python
print(ajouter_bonus(...))
```

Objectif : 7

**Indice 1** — La fonction doit donner un résultat au programme qui l’appelle.

**Indice 2** — Calcule points + 3, puis renvoie ce résultat avec return.

**Indice 3** — Complète le calcul et le nom de la valeur renvoyée.

```python
def ajouter_bonus(points):
    resultat = ___ + ___
    return ___

print(ajouter_bonus(...))
```

#### Entraînement C · un dé à plusieurs faces

Écris entièrement lancer_de(nb_faces), avec l’import nécessaire, au-dessus des appels proposés. Appelle-la avec 6, 10 puis 20. Pour le premier appel, complète l’argument ; pour les deux suivants, écris toi-même le nom de la fonction, les parenthèses et l’argument à l’intérieur de print. Chaque résultat doit respecter sa borne.

```python
print(lancer_de(...))
print(...)
print(...)
```

Objectif : Trois entiers : 1–6, puis 1–10, puis 1–20.

**Indice 1** — Le nombre de faces dépend de l’appel.

**Indice 2** — Le tirage va de 1 à nb_faces, inclus. Récupère-le dans une variable.

#### Entraînement D · print ou return ?

Écris entièrement une fonction bonus(force) qui renvoie force + 2. Appelle-la avec 7 et stocke sa réponse dans resultat, puis complète print pour afficher resultat augmenté de 1. Tu dois obtenir 10. Explique pourquoi afficher le calcul dans la fonction avec print ne permettrait pas de réutiliser sa réponse.

```python
resultat = ...
print(...)
```

Objectif : 10

**Indice 1** — Définis la fonction avant son appel. La valeur renvoyée sera stockée dans resultat.

**Indice 2** — return transmet le calcul à l’appelant ; print seul ne le fait pas. Après l’appel, ajoute 1 à la valeur reçue avant de l’afficher.

#### Entraînement E · répondre vrai ou faux

Écris entièrement peut_entrer(niveau) : elle renvoie True si niveau est supérieur ou égal à 3, False sinon. Utilise if / else. Cette fois, écris seul la définition et les trois lignes de test avec print pour 2, 3 et 4 : aucun appel n’est prérempli.

```python
# Définis la fonction avec son paramètre.

# Écris les tests : avant la limite, sur la limite, après la limite.
```

Objectif : False
True
True

**Indice 1** — Pose une question : le niveau atteint-il 3 ?

**Indice 2** — Si oui, renvoie True ; sinon, renvoie False. Le cas égal à 3 est accepté.

### Mission

Un programme personnel comprenant une surprise aléatoire, six fonctions entièrement définies par toi, au moins 19 appels de test affichés avec print, et une scène d’un tour qui réutilise les fonctions. Aucun def n’est prérempli dans Mon travail. Les tests précisent les entrées, l’attendu et l’obtenu ; explique le choix de deux tests. Pas de boucle ni de liste nécessaire. On suppose les entrées valides : nombres entiers positifs ou nuls, PV entre 0 et 100, dé avec au moins une face. La gestion des saisies invalides n’est pas demandée. Le cours reste consultable ; la version if / else avec return True et return False est pleinement acceptée.

1. Surprise (5 min). Importe random et tire chance. Affiche « Attaque surprise » si chance < 0.5, sinon « Aucun ennemi ». Vérifie temporairement avec 0.49 puis 0.5 et note les messages attendus ; rétablis le hasard.

**Indice 1** — Il y a deux messages possibles. Sépare les cas avec if / else.

**Indice 2** — random.random() produit le tirage. La valeur 0.5 appartient au cas Aucun ennemi.

**Indice 3** — Complète les trous, puis vérifie les deux cas.

```python
import random
chance = random.random()
if chance ___ 0.5:
    print("Attaque surprise")
else:
    print(___)
```

2. Ton premier dé (10 min). Écris entièrement la fonction lancer_de(nb_faces), qui renvoie un entier aléatoire entre 1 et nb_faces inclus. Écris trois appels de test avec print : 1 face, 6 faces et 20 faces. Pour 1 face, prévois la valeur exacte ; pour 6 et 20, indique l’intervalle attendu. Observe le type du résultat et relance pour vérifier les bornes.

**Indice 1** — Le nombre de faces dépend de l’argument de chaque appel.

**Indice 2** — Définis une fonction à un paramètre. Le tirage va de 1 à nb_faces inclus ; la fonction doit le renvoyer.

**Indice 3** — Retrouve le mot qui définit une fonction et celui qui renvoie sa valeur.

```python
___ lancer_de(nb_faces):
    tirage = random.randint(1, ___)
    ___ tirage
```

3. Décider si l’attaque réussit. Définis attaque_reussie(de, seuil) : elle renvoie True si le dé atteint ou dépasse le seuil, False sinon. Écris quatre tests avec print : (10, 11), (11, 11), (12, 11), puis (7, 7). Prévois les quatre résultats. Explique pourquoi le dernier appel vérifie que la fonction utilise réellement le paramètre seuil.

**Indice 1** — Deux chemins doivent renvoyer une valeur logique.

**Indice 2** — Le seuil lui-même réussit. Utilise le paramètre reçu, pas le nombre 11 écrit dans la fonction. Teste les deux branches.

4. Calculer les dégâts. Définis calculer_degats(force, bonus), qui renvoie la somme de force et bonus. Écris deux tests : (8, 3) et (8, 0). Calcule l’attendu avant l’exécution et indique ce que vérifie le bonus nul.

**Indice 1** — Le résultat est un nombre réutilisable.

**Indice 2** — Additionne les paramètres et renvoie la somme. L’affichage appartient aux tests, en dehors de la fonction.

5. Retirer des PV sans passer sous zéro. Définis appliquer_degats(pv, degats), qui renvoie les PV restants. Si les dégâts dépassent les PV, le résultat doit être 0. Utilise un calcul puis une condition. Écris trois tests : (30, 8), (8, 8), (5, 8). Pour chacun, explique s’il reste des PV, si le coup tombe exactement à zéro ou s’il dépasse les PV disponibles.

**Indice 1** — Calcule d’abord les PV théoriques après le coup.

**Indice 2** — Si le calcul donne un nombre négatif, renvoie zéro ; sinon, renvoie le résultat. Réfléchis au cas exactement égal à zéro.

6. Soigner sans dépasser 100 PV. Définis soigner(pv, soin), qui renvoie les nouveaux PV, plafonnés à 100. Utilise un calcul puis une condition. Écris trois tests : (60, 20), (80, 20), (95, 20). Prévois l’attendu pour un soin ordinaire, un soin qui atteint exactement le plafond et un soin qui le dépasse.

**Indice 1** — Calcule d’abord les PV après ajout du soin.

**Indice 2** — Compare ce résultat au plafond. Prévois le retour pour le cas qui dépasse 100 et pour celui qui ne le dépasse pas.

7. Savoir si un personnage vit. Définis est_vivant(pv), qui renvoie un booléen : True si les PV sont strictement positifs, False à zéro. Écris deux tests : 1 PV et 0 PV. Vérifie aussi avec type que le résultat est bien un booléen, et non une chaîne de caractères.

**Indice 1** — La question est : reste-t-il au moins un PV ?

**Indice 2** — Renvoie un booléen dans chaque branche. Zéro n’est pas vivant. Les booléens s’écrivent sans guillemets.

8. Compléter ton carnet de tests. Tu as maintenant 17 appels de test aux six fonctions. Ajoute deux appels supplémentaires de ton choix, différents de ceux demandés, avec print. Pour chacun, écris en commentaire ce qu’il cherche à vérifier. Tous les tests doivent afficher un libellé, les entrées, l’attendu prévu à l’avance et l’obtenu calculé par la fonction. Au moins deux commentaires doivent consigner la comparaison attendu/observé et ta conclusion. Un test ne consiste pas à afficher uniquement une réponse écrite à la main.

**Indice 1** — Choisis des entrées qui révéleraient une erreur encore possible.

**Indice 2** — Un soin nul, aucun dégât ou un autre seuil sont des pistes. Calcule l’attendu à la main, puis affiche la vraie réponse de la fonction à côté.

9. Assembler une scène d’un tour (25 min). Le héros commence à 70 PV, le monstre à 12 PV. Lance un dé à 20 faces et utilise attaque_reussie au seuil 11. En cas de réussite, calcule les dégâts avec force 8 et bonus 3, puis mets à jour les PV du monstre avec appliquer_degats ; sinon, affiche « Raté ». Le héros boit ensuite une potion de 20 PV avec soigner. Si est_vivant indique que le monstre vit encore, celui-ci inflige 7 dégâts au héros avec appliquer_degats ; sinon, affiche « Victoire » et ne fais pas riposter le monstre. Affiche le dé et les PV finaux des deux personnages. Réutilise les six fonctions, sans réécrire leurs calculs dans la scène. Pour vérifier l’assemblage, fais trois essais temporaires : dé 10 avec monstre à 12 PV ; dé 11 avec monstre à 12 PV ; dé 11 avec monstre à 11 PV. Calcule puis note les PV finaux attendus et observés pour chaque essai. Rétablis enfin le hasard et les PV initiaux.

**Indice 1** — Distingue l’ordre des actions : attaque du héros, potion, puis éventuelle riposte.

**Indice 2** — Chaque mise à jour doit récupérer la valeur renvoyée. Teste la vie du monstre après les dégâts. Le troisième scénario doit emprunter le chemin sans riposte.

10. Vérifier et rendre (15 min). Organise le code en trois zones commentées : définitions, tests avec print, scène. Les tests doivent être écrits après les définitions et avant la scène ; ils ne doivent pas modifier ses PV initiaux. Ajoute un exemple commenté de définition/appel, paramètre/argument et print/return. Explique une erreur corrigée grâce à un test, ou une erreur que ton test pourrait détecter si aucun échec n’a été rencontré. Signale tes aides, lance le programme complet puis exporte le fichier. Le TP3 commence seulement une fois ce rendu terminé.

**Indice 1** — Relance tout le programme, pas seulement le dernier morceau écrit.

**Indice 2** — Vérifie tes six définitions et tes 19 appels de test. La scène doit repartir de ses propres PV initiaux. Télécharge ensuite ton travail.

### Tests

- lancer_de : trois appels avec 1, 6 et 20 faces ; attendu exact pour 1, type entier et bornes pour les autres. Un seul tirage est stocké pour chaque test.
- attaque_reussie : quatre appels (10, 11), (11, 11), (12, 11), (7, 7) ; tester les deux branches, la frontière et un autre seuil.
- calculer_degats : deux appels (8, 3), (8, 0) ; cas ordinaire et bonus nul.
- appliquer_degats : trois appels (30, 8), (8, 8), (5, 8) ; dégâts ordinaires, PV exactement à zéro, dégâts dépassant les PV.
- soigner : trois appels (60, 20), (80, 20), (95, 20) ; en dessous du plafond, exactement dessus, au-delà.
- est_vivant : deux appels, 1 et 0 ; True et False de type bool.
- Ajoute deux appels personnels commentés : 19 appels de test au total. Chaque test affiche entrées, attendu et obtenu avec print. Prévois les attendus avant d’exécuter.
- Teste aussi la scène : dé 10 / monstre 12 PV ; dé 11 / monstre 12 PV ; dé 11 / monstre 11 PV. Note les PV finaux attendus et observés ; aucune riposte après la victoire. Restaure les valeurs initiales et le hasard.

### Barème sur 5

- Six définitions personnelles, paramètres et return corrects : 1.5 point(s)
- Règles des fonctions : seuil, plancher zéro, plafond et booléens : 1 point(s)
- 19 appels de test lisibles, frontières et deux choix justifiés : 1.5 point(s)
- Scène utilisant les six fonctions et ses trois essais commentés : 0.75 point(s)
- Explications, organisation et sauvegarde du rendu : 0.25 point(s)

## Partie 3 — Explorer avec une boucle for

Pour les plus rapides, aujourd’hui : lis les notions 1 et 2, réalise la quête A « trois portes », puis la quête C « trois attaques ». Tu peux t’arrêter après ces deux réussites et sauvegarder. Le compteur et l’exploration complète seront travaillés ensuite.

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

### 5. Appeler une fonction dans une boucle

La fonction écrite une fois peut être appelée à chaque tour. La boucle organise la répétition ; la fonction garde un rôle précis. Cette séparation évite de recopier le même if plusieurs fois.

```python
def doubler(n):
    return 2 * n

for valeur in range(1, 4):
    print(doubler(valeur))
```

**À l’écran :**

```text
2
4
6
```

À surveiller : Définis la fonction avant la boucle. Dans le RPG, choisir_ennemi reçoit un nouveau tirage à chaque tour.

### 6. Choisir le nombre de répétitions avec input

Une saisie convertie en int peut fixer le nombre de tours. range(1, nombre + 1) permet alors d’afficher exactement les numéros de 1 à nombre.

```python
nombre = int(input("Combien de rencontres ? "))
for numero in range(1, nombre + 1):
    print("Rencontre", numero)
```

**À l’écran :**

```text
Avec 3 :
Rencontre 1
Rencontre 2
Rencontre 3
```

À surveiller : Teste 1 puis 0. Avec 0, le parcours est vide et aucun numéro ne s’affiche.

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

**Indice 1** — Il faut trois passages dans la boucle et un affichage après la boucle.

**Indice 2** — range(1, 4) donne 1, 2, 3. Fin n’appartient pas au bloc répété.

**Indice 3** — Complète les bornes et garde les indentations.

```python
for numero in range(___, ___):
    print("Porte", numero)
print("Fin")
```

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

**Indice 1** — La bourse conserve ce qu’elle avait au tour précédent.

**Indice 2** — Ajoute 2 à pieces dans la boucle. Ne remets pas pieces à zéro.

**Indice 3** — Complète la mise à jour.

```python
pieces = 0
for tour in range(4):
    pieces = ___ + ___
print(pieces)
```

#### Découverte C · trois attaques sans hasard

La fonction du TP2 est fournie. Complète seulement la boucle pour tester les dés 10, 11 et 12 au seuil 11. À chaque tour, stocke la réponse dans reussite puis affiche le dé et la réponse. Pas de compteur demandé.

```python
def attaque_reussie(de, seuil):
    if de >= seuil:
        return True
    else:
        return False

for de in range(10, 13):
    # TODO : appeler la fonction, puis afficher
    pass
```

Objectif : 10 False
11 True
12 True

**Indice 1** — La boucle fournit déjà la valeur du dé.

**Indice 2** — Appelle attaque_reussie avec de et 11, puis stocke sa réponse.

### Mission

L’exercice d’indentation suivi d’une exploration de dix rencontres, avec un bilan final.

1. Recopie l’exemple sur les potions dans Mon travail. Déplace seulement l’indentation de la ligne « Entrer dans la grotte » pour qu’elle soit exécutée uniquement lorsqu’on boit une potion.

**Indice 1** — Observe à quel bloc appartient l’affichage.

**Indice 2** — L’entrée dans la grotte doit appartenir au bloc où l’on boit.

**Indice 3** — Place cette ligne au même niveau d’indentation que l’affichage Boire. Teste avec et sans potion.

2. Définis choisir_ennemi(x). Elle renvoie gobelin si x < 0.5, araignee si x < 0.8 après le premier test, troll sinon. Utilise if / elif / else.

**Indice 1** — Cette fonction renvoie un nom, donc une chaîne de caractères.

**Indice 2** — Teste x < 0.5, puis elif x < 0.8, puis else. Chaque branche utilise return.

**Indice 3** — Complète les noms en conservant les guillemets.

```python
def choisir_ennemi(x):
    if x < 0.5:
        return "___"
    elif x < 0.8:
        return "___"
    else:
        return "___"
```

3. Initialise nombre_gobelins à 0 avant la boucle des rencontres.

**Indice 1** — Avant toute rencontre, aucun gobelin n’a été croisé.

**Indice 2** — Initialise une seule fois, avant for.

4. Écris une boucle de 1 à 10 inclus. À chaque tour, tire x avec random.random(), appelle choisir_ennemi(x), puis affiche le numéro et le nom de l’ennemi.

**Indice 1** — Le nouveau tirage doit avoir lieu à chaque rencontre.

**Indice 2** — range(1, 11) donne dix numéros ; appelle ensuite choisir_ennemi(x).

5. Si l’ennemi vaut gobelin, augmente le compteur. Après la boucle, affiche le nombre de gobelins une seule fois.

**Indice 1** — On augmente le compteur seulement si le nom est gobelin.

**Indice 2** — Le if est dans la boucle ; le bilan est après la boucle.

6. Teste les frontières de la fonction, puis remplace temporairement le tirage par 0.2 : tu dois compter 10 gobelins. Remets le hasard et exporte.

**Indice 1** — Les valeurs aux frontières révèlent les erreurs de comparaison.

**Indice 2** — Teste 0.49, 0.5, 0.79 et 0.8 avant de remettre le hasard.

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