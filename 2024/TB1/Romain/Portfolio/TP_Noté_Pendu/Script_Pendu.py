# -*- coding: utf-8 -*-
"""
Created on Tue Jan 24 08:39:28 2023

@author: rpedenaud
"""

#Pedenaud Romain,Mangon Nicolas 


from choix_nom import choix_mot

mot_a_trouver=choix_mot()

mot_courant="-"*len(mot_a_trouver)
lettre_trouve=None
tentative_restante=7
gagne=False
alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print(mot_a_trouver)

def demande_lettre():# verifie la saisie + enlève tentatives si lettre pas bonne
    global tentative_restante
    global lettre 
    while lettre not in alphabet or len(lettre)!=1:
        lettre=input("Entre une lettre MAJUSCULE:")
    if lettre not in mot_a_trouver:
        tentative_restante = (tentative_restante)-1
    return()

def affichageErreur(): #dessin du pendu
    if tentative_restante==0:
        print(" ==========Y==")
        print(" ||/       |")
        print(" ||        0 ")
        print(" ||       /|\ ")
        print(" ||       / \ ")
        print("/||")
        print("==============")
    elif tentative_restante<=1:
        print(" ||/       |")
        print(" ||        0 ")
        print(" ||       /|\ ")
        print(" ||       / \ ")
        print("/||")
        print("==============")
    elif tentative_restante<=2:
        print(" ||        0 ")
        print(" ||       /|\ ")
        print(" ||       / \ ")
        print("/||")
        print("==============")
    elif tentative_restante<=3:
        print(" ||       /|\ ")
        print(" ||       / \ ")
        print("/||")
        print("==============")
    elif tentative_restante<=4:
        print(" ||       / \ ")
        print("/||")
        print("==============")
    elif tentative_restante<=5:
        print("/||")
        print("==============")
    elif tentative_restante<=6:
        print("==============")
    return()
def nouveauMotCourant(char):
    global mot_a_trouver
    global mot_courant
    nouveau_Mot_Courant=""
    for indice_lettre in range (len(mot_a_trouver)):
        if mot_courant[indice_lettre] != "-":
            nouveau_Mot_Courant += mot_courant[indice_lettre]
        elif char == mot_a_trouver[indice_lettre]:
            nouveau_Mot_Courant += char
        else:
            nouveau_Mot_Courant += "-"
    mot_courant=nouveau_Mot_Courant
    
        
        
        
        
while tentative_restante >0 and mot_courant != mot_a_trouver:
    print("début du jeu: trouve de quel mot il s'agit",mot_courant,"il te reste",tentative_restante,"tentatives")
            
    lettre=input("Entre une lettre Majuscule:")
    demande_lettre()
    affichageErreur()
    nouveauMotCourant(lettre)
    
    
if mot_courant == mot_a_trouver :
    gagne=True
    print ("BRAVO, vous avez gagnez")
else:
    print("Bravo, tu as perdu")
print("Le mot était",mot_a_trouver)
