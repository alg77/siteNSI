# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
"""Démarrage"""
from random import* #importation du module pour désigner un nombre aléatoire
import time #importation de time pour donner du délai entre les affichages pour rendre le jeu plus esthétique
player1 = 0 #initialisation des trois joueurs
player2 = 0 #idem
player3 = 0 #idem
while player2==player1 or player2==player3 or player3==player1  : #boucle qui empêche aux joueurs d'avoir le même chiffre pour bien déterminer lequel commence
    player1= randint (1,6) #les joueurs lancent chacun leur dé
    player2= randint (1,6)
    player3= randint (1,6)
print ("Le joueur 1 a fait", player1)
print ("Le joueur 2 a fait", player2)
print ("Le joueur 3 a fait", player3)
if player1<player2 and player1<player3 : #condition qui permet de savoir qui commence
    print ("Le joueur 1 commence")
    player1= True #cette ligne sera utile a la fin pour departager qui gagne en cas d egalite
elif player2<player1 and player2<player3 :
    print ("Le joueur 2 commence")
    player2= True #idem
elif player3<player1 and player3<player2 :
    print ("Le joueur 3 commence")
    player3= True #idem

"""----------------Fonctions---------------------"""

"""La Chouette"""
def LaChouette (score) : #fonction qui permet de determiner si un joueur a une chouette
    if score["dé1"]==score["dé2"] or score["dé1"]==score["dé3"] :
        score_chouette=score["dé1"]**2
        de_grelottine= randint (1,6) #partie intégré a la fonction chouette qui permet au joueur de relancer un dé pour determiner s  il a une grelottine
        if ((de_grelottine== score["dé1"] and (score["dé1"]==score["dé2"] or score["dé1"] == score["dé3"] )) or (de_grelottine== score["dé2"] and (score["dé2"]==score["dé1"] or score["dé2"] == score["dé3"])) or (de_grelottine== score["dé3"] and (score["dé3"]==score["dé1"] or score["dé3"] == score["dé2"] ))): 
            score_chouette=score_chouette*2
            print ("Son dé de grelottine est de", score["dé1"])
            return score_chouette #on retoune directement la valeur pour ne pas que la grelottine s affiche plusieurs fois, score_chouette correspond donc au score de la chouette + celui de la grelottine si elle est obtenue
    elif score["dé2"]==score["dé3"] :
        score_chouette=score["dé3"]**2
        de_grelottine= randint (1,6)
        if (((de_grelottine== score["dé1"] and score["dé1"]==score["dé2"]) or score["dé1"] == score["dé3"] ) or ((de_grelottine== score["dé2"] and score["dé2"]==score["dé1"]) or score["dé2"] == score["dé3"]) or ((de_grelottine== score["dé3"] and score["dé3"]==score["dé1"]) or score["dé3"] == score["dé2"] )): 
            score_chouette=score_chouette*2
            print ("Son dé de grelottine est de", score["dé3"])
            return score_chouette #idem
    else: 
        score_chouette=0
    return score_chouette #on retourne le score chouette s il n'y a pas de grelottine

"""La Velute"""
def LaVelute (score) :  #fonction qui permet de determiner si un joueur a une velute
    if score["dé1"]+score["dé2"]==score["dé3"]:
        score_velute=(score["dé3"]**2)*2
        de_sirop = randint (1,6) #partie intégré a la fonction chouette qui permet au joueur de relancer un dé pour determiner s  il a une grelottine
        if de_sirop == score ["dé3"] :
            score_velute=score_velute*3
            print ("Son dé de sirop est de", score["dé3"])
            return score_velute #on retoune directement la valeur pour ne pas que le sirop s affiche plusieurs fois, score_velute correspond donc au score de la velute + celui du sirop s il est obtenu
    elif score["dé2"]+score["dé3"]==score["dé1"]:
        score_velute=(score["dé1"]**2)*2
        de_sirop = randint (1,6)
        if de_sirop== score ["dé1"] :
            score_velute=score_velute*3
            print ("Son dé de sirop est de", score["dé1"])
            return score_velute #idem
    elif score["dé1"]+score["dé3"]==score["dé2"]:
        score_velute=(score["dé2"]**2)*2
        de_sirop = randint (1,6)
        if de_sirop== score ["dé2"] :
            score_velute=score_velute*3
            print ("Son dé de grelottine est de", score["dé2"])
            return score_velute #idem
    else :
        score_velute=0
    return score_velute #on retourne le score velute s il n'y a pas de sirop

    
