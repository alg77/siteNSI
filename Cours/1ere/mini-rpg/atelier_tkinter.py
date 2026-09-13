# Atelier complémentaire — exécuter sur ordinateur avec Tkinter.
import tkinter as tk

def afficher():
    nom = saisie.get()
    if nom == "":
        message.config(text="Entre un nom.")
    else:
        message.config(text="Bienvenue, " + nom + " !")

fenetre = tk.Tk()
fenetre.title("La forêt interdite")
fenetre.geometry("440x240")
tk.Label(fenetre, text="Crée ton personnage", font=("Arial", 18)).pack(pady=16)
saisie = tk.Entry(fenetre)
saisie.pack(pady=8)
tk.Button(fenetre, text="Choisir ce nom", command=afficher).pack(pady=8)
message = tk.Label(fenetre, text="")
message.pack(pady=8)
fenetre.mainloop()
