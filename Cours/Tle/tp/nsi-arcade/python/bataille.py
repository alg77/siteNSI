"""NSI Arcade — Bataille. Python 3, bibliothèque standard uniquement.
Lancer dans son IDE. Compléter les TODO mission par mission.
Convention : début de liste = prochain élément à sortir.
"""
from random import shuffle


def creer_paquet():
    # Mission 1. Carte = (valeur, couleur) ; valeurs de 2 à 14 (As).
    # TODO : à compléter — construire les 52 tuples.
    raise NotImplementedError("Mission 1 : créer le paquet")


def distribuer(paquet):
    # TODO : à compléter — mélanger puis renvoyer deux listes de 26 cartes.
    raise NotImplementedError("Mission 1 : distribuer")


def enfiler(file, element):
    # TODO : à compléter — ajouter sans changer l'ordre des autres cartes.
    raise NotImplementedError("Mission 2 : enfiler")


def defiler(file):
    # TODO : à compléter — retirer ET renvoyer la prochaine carte.
    # Lever ValueError si la file est vide.
    raise NotImplementedError("Mission 2 : défiler")


def est_vide(file):
    # TODO : à compléter
    raise NotImplementedError("Mission 2 : tester le vide")


def nom_carte(carte):
    valeur, couleur = carte
    noms = {11: "Valet", 12: "Dame", 13: "Roi", 14: "As"}
    return f"{noms.get(valeur, valeur)} {couleur}"


def jouer_tour(alice, bob, enjeu):
    """Modifie les trois listes. Renvoie 'Alice', 'Bob', 'nul' ou None.
    Un tour = une comparaison de deux cartes visibles.
    Enjeu conserve les cartes des égalités successives.
    """
    # Mission 3 : défiler une carte chacun, comparer les valeurs,
    # afficher les cartes, puis enfiler l'enjeu chez le gagnant.
    # Mission 4 : égalité -> une carte cachée chacun, puis prochain tour.
    # S'il manque des cartes pour continuer : le joueur qui en a le plus
    # gagne l'enjeu et la partie ; même nombre -> match nul.
    # TODO : à compléter
    raise NotImplementedError("Missions 3 et 4 : jouer un tour")


def partie(limite=10000):
    alice, bob = distribuer(creer_paquet())
    enjeu = []
    tours = 0
    # Mission 5 : répéter les tours tant que les deux files sont non vides,
    # qu'aucun résultat terminal n'est annoncé et que tours < limite.
    # Afficher le compteur et les tailles des files à chaque tour.
    # À la limite : annoncer 'partie interrompue', jamais un faux gagnant.
    # TODO : à compléter
    raise NotImplementedError("Mission 5 : boucle de partie")


if __name__ == "__main__":
    try:
        partie()
    except NotImplementedError as erreur:
        print(erreur)
        print("Complète cette mission puis relance le programme.")
