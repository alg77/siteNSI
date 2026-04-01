import random
import tkinter as tk
from PIL import Image, ImageTk
import time

coiffures = {
    "coiffure1": {"image": "1"},
    "coiffure2": {"image": "2"},
    "coiffure3": {"image": "3"},
    "coiffure4": {"image": "4"},
    "coiffure5": {"image": "5"},
    "coiffure6": {"image": "6"},
    "coiffure7": {"image": "7"},
    "coiffure8": {"image": "8"},
    "coiffure9": {"image": "9"},
}   
    
hauts = {
  "haut1": {"image": "top"},
  "haut2": {"image": "top1"},
  "haut3": {"image": "top2"},
  "haut4": {"image": "top3"},
  "haut5": {"image": "top4"},
  "haut6": {"image": "top5"},
  "haut7": {"image": "top6"},
  "haut8": {"image": "top7"},
  "haut9": {"image": "top8"},
  "haut10": {"image": "top9"},
  "haut11": {"image": "top10"},
  "haut12": {"image": "top11"},
}


bas = {
  "bas1": {"image": "bas"},
  "bas2": {"image": "bas1"},
  "bas3": {"image": "bas2"},
  "bas4": {"image": "bas3"},
  "bas5": {"image": "bas4"},
  "bas6": {"image": "bas5"},
  "bas7": {"image": "bas6"},
  "bas8": {"image": "bas7"},
  "bas9": {"image": "bas8"},
  "bas10": {"image": "bas9"},
  "bas11": {"image": "bas10"},
  "bas12": {"image": "bas11"},
  "bas13": {"image": "bas12"}
}


chaussures = {
    "chaussure1": {"image": "basket"},
    "chaussure2": {"image": "basket1"},
    "chaussure3": {"image": "birk"},
    "chaussure4": {"image": "santiague"},
    "chaussure5": {"image": "talon"},
    "chaussure6": {"image": "tongue"},
    "chaussure7": {"image": "talon1"},
}

accessoires = {
    "accessoire1": {"image": "bob"},
    "accessoire2": {"image": "casquette"},
    "accessoire3": {"image": "sac"},
    "accessoire4": {"image": "echarpe"},
    "accessoire5": {"image": "sac1"},
}


def choisir_theme():
    choix = random.randint(1, 5)
    if choix == 1:
        return "chic et choc"
    if choix == 2:
        return "princesse"
    if choix == 3:
        return "soirée"
    if choix == 4:
        return "plage"
    if choix == 5:
        return "tenue du quotidien"

start_time = None
is_time_up = False

def afficher_theme():
    global debut_temps, fin_temps
    theme = choisir_theme()
    label_nom.config(text=f"Le thème est « {theme} » !", fg="#8C89ED", font=("Georgia", 20, "bold"))
    debut_temps = time.time()
    fin_temps = False
    compte_a_rebours()

def compte_a_rebours():
    if debut_temps:
        temps_passe = time.time() - debut_temps
        temps_restant = 60 - int(temps_passe)
        if temps_restant > 0:
            label_timer.config(text=f"Temps restant : {temps_restant} secondes", fg="#574FAA", font=("Georgia", 15))
            fenetre.after(1000, compte_a_rebours)
        else:
            label_timer.config(text="Temps écoulé ! Vous avez perdu... désolée")
            global is_time_up
            is_time_up = True

def changer_coiffure():
    coiffure_nom = random.choice(list(coiffures.keys()))
    coiffure = coiffures[coiffure_nom]
    image_path = f"A. Coiffure/{coiffure['image']}.png"
    image = Image.open(image_path)
    image = image.resize((100, 100))
    photo = ImageTk.PhotoImage(image)
    canvas_coiffure.delete("all")
    canvas_coiffure.create_image(50, 50, image=photo)
    canvas_coiffure.image = photo

def changer_haut():
    haut_nom = random.choice(list(hauts.keys()))
    haut = hauts[haut_nom]
    image_path = f"B. Hauts/{haut['image']}.png"
    image = Image.open(image_path)
    image = image.resize((100, 100))
    photo = ImageTk.PhotoImage(image)
    canvas_haut.delete("all")
    canvas_haut.create_image(50, 50, image=photo)
    canvas_haut.image = photo

