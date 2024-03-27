from choix_nom import choix_mot

y="non"
lettre_trouve=[] #toutes les lettres trouvées
lettre_tentees=[] #toutes les lettres tentées
mot_a_trouver=choix_mot()
mot_courant=str("-"*len(mot_a_trouver))
tentative_restante=7
gagne=False
alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
nouveau_mot_courant1=["-" for i in range (len(mot_a_trouver))]

def demande_lettre():
    global alphabet
    lettre=input("Donnez votre lettre:") 
    bool1 = lettre not in alphabet
    bool2 = len(lettre)>1
    while lettre not in alphabet or len(lettre)!=1:
        lettre=input("Donnez votre lettre :")
    lettre=lettre.upper()
    return lettre

def affichageErreur():
    global tentative_restante
    if tentative_restante==0:
        print(" ============Y=")
    if tentative_restante<=1:
        print(" ||/         | ")
    if tentative_restante<=2:
        print(" ||          0 ")
    if tentative_restante<=3:
        print(" ||         /|\\")
    if tentative_restante<=4:
        print(" ||         /\\")
    if tentative_restante<=5:
        print("/||")
    if tentative_restante<=6:
        print("===============")
        
def nouveau_mot_courant(char):
    global lettre_trouve
    global mot_a_trouver
    global nouveau_mot_courant1
    global y
    i=0
    for lettre in mot_a_trouver:
        if nouveau_mot_courant1[i]=="-":
            if char==lettre:
                nouveau_mot_courant1[i]=char
                y="oui" 
        i=i+1
    
    
def affichage_des_lettres(lettre):
    global mot_a_trouver
    global lettre_trouve
    global lettre_tentees
    global tentative_restante
    global y
    if y=="oui":
        lettre_trouve.append(lettre)
    else:
        lettre_tentees.append(lettre)
        tentative_restante=tentative_restante-1
        print(affichageErreur())
        
print("Début du jeu: trouve de quel mot il s'agit")
print(nouveau_mot_courant1, "il te reste", tentative_restante,"tentatives")
while gagne!=True:
    lettre2=demande_lettre()
    nouveau_mot_courant(lettre2)
    affichage_des_lettres(lettre2)
    print(nouveau_mot_courant1, "il te reste", tentative_restante,"tentatives")
    print("lettres trouvées:", lettre_trouve)
    print("lettres tentées:", lettre_tentees)
    if tentative_restante==0:
        print ("Vous avez perdu, vous n'avez plus de tentatives votre mot était: ", mot_a_trouver)
        gagne=True
    if nouveau_mot_courant1==list(mot_a_trouver.strip()):
        print("Vous avez gagné, vous avez trouvé le mot", mot_a_trouver, "en", 7-tentative_restante+1, "tentatives")
        gagne=True
    y="non"
    
    
    
    
    
