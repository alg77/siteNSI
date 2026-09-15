# ============================================================
# Exercice 1 (Partie 1) — binaire
# ============================================================

def binaire(a):
    """Convertit un nombre entier a en sa représentation binaire (chaîne de caractères)."""
    if a == 0:
        return '0'
    bin_a = ''
    while a > 0 :
        bin_a = str(a%2) + bin_a
        a = a//2
    return bin_a



# ============================================================
# Exercice 2 (Partie 1) — distances
# ============================================================

def distance_carre(point1, point2):
    """ Calcule et renvoie la distance au carré entre deux points."""
    return (...)**2 + (...)**2

def point_le_plus_proche(depart, tab):
    """ Renvoie les coordonnées du premier point du tableau tab se trouvant à
    la plus courte distance du point depart."""
    min_point = tab[0]
    min_dist = ...
    for i in range(1, len(tab)):
        if distance_carre(tab[i], depart) < ...:
            min_point = ...
            min_dist = ...
    return min_point



# ============================================================
# Exercice 3 (Partie 1) — listes (points de rupture)
# ============================================================

def est_un_ordre(tab):
    ''' Renvoie True si tab est de longueur n et contient tous les entiers de 1
    à n, False sinon '''
    n = len(tab)
    vus = ...
    for x in tab:
        if x < ... or x > ... or ... :
            return False
        ....append(...)
    return True

def nombre_points_rupture(ordre):
    ''' Renvoie le nombre de points de rupture de ordre qui représente un ordre
    de gènes de chromosome '''
    assert ...
    n = len(ordre)
    nb = 0
    if ordre[...] != 1:
        nb = nb + 1
    i = 0
    while i < ... :
        if ... not in [-1, 1]:
            nb = nb + 1
        i = i + 1
    if ordre[i] != ... :
        nb = nb + 1
    return nb



# ============================================================
# Exercice 4 (Partie 1) — dictionnaires (plan d'envoi)
# ============================================================

def est_cyclique(plan):
    '''Renvoie True si le plan d'envoi de messages est cyclique et False sinon.'''
    expediteur = 'A'
    destinataire = plan[expediteur]
    nb_destinataires = 1
    while destinataire != expediteur:
        destinataire = ...
        nb_destinataires = ...
    return nb_destinataires == ...



# ============================================================
# Exercice 1 (Partie 2) — listes (max)
# ============================================================

def maximum_tableau(tab):
    """
    Renvoie le plus grand élément du tableau non vide tab.
    """
    # à écrire



# ============================================================
# Exercice 2 (Partie 2) — listes (recherche)
# ============================================================

def recherche(tab, n):
    """
    Renvoie l'indice de la dernière occurrence de n dans tab, ou None.
    """
    # à écrire



# ============================================================
# Exercice 3 (Partie 2) — listes (max et indice)
# ============================================================

def max_et_indice(tab):
    """
    Renvoie (valeur_max, indice_premiere_apparition).
    """
    # à écrire



# ============================================================
# Exercice 4 (Partie 2) — listes (tri)
# ============================================================

def verifie(tab):
    """
    Renvoie True si tab est trié en ordre croissant large, False sinon.
    """
    # à écrire



# ============================================================
# Exercice 5 (Partie 2) — listes (moyenne)
# ============================================================

def moyenne(tab):
    """
    Renvoie la moyenne des valeurs du tableau non vide tab.
    """
    # à écrire



# ============================================================
# Exercice 6 (Partie 2) — chaînes de caractères
# ============================================================

def correspond(mot, mot_a_trous):
    """
    Renvoie True si mot correspond au mot à trous mot_a_trous, False sinon.
    """
    # à écrire
