#Importer les deux bibliothèques, random et time
import random
import time

moyEnergie = 0 #Moyenne pour calculer l'énergie (satisfaction) moyenne des gens qui ont fait l'attraction

file = [] #Liste où l'on mettra les visiteurs ainsi que leur énergies dans la file d'attente

#liste des noms utilisés pour créer la file
liste_noms = [
    "eliott",
    "luc",
    "marc",
    "eve",
    "adam",
    "marie",
    "camille",
    "adel",
    "victor",
    "justin",
    "ethan",
    "matheo",
    "marius",
    "salazar",
    "Dorlys",
    "Clovis Ier",
    "Petrole",
    "Vladimir",
    "Carinne",
    "Fanny",
    "silvain",
    "Pierrot",
    "Marine",
    "Mme Le GUERN ",
    "Talmo",
    "Frerejacques",
    "Clavier",
    "Souris",
    "Skou",
    "Ziak",
    "Fredo",
    "Olivier ",
    "Un russe",
    "Un italien",
    "Yamal",
    "JMLink",
    "Arlette",
    "Tony",
    "JeanjaquesGoldman",
    "Eva",
    "Nathalie",
    "Audrey",
    "Un ours",
    "Le frère de l'ours",
    "Fredouille",
    "Paula",
    "Christophe",
    "Justinette",
    "Mathea",
    "ninho",
    "Angelo ",
    "Adrien  :(",
    "Pierre",
    "Paul",
    "Eric",
    "Cedric Doumbe",
    "Jordan",
    "King Lewis",
]

#Les Fonctions


#Fonction permettant d'ajouter un visiteur à la liste
def ajouter_visiteur(file, visiteur_nom):
  energie = random.randint(51, 100) #Choix aléatoire de l'énergie (satisfaction) donné au visiteur
  visiteur = {"nom": visiteur_nom, "energie": energie} #Le visiteur et son énergie sont dans un dictionnaire
  file.append(visiteur) #On ajoute le dictionnaire à la liste file
  del liste_noms[0] #On supprime le nom du visiteur dans la liste des noms, partant du principe qu'il ne fera pas l'attraction deux fois.
  return file

#Fonction permettant le retrait d'énergie d'un visiteur dans la file.
def file_attente(file):
  #Chaque visiteur aura son énergie réduite entre 1 à 5  
  for visiteur in file:
    visiteur["energie"] -= random.randint(1, 5)  
  print(file) #On affiche la file après avoir réduit l'énergie de tous les visiteurs dans la file
  return file

#Fonction permettant de retirer un visiteur dans la file
def retirer_visiteur(file):
  global moyEnergie #pour pouvoir modifier la variable
  time.sleep(0.5) #temps d'attente de 0.5
  file[0]["energie"] += random.randint(1, 20) #On ajoute entre 1 et 20 à l'énergie du visiteur qui vient de faire l'attraction
  moyEnergie += file[0]["energie"] #On ajoute à la variable moyEnergie l'énergie du visiteur
  print(file[0], "est sorti de l'attraction")
  del file[0] #On supprime le visiteur de la file



# Code Principal



random.shuffle(liste_noms) #On mélange les noms, histoire de ne pas avoir les mêmes noms dans le même ordre à chaque run

print("\n\n--------------------------------------\n\n")

print("Par  Mathéo , ethan et justin")

time.sleep(2)

print("\n\n--------------------------------------\n\n")

print("Bienvenue dans l'attraction Space Moutain 2.5")

print("\n\n--------------------------------------\n\n")

time.sleep(2)

print("Voici la file, contenant nos 10 premiers visiteurs ! \n\n--------------------------------------\n")

#On ajoute 10 noms à la file du début, en appelant 10 fois la fonction ajouter_visiteur
for i in range(10):
  ajouter_visiteur(file, liste_noms[0])
print(file, "\n")

for i in range(10): #On fait 10 tours car nous devons récolter au total l'énergie de 20 visiteurs qui ont fait l'attraction, soit 2 par tour

  print("--------------------------------------\n\n")

  time.sleep(1)

  print("Ouverture de l'attraction !\n\n")
  print("--------------------------------------\n\n")

  time.sleep(1)

  for i in range(random.randint(1, 5)): #On ajoute entre 1 et 5 personnes dans la file en appelant entre 1 et 5 fois la fonction ajouter_visiteur
    print(liste_noms[0], "rejoint la file \n")
    ajouter_visiteur(file, liste_noms[0])

  print("\n--------------------------------------\n\n")

  time.sleep(1)

  for i in range(2): #On retire 2 visiteurs à la file en appelant deux fois la fonction retirer_visiteur
    retirer_visiteur(file)
    print("\n")

  print("--------------------------------------\n\n")
  time.sleep(1)

  print("Attention, l'énergie des visiteurs baisse !\n\n")
  time.sleep(1)

  print("Voici la file actuellement :\n\n")
  time.sleep(1)

  print("--------------------------------------\n\n")

  file_attente(file) #on appelle la fonction file_attente pour voir la file après la baisse d'énergie des gens dans la file

  print("\n\n--------------------------------------\n\n Fin du tour, début du prochain !\n\n")

# Hors for range

print("Sur un échantillon de 20 visiteurs, la moyenne de satisfaction est de", moyEnergie / 20)
