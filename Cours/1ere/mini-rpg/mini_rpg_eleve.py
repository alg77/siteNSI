# -*- coding: utf-8 -*-
# Mini RPG — Première NSI
# Élève : NOM Prenom
# Aides : À compléter
# Correction expliquée : À compléter

# Menu fourni : il lance seulement la partie choisie.
choix_partie = input("Partie à lancer (1 à 6) : ")

# === DEBUT PARTIE 1 ===
if choix_partie == "1":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 1 — Création du personnage
    # TODO : saisir le nom, la classe et les trois caractéristiques.
    # TODO : afficher le récapitulatif et vérifier la répartition.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 1 ===

# === DEBUT PARTIE 2 ===
if choix_partie == "2":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 2 — Hasard et fonctions
    import random
    
    def attaque_reussie(de):
        # TODO : remplacer pass par le résultat à renvoyer.
        pass
    
    # TODO : surprise, tests fixes, puis lancer de dé.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 2 ===

# === DEBUT PARTIE 3 ===
if choix_partie == "3":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 3 — Exploration
    import random
    
    def choisir_ennemi(x):
        # TODO : renvoyer le nom selon les trois intervalles.
        pass
    
    # TODO : exemple d'indentation puis dix rencontres et compteur.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 3 ===

# === DEBUT PARTIE 4 ===
if choix_partie == "4":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 4 — Combat
    import random
    
    # TODO : boucle du mini-jeu d'échauffement.
    # TODO : combat indépendant à 100 PV chacun, puis message de fin.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 4 ===

# === DEBUT PARTIE 5 ===
if choix_partie == "5":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 5 — Listes
    import random
    
    # TODO : menu de liste de courses.
    # TODO : recopier puis faire évoluer le combat de la partie 4.
    # Monstres : gobelin, araignee, troll. Ne pas réinitialiser le héros.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 5 ===

# === DEBUT PARTIE 6 ===
if choix_partie == "6":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 6 — Dictionnaires
    import random
    
    # TODO : bestiaire de descriptions et manipulations.
    # TODO : modèles de monstres et de héros, sélection validée.
    # TODO : adapter le combat de partie 5 aux dictionnaires.
    # TEST 1 : entrées / attendu / observé
    # TEST 2 : entrées / attendu / observé
# === FIN PARTIE 6 ===

if choix_partie not in ("1", "2", "3", "4", "5", "6"):
    print("Choisis une partie de 1 à 6.")
