import random

scorejoueur=0
scoreordi=0
scoredeuxiemejoueur=0

def de_debut():
    
    """ cette fontion nous permet de savoir qui commence
    Returns
    -------
    int
        permet de savoir qui commence, 1 l'ordi commence, 2 le joueur commence"""
        
    dejoueur=0
    deordi=0
    while dejoueur==deordi:
        dejoueur=random.randint(1,6)
        deordi=random.randint(1,6)
    print ("Le score du joueur est de:", dejoueur)
    print ("Le score de l'ordi est de:", deordi)
    if dejoueur>deordi:
       print ("l'ordi a un score plus bas, il commence")
       return 1
    elif dejoueur<deordi:
       print ("le joueur a un score plus bas, il commence")
       return 2
   

def chouette(tableau,score):
    
    """ cette fonction nous permet de vérifier si la combinaison de dé donne une chouette (deux dés identiqes) et calcule le nouveau total des points
    Parameters
    ----------
    tableau : dictionnaire
        dictionnaire avec les résultats des dés lancés
    score : entier
        total des points déjà obtenus
    Returns
    -------
    score : entier
        le score après la verification d'une chouette """
    global combinaison
    
    if tableau["dé1"]==tableau["dé2"] or tableau["dé1"]==tableau["dé3"]:
        print("chouette")
        score=score+tableau["dé1"]**2
        combinaison=combinaison+1
        degrelottine=random.randint(1,6)
        if degrelottine==tableau["dé1"]:
            score=score*2
            print("grelottine")
            
    elif tableau["dé2"]==tableau["dé3"]:
        print ("chouette")
        score=score+tableau["dé2"]**2
        combinaison=combinaison+1
        degrelottine=random.randint(1,6)
        if degrelottine==tableau["dé1"]:
            score=score*2
            print("grelottine")
        
    return score



def lance_les_des():
    """cette fonction permet de lancer les dés de manière aléatoire
    Returns
    -------
    tableau : dictionnaire
        résultat de chaque dé après que il soit lancé """
    de1=random.randint(1,6)
    de2=random.randint(1,6)
    de3=random.randint(1,6)
    tableau={"dé1":de1,"dé2":de2,"dé3":de3}
    print ("Le tirage donne:", de1, de2,de3)
    return tableau



def velute (tableau,score):
    """ cette fonction permet de vérifié si la combinaison de dés donne une velute (somme de deux dés egal)
    Parameters
    ----------
    tableau : dictionnaire
        dictionnaire avec les résultats des dés lancés
    score : entier
        total des points déjà obtenus
    Returns
    -------
    score : int
        total des points après la vérification   """
    global combinaison
    
    if tableau["dé1"]+tableau["dé2"] == tableau ["dé3"]:
        score=score+tableau ["dé3"]**2*2
        print("Velute")
        combinaison=combinaison+1
        desirop=random.randint(1,6)
        if desirop==tableau["dé3"]:
            score=score*3
            print("sirop")
        
    if tableau["dé2"]+tableau["dé3"]== tableau ["dé1"]:
        score=score+tableau ["dé1"]**2*2
        print("Velute")
        combinaison=combinaison+1
        desirop=random.randint(1,6)
        if desirop==tableau["dé1"]:
            score=score*3
            print("sirop")
        
    if tableau["dé1"]+tableau["dé3"]== tableau ["dé2"]:
        score=score+ tableau ["dé2"]**2*2
        print("Velute")
        combinaison=combinaison+1
        desirop=random.randint(1,6)
        if desirop==tableau["dé2"]:
            score=score*3
            print("sirop")
        
    return score


def bec_de_chouette (tableau,score):
    """ cette fonction permet de vérifier si les dés donnent des résultats identiques, et modifie le score en conséquence
    Parameters
    ----------
    tableau : dictionnaire
        dictionnaire avec les résultats des dés lancés
    score : entier
        total des points déjà obtenus

    Returns
    -------
    score : entier
        score après la vérification """
    global combinaison
    if tableau["dé1"] == tableau["dé2"] and tableau ["dé3"] == tableau["dé2"]:
        score=score+40+10*tableau["dé2"]
        print("bec de chouette")
        combinaison=combinaison+1
    elif tableau["dé1"]==tableau["dé3"]:
        score=score+40+10*tableau["dé1"]
        print("bec de chouette")
        combinaison=combinaison+1
    return score


def suite (dictionnaire):
    """ cette fonction permet de vérifier si les résultats des dés se suivent
    Parameters
    ----------
    dictionnaire : dictionnaire
        dictionnaire avec les résultats des dés lancés

    Returns
    -------
    int
        permet de savoir si il y a eu une suite, si le programme renvoie 0 il n'y a pas de suite,si il renvoie 1 il y a une suite  """
    tableau=[]
    tableau.append(dictionnaire["dé1"])
    tableau.append(dictionnaire["dé2"])
    tableau.append(dictionnaire["dé3"])
    tableau.sort()
    if tableau[0] == tableau[1] -1 and tableau[1] == tableau[2]-1:
        print("suite")
        return 1
    return 0





resultat=de_debut()

