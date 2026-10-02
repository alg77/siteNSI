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
    # PARTIE 2 — Fonctions, tests et scène
    # Écris toi-même les imports et toutes les définitions (def).
    # Le cours est consultable ; aucun corps de fonction n’est fourni ici.
    
    # 1. DÉFINITIONS : six fonctions, avec leurs paramètres et return
    
    
    # 2. TESTS AVEC PRINT : 17 appels demandés + 2 appels personnels
    # Afficher pour chacun : entrées, attendu prévu, obtenu calculé.
    # Justifier les deux tests personnels ; commenter les observations.
    
    
    # 3. PERSONNAGE ET SCÈNE
    # Reprendre ici les saisies et contrôles du TP1 ; garder la partie 1.
    # Scène seulement si le personnage est valide.
    # Dégâts : force + 3 ; soin : 10 + intelligence ; seuil : 20 - agilite.
    # Surprise, puis un tour avec attaque, potion et riposte.
    # Tester les trois scénarios imposés et noter attendu / observé.
    
    
    # EXPLICATIONS : définition/appel, paramètre/argument, print/return
    # Erreur corrigée ou erreur que ton test pourrait détecter :
    # Aides utilisées :
    
# === FIN PARTIE 2 ===

# === DEBUT PARTIE 3 ===
if choix_partie == "3":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 3 — Mon personnage explore la forêt
    # Imports et définitions : reprendre calculer_degats du TP2.
    # Écrire entièrement choisir_ennemi et ses six tests avec print.
    
    # Reprendre les saisies et contrôles du TP1.
    # Afficher le personnage, ses dégâts, son soin et son seuil.
    
    # Si le personnage est valide : dix rencontres avec for.
    # Tirer, appeler choisir_ennemi, afficher numéro / nom / ennemi.
    # Afficher une seule fin après la boucle.
    
    # POINT D’ARRÊT : tester, commenter, sauvegarder.
    # Facultatif ensuite : compteur de gobelins.
    
# === FIN PARTIE 3 ===

# === DEBUT PARTIE 4 ===
if choix_partie == "4":
    pass  # garde le fichier exécutable tant que la partie est vide
    # PARTIE 4 — Le même héros entre en combat
    # Reprendre les six fonctions du TP2 et choisir_ennemi du TP3.
    # Reprendre les saisies et contrôles du TP1 ; conserver les parties précédentes.
    
    # Si le personnage est valide : calculer dégâts, soin et seuil.
    # Choisir un ennemi ; PV initiaux héros 100 / monstre 30.
    # Boucle while : action du héros, riposte éventuelle, affichage.
    # Terminer par victoire, défaite ou fuite.
    
    # TESTS : dés fixes, frontières, fin de combat, autre personnage.
    # Commenter attendu / observé, puis restaurer le hasard.
    
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
