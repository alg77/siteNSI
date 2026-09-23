"""NSI Arcade — Hanoï. Fin de liste = sommet. Python 3."""
A = [5, 4, 3, 2, 1]
B = []
C = []


def deplacer(depart, arrivee):
    """Déplace un seul disque. Renvoie True si réussi, False sinon.
    Ne jamais modifier les piles lors d'un déplacement interdit.
    """
    # TODO : à compléter — départ vide ? même tour ? ordre des disques ?
    raise NotImplementedError("Mission 2 : déplacer un disque")


def hanoi(n, depart, intermediaire, arrivee):
    # TODO : à compléter — cas de base puis trois étapes récursives.
    # Utiliser deplacer et observer les piles après chaque déplacement.
    raise NotImplementedError("Mission 4 : stratégie récursive")


if __name__ == "__main__":
    # Commencer par trois disques avant le défi à cinq.
    A = [3, 2, 1]
    print("État initial :", A, B, C)
    print("Mission 3 : appelle deplacer(A, C), etc. dans la console.")
    # Décommenter après avoir complété la mission 4 :
    # hanoi(3, A, B, C)
    # print("État final :", A, B, C)
