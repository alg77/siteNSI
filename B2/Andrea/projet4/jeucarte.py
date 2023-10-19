# Créé par atrevet, le 09/03/2023 en Python 3.7
from random import *

t_val=("7","8","9","10","Valet","Dame","Roi","As")
t_coul=("Pique","Trefle","Carreau","Coeur")

def carteAuHasard():
    valeur = randint(0,7)
    couleur = randint(0,3)
    carte=(t_val[valeur],t_coul[couleur])
    return carte

carte1=carteAuHasard()
carte2=carteAuHasard()

def bataille(carte1,carte2):
    print(carte1)
    print(carte2)

    if t_val.index(carte1[0])>t_val.index(carte2[0]):
        print("Le joueur 1 est gagnant")
    if t_val.index(carte2[0])>t_val.index(carte1[0]):
        print("Le joueur 2 est gagnant")
    if t_val.index(carte1[0])==t_val.index(carte2[0]):
        print("Il y'a égalité")

bataille(carte1,carte2)
