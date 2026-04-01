# -*- coding: utf-8 -*-
"""
Created on Mon Dec 11 11:13:28 2023

@author: rpedenaud
"""
from random import*

# CRÉATION DE CLASSE

class Pokemon :
    def __init__(self, nom, type, points_de_vie): # Initialisation des différents Pokemons.
        """
        

        Parameters
        ----------
        nom : TEXT
            Nom du pokemon.
        type : TEXT
            type du pokemon.
        points_de_vie : INTEGER
            PV du pokemon.

        Returns
        -------
        None.

        """
        self.nom = nom
        self.type = type
        self.points_de_vie = points_de_vie
    
    def afficher_info (self) : # Permet d'afficher les informations du Pokemon souhaité
        """
        

        Returns
        -------
        None.

        """
        print (f"{self.nom} est de type {self.type} avec {self.points_de_vie} PV.")
        
    def attaquer(self,cible): # Lance une attaque classique infligeant 10 PV.
        """
        

        Parameters
        ----------
        cible : Objet de type Pokemon 
            Pokemon adverse.

        Returns
        -------
        None.

        """
        print(f"{self.nom} attaque {cible.nom} !")
        if cible.points_de_vie > 0:
            cible.points_de_vie -= 10
            if cible.points_de_vie <= 0:
                print(f"{cible.nom} est désormais KO !")
        else:
            print(f"{cible.nom} est déjà KO !")
            
    def est_vaincu(self): # Test pour savoir si le Pokemon est en vie ou non.
        """
        

        Returns
        -------
        bool
            VRAI ou FAUX.

        """
        if self.points_de_vie <= 0:
            print(f"{self.nom} est KO ")
            return True
        else:
            print(f"{self.nom} est encore en jeu. ")
            return False
    
    def duel(self,cible): # Démarre un combat entre deux Pokemons jusqu'à ce que l'un soit KO.
        """
        

        Parameters
        ----------
        cible : Objet de type Pokemon
            pokemon adverse.

        Returns
        -------
        vainqueur : 
            Pokemon gagnant du duel.

        """
        while self.points_de_vie > 0 and cible.points_de_vie > 0 : # Le duel continue tant que les deux pokemons sont encore en vie
            print(f"{self.nom} attaque {cible.nom} !")
            if cible.points_de_vie > 0 : # Si la cible de l'attaque a encore des PV, elle subit une attaque
                self.attaque_speciale(cible)
            if cible.points_de_vie == 0 :
                print(f"{self.nom} a donc gagné le duel !")
                self.points_de_vie += 20 # Le Pokemon gagnant du duel récupère 20 PV.
                vainqueur = self
                return vainqueur
                break
            
            print(f"{cible.nom} attaque {self.nom} !")
            if self.points_de_vie > 0 :  # Si la cible de l'attaque a encore des PV, elle subit une attaque.
                cible.attaque_speciale(self)
            if self.points_de_vie == 0 :
                print(f"{cible.nom} a donc gagné le duel !")
                cible.points_de_vie += 20 # Le Pokemon gagnant du duel récupère 20 PV.
                vainqueur = cible
                return vainqueur
   
        
class PokemonElectrique(Pokemon): 
    def __init__(self, nom, points_de_vie):
        super().__init__(nom, "Electrique", points_de_vie)
    def attaque_speciale(self,cible):
        x = randint(0,6)
        if x == 1 :
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 20
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
            print(f"{self.nom} utilise Fatal-Foudre sur {cible.nom} et lui inflige 20 points de dégats !")
            print(f"{cible.nom} a encore {cible.points_de_vie} PV restants !\n")
            if cible.points_de_vie == 0:
                print(f"{cible.nom} est désormais KO !\n")
        else : 
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 10
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
                print(f"{cible.nom} a perdu 10 PV, il lui reste {cible.points_de_vie} PV.\n")
                if cible.points_de_vie == 0:
                    print(f"{cible.nom} est désormais KO !\n")
                   
class PokemonFeu(Pokemon): 
    def __init__(self, nom, points_de_vie):
        super().__init__(nom, "Feu", points_de_vie)
    def attaque_speciale(self,cible):
         x = randint(0,6)
         if x == 1 :
             if cible.points_de_vie > 0:
                 cible.points_de_vie -= 20
                 if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                     cible.points_de_vie = 0
             print(f"{self.nom} utilise Déflagration sur {cible.nom} et lui inflige 20 points de dégats !")
             print(f"{cible.nom} a encore {cible.points_de_vie} PV restants !\n")
             if cible.points_de_vie == 0:
                 print(f"{cible.nom} est désormais KO !\n")
         else : 
             if cible.points_de_vie > 0:
                 cible.points_de_vie -= 10
                 if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                     cible.points_de_vie = 0
                 print(f"{cible.nom} a perdu 10 PV, il lui reste {cible.points_de_vie} PV.\n")
                 if cible.points_de_vie == 0:
                     print(f"{cible.nom} est désormais KO !\n")

