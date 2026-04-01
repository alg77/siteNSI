from random import*

def lancerdé(): #fonction qui permet de lancer les dés
    return randint(1, 6) #lance le dé au hasard de 1 a 6
   
joueur1 = 0 #initialisation du joueur a 0 point
joueur2 = 0 #initialisation du joueur a 0 point
joueur3 = 0 #initialisation du joueur a 0 point
joueur4 = 0 #initialisation du joueur a 0 point

while joueur1 == joueur2 or joueur1 == joueur3 or joueur1 == joueur4 or joueur2 == joueur3 or joueur2 == joueur4 or joueur3 == joueur4 :
    joueur1 = randint(1, 6)
    joueur2 = randint(1, 6)
    joueur3 = randint(1, 6)
    joueur4 = randint(1, 6)
print("Le joueur 1 a fait", joueur1)
print("Le joueur 2 a fait", joueur2)
print("Le joueur 3 a fait", joueur3)
print("Le joueur 4 a fait", joueur4)
if joueur1 < joueur2 and joueur1 < joueur3 and joueur1 < joueur4 :
    print("le joueur 1 commence")
elif joueur2 < joueur1 and joueur2 < joueur3 and joueur2 < joueur4 :
    print("le joueur 2 commence")
elif joueur3 < joueur1 and joueur3 < joueur2 and joueur3 < joueur4 :
    print("le joueur 3 commence")
else :
    print("le joueur 4 commence")
     
