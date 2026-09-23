"""TP2 — NSI Arcade / PyLand. Python 3, sans classes ni bibliothèque externe.
Compléter les cinq missions. Les tests sont fournis dans test_pyland.py.
Une liste représente la file : sortie à gauche, entrée à droite.
"""


def creer_visiteur(nom, arrivee, satisfaction=75):
    # Mission 1 : renvoyer un dictionnaire indépendant pour chaque visiteur.
    # Clés : nom, arrivee (minutes), satisfaction (entre 0 et 100).
    raise NotImplementedError("Mission 1 : dictionnaire visiteur")


def ajouter_visiteur(file, visiteur):
    # Mission 2 : ajouter à la fin, sans renvoyer de valeur.
    raise NotImplementedError("Mission 2 : enfiler")


def retirer_visiteur(file):
    # Mission 2 : retirer ET renvoyer le plus ancien ; None si file vide.
    raise NotImplementedError("Mission 2 : défiler")


def embarquer(file, capacite, heure):
    # Mission 3 : retirer au plus capacite visiteurs dans l'ordre FIFO.
    # Capacite est un entier >= 1 ; heure >= toutes les heures d'arrivée.
    # Pour chacun, ajouter attente = heure - arrivee.
    # Renvoyer la liste des visiteurs embarqués (même vide).
    raise NotImplementedError("Mission 3 : embarquer")


def mettre_a_jour(file, passagers):
    # Mission 4 : file perd 5 points ; passagers gagnent 10 points.
    # Borner chaque satisfaction entre 0 et 100. Modifier les dictionnaires.
    raise NotImplementedError("Mission 4 : satisfaction")


def statistiques(sortis):
    # Mission 5 : travailler seulement sur les 20 premiers sortis.
    # Renvoyer (effectif, attente_moyenne, satisfaction_moyenne).
    # Si personne n'est sorti : renvoyer (0, None, None).
    raise NotImplementedError("Mission 5 : moyennes")


def simuler(capacite=2, tours=15):
    """Orchestration fournie : compare 2 et 4 avec les mêmes arrivées.
    Chaque tour : départ -> arrivées -> attente/attraction -> retour.
    L'attente exclut les 2 minutes dans l'attraction.
    """
    file = [creer_visiteur(f"V{i}", 0) for i in range(1, 5)]
    sortis = []
    heure = 0
    prochain = 5
    for tour in range(tours):
        passagers = embarquer(file, capacite, heure)
        for _ in range([3, 1, 5, 2, 4][tour % 5]):
            visiteur = creer_visiteur(
                f"V{prochain}", heure, 50 + (prochain * 17) % 51
            )
            ajouter_visiteur(file, visiteur)
            prochain += 1
        mettre_a_jour(file, passagers)
        heure += 2
        sortis.extend(passagers)
        print(f"t={heure} min ; file={len(file)} ; sortis={len(sortis)}")
        print(statistiques(sortis))
    return file, sortis


if __name__ == "__main__":
    try:
        simuler()
    except NotImplementedError as erreur:
        print(erreur)
        print("Complète cette mission puis relance. Lance aussi test_pyland.py.")
