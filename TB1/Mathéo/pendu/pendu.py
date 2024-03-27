from choix_nom import choix_mot

nom_a_trouver = choix_mot()
mot_courant = len(nom_a_trouver) * "-"  # permet le création d'une chaine de caractere avec autant de tirets que le nombre du mot choisie 
lettre_trouve = ""   # 
tentative_restante = 7 # nombre de tentatives de l'utilisateur 
gagne = False
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def demande_lettre():   # fonction permettant de demander une lettre
    caractere = input("Donner une lettre : ").upper()   # demander la lettre
    while caractere not in alphabet or len(caractere) !=1 :  # vérifier si la lettre est correcte
        caractere = input("Donner une lettre : ").upper() # redemander si elle n'est pas correcte 
    return caractere # retourner la lettre dans la fonction


def affichageErreur() : # fonction permettant d'afficher le pendu quand vous perdez
    if tentative_restante == 0 :
        print(" ==========Y==")
        print(" ||/       |") 
        print(" ||        0")
        print(" ||       /|\\")
        print(" ||       / \\")
        print("/||")
        print("==============")
    elif tentative_restante <= 1:
        print(" ||/       |") 
        print(" ||        0")
        print(" ||       /|\\")
        print(" ||       / \\")
        print("/||")
        print("==============")
    elif tentative_restante <= 2:
        print(" ||        0")
        print(" ||       /|\\")
        print(" ||       / \\")
        print("/||")
        print("==============")
    elif tentative_restante <= 3:
        print(" ||       /|\\")
        print(" ||       / \\")
        print("/||")
        print("==============")
    elif tentative_restante <= 4:
        print(" ||       / \\")
        print("/||")
        print("==============")
    elif tentative_restante <= 5:
        print("/||")
        print("==============")
    elif tentative_restante <= 6:
        print("==============")
        

def nouveauMotCourant(lettre): # fonction permattant de changer les tirets avec les lettres trouvés 
     global lettre_trouve
     global mot_courant
     nouveauMotCourant=""
     for i in range (len(nom_a_trouver)) :
        if lettre == nom_a_trouver[i] :
           nouveauMotCourant += lettre
        elif mot_courant[i] != "-" :
            nouveauMotCourant += mot_courant[i]
        elif lettre !=nom_a_trouver[i] :
             nouveauMotCourant +="-"
     mot_courant= nouveauMotCourant     
     return mot_courant   
erreur = ""  
def lettre_erreur(lettre):   # permet de stocker les erreurs  
    global erreur
    if lettre not in nom_a_trouver:
        erreur += lettre +","
    return erreur
       


while tentative_restante != 0 and gagne != True:  
    if mot_courant == nom_a_trouver:
       break
    
    print(mot_courant)
    lettre = demande_lettre()
    print("tu as deja donné ces mavaises lettres : ",lettre_erreur(lettre))
    
    if lettre in lettre_trouve  :
        print('tu as déjà donné cette lettre')
    
    elif lettre in nom_a_trouver :
        lettre_trouve += lettre
        nouveauMotCourant(lettre)
        print("il te reste ",tentative_restante,"tentatives")
    
    else:
        tentative_restante = tentative_restante -1
        affichageErreur() 
        print("il te reste ",tentative_restante,"tentatives")
        

print("la partie est terminéé")
print("le mot à trouver était", nom_a_trouver)