while joueur1 <= 343 and joueur2 <= 343 and joueur3 <= 343 and joueur4 <= 343 : #boucle while qui permet de stopper le jeu lorsqu'un joueur atteint au moins 343 points
   
    joueur1_resultat = {"dé1": lancerdé(), "dé2": lancerdé(), "dé3": lancerdé()} #dictionnaire permettant de faire lancé les dés au joueur
    joueur2_resultat = {"dé1": lancerdé(), "dé2": lancerdé(), "dé3": lancerdé()} #dictionnaire permettant de faire lancé les dés au joueur
    joueur3_resultat = {"dé1": lancerdé(), "dé2": lancerdé(), "dé3": lancerdé()} #dictionnaire permettant de faire lancé les dés au joueur
    joueur4_resultat = {"dé1": lancerdé(), "dé2": lancerdé(), "dé3": lancerdé()} #dictionnaire permettant de faire lancé les dés au joueur

    resultat = {"dé1": lancerdé(), "dé2": lancerdé(), "dé3": lancerdé()}
    dé_grelottine = randint(1, 6) #créer un nouveau dé si le joueur obtient une chouette, il pourra ainsi tenter la grelottine 
    dé_sirop = randint(1, 6) #créer un nouveau dé si le joueur obtient une velute, il pourra ainsi tenter le sirop

    def chouette(resultat): #fonction permettant de faire une chouette
        des = sorted(list(resultat.values())) #fonction permettant de transformer un dictionnaire en liste et de la trier par ordre croissant
        if des[0] == des[1] or des[0] == des[2] : #verifie si deux dés sont identiques
            lachouette = des[0]**2 #calcul les points de la chouette
        elif  des[1] == des[2] : 
            lachouette = des[2]**2 #calcul les points de la chouette
            if dé_grelottine == des[0] == des[1] :
                grelottine = lachouette*2 #calcul la grelottine
                print("bravo tu as otenu une grelottine de ",grelottine,"point")#si le dé de la grelottine est égale aux dés de la chouette il obtient une grelottine  
            elif dé_grelottine == des[0] == des[2] :
                grelottine = lachouette*2 #calcul la grelottine
                print("bravo tu as otenu une grelottine de ",grelottine,"point")
            elif dé_grelottine == des[1] == des[2]:
                grelottine = lachouette*2 #calcul la grelottine
                print("bravo tu as otenu une grelottine de ",grelottine,"point")
        else : 
            lachouette = 0 #si le joueur n'obtient pas de chouette il gagne 0 point
        return lachouette   
     
    def velute(resultat): #fonction permettant de faire la velute
        des = sorted(list(resultat.values())) #fonction permettant de transformer un dictionnaire en liste et de la trier par ordre croissant
        if  des[0] + des[1] == des[2]: #si l'addition de deux dés est egale au troisième dés, le joueur obtient une velute 
            lavelute = (des[2]**2)*2 #calcul les points de la velute   
            if dé_sirop == des[2] : #si le dé du sirop est egale au dernier dé (ici au dé 3) il optient un sirop
                sirop = lavelute*3 #calcul les points du sirop
                print("bravo tu as obtenu un sirop de", sirop, "points")
        else : 
             lavelute = 0 #si le joueur n'obtient pas de velute il gagne 0 point 
        return lavelute

    def bec_de_chouette(resultat): #fonction permettant de faire le bec de chouette
        des = sorted(list(resultat.values())) #fonction permettant de transformer un dictionnaire en liste et de la trier par ordre croissant
        if des[0] == des[1] == des[2]: #si trois dés sont identiques le joueur obtient un bec de chouette
            becdechouette = 10*des[0]+40 #calcul les points du bec de chouette
        else : 
             becdechouette = 0 #si le joueur n'obtient pas de bec de chouette il gagne 0 point 
        return becdechouette
        
    def suite(resultat): #fonction permettant de faire la suite
        des = sorted(list(resultat.values())) #fonction permettant de transformer un dictionnaire en liste et de la trier par ordre croissant
        if  des[0]+1 == des[1] and des[1]+1 == des[2]: #si les trois dés forment une suite dans l'ordre croissant le joueur obtient une suite
            score_suite = 0 #si le joueur obtient une suite il gagne 0 point
        else :
              score_suite = 1 
        return score_suite
    
    def neant(resultat): #fonction permettant de faire le bec de chouette
        des = sorted(list(resultat.values())) #fonction permettant de transformer un dictionnaire en liste et de la trier par ordre croissant
        resultat_neant = des[0] + des[1] + des[2] #calcul la valeur des dés inscrit
        return resultat_neant
    
    joueur1 += chouette(joueur1_resultat) + velute(joueur1_resultat) + bec_de_chouette(joueur1_resultat) + suite(joueur1_resultat) + neant(joueur1_resultat) #calcule le score total du joueur
    joueur2 += chouette(joueur2_resultat) + velute(joueur2_resultat) + bec_de_chouette(joueur2_resultat) + suite(joueur2_resultat) + neant(joueur2_resultat) #calcule le score total du joueur
    joueur3 += chouette(joueur3_resultat) + velute(joueur3_resultat) + bec_de_chouette(joueur3_resultat) + suite(joueur3_resultat) + neant(joueur3_resultat) #calcule le score total du joueur
    joueur4 += chouette(joueur4_resultat) + velute(joueur4_resultat) + bec_de_chouette(joueur4_resultat) + suite(joueur4_resultat) + neant(joueur4_resultat) #calcule le score total du joueur

    
    if chouette(joueur1_resultat) > 0 :
        print("le joueur 1 a obtenu une chouette de",chouette(joueur1_resultat), "points")
        print(joueur1_resultat)
    elif velute(joueur1_resultat) > 0 :
        print("le joueur 1 a obtenu une velute de", velute(joueur1_resultat), "points")
        print(joueur1_resultat)
    elif bec_de_chouette(joueur1_resultat) > 0 :
        print("le joueur 1 a obtenu un bec de chouette de", bec_de_chouette(joueur1_resultat), "points")
        print(joueur1_resultat)
    elif suite(joueur1_resultat) == 0 :
        print("le joueur 1 a obtenu une suite de",suite(joueur1_resultat), "points")
        print(joueur1_resultat)
    elif neant(joueur1_resultat) > 0 :
        print("le joueur 1 a obtenu un néant de",neant(joueur1_resultat), "points")
        print(joueur1_resultat)
    
    if chouette(joueur2_resultat) > 0 :
        print("le joueur 2 a obtenu une chouette de",chouette(joueur2_resultat), "points")
        print(joueur2_resultat)
    elif  velute(joueur2_resultat) > 0 :
        print("le joueur 2 a obtenu une velute de", velute(joueur2_resultat), "points")
        print(joueur2_resultat)
    elif bec_de_chouette(joueur2_resultat) > 0 :
        print("le joueur 2 a obtenu un bec de chouette de", bec_de_chouette(joueur2_resultat), "points")
        print(joueur2_resultat)
    elif suite(joueur2_resultat) == 0 :
        print("le joueur 2 a obtenu une suite de",suite(joueur2_resultat), "points")
        print(joueur2_resultat)
    elif neant(joueur2_resultat) > 0 :
        print("le joueur 2 a obtenu un néant de",neant(joueur2_resultat), "points")
        print(joueur2_resultat)
        
    if chouette(joueur3_resultat) > 0 :
        print("le joueur 3 a obtenu une chouette de",chouette(joueur3_resultat), "points")
        print(joueur3_resultat)
    elif  velute(joueur3_resultat) > 0 :
        print("le joueur 3 a obtenu une velute de", velute(joueur3_resultat), "points")
        print(joueur3_resultat)
    elif bec_de_chouette(joueur3_resultat) > 0 :
        print("le joueur 3 a obtenu un bec de chouette de", bec_de_chouette(joueur3_resultat), "points")
        print(joueur3_resultat)
    elif suite(joueur3_resultat) == 0 :
        print("le joueur 3 a obtenu une suite de",suite(joueur3_resultat), "points")
        print(joueur3_resultat)
    elif neant(joueur3_resultat) > 0 :
        print("le joueur 3 a obtenu un néant de",neant(joueur3_resultat), "points")
        print(joueur3_resultat)
        
    if chouette(joueur4_resultat) > 0 :
         print("le joueur 4 a obtenu une chouette de",chouette(joueur4_resultat), "points")
         print(joueur4_resultat)
    elif  velute(joueur4_resultat) > 0 :
         print("le joueur 4 a obtenu une velute de", velute(joueur4_resultat), "points")
         print(joueur4_resultat)
    elif bec_de_chouette(joueur4_resultat) > 0 :
         print("le joueur 4 a obtenu un bec de chouette de", bec_de_chouette(joueur4_resultat), "points")
         print(joueur4_resultat)
    elif suite(joueur4_resultat) == 0 :
         print("le joueur 4 a obtenu une suite de",suite(joueur4_resultat), "points")
         print(joueur4_resultat)
    elif neant(joueur4_resultat) > 0 :
         print("le joueur 4 a obtenu un néant de",neant(joueur4_resultat), "points")
         print(joueur4_resultat)
   
if joueur1 >= 343: #si le joueur1 a plus de 343 points, il gagne
    print("Le joueur 1 a gagné avec", joueur1, "points !")
elif joueur2 >= 343: #si le joueur2 a plus de 343 points, il gagne
    print("Le joueur 2 a gagné avec", joueur2, "points !")
elif joueur3 >= 343 : #si le joueur3 a plus de 343 points, il gagne
    print("Le joueur 3 a gagné avec", joueur3, "points")
else :#si le joueur4 a plus de 343 points, il gagne
    print("Le joueur 4 a gagné avec", joueur4, "points")

#permet de print les points des joueurs n'ayant pas gagné
if joueur1 <= 343 : 
 print("Le joueur 1 a perdu avec", joueur1, "points !") 
if joueur2 <= 343 :
 print("Le joueur 2 a perdu avec", joueur2, "points !")
if joueur3 <= 343 :
 print("Le joueur 3 a perdu avec", joueur3, "points !")
if joueur4 <= 343 :
 print("Le joueur 4 a perdu avec", joueur4, "points !")
  