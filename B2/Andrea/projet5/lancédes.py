# Créé par atrevet, le 09/03/2023 en Python 3.7

from random import *

def tirage3des(maxi):
    n1 = randint(1,maxi)
    n2 = randint(1,maxi)
    n3 = randint(1,maxi)
    tirage = (n1,n2,n3)
    return tirage

def somme3des(tirage):
    somme=tirage[0]+tirage[1]+tirage[2]
    return somme

t = tirage3des(6)
print(t)
print(somme3des(t))

if somme3des(t)>12:
    print("Gagné")
if somme3des(t)<=12 and somme3des(t)>=6:
    print("Rejouez")
if somme3des(t)<6:
    print("Perdu")