"""Bec de Chouette"""   
def BecDeChouette (score) :  #fonction qui permet de determiner si un joueur a un bec de chouette 
    if score["dé1"]==score["dé2"] and score["dé1"]==score["dé3"] :
        score_becdechouette=40+10*score["dé1"]
    else : score_becdechouette=0
    return score_becdechouette

    
"""Tri + Conversion dict en list"""
def ConvertList_Tri (score) :  #fonction qui permet de trier les chiffres des trois dé tout en transformant le dictionnaire en liste pour simplifier la fonctione LaSUite
    score_list = []
    for k, v in score.items() :
        score_list.append(v)
    return (sorted(score_list))


"""La Suite"""
def LaSuite (score_trie) : #fonction qui permet de determiner si un joueur a une suite
    if score_trie[0]+1==score_trie[1] and score_trie[1]+1==score_trie[2]:
        score_suite=0
    else :
        score_suite=1
    return score_suite

"""Néant"""
def Néant (score) : #fonction qui permet de determiner si un joueur à un néant
    score_néant=score["dé1"]+score["dé2"]+score["dé3"]
    return score_néant


"""Initialisation"""


total_player1 = 0 #le jeu n'a pas commence donc le total des points des joueurs est nul
total_player2 = 0
total_player3 = 0

"""Jeu"""

while total_player1 < 343 and total_player2 < 343 and total_player3 < 343 : #boucle qui permer au jeu de s'arrêter que lorsque qu'un joueur dépasse 343
   for i in range (3) : #permet aux joueurs de jouer chacun leur tour
       time.sleep (0.10) #delai qui ahère la réponse de l'ordinateur
       score={"dé1":randint (1,6), "dé2" : randint (1,6), "dé3" : randint (1,6)} #tirage des dés
       score_trie=ConvertList_Tri(score) #trie des scores de chaque dés + incorporation en liste
       print (score_trie)
       if i == 0 : #joueur 1 à jouer
             #stocker la valeur du dé grelottine
            if BecDeChouette (score)>0 : #on va calculer via des tests combien de points le joueur gagne t il sur ce tour
                total_player1 += BecDeChouette (score)
                print ("Bravo joueur 1, tu as un bec de chouette de", BecDeChouette (score), "points")
                print ("Le Joueur 1 a un total de", total_player1, "points")
            elif LaChouette(score) > 0 :
                score_chouette_total1= LaChouette(score) 
                if score_chouette_total1 in [2, 8 , 18, 32, 50, 72] :
                    print ("Il a une grelottine")
                total_player1 += score_chouette_total1
                print ("Bravo joueur 1, tu as une chouette de", score_chouette_total1, "points")
                print ("Le Joueur 1 a un total de", total_player1, "points")
            elif LaVelute(score) > 0 :
                score_velute_total1=LaVelute(score) #stocker la valeur du dé sirop
                if score_velute_total1 in [24, 54, 96, 150, 216]: #si le joueur a une velute on va afficher s il a un sirop sinon on affiche seulement sa velute
                    print ("Il a un sirop")
                total_player1 += score_velute_total1
                print ("Bravo joueur 1, tu as une velute de", score_velute_total1, "points")
                print ("Le Joueur 1 a un total de", total_player1, "points")
            elif LaSuite(score_trie) == 0 :
                total_player1 += LaSuite (score_trie)
                print ("Dommage joueur 1, tu as une suite, tu remportes", LaSuite (score_trie), "points")
                print ("Le Joueur 1 a un total de", total_player1, "points")
            elif LaSuite(score_trie) == 1 :
                total_player1 += Néant(score)
                print ("Joueur 1 tu n'as aucune combinaison, tu obtiens un néant de", Néant (score), "points")
                print ("Le Joueur 1 a un total de", total_player1, "points")
       elif i==1 : #joueur 2 à jouer
            if BecDeChouette (score)>0 : #idem
                total_player2 += BecDeChouette (score)
                print ("Bravo joueur 2, tu as un bec de chouette de", BecDeChouette (score), "points")
                print ("Le Joueur 2 a un total de", total_player2, "points")
            elif LaChouette(score) > 0 :
                score_chouette_total2= LaChouette(score)
                if score_chouette_total2 in [2, 8 , 18, 32, 50, 72] : #si le joueur a une chouette on va afficher s il a une grelottine sinon on affiche seulement sa chouette 
                    print ("Il a une grelottine")
                total_player2 += score_chouette_total2
                print ("Bravo joueur 2, tu as une chouette de", score_chouette_total2, "points")
                print ("Le Joueur 2 a un total de", total_player2, "points")
            elif LaVelute(score) > 0 :
                score_velute_total2=LaVelute(score) #stocker la valeur du dé sirop
                if score_velute_total2 in [24, 54, 96, 150, 216]: #si le joueur a une velute on va afficher s il a un sirop sinon on affiche seulement sa velute
                    print ("Il a un sirop")
                total_player2 += score_velute_total2
                print ("Bravo joueur 2, tu as une velute de", score_velute_total2, "points")
                print ("Le Joueur 2 a un total de", total_player2, "points")
            elif LaSuite(score_trie) == 0 :
                total_player2 += LaSuite (score_trie)
                print ("Dommage joueur 2, tu as une suite, tu rempotes", LaSuite (score_trie), "points")
                print ("Le Joueur 2 a un total de", total_player2, "points")
            else :
                total_player2 += Néant(score)
                print ("Joueur 2 tu n'as aucune combinaison, tu obtiens un néant de", Néant (score), "points")
                print ("Le Joueur 2 a un total de", total_player2, "points")
       elif i==2 : #joueur 3 à jouer
            if BecDeChouette (score)>0 : #idem
                total_player3 += BecDeChouette (score)
                print ("Bravo joueur 3, tu as un bec de chouette de", BecDeChouette (score), "points")
                print ("Le Joueur 3 a un total de", total_player3, "points")
            elif LaChouette(score) > 0 :
                score_chouette_total3= LaChouette(score)
                if score_chouette_total3 in [2, 8 , 18, 32, 50, 72] :
                    print ("Il a une grelottine")
                total_player3 += score_chouette_total3
                print ("Bravo joueur 3, tu as une chouette de", score_chouette_total3, "points")
                print ("Le Joueur 3 a un total de", total_player3, "points")
            elif LaVelute(score) > 0 :
               score_velute_total3=LaVelute(score) #stocker la valeur du dé sirop
               if score_velute_total3 in [24, 54, 96, 150, 216]: #si le joueur a une velute on va afficher s il a un sirop sinon on affiche seulement sa velute
                   print ("Il a un sirop")
               total_player3 += score_velute_total3
               print ("Bravo joueur 3, tu as une velute de", score_velute_total3, "points")
               print ("Le Joueur 3 a un total de", total_player3, "points")
            elif LaSuite(score_trie) == 0 :
                total_player3 += LaSuite (score_trie)
                print ("Dommage joueur 3, tu as une suite, tu remportes", LaSuite (score_trie), "points")
                print ("Le Joueur 3 a un total de", total_player3, "points")
            else :
                total_player3 += Néant(score)
                print ("Joueur 3, tu n'as aucune combinaison, tu obtiens un néant de", Néant (score), "points")
                print ("Le Joueur 3 a un total de", total_player3, "points")