class PokemonEau(Pokemon):  
    def __init__(self, nom, points_de_vie):
        super().__init__(nom, "Eau", points_de_vie)
    def attaque_speciale(self,cible):
        x = randint(0,6)
        if x == 1 :
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 20
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
            print(f"{self.nom} utilise Hydrocanon sur {cible.nom} et lui inflige 20 points de dégats !")
            print(f"{cible.nom} a encore {cible.points_de_vie} PV restants !\n")
            if cible.points_de_vie == 0:
                print(f"{cible.nom} est désormais KO !\n")
        else : 
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 10
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
                print(f"{cible.nom} a perdu 10 PV, il lui reste {cible.points_de_vie} PV.\n")
                if cible.points_de_vie == 0:
                    print(f"{cible.nom} est désormais KO !\n")
            
class PokemonPlante(Pokemon): 

    def __init__(self, nom, points_de_vie):
        super().__init__(nom, "Plante", points_de_vie)
    def attaque_speciale(self,cible):
        x = randint(0,6)
        if x == 1 :
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 20
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
                print(f"{self.nom} utilise Lance-Soleil sur {cible.nom} et lui inflige 20 points de dégats !")
                print(f"{cible.nom} a encore {cible.points_de_vie} PV restants !\n")
                if cible.points_de_vie == 0:
                    print(f"{cible.nom} est désormais KO !\n")
        else : 
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 10
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
                print(f"{cible.nom} a perdu 10 PV, il lui reste {cible.points_de_vie} PV.\n")
                if cible.points_de_vie == 0:
                    print(f"{cible.nom} est désormais KO !\n")
                    
class PokemonNormal(Pokemon): 
    def __init__(self, nom, points_de_vie):
        super().__init__(nom, "Normal", points_de_vie)
    def attaque_speciale(self,cible):
        x = randint(0,6)
        if x == 1 :
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 20
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
            print(f"{self.nom} utilise Ultralaser sur {cible.nom} et lui inflige 20 points de dégats !")
            print(f"{cible.nom} a encore {cible.points_de_vie} PV restants !\n")
            if cible.points_de_vie == 0:
                print(f"{cible.nom} est désormais KO !\n")
        else : 
            if cible.points_de_vie > 0:
                cible.points_de_vie -= 10
                if cible.points_de_vie < 0 : # Si la cible de l'attaque a des PV négatifs, elle affiche 0 PV.
                    cible.points_de_vie = 0
                print(f"{cible.nom} a perdu 10 PV, il lui reste {cible.points_de_vie} PV.\n")
                if cible.points_de_vie == 0:
                    print(f"{cible.nom} est désormais KO !\n")

def selection(Pokedex : list) :
    """
    

    Parameters
    ----------
    Pokedex : list
        Liste de tous les Pokemons participants au tournoi.

    Returns
    -------
    Pokemon_A : TEXT
        Le nom du Pokemon sélectionné pour un duel du tournoi .
    Pokemon_B : TEXT
        Le nom du Pokemon adverse du Pokemon_A pour le duel.

    """
    Pokemon_A = Pokedex[randint(0,len(Pokedex)-1)] # Choisit un Pokemon aléatoire de la liste puis l'enlève de cette liste.
    Pokedex.remove(Pokemon_A)
    Pokemon_B = Pokedex[randint(0,len(Pokedex)-1)] # Choisit un autre Pokemon aléatoire de la liste puis l'enlève de cette liste.
    Pokedex.remove(Pokemon_B)
    return (Pokemon_A,Pokemon_B) # Renvoie les deux Pokemons du duel.
         
def tournoi(Candidats : list) :
    """
    

    Parameters
    ----------
    Candidats : list
        Liste de tous les pokemons participants au tournoi.

    Returns
    -------
    None.

    """
    while len(Pokedex) > 1 : # Tant que la liste contient plus d'un Pokemon.
         a,b=selection(Pokedex)
         print(f"Le joueur 1 envoie {a.nom}.")
         a.afficher_info()
         print()
         print(f"Le joueur 2 envoie {b.nom}.")
         b.afficher_info()
         print()
         vainqueur = a.duel(b)
         Pokedex.append(vainqueur) #Le vainqueur du duel est remis dans la liste.
         print(f"{vainqueur.nom} récupère 20PV, il a désormais {vainqueur.points_de_vie} PV !")
         print(f"{vainqueur.nom} passe à la manche suivante !\n")
    print(f"Le champion du tournoi est {Pokedex[0].nom} !!!")
     
# CREATION DES POKEMONS

Pikachu = PokemonElectrique("Pikachu",35)
Salameche = PokemonFeu("Salameche",30)
Carapuce = PokemonEau("Carapuce",32)
Bulbizarre = PokemonPlante("Bulbizarre",45)
Roucool = PokemonNormal("Roucool",40)
Pokedex= [Pikachu,Salameche,Carapuce,Bulbizarre,Roucool]

# PROGRAMME PRINCIPAL

"""Pikachu.afficher_info()
Salameche.afficher_info()
Carapuce.afficher_info()
Bulbizarre.afficher_info()
Roucool.afficher_info()"""

tournoi(Pokedex)