while scoreordi<=343 and scorejoueur<=343 and scoredeuxiemejoueur<=343 :
    
    if resultat==1:
        
        #tour ordi
        
        combinaison=0
        tableauordi=lance_les_des()
        a=suite(tableauordi)
        
        if a == 0:           
            scoreordi=velute(tableauordi,scoreordi)
            scoreordi=bec_de_chouette(tableauordi,scoreordi)
            scoreordi=chouette(tableauordi,scoreordi)
        if a==0 and combinaison==0:
            scoreordi= tableauordi["dé1"] + tableauordi["dé2"] + tableauordi["dé3"]  
            print("Néant")
        print("le score de l'ordi est de:", scoreordi)
        
        
        #tour deuxieme joueur
        
        tableaudeuxiemejoueur=lance_les_des()
        combinaison=0
        a=suite(tableaudeuxiemejoueur)
        
        if a == 0:  
            scoredeuxiemejoueur=velute(tableaudeuxiemejoueur,scoredeuxiemejoueur)
            scoredeuxiemejoueur=bec_de_chouette(tableaudeuxiemejoueur,scoredeuxiemejoueur)
            scoredeuxiemejoueur=chouette(tableaudeuxiemejoueur,scoredeuxiemejoueur)
        if a==0 and combinaison==0:
             scoredeuxiemejoueur= tableaudeuxiemejoueur["dé1"] + tableaudeuxiemejoueur["dé2"] + tableaudeuxiemejoueur["dé3"]
             print("Néant")
        print("le score du joueur 2 est de:", scoredeuxiemejoueur)
        
        
        
        #tour joueur 1
        
        tableaujoueur=lance_les_des()
        combinaison=0
        a=suite(tableaujoueur)
        
        if a == 0:  
            scorejoueur=velute(tableaujoueur,scorejoueur)
            scorejoueur=bec_de_chouette(tableaujoueur,scorejoueur)
            scorejoueur=chouette(tableaujoueur,scorejoueur)
        if a==0 and combinaison==0:
             scorejoueur= tableaujoueur["dé1"] + tableaujoueur["dé2"] + tableaujoueur["dé3"]
             print("Néant")
        print("le score du joueur est de:", scorejoueur)
        
        
    else:
        
        #tour joueur
        
        tableaujoueur=lance_les_des()
        a=suite(tableaujoueur)
        combinaison=0
        
        if a == 0:  
            scorejoueur=velute(tableaujoueur,scorejoueur)
            scorejoueur=bec_de_chouette(tableaujoueur,scorejoueur)
            scorejoueur=chouette(tableaujoueur,scorejoueur)
        if a==0 and combinaison==0:
             scorejoueur= tableaujoueur["dé1"] + tableaujoueur["dé2"] + tableaujoueur["dé3"]
             print("Néant")
        print("le score du joueur est de:", scorejoueur)
        
        
        #tour deuxieme joueur
        
        tableaudeuxiemejoueur=lance_les_des()
        combinaison=0
        a=suite(tableaudeuxiemejoueur)
        
        if a == 0:  
            scoredeuxiemejoueur=velute(tableaudeuxiemejoueur,scoredeuxiemejoueur)
            scoredeuxiemejoueur=bec_de_chouette(tableaudeuxiemejoueur,scoredeuxiemejoueur)
            scoredeuxiemejoueur=chouette(tableaudeuxiemejoueur,scoredeuxiemejoueur)
        if a==0 and combinaison==0:
             scoredeuxiemejoueur= tableaudeuxiemejoueur["dé1"] + tableaudeuxiemejoueur["dé2"] + tableaudeuxiemejoueur["dé3"]
             print("Néant")
        print("le score du joueur 2 est de:", scoredeuxiemejoueur)
        
        
        
        #tour ordi
        
        tableauordi=lance_les_des()
        a=suite(tableauordi)
        combinaison=0
       
        
        if a == 0:           
            scoreordi=velute(tableauordi,scoreordi)
            scoreordi=bec_de_chouette(tableauordi,scoreordi)
            scoreordi=chouette(tableauordi,scoreordi)
        if a==0 and combinaison==0:
           scoreordi= tableauordi["dé1"] + tableauordi["dé2"] + tableauordi["dé3"]   
           print("Néant")
        print("le score de l'ordi est de:", scoreordi)
        
        
        
        
        
tableaudesscores=[scoreordi,scoredeuxiemejoueur,scorejoueur]
tableaudesscores.sort()
if tableaudesscores[2]==scoreordi :
    print("L'ordinateur a gagné avec", scoreordi, "points")
    print("le joueur a", scorejoueur, "points")
    print("le joueur 2 a", scoredeuxiemejoueur, "points")
elif tableaudesscores[2]==scorejoueur:
    print("Le joueur a gagné avec", scorejoueur, "points")
    print("L'ordinateur a", scoreordi, "points")
    print("le joueur 2 a", scoredeuxiemejoueur, "points")
else:
    print("Le joueur 2 a gagné avec ", scoredeuxiemejoueur, "points")
    print("L'ordinateur a", scoreordi, "points")
    print("le joueur a", scorejoueur, "points")