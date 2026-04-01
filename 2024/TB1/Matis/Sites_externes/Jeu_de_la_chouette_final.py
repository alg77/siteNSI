from random import *
from time import *

max_score = 0 #score maximal de la partie
joueur_premier = 0 #indice du joueur ayant le plus grand score
nb_joueurs = int(input("Nombre de joueurs : ")) #demande du nombre de joueurs
regles_switch = str(input("Voulez-vous jouer avec les règles spéciales : Oui ou Non : ")) #active ou non la Grelottine et le Sirop
score_joueurs = [0 for i in range(nb_joueurs)] #liste stockant le score des joueurs
indices_joueurs = [] #stocke les indices des joueurs dans l'ordre du jeu

def debut():
    """
    Procédure assurant le tirage du départ pour organiser l'ordre de jeu stocké dans la variable indices_joueurs

    Returns
    -------
    None.

    """
    joueur_1 = 0 #premier à jouer : à déterminer
    global indices_joueurs
    joueurs_max = [] #indices des joueurs ayant tiré le plus grand nombre
    joueurs_en_lice = [i for i in range(nb_joueurs)] #joueurs encore dans le départage
    
    while True:
        tirage_max = 0 #plus grand nombre tiré
        joueurs_max = [] #réinitialise la variable à chaque tirage
        tirages = [randint(1, 6) for i in range(len(joueurs_en_lice))] #tirages des joueurs initial
        print(tirages)
        
        for de in range(len(tirages)): #1 : recherche de la plus grande valeur dans les tirages
            if tirages[de] > tirage_max:
                tirage_max = tirages[de]
        
        for de in range(len(tirages)): #2 : ajoute dans joueurs_max les indices des joueurs ayant obtenu ce tirage
            if tirages[de] == tirage_max:
                joueurs_max.append(de)
        
        joueurs_en_lice = joueurs_max #réduit joueurs_en_lice aux joueurs ayant obtenu le plus grand tirage
        print(joueurs_en_lice)
        
        if len(joueurs_en_lice) == 1: #dès qu'il ne reste plus qu'un joueur, sort de la boucle
            break
        
    joueur_1 = joueurs_en_lice[0] #stocke dans joueur_1 l'indice du premier joueur qui joue
    print("Le joueur ",joueur_1 +1, "commence.")
    
    for i in range(joueur_1, nb_joueurs, 1): #ajoute dans indices_joueurs les indices des joueurs dans l'ordre de jeu
        indices_joueurs.append(i)
    for i in range(0, joueur_1, 1):
        indices_joueurs.append(i)
    print("Ordre de jeu : ",indices_joueurs)
    print()
    sleep(2)
            
def tirage_(joueur):
    """
    Effectue un tirage de 3 dés aléatoires et ajoute au score du joueur actuel le score calculé avec la fonction calculs_points()

    Parameters
    ----------
    joueur : int
        Indice du score du joueur qui lance les dés.

    Returns
    -------
    None.

    """
    des = [randint(1, 6) for  i in range(3)] #liste des 3 dés lancés
    des = tri_selection(des) #tri des dés dans l'ordre croissant
    print("Tirage : ",des)
    score_joueurs[joueur] += calculs_points(des) #ajout des points

def tri_selection(tab):
    """Trie par ordre croissant un tableau contenant des éléments comparables
    IN: un tableau tab de longueur n
    OUT: retourne le tableau trié par ordre croissant"""
    for i in range(len(tab)):
        indice_min = i
        for j in range(i+1,len(tab) ) :
            if tab[j] < tab[indice_min] :
                indice_min = j
        if indice_min != i :
            temp = tab[i]
            tab[i] = tab[indice_min]
            tab[indice_min] = temp
    return tab
            
    
def calculs_points(tirage):
    """
    Renvoie les points gagné en fonction du tirage trié dans l'ordre croissant
    
    Parameters
    ----------
    tirage : list
        Liste stockant les 3 lancés de dés

    Returns
    -------
    int : le score gagné par le joueur

    """
    #Bec de chouette
    if tirage[0] == tirage[1] and tirage[1] == tirage[2]:
        print("Bec de Chouette de ", tirage[0])
        return(40 + 10*tirage[1])
    
    #Chouette
    elif tirage[0] == tirage[1] or tirage[1] == tirage[2]:
        print("Chouette de ", tirage[1])
        
        if regles_switch == "Oui":
            demande = input("Voulez-vous tenter une Grelottine ? Oui ou Non : ") #demande de Grelottine
            if demande == "Oui": #en cas de grelottine
                de = randint(1, 6)
                print(de)
                
                if de == tirage[1]:
                    print("Réussi !")
                    return (tirage[1]**2)*2
                else:
                    print("Raté !")
                    return 0
            
            else: #si refus
                return(tirage[1]**2)
            
        else: #si pas de règles spéciales
            return(tirage[1]**2)
    #Velute
    elif tirage[0] + tirage[1] == tirage[2]:
        print("Velute de ", tirage[2])
        
        if regles_switch == "Oui":
            demande = input("Voulez-vous tenter un Sirop ? Oui ou Non : ") #demande de Sirop
            if demande == "Oui": #en cas de sirop
                de = randint(1, 6)
                print(de)
                
                if de == tirage[2]:
                    print("Réussi !")
                    return (2 * (tirage[2]**2)) *3
                else:
                    print("Raté !")
                    return 0
            
            else: #si refus
                return(2 * (tirage[2]**2))
            
        else: #si pas de règles spéciales
            return(2 * (tirage[2]**2))
   
    #Suite
    elif tirage[0] == tirage[1] - 1 and tirage[1] == tirage[2] -1:
        print("Suite")
        return 0
    
    #Néant
    else:
        print("Néant")
        return(tirage[0] + tirage[1] + tirage[2])
    


#Début Jeu
debut()

while max_score < 343: #tant qu'un joueur n'a pas dépassé 343
    for joueur in indices_joueurs: #tour de chaque joueur
        print("")    
        print("Joueur : ",joueur+1)
        
        tirage_(joueur)
        if score_joueurs[joueur] > max_score: #vérifie si le joueur est devenu premier
            max_score = score_joueurs[joueur]
            joueur_premier = joueur
        if max_score > 343: #sort de la boucle for --> le jeu est terminé
            break
        
        print(score_joueurs)
        sleep(1.5)

print("End")
print(score_joueurs)
print("Le joueur ", joueur_premier +1, " a gagné !")