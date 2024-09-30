# -*- coding: utf-8 -*-
"""
Created on Tue Jan 24 08:47:27 2023

@author: rpedenaud
"""

import pandas as pd
from random import randint

def choix_mot(fichier="venv/include/dicoNC.csv",longueur_min=6,longueur_max=10):
    banque_de_noms = pd.read_csv(fichier,usecols=['nom'], sep='\t', skiprows=58)
    nb_mots=banque_de_noms.nom.count()
    mot=''
    while len(mot)<longueur_min or len(mot)>longueur_max or mot.find('-')!=-1:
        numero=randint(0,nb_mots-1)
        mot=banque_de_noms.loc[numero].nom
    return ote_accent(mot).upper()

def ote_accent(mot):
    a=['a','à','â','ä']
    e=['e','é','è','ê','ë']
    i=['i','î','ï']
    o=['o','ô','ö']
    u=['u','ù','û','ü']
    c=['c','ç']
    voyelles=[a,c,e,i,o,u]
    for voyelle in voyelles:
        for i in range(1,len(voyelle)):
            mot=mot.replace(voyelle[i],voyelle[0])
    return mot