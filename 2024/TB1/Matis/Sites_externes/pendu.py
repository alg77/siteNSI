from choix_nom import choix_mot

mot_a_trouver=choix_mot()

mot_courant = len(mot_a_trouver)* "-"
lettre_trouve = "" # liste des lettres trouvées
tentative_restante = 7
gagne = False # booléen qui désigne si le joueur a gagné ou non
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" # liste des lettres de l'alphabet acceptées

def demande_lettre():
    """
    Demande au joueur d'entrer une lettre, la redemande si incompatible

    Returns
    -------
    lettre : string
        Lettre acceptée

    """
    lettre = input("Entre une lettre : ")
    lettre = lettre.upper() # formate la lettre rentrée en majuscule
    while len(lettre) != 1 or lettre not in alphabet : # boucle tant que le texte entrée n'est pas valide: plus de 1 caractère ou pas une une lettre
        print("Ton entrée est incorrecte: entre une seule lettre")
        lettre = input("Entre une lettre : ")
        lettre = lettre.upper()
    return lettre

def affichage_erreur():
    """
    Affiche la progression du pendu en fonction du nombre de tentatives restantes

    Returns
    -------
    None.

    """
    tent0 = " ==========Y=="
    tent1 = " ||/       |  "
    tent2 = " ||        0  "
    tent3 = " ||       /|\ "
    tent4 = " ||       / \ "
    tent5 = "/||           "
    tent6 = "=============="
    if tentative_restante == 0:
        print(tent0)
        print(tent1)
        print(tent2)
        print(tent3)
        print(tent4)
        print(tent5)
        print(tent6)
    elif tentative_restante == 1:
        print(tent1)
        print(tent2)
        print(tent3)
        print(tent4)
        print(tent5)
        print(tent6)
    elif tentative_restante == 2:
        print(tent2)
        print(tent3)
        print(tent4)
        print(tent5)
        print(tent6)
    elif tentative_restante == 3:
        print(tent3)
        print(tent4)
        print(tent5)
        print(tent6)
    elif tentative_restante == 4:
        print(tent4)
        print(tent5)
        print(tent6)
    elif tentative_restante ==5:
        print(tent5)
        print(tent6)
    elif tentative_restante == 6:
        print(tent6)


def nouveauMotCourant(char:str)->str:
    """
    

    Parameters
    ----------
    char : string
        Caractère à intégrer au mot_courant

    Returns
    -------
    None.

    """
    global lettre_trouve
    lettre_trouve = lettre_trouve + char # ajoute la lettre char (qui a été proposée) dans lettre_trouve
    global mot_courant
    mot_courant = "" # vide mot_courant
        
    for character in mot_a_trouver: # boucle qui vérifie chaque caractère du mot_a_trouver
        if character in lettre_trouve : # vérifie si le caractère actuel a été trouvé
            mot_courant = mot_courant + character # ajoute ce caractère à la suite de mot_courant (a la DROITE)
        else:
            mot_courant = mot_courant + "-" # ajoute un tiret à la suite (DROITE)
            

print("début du jeu : trouve de quel mot il s'agit")
while tentative_restante > 0 and gagne == False: # boucle tant que le joueur n'a pas gagné ou épuisé ses tentatives
    print(mot_courant, "   ", "il te reste ", tentative_restante, " tentatives")
    print("")
    l = demande_lettre() # l est la lettre valide entrée par le joueur
    if l in mot_a_trouver and l not in lettre_trouve: # si l est dans mot_a_trouver et n'a pas déjà été trouvée
        nouveauMotCourant(l)
    else:
        tentative_restante -= 1
        affichage_erreur() # affiche le pendu en cours
        nouveauMotCourant(l)
    if mot_courant == mot_a_trouver: # si le mot_courant n'a plus de lettre cachée, et est donc égal à mot_a_trouver
        gagne = True # le joueur a donc gagné
if tentative_restante == 0: # dernière condition qui vérifie si le joueur a gagné ou perdu
    print(mot_a_trouver)
    print("Dommage ! Tu as perdu lamentablement ")
elif gagne == True:
    print(mot_a_trouver)
    print("Bravo ! Tu as trouvé le mot petit malin ")    
    