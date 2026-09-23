"""NSI Arcade — Escape. Python 3. Coordonnées = (ligne, colonne)."""
LABYRINTHE = [
    "###########",
    "#S..#.....#",
    "#.#.#.###.#",
    "#.#...#...#",
    "#.#####.#E#",
    "#.........#",
    "###########",
]
DEPART = (1, 1)
SORTIE = (4, 9)


def voisins(case, labyrinthe):
    # TODO : à compléter — haut, gauche, bas, droite (dans cet ordre).
    # Vérifier les bornes AVANT de lire la matrice. Exclure les murs.
    raise NotImplementedError("Étape 1 : voisins accessibles")


def explorer(labyrinthe, depart, sortie, mode):
    """mode = 'pile' ou 'file'. Renvoie (ordre_exploration, predecesseurs).
    Le dictionnaire des prédécesseurs est utile à l'étape 5 seulement.
    """
    a_explorer = [depart]
    decouvertes = {depart}
    ordre = []
    predecesseurs = {depart: None}
    # TODO : à compléter — tant qu'il reste une case à explorer :
    # - choisir et retirer une case selon mode ;
    # - la noter dans ordre, arrêter si c'est la sortie ;
    # - ajouter les voisins encore inconnus, les marquer dès l'ajout.
    # Étape 5 : mémoriser qui a permis de découvrir chaque voisin.
    raise NotImplementedError("Étapes 2 et 3 : explorer")


def reconstruire(predecesseurs, sortie):
    # TODO : à compléter — remonter vers le départ puis inverser.
    # Si la sortie n'a pas été découverte, renvoyer une liste vide.
    raise NotImplementedError("Étape 5 : reconstruire le chemin")


def afficher(labyrinthe, cases=()):
    for ligne, texte in enumerate(labyrinthe):
        print("".join("*" if (ligne, colonne) in cases and caractere == "."
                      else caractere for colonne, caractere in enumerate(texte)))


if __name__ == "__main__":
    afficher(LABYRINTHE)
    try:
        ordre, parents = explorer(LABYRINTHE, DEPART, SORTIE, "pile")
        print("Ordre :", ordre)
        afficher(LABYRINTHE, ordre)
    except NotImplementedError as erreur:
        print(erreur)
