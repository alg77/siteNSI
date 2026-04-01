import random
import time

file_dattente=[] #représente la file d'attente
moyenne=[] #permet de classer la satisfaction de chaque personne lorsque elle est sortie de la file
tableau_de_nom=["Louise","Lisa", "Gabriel", "Antonin", "Emmanuelle", "Violette", "Iris","Nina", "Romane", "Alexis", "Thomas", "Jeremy", "Antoine", "Constance", "Goedeffroy", "Eva", "Ambrine", "Evo", "Mathéa", "Justine", "Escalibur"]

def ajouter_visiteur (file,visteur):
    """ ajoute un visiteur à la fin de la file
    Parameters
    ----------
    file : liste
        représente la file
    visteur : dictionnaire
        représente le visteur
    Returns
    ---------
    file
    """
    
    file.append(visiteur)
    return file


def retirer_visiteur (file):
    """ permet de retirer le premier visiteur de la file lorsque l'attraction est disponible
    Parameters
    ----------
    file : liste
        représente la file

    Returns
    -------
    file
    """
    del(file[0])
    return file

def creer_des_visiteurs(tableau):
    """ cette fonction permet de créer un visiteur
    Returns
    -------
    visiteur : dico
        représente le visiteur avec son nom et son niveau de satisfaction

    """
    nom=random.randint(0,len(tableau)-1)
    visiteur={"nom":tableau[nom], "satisfaction": random.randint(50,100)}
    return visiteur

def affichage_file(file):
    """ permet d'afficher la file d'attente
    Parameters
    ----------
    file : tableau
       représente la file d'attente

    Returns
    -------
    None.
    """
    print("La liste d'attente est composée de", len(file),"personnes")
    time.sleep(2)
    print("Voici la file d'attente:")
    for i in range(len(file)):
        print(file[i]["nom"])
        time.sleep(1)
    

for i in range (20): 
    for i in range (random.randint(0,5)):
        visiteur=creer_des_visiteurs(tableau_de_nom)
        file_dattente=ajouter_visiteur (file_dattente,visiteur)
    affichage_file(file_dattente)
    nombre=random.randint(1,10)
    niveau=random.randint(1,3)
    time.sleep(2)
    file_dattente[0]["satisfaction"]=file_dattente[0]["satisfaction"]+nombre
    print("L'attraction est disponible, le premier visiteur est sorti de la file il sagit de", file_dattente[0]["nom"])
    time.sleep(5)
    print("Le visiteur a finit l'attraction")
    time.sleep(2)
    print("Son niveau de satisfaction est monté de", nombre, "il est maintenant de", file_dattente[0]["satisfaction"] )
    time.sleep(2)
    moyenne.append(file_dattente[0]["satisfaction"])
    file_dattente=retirer_visiteur(file_dattente)
    
    for i in range (len (file_dattente)):
        file_dattente[i]["satisfaction"]=file_dattente[i]["satisfaction"]-niveau
    
    print("Les autres visiteurs de la file sont descendus de", niveau)
    time.sleep(2)
    print("Il y a", len(file_dattente), "personne(s) dans la file")
    time.sleep(2)
    
total_moyenne=0   
for i in range (len(moyenne)):
    total_moyenne+=moyenne[i]
total_moyenne=total_moyenne/len(moyenne)

print("La satisfaction moyenne des visiteurs à la sortie de l'atraction sur un échatillon de 20 tours est de", total_moyenne)