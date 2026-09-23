"""NSI Arcade — Snake. Python 3 + tkinter (habituellement fourni avec Python).
Exécuter localement : python snake.py. Aucune installation pip nécessaire.
Les coordonnées sont (ligne, colonne). Queue au début, tête à la fin.
L'interface est fournie ; les fonctions algorithmiques restent à compléter.
"""
import random
import tkinter as tk

TAILLE = 12
CASE = 30
DELAI = 180


def nouvelle_tete(serpent, direction):
    # direction est un tuple (delta_ligne, delta_colonne).
    # TODO : à compléter — renvoyer un tuple, sans modifier serpent.
    raise NotImplementedError("Mission 2 : calculer la nouvelle tête")


def deplacer(serpent, tete, grandit):
    # TODO : à compléter — modifier serpent, conserver la queue si grandit.
    raise NotImplementedError("Mission 3 : déplacement et croissance")


def placer_pomme(serpent):
    # TODO : à compléter — choisir une case libre avec random.choice.
    # Renvoyer None si la grille est entièrement occupée.
    raise NotImplementedError("Mission 4 : placer une pomme")


def collision(serpent, tete, grandit):
    # TODO : à compléter — booléen : mur ou corps du serpent ?
    # Si le serpent ne grandit pas, sa queue va libérer sa case.
    raise NotImplementedError("Mission 5 : détecter les collisions")


# ---------- Interface fournie : aucune modification nécessaire ----------
class Jeu:
    def __init__(self, fenetre):
        self.fenetre = fenetre
        fenetre.title("NSI Arcade — Snake")
        self.canvas = tk.Canvas(fenetre, width=TAILLE * CASE,
                                height=TAILLE * CASE, bg="#edf3fa")
        self.canvas.pack(padx=12, pady=12)
        self.message = tk.StringVar()
        tk.Label(fenetre, textvariable=self.message, wraplength=360).pack()
        tk.Button(fenetre, text="Démarrer / reprendre", command=self.demarrer).pack()
        tk.Button(fenetre, text="Pause", command=self.pause).pack()
        tk.Button(fenetre, text="Recommencer", command=self.reinitialiser).pack()
        for touche, direction in {"Up": (-1, 0), "Right": (0, 1),
                                  "Down": (1, 0), "Left": (0, -1)}.items():
            fenetre.bind(f"<{touche}>", lambda e, d=direction: self.orienter(d))
        self.tache = None
        self.reinitialiser()

    def pause(self):
        if self.tache is not None:
            self.fenetre.after_cancel(self.tache)
            self.tache = None

    def reinitialiser(self):
        self.pause()
        self.serpent = [(5, 3), (5, 4), (5, 5), (5, 6)]
        self.direction = (0, 1)
        self.prochaine_direction = self.direction
        self.pomme = (5, 8)  # Première pomme fournie pour tester le mouvement.
        self.termine = False
        self.message.set("Flèches : direction. Complète les TODO puis démarre.")
        self.dessiner()

    def orienter(self, direction):
        if direction != (-self.direction[0], -self.direction[1]):
            self.prochaine_direction = direction

    def demarrer(self):
        if self.tache is None and not self.termine:
            self.tick()

    def tick(self):
        self.tache = None
        try:
            self.direction = self.prochaine_direction
            tete = nouvelle_tete(self.serpent, self.direction)
            grandit = tete == self.pomme
            if collision(self.serpent, tete, grandit):
                self.termine = True
                self.message.set("Collision ! Recommence pour tester un autre cas.")
                return
            deplacer(self.serpent, tete, grandit)
            if grandit:
                self.pomme = placer_pomme(self.serpent)
            self.dessiner()
            if self.pomme is None:
                self.termine = True
                self.message.set("Grille remplie !")
                return
            self.message.set(f"Longueur : {len(self.serpent)} — flèches pour tourner")
        except NotImplementedError as erreur:
            self.message.set(str(erreur))
            return
        except Exception as erreur:
            self.message.set(f"À déboguer : {type(erreur).__name__} : {erreur}")
            return
        self.tache = self.fenetre.after(DELAI, self.tick)

    def dessiner(self):
        self.canvas.delete("all")
        for i in range(TAILLE + 1):
            self.canvas.create_line(i * CASE, 0, i * CASE, TAILLE * CASE, fill="#cdd8e5")
            self.canvas.create_line(0, i * CASE, TAILLE * CASE, i * CASE, fill="#cdd8e5")
        for index, (ligne, colonne) in enumerate(self.serpent):
            couleur = "#155e50" if index == len(self.serpent) - 1 else "#80bea5"
            self.canvas.create_rectangle(colonne * CASE + 2, ligne * CASE + 2,
                                         (colonne + 1) * CASE - 2, (ligne + 1) * CASE - 2,
                                         fill=couleur, outline="")
        if self.pomme is not None:
            ligne, colonne = self.pomme
            self.canvas.create_oval(colonne * CASE + 5, ligne * CASE + 5,
                                    (colonne + 1) * CASE - 5, (ligne + 1) * CASE - 5,
                                    fill="#cf4444", outline="")


if __name__ == "__main__":
    racine = tk.Tk()
    Jeu(racine)
    racine.mainloop()