def changer_bas():
    bas_nom = random.choice(list(bas.keys()))
    bas_data = bas[bas_nom]
    image_path = f"C. Bas/{bas_data['image']}.png"
    image = Image.open(image_path)
    image = image.resize((100, 100))
    photo = ImageTk.PhotoImage(image)
    canvas_bas.delete("all")
    canvas_bas.create_image(50, 50, image=photo)
    canvas_bas.image = photo

def changer_chaussures():
    chaussures_nom = random.choice(list(chaussures.keys()))
    chaussure = chaussures[chaussures_nom]
    image_path = f"D. Chaussures/{chaussure['image']}.png"
    image = Image.open(image_path)
    image = image.resize((100, 100))
    photo = ImageTk.PhotoImage(image)
    canvas_chaussures.delete("all")
    canvas_chaussures.create_image(50, 50, image=photo)
    canvas_chaussures.image = photo

def changer_accessoire():
    accessoire_nom = random.choice(list(accessoires.keys()))
    accessoire = accessoires[accessoire_nom]
    image_path = f"E. Accessoires/{accessoire['image']}.png"
    image = Image.open(image_path)
    image = image.resize((150, 150))
    photo = ImageTk.PhotoImage(image)
    canvas_accessoire.delete("all")
    canvas_accessoire.create_image(75, 75, image=photo)
    canvas_accessoire.image = photo

def valider_tenue():
    global is_time_up
    if is_time_up:
        label_nom.config(text="Désolé, vous avez perdu. Essayez encore !")
    else:
        label_timer.config(text="Magnifique, tenue validée !")
    fenetre.after(10000, afficher_theme)
    afficher_theme()

fenetre = tk.Tk()
fenetre.title("The Fashion Game")
fenetre.geometry("800x600")

frame_principal = tk.Frame(fenetre)
frame_principal.pack(side="left", padx=20)

frame_accessoires = tk.Frame(fenetre)
frame_accessoires.pack(side="left", padx=20)

label_nom = tk.Label(fenetre, text="", font=("Arial", 20))
label_nom.pack(pady=10)

canvas_coiffure = tk.Canvas(frame_principal, width=100, height=100, bg="white")
canvas_coiffure.pack(pady=10)

canvas_haut = tk.Canvas(frame_principal, width=100, height=100, bg="white")
canvas_haut.pack(pady=10)

canvas_bas = tk.Canvas(frame_principal, width=100, height=100, bg="white")
canvas_bas.pack(pady=10)

canvas_chaussures = tk.Canvas(frame_principal, width=100, height=100, bg="white")
canvas_chaussures.pack(pady=10)

canvas_accessoire = tk.Canvas(frame_accessoires, width=150, height=150, bg="white")
canvas_accessoire.pack(pady=10)

label_timer = tk.Label(fenetre, font=("Arial", 14))
label_timer.pack(pady=25)

bouton = tk.Button(fenetre, text="Afficher le thème", command=afficher_theme, fg="purple", font=("Georgia", 15, "bold"))
bouton.pack(pady=30)

bouton = tk.Button(fenetre, text="Changer la coiffure", command=changer_coiffure, fg ="#C71585", font=("Georgia"))
bouton.pack(pady=4)

bouton = tk.Button(fenetre, text="Changer le haut", command=changer_haut, fg ="#C71585", font=("Georgia"))
bouton.pack(pady=4)

bouton = tk.Button(fenetre, text="Changer le bas", command=changer_bas, fg ="#C71585", font=("Georgia"))
bouton.pack(pady=4)

bouton = tk.Button(fenetre, text="Changer les chaussures", command=changer_chaussures, fg ="#C71585", font=("Georgia"))
bouton.pack(pady=4)

bouton = tk.Button(fenetre, text="Changer l'accessoire", command=changer_accessoire, fg ="#C71585", font=("Georgia"))
bouton.pack(pady=4)

bouton_valider = tk.Button(fenetre, text="Tenue finie !", command=valider_tenue, fg="purple", font=("Georgia", 15, "bold"))
bouton_valider.pack(pady=50)

fenetre.mainloop()
