const BAC_LESSONS = {
  "bac01": {
    "title": "Vider une pile dans une autre",
    "stage": "Passerelle · boucle à compléter",
    "goal": "Comprendre pourquoi une boucle de transfert finit par s’arrêter.",
    "text": "<p>Tu ranges une pile de jetons dans une nouvelle pile. <strong>Un tour = un retrait, puis un ajout.</strong> La pile de départ perd un jeton à chaque tour.</p><ol><li>Sur papier, trace les états de P et Q, en partant de P = [6, 2, 9], Q = []. Le sommet est à droite.</li><li>Lis <code>while not est_vide(P):</code> : « tant que P n’est pas vide ». Le test est refait avant chaque tour. <code>not</code> inverse le booléen : <code>not True</code> vaut <code>False</code>.</li><li>Dans le code, remplace <code>False</code> par cette condition et complète l’empilement.</li><li>Explique pourquoi il y a trois tours ici, et aucun si P est vide.</li></ol><p><strong>Contrat :</strong> P est vidée ; la fonction renvoie une nouvelle pile Q. Observe quel jeton sera dépilé en premier de Q.</p>",
    "starter": "def transvaser(P):\n    Q = creer_pile_vide()\n    while False:  # A remplacer : tant que P n'est pas vide.\n        jeton = depiler(P)\n        ...  # Ajouter ce jeton dans Q.\n    return Q\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nP = [6, 2, 9]  # Bas a gauche, sommet a droite.\nQ = transvaser(P)\nprint(\"P :\", P)\nprint(\"Q :\", Q)\n",
    "expected": "P : []\nQ : [9, 2, 6]",
    "hints": [
      "Teste la structure qui se vide : P, pas Q.",
      "Complète avec while not est_vide(P): puis empiler(Q, jeton).",
      "Après le dernier retrait, P est vide. Le test devient faux ; return doit rester après la boucle."
    ],
    "unit": "P = [6, 2, 9]\nQ = transvaser(P)\nassert Q == [9, 2, 6], f\"Q attendue du bas au sommet : [9, 2, 6] ; obtenue : {Q!r}\"\nassert P == [], f\"La pile P doit être vide ; obtenue : {P!r}\"\nassert Q is not P, \"Q doit être une autre pile.\"",
    "full": "for valeurs in ([], [7], [2, 2, 5], [0, -1, 8, 4]):\n    P = valeurs.copy()\n    Q = transvaser(P)\n    assert Q == valeurs[::-1] and P == [], f\"Transfert incorrect pour {valeurs!r} : P={P!r}, Q={Q!r}\"",
    "mode": "p2p",
    "reference": "Adaptation guidée du sujet zéro 2021, exercice 1, question 1, p. 2.",
    "url": "https://eduscol.education.gouv.fr/sites/default/files/document/s0bac21-tle-spe-nsipdf-68838.pdf"
  },
  "bac02": {
    "title": "D’une file vers une pile",
    "stage": "Passerelle · choisir les opérations",
    "goal": "Associer défiler et empiler dans la même boucle.",
    "text": "<p>Les tickets A, B et C attendent dans cet ordre : A sort en premier. On les déplace dans une pile vide.</p><ol><li>Prévois l’élément retiré à chacun des trois tours, puis le sommet final.</li><li>Le retrait est fourni : complète l’ajout dans la pile.</li><li>Après le transfert, quelle structure est vide ? Quel ticket sortira le premier de P ?</li></ol><p><strong>Contrat :</strong> F est vidée ; P est renvoyée. <code>empiler(P, defiler(F))</code> est une écriture compacte : Python évalue d’abord <code>defiler(F)</code>. Ici, on garde deux lignes pour bien suivre la valeur.</p>",
    "starter": "def file_vers_pile(F):\n    P = creer_pile_vide()\n    while not est_vide(F):\n        ticket = defiler(F)  # Retirer UN ticket de F.\n        ...  # Placer CE ticket au sommet de P.\n    return P\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nF = [\"A\", \"B\", \"C\"]  # Sortie a gauche, entree a droite.\nP = file_vers_pile(F)\nprint(\"F :\", F)\nprint(\"P :\", P)\n",
    "expected": "F : []\nP : ['A', 'B', 'C']",
    "hints": [
      "F est une file : utilise defiler, pas depiler. La destination P est une pile.",
      "Écris ticket = defiler(F), puis empiler(P, ticket).",
      "Le dernier arrivé dans P est C : il sera au sommet. Le transfert ne conserve donc pas le prochain élément à sortir."
    ],
    "unit": "F = [\"A\", \"B\", \"C\"]\nP = file_vers_pile(F)\nassert F == [], f\"F doit être vidée ; obtenue : {F!r}\"\nassert P == [\"A\", \"B\", \"C\"], f\"P attendue du bas au sommet : [A, B, C] ; obtenue : {P!r}\"\nassert depiler(P) == \"C\", \"C doit être le sommet.\"",
    "full": "for valeurs in ([], [1], [3, 1, 3], [0, -1]):\n    F = valeurs.copy()\n    P = file_vers_pile(F)\n    assert P == valeurs and F == [], f\"Résultat incorrect pour {valeurs!r} : F={F!r}, P={P!r}\"\n    assert P is not F, \"La pile doit être une nouvelle structure.\"",
    "mode": "f2p",
    "reference": "Adaptation guidée du bac 2021, 21-NSIJ1AN1, exercice 5, question 1(a), p. 11.",
    "url": "https://eduscol.education.fr/document/33124/download"
  },
  "bac03": {
    "title": "Compter une file, puis la restaurer",
    "stage": "Type bac · deux boucles guidées",
    "goal": "Renvoyer un effectif sans changer l’ordre des visiteurs.",
    "text": "<p>Le responsable veut connaître le nombre de visiteurs, sans les perdre ni changer leur ordre. Utilise une file temporaire G.</p><ol><li>Complète le transfert F → G : on compte chaque visiteur retiré.</li><li>Complète le transfert G → F pour remettre tous les visiteurs.</li><li>Teste les deux propriétés séparément : le nombre renvoyé est-il juste ? F est-elle exactement comme avant ?</li></ol><p><strong>Contrat :</strong> renvoyer un entier ; F doit être restaurée. Tu ne peux pas utiliser <code>len(F)</code> dans la fonction à écrire. <code>n = n + 1</code> ajoute 1 au compteur ; cela ne change pas la file.</p>",
    "starter": "def compter_file(F):\n    G = creer_file_vide()\n    n = 0\n    while not est_vide(F):\n        visiteur = defiler(F)\n        enfiler(G, visiteur)\n        ...  # Augmenter n de 1.\n    while False:  # Quelle file reste a vider ?\n        visiteur = ...\n        enfiler(F, visiteur)\n    return n\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nF = [\"Lina\", \"Noe\", \"Zoe\"]\nprint(\"Nombre :\", compter_file(F))\nprint(\"F apres :\", F)\n",
    "expected": "Nombre : 3\nF apres : ['Lina', 'Noe', 'Zoe']",
    "hints": [
      "Il y a deux phases distinctes : compter en déplaçant, puis remettre. Ne renvoie pas n avant la restauration.",
      "Dans la première boucle, ajoute n = n + 1. Dans la seconde, teste not est_vide(G).",
      "Pour restaurer : visiteur = defiler(G), puis enfiler(F, visiteur). Une file temporaire conserve l’ordre."
    ],
    "unit": "F = [\"Lina\", \"Noe\", \"Zoe\"]\nr = compter_file(F)\nassert r == 3, f\"Effectif attendu : 3 ; obtenu : {r!r}\"\nassert F == [\"Lina\", \"Noe\", \"Zoe\"], f\"Même ordre attendu après le comptage ; F obtenue : {F!r}\"",
    "full": "for valeurs in ([], [4], [2, 2, 1], [9, 0, 7, 6]):\n    F = valeurs.copy()\n    for essai in range(2):\n        r = compter_file(F)\n        assert r == len(valeurs) and F == valeurs, f\"Après comptage de {valeurs!r}, nombre={r!r}, F={F!r}. La fonction doit pouvoir être rappelée.\"",
    "mode": "fsize",
    "reference": "Adaptation du bac 2021, 21-NSIJ1AN1, exercice 5, question 1(b), p. 12.",
    "url": "https://eduscol.education.fr/document/33124/download"
  },
  "bac04": {
    "title": "Mesurer une pile sans la déranger",
    "stage": "Type bac · retrouver les deux phases",
    "goal": "Comprendre le rôle d’une pile temporaire pour restaurer l’ordre.",
    "text": "<p>Tu dois compter les jetons d’une pile sans pouvoir regarder sa longueur. Une pile temporaire T permet de les ranger pendant le comptage.</p><ol><li>Prévois l’ordre dans T après le premier transfert.</li><li>Complète les deux retraits/ajouts du squelette.</li><li>Explique pourquoi un deuxième transfert remet P dans son état initial.</li></ol><p><strong>Contrat :</strong> renvoyer le nombre de jetons et conserver P, y compris son sommet. La première boucle inverse l’ordre dans T ; la deuxième le rétablit. Écrire <code>P = T</code> ne restaure pas la pile passée par l’appelant.</p>",
    "starter": "def hauteur(P):\n    T = creer_pile_vide()\n    n = 0\n    while not est_vide(P):\n        jeton = depiler(P)\n        ...  # Sauvegarder le jeton dans T.\n        n = n + 1\n    while not est_vide(T):\n        jeton = ...  # Retirer de T.\n        ...  # Replacer dans P.\n    return n\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nP = [8, 3, 7]  # Sommet : 7.\nprint(\"Hauteur :\", hauteur(P))\nprint(\"P apres :\", P)\n",
    "expected": "Hauteur : 3\nP apres : [8, 3, 7]",
    "hints": [
      "Le jeton retiré doit être conservé quelque part : empile-le dans T.",
      "La restauration doit retirer de T et ajouter dans P, jusqu’à ce que T soit vide.",
      "Utilise empiler(T, jeton), puis jeton = depiler(T) et empiler(P, jeton) dans la seconde phase."
    ],
    "unit": "P = [8, 3, 7]\nr = hauteur(P)\nassert r == 3, f\"Hauteur attendue : 3 ; obtenue : {r!r}\"\nassert P == [8, 3, 7], f\"P doit retrouver son ordre et son sommet ; obtenue : {P!r}\"",
    "full": "for valeurs in ([], [5], [4, 4, 1], [2, 9, 0, -3]):\n    P = valeurs.copy()\n    assert hauteur(P) == len(valeurs), f\"Comptage incorrect pour {valeurs!r}\"\n    assert P == valeurs, f\"Pile non restaurée : {P!r}\"\n    assert hauteur(P) == len(valeurs) and P == valeurs, \"Un deuxième appel doit aussi préserver P.\"",
    "mode": "psize",
    "reference": "Adaptation du sujet zéro 2021, exercice 1, question 2.1, p. 3.",
    "url": "https://eduscol.education.gouv.fr/sites/default/files/document/s0bac21-tle-spe-nsipdf-68838.pdf"
  },
  "bac05": {
    "title": "Compter en faisant un tour complet",
    "stage": "Type bac · choisir for plutôt que while",
    "goal": "Parcourir une file sans la vider et sans boucle infinie.",
    "text": "<p>Dans F = [\"A\", \"B\", \"A\", \"C\"], combien de fois apparaît « A » ? Il faut compter tout en gardant F identique.</p><p>Une solution consiste à retirer un élément, l’examiner, puis le remettre à la fin, <strong>exactement n fois</strong>. <code>taille_file_fournie(F)</code> donne n sans modifier F. Cette fonction est fournie : tu n’as pas à la réécrire.</p><ol><li>Trace F après 1, 2, 3 et 4 rotations.</li><li>Remplace <code>range(0)</code> par le bon nombre de tours. Complète le compteur et la remise en file.</li><li>Explique pourquoi on ne doit pas s’arrêter dès la première correspondance.</li></ol><div class=\"notice\"><strong>Le piège :</strong> <code>while not est_vide(F)</code> ne s’arrêterait pas ici pour une file non vide : chaque retrait est suivi d’un ajout dans cette même file. Sa taille reste constante !</div><p><strong>Contrat :</strong> renvoyer le nombre d’occurrences ; F reste dans le même ordre. Il faut mémoriser n avant la boucle.</p>",
    "starter": "def occurrences(F, cherche):\n    n = taille_file_fournie(F)\n    total = 0\n    for tour in range(0):  # Remplacer 0 : combien de tours ?\n        valeur = defiler(F)\n        if valeur == cherche:\n            ...  # Une occurrence de plus.\n        ...  # Remettre TOUTE valeur, meme si elle ne correspond pas.\n    return total\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\ndef taille_file_fournie(F):\n    # Outil fourni pour compter sans perdre les visiteurs.\n    G = creer_file_vide()\n    n = 0\n    while not est_vide(F):\n        enfiler(G, defiler(F))\n        n = n + 1\n    while not est_vide(G):\n        enfiler(F, defiler(G))\n    return n\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nF = [\"A\", \"B\", \"A\", \"C\"]\nprint(\"Nombre de A :\", occurrences(F, \"A\"))\nprint(\"F apres :\", F)\n",
    "expected": "Nombre de A : 2\nF apres : ['A', 'B', 'A', 'C']",
    "hints": [
      "range(n) répète n fois : un tour par élément présent au départ. La variable tour n’est pas nécessaire au traitement.",
      "Ajoute total = total + 1 dans le if. La remise dans F doit être en dehors du if.",
      "Écris enfiler(F, valeur) à chaque tour. Au bout de n rotations, chaque valeur a été examinée et l’ordre initial est rétabli."
    ],
    "unit": "F = [\"A\", \"B\", \"A\", \"C\"]\nr = occurrences(F, \"A\")\nassert r == 2, f\"Deux A attendus ; résultat obtenu : {r!r}\"\nassert F == [\"A\", \"B\", \"A\", \"C\"], f\"F doit être intacte ; obtenue : {F!r}\"",
    "full": "for valeurs, cherche in [([], \"A\"), ([\"A\"], \"A\"), ([\"B\"], \"A\"), ([\"A\", \"A\", \"A\"], \"A\"), ([\"B\", \"C\", \"A\"], \"A\"), ([1, 2, 1], 1)]:\n    F = valeurs.copy()\n    r = occurrences(F, cherche)\n    assert r == valeurs.count(cherche), f\"Occurrences incorrectes pour {valeurs!r}, valeur {cherche!r} : {r!r}\"\n    assert F == valeurs, f\"Rotation incomplète ou élément perdu : {F!r} au lieu de {valeurs!r}\"",
    "mode": "rotate",
    "reference": "Adaptation du bac 2021, 21-NSIJ1AN1, exercice 5, question 3, p. 12. La méthode par rotations est guidée ici.",
    "url": "https://eduscol.education.fr/document/33124/download"
  },
  "bac06": {
    "title": "Garder le premier au sommet",
    "stage": "Type bac · écrire les boucles",
    "goal": "Choisir une structure temporaire en raisonnant sur l’ordre de sortie.",
    "text": "<p>Des dossiers attendent dans F = [\"A\", \"B\", \"C\"]. Tu veux les ranger dans une pile P, mais <strong>A doit rester le prochain dossier accessible</strong> : il faut donc le retrouver au sommet de P.</p><ol><li>Explique pourquoi le transfert direct de l’étape 2 ne convient pas.</li><li>Propose sur papier deux transferts utilisant une pile temporaire T.</li><li>Écris les deux boucles dans la fonction. Décompose chaque transfert en deux instructions si cela t’aide.</li></ol><p><strong>Contrat de cette adaptation :</strong> F est vidée, P est une nouvelle pile renvoyée. P doit contenir les mêmes dossiers, avec A au sommet. Cet exercice demande plus d’autonomie ; les indices restent disponibles.</p>",
    "starter": "def premier_au_sommet(F):\n    T = creer_pile_vide()\n    P = creer_pile_vide()\n    # Phase 1 : vider F dans T.\n    ...\n    # Phase 2 : vider T dans P.\n    ...\n    return P\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nF = [\"A\", \"B\", \"C\"]\nP = premier_au_sommet(F)\nprint(\"F :\", F)\nprint(\"P (bas vers sommet) :\", P)\n",
    "expected": "F : []\nP (bas vers sommet) : ['C', 'B', 'A']",
    "hints": [
      "F → T place C au sommet de T. Un transfert supplémentaire T → P peut remettre A au sommet.",
      "Phase 1 : while not est_vide(F), retirer avec defiler et ajouter avec empiler dans T.",
      "Phase 2 : while not est_vide(T), retirer avec depiler et empiler dans P. Renvoie P seulement après les deux boucles."
    ],
    "unit": "F = [\"A\", \"B\", \"C\"]\nP = premier_au_sommet(F)\nassert P == [\"C\", \"B\", \"A\"], f\"Pile attendue du bas au sommet : [C, B, A] ; obtenue : {P!r}\"\nassert F == [], \"La file doit être vidée dans cette adaptation.\"\nassert depiler(P) == \"A\", \"Le premier dossier de la file doit être le sommet de P.\"",
    "full": "for valeurs in ([], [7], [1, 2, 1, 3], [8, 0, -4]):\n    F = valeurs.copy()\n    P = premier_au_sommet(F)\n    assert P == valeurs[::-1] and F == [], f\"Ordre incorrect pour {valeurs!r} : P={P!r}, F={F!r}\"\n    assert P is not F, \"P doit être une nouvelle structure.\"",
    "mode": "former",
    "reference": "Adaptation du bac 2021, 21-NSIJ1AN1, exercice 5, question 2, p. 12.",
    "url": "https://eduscol.education.fr/document/33124/download"
  },
  "bac07": {
    "title": "Inverser une file avec une pile",
    "stage": "Synthèse facultative · réinvestir",
    "goal": "Enchaîner défiler, empiler, dépiler et enfiler.",
    "text": "<p>Cette fois, on veut inverser la file elle-même : [\"A\", \"B\", \"C\"] doit devenir [\"C\", \"B\", \"A\"]. Une pile temporaire suffit.</p><ol><li>Dessine les deux phases : F → P, puis P → F.</li><li>Écris la fonction en utilisant seulement les opérations fournies.</li><li>Vérifie qu’aucun élément n’a été perdu. Que se passe-t-il si on appelle la fonction deux fois ?</li></ol><p><strong>Contrat :</strong> modifier F sur place ; ne rien renvoyer. Pas de <code>reverse</code>, de découpage <code>[::-1]</code> ou d’accès direct aux cases. C’est une synthèse originale pour réutiliser les transferts travaillés dans les annales, et non une question reproduite du bac.</p>",
    "starter": "def inverser_file(F):\n    P = creer_pile_vide()\n    # A toi : deux boucles, quatre operations de transfert.\n    ...\n\n# === Fonctions fournies : ne pas modifier ===\ndef creer_pile_vide():\n    return []\n\ndef creer_file_vide():\n    return []\n\ndef est_vide(structure):\n    return len(structure) == 0\n\ndef empiler(pile, valeur):\n    pile.append(valeur)\n\ndef depiler(pile):\n    return pile.pop()  # Precondition : pile non vide.\n\ndef enfiler(file, valeur):\n    file.append(valeur)\n\ndef defiler(file):\n    return file.pop(0)  # Precondition : file non vide.\n# === Fin des fonctions fournies ===\n\n# === Mes essais ===\nF = [\"A\", \"B\", \"C\"]\ninverser_file(F)\nprint(\"F inversee :\", F)\n",
    "expected": "F inversee : ['C', 'B', 'A']",
    "hints": [
      "D’abord, vide la file dans la pile. Quelle valeur sera au sommet ?",
      "Ensuite, vide la pile dans la file. Le dernier entré dans P sera le premier réenfilé dans F.",
      "Phase 1 : defiler(F) puis empiler(P, valeur). Phase 2 : depiler(P) puis enfiler(F, valeur). Chacune a sa propre condition while."
    ],
    "unit": "F = [\"A\", \"B\", \"C\"]\nr = inverser_file(F)\nassert F == [\"C\", \"B\", \"A\"], f\"File attendue : [C, B, A] ; obtenue : {F!r}\"\nassert r is None, \"La fonction modifie F et ne renvoie rien.\"",
    "full": "for valeurs in ([], [9], [1, 1, 2], [4, 0, -7, 2]):\n    F = valeurs.copy()\n    inverser_file(F)\n    assert F == valeurs[::-1], f\"Inversion incorrecte pour {valeurs!r} : {F!r}\"\n    inverser_file(F)\n    assert F == valeurs, \"Deux inversions doivent retrouver l’ordre initial.\"",
    "mode": "invert",
    "reference": "Création pédagogique de synthèse ; prolonge les transferts du bac 2021, exercice 5. Pas un énoncé officiel.",
    "url": "https://eduscol.education.fr/document/33124/download"
  }
};
