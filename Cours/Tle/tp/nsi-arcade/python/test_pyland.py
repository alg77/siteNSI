"""Placer à côté de pyland.py puis lancer : python test_pyland.py.
Les tests échouent tant que les missions correspondantes restent à compléter.
"""
from pyland import (creer_visiteur, ajouter_visiteur, retirer_visiteur,
                embarquer, mettre_a_jour, statistiques)


def egal(obtenu, attendu):
    assert obtenu == attendu, f"obtenu {obtenu!r}, attendu {attendu!r}"

def est_none(valeur):
    assert valeur is None

def distinct(a, b):
    assert a is not b

def identique(a, b):
    assert a is b

def test_1_visiteur():
    a = creer_visiteur("A", 0)
    b = creer_visiteur("B", 2, 90)
    egal(a, {"nom": "A", "arrivee": 0, "satisfaction": 75})
    egal(b["satisfaction"], 90)
    distinct(a, b)

def test_2_fifo_et_vide():
    file = []
    est_none(retirer_visiteur(file))
    a, b = {"nom": "A"}, {"nom": "B"}
    ajouter_visiteur(file, a)
    ajouter_visiteur(file, b)
    identique(retirer_visiteur(file), a)
    egal(file, [b])

def test_3_embarquement():
    egal(embarquer([], 2, 4), [])
    a = {"nom": "A", "arrivee": 0}
    b = {"nom": "B", "arrivee": 2}
    file = [a, b]
    egal(embarquer(file, 1, 6), [a])
    egal(a["attente"], 6)
    egal(file, [b])
    egal(embarquer(file, 4, 6), [b])
    egal(b["attente"], 4)
    egal(file, [])

def test_4_bornes():
    file = [{"satisfaction": 3}, {"satisfaction": 75}]
    passagers = [{"satisfaction": 95}, {"satisfaction": 50}]
    mettre_a_jour(file, passagers)
    egal([v["satisfaction"] for v in file], [0, 70])
    egal([v["satisfaction"] for v in passagers], [100, 60])

def test_5_echantillon():
    egal(statistiques([]), (0, None, None))
    sorties = [{"attente": i, "satisfaction": 80} for i in range(21)]
    egal(statistiques(sorties), (20, 9.5, 80))
    egal(len(sorties), 21)


if __name__ == "__main__":
    for test in [test_1_visiteur, test_2_fifo_et_vide, test_3_embarquement,
                 test_4_bornes, test_5_echantillon]:
        try:
            test()
            print("OK", test.__name__)
        except (AssertionError, NotImplementedError, TypeError, KeyError) as erreur:
            print("À revoir", test.__name__, ":", erreur)
