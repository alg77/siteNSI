# Créé par Aurélie SIROT, Gabriel TAVERNIER et Laetitia MATTEI
# Pierre-feuille-ciseaux-lézard-spock 2.0

print("Bienvenue dans le jeu Pierre Feuille Ciseaux Lézard Spock")

import random
pointsOrdi = 0 #on met a 0 le nombre de points
pointsJoueur = 0

Mode = input("Entrez 1 pour le mode facile et 2 pour mode difficile : ")
if Mode == "1" :
    nbmanches = 1
if Mode == "2" :
    nbmanches = 2

print("Choisir parmi Pierre Feuille Ciseaux Lézard Spock")
while not pointsOrdi == nbmanches or pointsJoueur == nbmanches : #selon le mode, on aura 1 ou 3 manches
    choix = ["pierre", "feuille", "ciseaux", "lézard", "spock"] #le programme choisi la combinaison "au hasard"
    solution1 = random.choice(choix) #pointsJoueur 1
    solution2 = input("entrer une main : ") #pointsJoueur 2 (vous)
    print(solution1)

    #on teste toutes les combinaisons possibles du jeu
    if solution1 == "pierre" and (solution2 == "lézard" or solution2 == "ciseaux") :
        print("PERDU ! ")
        pointsOrdi = pointsOrdi + 1
    elif solution1 == "feuille" and (solution2 == "pierre" or solution2 == "spock") :
        print("PERDU ! ")
        pointsOrdi = pointsOrdi + 1
    elif solution1 == "ciseaux" and (solution2 == "feuille" or solution2 == "spock") :
        print("PERDU ! ")
        pointsOrdi = pointsOrdi + 1
    elif solution1 == "lézard" and (solution2 == "spock" or solution2 == "feuille") :
        print("PERDU ! ")
        pointsOrdi = pointsOrdi + 1
    elif solution1 == "spock" and (solution2 == "ciseaux" or solution2 =="pierre") :
        print("PERDU ! ")
        pointsOrdi = pointsOrdi + 1

    elif solution1 == solution2 : #dans le cas ou les 2 joueurs ont la même main, il y a égalité -> aucun point accordé
        print(" ~ égalité ~ ")

    elif solution2 not in (choix): #dans le cas où le mot est incorrect (faute d'orthographe ou mot incorrect)
        print('Veuillez entrer une main valide (pierre, feuille, ciseaux, lézard, spock) ')

    else :
        print("GAGNE ! ")
        pointsJoueur = pointsJoueur + 1

    #on déclare le vainqueur
    if Mode == "2" :
        if pointsOrdi == 2 :
            print(" << L'ordinateur est le vainqueur avec", pointsOrdi, "points >> ")
            break
        if pointsJoueur == 2 :
            print(" << Vous êtes le vainqueur avec", pointsJoueur, "points >> ")
            break

    if Mode == "1" :
        if pointsOrdi == 1 :
            print(" << L'ordinateur est le vainqueur avec", pointsOrdi, "points >> ")
            break
        if pointsJoueur == 1 :
            print(" << Vous êtes le vainqueur avec", pointsJoueur, "points >> ")
            break