"""Fin du Jeu"""
if player1== True : # si le joueur 1 commence, et que deux personnes ont dépassé 343 alors c le joueur 1 qui gagne
    if total_player1>=343 : #test pour savoir si le joueur 1 gagne
        print ("Le joueur 1 gagne, il a obtenu un score de", total_player1, "points")
    elif total_player2>=343 : #test pour savoir si le joueur 2 gagne
        print ("Le joueur 2 gagne, il a obtenu un score de", total_player2, "points")
    elif total_player3 >=343 : #test pour savoir si le joueur 3 gagne
        print ("Le joueur 3 gagne, il a obtenu un score de", total_player3, "points")
if player2== True : #si le joueur 2 commence, et que deux personnes ont dépassé 343 alors c le joueur 2 qui gagne
    if total_player2>=343 : #test pour savoir si le joueur 2 gagne
        print ("Le joueur 2 gagne, il a obtenu un score de", total_player2, "points")
    elif total_player3>=343 : #test pour savoir si le joueur 3 gagne
        print ("Le joueur 3 gagne, il a obtenu un score de", total_player3, "points")
    elif total_player1 >=343 : #test pour savoir si le joueur 1 gagne
        print ("Le joueur 1 gagne, il a obtenu un score de", total_player1, "points")
if player3== True : #si le joueur 3 commence, et que deux personnes ont dépassé 343 alors c le joueur 3 qui gagne
    if total_player3>=343 : #test pour savoir si le joueur 3 gagne
        print ("Le joueur 3 gagne, il a obtenu un score de", total_player3, "points")
    elif total_player1>=343 : #test pour savoir si le joueur 1 gagne
        print ("Le joueur 1 gagne, il a obtenu un score de", total_player1, "points")
    elif total_player2 >=343 : #test pour savoir si le joueur 2 gagne
        print ("Le joueur 2 gagne, il a obtenu un score de", total_player2, "points")
    
