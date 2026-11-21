# Mini RPG — Partie 7 : interface graphique
# Élève : NOM Prenom
# Aides utilisées : À compléter
# TEST 1 : entrées / attendu / observé
# TEST 2 : entrées / attendu / observé
#
# À lancer sur ordinateur (Thonny, IDLE, VS Code), avec fond_foret.png dans le même dossier.
import tkinter as tk
import random

FOND = "#1f3d2b"
PANNEAU = "#f4efe1"

# 1. FONCTIONS DU JEU : recopie tes fonctions des parties 2 et 5
#    lancer_de, appliquer_degats, soigner, est_vivant, est_attaque_passee


# 2. ÉTAT DU JEU : des dictionnaires, modifiables dans les fonctions
hero = {}
jeu = {"pv_hero": 100, "pv_monstre": 40, "monstre": "", "monstres": []}


# 3. FONCTIONS DE L'INTERFACE (appelées par les boutons)
#    mettre_a_jour_total, creer_personnage, lancer_aventure,
#    nouvelle_partie, nouveau_combat, ecrire, dessiner_barre, afficher_etat,
#    jouer_tour, riposte, verifier_fin, clic_attaquer, clic_potion, clic_fuir


# 4. LA FENÊTRE ET SON FOND (étape 1)
fenetre = tk.Tk()
fenetre.title("La forêt interdite")
fenetre.geometry("800x500")


# 5. ÉCRAN DE CRÉATION : Frame ecran_creation rangée avec grid (étapes 2 et 3)


# 6. ÉCRAN DE COMBAT : Frame ecran_combat, créée ici mais affichée plus tard (étape 4)


fenetre.mainloop()
