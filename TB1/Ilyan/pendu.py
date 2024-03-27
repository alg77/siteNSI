from choix_nom import choix_mot #permet d'importer la biblioteque choix nom

print("saisiser une seule lettre à la fois")
nom_a_trouver=choix_mot() #le mot a trouvé est présent dans la biblioteque choix nom que l'on a importé au programme
mot_courant=("-"*len(nom_a_trouver)) #permet la création d'une chaine de caractère avec autant de tirets que de lettres dans le mot
nouveaumotcourant=mot_courant
lettre_trouve=""
tentative_restante=7 #indique le nombre de tentative pour l'utilisateur
gagne=False #tant que l'utilisateur n'a pas trouvé le mot gagne reste faux
alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" #caractere pouvant être rentré par l'utilisateur
print(nom_a_trouver)
def demande_lettre(): #permet de créer la fonction qui demande a l'utilisateur de rentrer une lettre
    while True:
       lettredemande=input("entrer une lettre :") #demande a l'utilisateur de rentrer une lettre
       if len(lettredemande) == 1 : #permet de s'assurer que la longueur de  la chaine de caractere rentré par l'utilisateur soit égale à 1
           if lettredemande in alphabet : #permet de s'assurer que le caractere rentré est present dans l'alphabet definit auparavant 
               return lettredemande.upper() # permet de convertir la lettre en une majuscule 
           else:
               print("le caractère rentré n'est pas présent dans l'alphabet")
def nouveauMotCourant(): #fonction permettant de remplacer les tirets par les lettres
    global gagne
    global lettre_trouve
    global nouveaumotcourant
    while not(gagne) and tentative_restante > 0: #tant que l'utilisateur n'a pas trouvé le mot gagne reste faux
        lettre_rentre = demande_lettre()   
        if lettre_rentre in lettre_trouve: #permet de vérifier que l'utilisateur n'a pas déjà rentré cette lettre
            print("Tu as déjà utilisé la lettre",lettre_rentre) 
        else :
            if lettre_rentre in nom_a_trouver: #permet de vérifier que la lettre rentré par l'utilisateur est présent dans le mot a trouvé
                lettre_trouve = lettre_trouve + lettre_rentre #rajoute la lettre dans les lettres trouvés
                a=[]  #defini une liste qui contiendra l'emplacement de la lettre en question
                i=0 #compteur
                for lettrerentre in nom_a_trouver:  #enumere le mot a trouver lettre par lettre 
                    if lettrerentre == lettre_rentre:  #vérifie si la lettre trouvé est égale a l'indice "i"
                        a = a + [i] #ajoute l'indice a la liste 
                    i=i+1 #ajoute 1 au compteur
                for mot in a : 
                    nouveaumotcourant = nouveaumotcourant [0:mot] + lettre_rentre + nouveaumotcourant [mot+1::] #remplace le tirets par la lettre trouvé par l'utilisateur
                    print(nouveaumotcourant)
                    if "-" in nouveaumotcourant: #permet de vérifier si il reste encorre des tirets dans  le mot
                        pass #si il en reste le programme continu
                    else : #sinon le programme s'arrete l'utilisateur a gagner
                        gagne=True  #quand l'utilisateur trouve le mot gagne passe en vrai et va afficher que l'utilisateur a gagner
            else:
                affichageErreur()
def  affichageErreur(): #fonction permettant d'afficher le pendu
    global tentative_restante
    tentative_restante = tentative_restante - 1 #soustrait le nombre de tentative pour savoir le nombre de tentative restante a l'utilisateur
    print("il te reste", tentative_restante, "tentatives")
    if tentative_restante < 1:
        print("============Y==")
    if tentative_restante < 2:
        print(" ||         |")
    if tentative_restante < 3:
        print(" ||         0")
    if tentative_restante < 4:
        print(" ||        /|\\")
    if tentative_restante < 5:
        print(" ||        / \\")
    if tentative_restante < 6:
        print("/||")
    if tentative_restante < 7:
        print("==========================")
nouveauMotCourant()
if gagne:
    print("Bravo, tu as réussi a deviné le mot,  tu as gagné, !")
else:
    print("Dommage tu n'a pas trouver le mot, tu as été pendu.")