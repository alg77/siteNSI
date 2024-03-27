from random import* # importer la blibliothèque de choix aléatoire
import time # importer la bibliothèque time

def Chouette(tirage):
    """

    Parameters
    ----------
    tirage : liste
    c'est la liste de 3 dés tirées au hazard
    Returns
    -------
    resultat : int
        on compare deux dés pour voir si il sont égaux 
        si oui
        on teste la grelottine on retourne le carré d'un des deux nombre 
        sinon on retourne 0

    """
    if tirage[0] == tirage[1] or tirage[1] == tirage[2]:
        resultat = tirage[1]**2
        grelottine = randint(1,6)
        print("le tirage de la grelottine est",grelottine)
        if grelottine == tirage[1]:
            resultat = resultat *2
    else:
        resultat = 0
    return resultat

def velute(tirage):
    """
    

    Parameters
    ----------
    tirage : TYPE
        DESCRIPTION.

    Returns
    -------
    resultat : TYPE
        DESCRIPTION.

    """
    if tirage[0] + tirage[1] == tirage[2]:
        resultat = tirage[2]**2*2
        sirop = randint(1,6)
        print("le tirage du sirop est",sirop)
        if sirop == tirage[2]:
            print("Tu as eu un sirop tu as donc triplé ton score ")
            resultat = resultat *3
    else:
        resultat = 0
    return resultat

def becchouette(tirage):
    if tirage[0] == tirage[1] == tirage[2]:
        resultat = 40+10* tirage[0]
    else:
        resultat =0
    return resultat

def suite(tirage):
    if tirage[0] == tirage[1] - 1 == tirage[2] - 2 :
        resultat = 0
    else :
        resultat = 1
    return resultat

def neant(tirage):
    resultat = tirage[0] + tirage[1] + tirage[2] 
    return resultat


# jEU    
tours1 = 0
tours2 = 0
total1 = 0
total2 = 0
joueur1 = randint(1,6)
joueur2 = randint(1,6)
print("le numéro du joueur 1 est : ",joueur1)
print("le numéro du joueur 2 est : ",joueur2)

while joueur1 == joueur2 :
    joueur1 = randint(1,6)
    joueur2 = randint(1,6)
    print("le numéro du joueur 1 est : ",joueur1)
    print("le numéro du joueur 2 est : ",joueur2)
if joueur1 < joueur2:
    print("c'est au tour du joueur 1 ")
    j = 1
elif joueur1 > joueur2:
    print("c'est au tour du joueur 2 ")
    j = 2
    
nbtours=0    
while total1 < 343 and  total2 < 343:
    nbtours += 1
    for k in range(2):   
        time.sleep(0.8)
        tirage = [randint(1,6) for i in range(3)]             
        tirage.sort()
        print(tirage)
        bec = becchouette(tirage)
        Chouett = Chouette(tirage)
        velut = velute(tirage)
        suit = suite(tirage)
        nean = neant(tirage)
        if k == 0:
            if bec > 0:
                print("tu as un Bec de chouette de", bec,"points")
                tours1 += 1
                total1 +=  bec
                print ("Tu a un total de",total1,"points sur",tours1,"tours\n")
            elif velut > 0:
                print("tu as une Velute de",velut,"points")
                tours1 += 1
                total1 += velut
                print ("Tu a un total de",total1,"points sur",tours1,"tours\n")
            elif Chouett > 0:
                print("tu as une Chouette de",Chouett,"points")
                tours1 += 1
                total1 += Chouett
                print ("Tu a un total de",total1,"points sur",tours1,"tours\n")
            elif suit == 0:
                print("tu as une suite de 0 points")
                tours1 += 1
                total1 += suit
                print ("Tu a un total de",total1,"points sur",tours1,"tours\n")
            elif nean > 0:
                print("tu as un néant de",nean,"points")
                tours1 += 1
                total1 += nean
                print ("Tu a un total de",total1,"points sur",tours1,"tours\n")
        elif k == 1:
            if  bec > 0:
                print("tu as un Bec de chouette de", bec,"points")
                tours2 += 1
                total2 +=  bec
                print ("Tu a un total de",total2,"points sur",tours2,"tours\n")
            elif velut > 0:
                 print("tu as une Velute de",velut,"points")
                 tours2 += 1
                 total2 += velut
                 print ("Tu a un total de",total2,"points sur",tours2,"tours\n")
            elif Chouett > 0:
                print("tu as une Chouette de",Chouett,"points")
                tours2 += 1
                total2 += Chouett
                print ("Tu a un total de",total2,"points sur",tours2,"tours\n")
            elif suit == 0:
                print("tu as une suite de 0 points")
                tours2 += 1
                total2 += suit
                print ("Tu a un total de",total2,"points sur",tours2,"tours\n")
            elif nean > 0:
                print("tu as un néant de",nean,"points")
                tours2 += 1
                total2 += nean
                print ("Tu a un total de",total2,"points sur",tours2,"tours\n")
                 
print("Nb de tours final :",nbtours)
if total1 > total2 and j == 1:
    print("C'est le joueur 1 qui a gagné avec",total1,"points sur",tours1,"tours")
elif total1 > total2 and j == 2:
    print("C'est le joueur 2 qui a gagné avec",total1,"points sur",tours1,"tours")
elif total1 < total2 and j == 1:
    print("C'est le joueur 2 qui a gagné avec",total2,"points sur",tours2,"tours")
elif total1 < total2 and j == 2:
    print("C'est le joueur 1 qui a gagné avec",total2,"points sur",tours2,"tours")