/* ============================================================
   NSI BAC — questions.js — Banque de questions QCM
   Chaque chapitre contient 50 questions minimum.
   Structure : { q, opts: [A,B,C,D], ans: index(0-based), exp }
   ============================================================ */

const QUESTIONS = {

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 1 : Structures de données (Listes, Piles, Files, Dico)
     ═══════════════════════════════════════════════════════════ */
  structures: [
    { q: "Quelle est la complexité temporelle de l'accès à un élément par indice dans une liste Python ?", opts:["O(1)","O(n)","O(log n)","O(n²)"], ans:0, exp:"L'accès par indice dans une liste Python est O(1) car chaque élément est accessible directement en mémoire." },
    { q: "Une pile suit le principe :", opts:["FIFO (Premier entré, premier sorti)","LIFO (Dernier entré, premier sorti)","Accès aléatoire","Tri automatique"], ans:1, exp:"Une pile (stack) fonctionne en LIFO : le dernier élément empilé est le premier à être dépilé." },
    { q: "Une file suit le principe :", opts:["LIFO","FIFO","Accès indexé","Aucun de ces principes"], ans:1, exp:"Une file (queue) fonctionne en FIFO : le premier élément entré est le premier sorti." },
    { q: "Quelle opération retire le sommet d'une pile ?", opts:["push","enqueue","pop","peek"], ans:2, exp:"pop() retire et renvoie l'élément au sommet de la pile." },
    { q: "Dans une implémentation de pile avec une liste Python, le sommet correspond à :", opts:["l'indice 0","l'indice -1 (dernier élément)","l'indice du milieu","un indice quelconque"], ans:1, exp:"On utilise le dernier élément (pile[-1]) comme sommet : push=append() et pop=pop() sont en O(1)." },
    { q: "Quelle est la différence principale entre une liste et un dictionnaire ?", opts:["Une liste est ordonnée, un dictionnaire ne l'est pas toujours","Les listes utilisent des indices entiers, les dictionnaires utilisent des clés arbitraires","Les dictionnaires sont plus lents","Les listes peuvent stocker des types mixtes, pas les dictionnaires"], ans:1, exp:"Différence fondamentale : liste[indice entier] vs dictionnaire[clé], où la clé peut être n'importe quel objet hashable." },
    { q: "La complexité de la recherche d'une clé dans un dictionnaire Python est en moyenne :", opts:["O(n)","O(log n)","O(1)","O(n log n)"], ans:2, exp:"Les dictionnaires utilisent une table de hachage. La recherche est O(1) en moyenne." },
    { q: "Que renvoie d.get('cle', 0) si 'cle' n'est pas dans le dictionnaire d ?", opts:["None","KeyError","0","False"], ans:2, exp:"get(clé, valeur_par_défaut) renvoie la valeur par défaut si la clé est absente, sans lever d'exception." },
    { q: "Laquelle de ces structures est adaptée pour gérer des appels de fonctions récursifs ?", opts:["File","Pile","Dictionnaire","Liste doublement chaînée"], ans:1, exp:"La pile d'appels utilise naturellement la structure pile : chaque appel empile un cadre, chaque retour dépile." },
    { q: "Pour implémenter une file efficacement en Python, on préfère :", opts:["Une liste avec insert(0,x) pour enfiler","collections.deque","Un dictionnaire","Un tableau numpy"], ans:1, exp:"collections.deque offre des opérations O(1) aux deux extrémités. Les listes sont O(n) pour insert(0,x)." },
    { q: "Quelle méthode permet de vérifier si une clé existe dans un dictionnaire ?", opts:["d.has(cle)","cle in d","d.contains(cle)","d.exists(cle)"], ans:1, exp:"L'opérateur 'in' teste l'appartenance d'une clé : 'cle in d' renvoie True ou False en O(1)." },
    { q: "Une liste chaînée diffère d'un tableau car :", opts:["Elle est triée automatiquement","L'accès par indice est O(n) mais l'insertion en tête est O(1)","Elle ne peut stocker que des entiers","Elle a une taille fixe"], ans:1, exp:"Liste chaînée : accès au ième élément nécessite de parcourir i nœuds O(n), mais insérer en tête est O(1)." },
    { q: "Quelle est la valeur de len({'a':1, 'b':2, 'a':3}) en Python ?", opts:["3","2","1","Erreur"], ans:1, exp:"Les clés d'un dictionnaire sont uniques. 'a':3 écrase 'a':1. Le dictionnaire final a 2 clés." },
    { q: "Un dictionnaire Python préserve-t-il l'ordre d'insertion ?", opts:["Non, jamais","Oui, depuis Python 3.7","Seulement avec collections.OrderedDict","Non, il trie par clé"], ans:1, exp:"Depuis Python 3.7, les dictionnaires préservent l'ordre d'insertion. C'est une garantie du langage." },
    { q: "Pour empiler l'élément 5 sur une pile implémentée avec une liste :", opts:["pile.insert(0, 5)","pile.push(5)","pile.append(5)","pile.add(5)"], ans:2, exp:"On utilise append() pour ajouter en fin de liste (= sommet de la pile). push() n'existe pas en Python natif." },
    { q: "Quelle est la complexité de l'opération append sur une liste Python ?", opts:["O(n)","O(log n)","O(1) amorti","O(n²)"], ans:2, exp:"append() est O(1) amorti. Parfois Python redimensionne (O(n)), mais en moyenne sur n opérations c'est O(1)." },
    { q: "Un tableau associatif est un autre nom pour :", opts:["Une liste","Un dictionnaire","Une pile","Un graphe"], ans:1, exp:"Un tableau associatif (ou map, hashmap) associe des clés à des valeurs. En Python, c'est le type dict." },
    { q: "Que se passe-t-il si on fait pop() sur une pile vide (liste Python) ?", opts:["Renvoie None","Lève IndexError","Renvoie -1","Ne fait rien"], ans:1, exp:"Appeler pop() sur une liste vide lève une IndexError. Il faut vérifier que la pile n'est pas vide avant." },
    { q: "La structure adaptée à la gestion d'une file d'impression est :", opts:["Pile","File","Arbre binaire","Graphe"], ans:1, exp:"Une file d'impression traite les documents dans l'ordre d'arrivée : FIFO." },
    { q: "Quelle affirmation est correcte sur les clés d'un dictionnaire Python ?", opts:["Elles peuvent être des listes","Elles doivent être hashables (int, str, tuple immuable...)","Elles sont nécessairement des chaînes","Elles peuvent être des ensembles"], ans:1, exp:"Les clés doivent être hashables : types immuables. Les listes et dicts (mutables) ne peuvent pas être des clés." },
    { q: "Quel est le résultat de [1,2,3] + [4,5] en Python ?", opts:["[1,2,3,4,5]","[[1,2,3],[4,5]]","Erreur","[1,2,3,[4,5]]"], ans:0, exp:"L'opérateur + sur les listes réalise la concaténation. Il crée une nouvelle liste avec tous les éléments." },
    { q: "Dans une file, l'opération d'ajout s'appelle :", opts:["push","pop","enqueue","dequeue"], ans:2, exp:"enqueue (ou enfiler) ajoute en queue. dequeue (défiler) retire en tête." },
    { q: "Pour une pile avec une liste, quelle opération permet de voir le sommet sans le retirer ?", opts:["pile.peek()","pile[-1]","pile.top()","pile[0]"], ans:1, exp:"pile[-1] accède au dernier élément (sommet) sans le retirer. Il n'y a pas de méthode peek() native." },
    { q: "Quelle est la complexité de la recherche dans une liste Python ?", opts:["O(1)","O(log n)","O(n)","O(n log n)"], ans:2, exp:"La recherche 'x in liste' parcourt les éléments un à un : O(n). Différent de la recherche dans un dict (O(1))." },
    { q: "Que fait collections.deque par rapport à une liste pour les opérations en début de séquence ?", opts:["Rien de différent","Elle est plus lente","Elle est O(1) pour appendleft et popleft (contre O(n) pour list)","Elle trie automatiquement"], ans:2, exp:"deque offre O(1) pour appendleft/popleft. Pour une liste, insert(0,x) et pop(0) sont O(n) car tous les éléments se déplacent." },
    { q: "Dans une implémentation de file avec deque, on enfile avec :", opts:["append() et on défile avec popleft()","popleft() et on défile avec append()","appendleft() et on défile avec pop()","pop() et on défile avec append()"], ans:0, exp:"Convention FIFO : on enfile (ajoute) à droite avec append(), on défile (retire) à gauche avec popleft()." },
    { q: "Quelle structure choisir pour mémoriser l'historique de navigation d'un navigateur web (retour arrière) ?", opts:["File","Pile","Dictionnaire","Ensemble (set)"], ans:1, exp:"Une pile LIFO : chaque nouvelle page est empilée, le retour arrière dépile la page courante pour revenir à la précédente." },
    { q: "La complexité de l'insertion au début d'une liste Python est :", opts:["O(1)","O(log n)","O(n)","O(1) amorti"], ans:2, exp:"insert(0, x) sur une liste nécessite de décaler tous les éléments existants d'une position → O(n)." },
    { q: "Un dictionnaire Python peut-il avoir deux fois la même clé ?", opts:["Oui, si les valeurs sont différentes","Non, la dernière valeur écrase la précédente","Oui, il crée une liste des valeurs","Non, cela lève une KeyError"], ans:1, exp:"Les clés sont uniques. Si on affecte d['a'] = 3 alors que 'a' existe déjà avec la valeur 1, la valeur 3 remplace 1." },
    { q: "Quelle méthode retourne toutes les clés d'un dictionnaire ?", opts:["d.keys()","d.all_keys()","list(d)","d.items()"], ans:0, exp:"d.keys() retourne un objet vue des clés. list(d) fonctionne aussi mais crée une liste. d.items() retourne les paires (clé, valeur)." },
    { q: "Quelle est la complexité de heapq.heapify(liste) ?", opts:["O(n log n)","O(n)","O(log n)","O(1)"], ans:1, exp:"heapify() construit un tas depuis une liste existante en O(n), plus efficace que n insertions individuelles en O(n log n)." }
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE : Arbres (Arbres binaires, ABR, Parcours, Complexité)
     0-19  → Facile    : vocabulaire, représentation, lecture d'arbre
     20-34 → Moyen     : parcours, fonctions récursives, ABR basique
     35-49 → Difficile : complexité, ABR avancé, applications, pièges
     ═══════════════════════════════════════════════════════════ */
  arbres: [

    /* ── FACILE (0–19) ── */
    { q: "Comment appelle-t-on le nœud au sommet d'un arbre, sans parent ?",
      opts: ["Feuille","Nœud interne","Racine","Sommet"],
      ans: 2, exp: "La <strong>racine</strong> est l'unique nœud sans parent. C'est le point d'entrée de l'arbre." },

    { q: "Comment appelle-t-on un nœud sans enfant dans un arbre ?",
      opts: ["Racine","Feuille","Nœud interne","Ancêtre"],
      ans: 1, exp: "Une <strong>feuille</strong> est un nœud dont le degré sortant est 0, sans aucun fils." },

    { q: "La taille d'un arbre désigne :",
      opts: ["Sa hauteur","Son nombre de nœuds","Son nombre de feuilles","Sa profondeur maximale"],
      ans: 1, exp: "La taille d'un arbre est son <strong>nombre total de nœuds</strong>." },

    { q: "La profondeur d'un nœud est :",
      opts: ["Le nombre d'enfants de ce nœud","Sa distance à la feuille la plus proche","Le nombre d'arêtes entre la racine et ce nœud","Le nombre de frères de ce nœud"],
      ans: 2, exp: "La profondeur d'un nœud est le nombre d'arêtes depuis la <strong>racine</strong> jusqu'à ce nœud. La racine a une profondeur de 0." },

    { q: "Un arbre binaire est un arbre où chaque nœud possède au maximum :",
      opts: ["1 enfant","2 enfants","3 enfants","Pas de limite"],
      ans: 1, exp: "Un arbre binaire impose que chaque nœud possède au plus <strong>2 enfants</strong> : un fils gauche et un fils droit." },

    { q: "En Python, comment représente-t-on un arbre vide ?",
      opts: ["[]","0","''","None"],
      ans: 3, exp: "En Python, <code>None</code> représente l'arbre vide. C'est le cas de base de toutes les fonctions récursives sur les arbres." },

    { q: "Quelle est la hauteur d'un arbre réduit à un seul nœud (la racine) ?",
      opts: ["−1","0","1","Indéfini"],
      ans: 1, exp: "Un arbre réduit à sa seule racine a une hauteur de <strong>0</strong> : il n'y a aucune arête à parcourir pour atteindre une feuille." },

    { q: "Dans un arbre binaire de hauteur h, le nombre maximum de nœuds est :",
      opts: ["h + 1","2h","2^(h+1) - 1","h²"],
      ans: 2, exp: "Un arbre binaire complet de hauteur h a au maximum <strong>2^(h+1) − 1</strong> nœuds." },

    { q: "Un sous-arbre raciné en un nœud N est :",
      opts: ["L'ensemble des ancêtres de N","N et tous ses descendants","L'ensemble des frères de N","Uniquement les enfants directs de N"],
      ans: 1, exp: "Le sous-arbre raciné en N est constitué de <strong>N lui-même et de tous ses descendants</strong>." },

    { q: "Dans la classe Noeud standard en NSI, quels sont les attributs habituels ?",
      opts: ["val, next","valeur, gauche, droite","data, left, right, parent","valeur, fils"],
      ans: 1, exp: "La classe <code>Noeud</code> standard utilise <code>valeur</code>, <code>gauche</code> et <code>droite</code>." },

    { q: "Que retourne noeud.gauche si le fils gauche n'existe pas ?",
      opts: ["0","False","None","Une exception"],
      ans: 2, exp: "Si le fils gauche n'existe pas, <code>noeud.gauche</code> vaut <code>None</code>." },

    { q: "Pour construire un arbre en Python, on construit généralement :",
      opts: ["De la racine vers les feuilles","Des feuilles vers la racine","Dans l'ordre infixe","Peu importe l'ordre"],
      ans: 1, exp: "On construit un arbre <strong>des feuilles vers la racine</strong>, car pour créer un nœud avec ses fils, il faut d'abord que les fils existent." },

    { q: "Dans la représentation par tuples (valeur, gauche, droite), que représente (5, None, None) ?",
      opts: ["Un arbre vide","Un nœud feuille de valeur 5","Un nœud avec deux enfants","Une erreur"],
      ans: 1, exp: "<code>(5, None, None)</code> représente un <strong>nœud feuille</strong> de valeur 5 : ses deux fils sont absents." },

    { q: "La hauteur de l'arbre est :",
      opts: ["Le nombre de nœuds","La profondeur de la racine","La longueur du plus long chemin de la racine à une feuille","Le nombre de feuilles"],
      ans: 2, exp: "La hauteur est le nombre d'<strong>arêtes</strong> sur le plus long chemin depuis la racine jusqu'à une feuille." },

    { q: "Dans un ABR, quelle propriété est vérifiée ?",
      opts: ["Tous les nœuds ont 2 fils","Les fils gauches sont > au père","Valeurs gauches < nœud < valeurs droites","L'arbre est toujours équilibré"],
      ans: 2, exp: "Dans un ABR, pour tout nœud : <strong>sous-arbre gauche &lt; nœud &lt; sous-arbre droit</strong>." },

    { q: "La construction Noeud(5, None, Noeud(8)) crée :",
      opts: ["Un nœud 5 sans fils","Un nœud 5 avec fils gauche 8","Un nœud 5 avec fils droit 8","Une erreur Python"],
      ans: 2, exp: "<code>Noeud(5, None, Noeud(8))</code> crée un nœud 5 sans fils gauche et avec un fils <strong>droit</strong> de valeur 8." },

    { q: "Un nœud interne est :",
      opts: ["La racine uniquement","Un nœud sans enfant","Un nœud avec au moins un enfant","Un nœud à profondeur 1"],
      ans: 2, exp: "Un <strong>nœud interne</strong> est tout nœud possédant au moins un enfant (ni feuille, ni forcément racine)." },

    { q: "Le père du nœud B dans un arbre est :",
      opts: ["Le fils gauche de B","Le fils droit de B","Le nœud directement au-dessus de B","La racine toujours"],
      ans: 2, exp: "Le <strong>père (ou parent)</strong> d'un nœud est l'unique nœud qui le précède directement dans la hiérarchie." },

    { q: "Combien de nœuds contient un chemin (arbre dégénéré) de hauteur 4 ?",
      opts: ["4","5","8","16"],
      ans: 1, exp: "Un chemin de hauteur h a exactement <strong>h + 1</strong> nœuds. Hauteur 4 → 5 nœuds." },

    { q: "La hauteur minimale d'un arbre binaire à n nœuds est de l'ordre de :",
      opts: ["n","n/2","log₂(n)","√n"],
      ans: 2, exp: "Un arbre équilibré de n nœuds a une hauteur de l'ordre de <strong>⌊log₂(n)⌋</strong>." },

    /* ── MOYEN (20–34) ── */
    { q: "Dans le parcours préfixe, l'ordre de visite est :",
      opts: ["Gauche → Nœud → Droite","Nœud → Gauche → Droite","Gauche → Droite → Nœud","Droite → Nœud → Gauche"],
      ans: 1, exp: "Le parcours <strong>pré</strong>fixe visite le <strong>nœud en premier</strong> : N → G → D." },

    { q: "Dans le parcours infixe, l'ordre de visite est :",
      opts: ["Nœud → Gauche → Droite","Gauche → Droite → Nœud","Gauche → Nœud → Droite","Droite → Nœud → Gauche"],
      ans: 2, exp: "Le parcours <strong>in</strong>fixe visite le nœud <strong>entre ses fils</strong> : G → N → D." },

    { q: "Dans le parcours postfixe, l'ordre de visite est :",
      opts: ["Nœud → Gauche → Droite","Gauche → Nœud → Droite","Gauche → Droite → Nœud","Droite → Gauche → Nœud"],
      ans: 2, exp: "Le parcours <strong>post</strong>fixe visite le nœud <strong>en dernier</strong> : G → D → N." },

    { q: "Le parcours en largeur (BFS) visite les nœuds :",
      opts: ["De bas en haut","De la feuille la plus profonde","Niveau par niveau","Dans l'ordre décroissant"],
      ans: 2, exp: "Le BFS visite les nœuds <strong>niveau par niveau</strong> depuis la racine." },

    { q: "Quelle structure de données est utilisée pour le parcours en largeur ?",
      opts: ["Une pile","Une file (queue)","Un tableau trié","Un dictionnaire"],
      ans: 1, exp: "Le BFS utilise une <strong>file (FIFO)</strong> : on enfile les enfants de chaque nœud visité. En Python : <code>from collections import deque</code>." },

    { q: "Sur un ABR, le parcours infixe produit :",
      opts: ["Les valeurs en ordre décroissant","Les valeurs dans l'ordre d'insertion","Les valeurs en ordre croissant","Les feuilles en premier"],
      ans: 2, exp: "Sur un ABR, le parcours infixe (G→N→D) produit les valeurs <strong>dans l'ordre croissant</strong>. Propriété fondamentale." },

    { q: "Quelle valeur retourne taille(None) ?",
      opts: ["−1","None","0","1"],
      ans: 2, exp: "<code>taille(None)</code> retourne <strong>0</strong> : l'arbre vide ne contient aucun nœud." },

    { q: "Quelle valeur retourne hauteur(None) selon la convention NSI ?",
      opts: ["0","1","−1","None"],
      ans: 2, exp: "Par convention NSI, <code>hauteur(None)</code> retourne <strong>−1</strong>. Cela permet : hauteur(feuille) = 1 + max(−1, −1) = 0." },

    { q: "La fonction récursive taille(n) retourne :",
      opts: ["1 si n est None","n.valeur si n est une feuille","0 si n est None, sinon 1 + taille(n.gauche) + taille(n.droite)","max(taille(n.gauche), taille(n.droite))"],
      ans: 2, exp: "<code>taille(n)</code> = 0 pour l'arbre vide, <code>1 + taille(gauche) + taille(droite)</code> sinon." },

    { q: "La fonction hauteur(n) utilise :",
      opts: ["La somme des hauteurs des fils","Le produit des hauteurs","Le maximum des hauteurs des fils + 1","La valeur du nœud"],
      ans: 2, exp: "Hauteur = <code>1 + max(hauteur(gauche), hauteur(droite))</code> : on prend le chemin le plus long + 1 pour l'arête." },

    { q: "Quel est le cas de base incontournable d'une fonction récursive sur arbre ?",
      opts: ["noeud.valeur == 0","noeud est une feuille","noeud is None","noeud.gauche is None"],
      ans: 2, exp: "Le cas de base fondamental est <code>if noeud is None: return ...</code>. Il gère l'arbre vide et assure la terminaison." },

    { q: "Sur l'arbre de racine 1, fils gauche 2, fils droit 3 : quel est le résultat du parcours préfixe ?",
      opts: ["2 1 3","1 2 3","2 3 1","3 1 2"],
      ans: 1, exp: "Préfixe (N→G→D) : <strong>1</strong> (racine), puis <strong>2</strong> (gauche), puis <strong>3</strong> (droite)." },

    { q: "Sur l'arbre de racine 1, fils gauche 2, fils droit 3 : résultat du parcours postfixe ?",
      opts: ["1 2 3","2 1 3","2 3 1","3 2 1"],
      ans: 2, exp: "Postfixe (G→D→N) : <strong>2</strong> (gauche), <strong>3</strong> (droite), <strong>1</strong> (racine)." },

    { q: "Les parcours en profondeur (DFS) sont implémentés de façon :",
      opts: ["Itérative avec une file","Récursive","Itérative avec un tableau trié","Non-déterministe"],
      ans: 1, exp: "Les parcours DFS s'implémentent naturellement de façon <strong>récursive</strong> grâce à la structure récursive des arbres." },

    { q: "Dans un ABR, pour chercher une valeur v < noeud.valeur, on doit :",
      opts: ["Chercher à droite","Chercher à gauche","Arrêter la recherche","Chercher dans les deux sens"],
      ans: 1, exp: "Si v < nœud.valeur, la valeur ne peut être que dans le <strong>sous-arbre gauche</strong>." },

    { q: "Après un parcours infixe d'un ABR contenant {3, 7, 1, 5}, le résultat est :",
      opts: ["3 7 1 5","1 3 5 7","7 5 3 1","1 7 5 3"],
      ans: 1, exp: "Le parcours infixe d'un ABR donne les valeurs en <strong>ordre croissant</strong> : 1 → 3 → 5 → 7." },

    /* ── DIFFICILE (35–49) ── */
    { q: "Quelle est la complexité d'un parcours DFS d'un arbre à n nœuds ?",
      opts: ["O(1)","O(log n)","O(n)","O(n²)"],
      ans: 2, exp: "Un DFS visite chaque nœud <strong>exactement une fois</strong> → complexité <strong>O(n)</strong>." },

    { q: "Quelle est la complexité en espace (pile) d'un parcours DFS récursif ?",
      opts: ["O(1)","O(log n)","O(h) où h est la hauteur","O(n²)"],
      ans: 2, exp: "La pile d'appels a une profondeur maximale = hauteur h. Au pire (dégénéré) : h = n−1 → O(n)." },

    { q: "La complexité du parcours BFS est :",
      opts: ["O(log n)","O(n)","O(h)","O(n log n)"],
      ans: 1, exp: "Le BFS visite chaque nœud une fois → <strong>O(n)</strong> en temps. En espace, la file peut contenir O(n) éléments." },

    { q: "Quelle est la complexité de la recherche dans un ABR équilibré ?",
      opts: ["O(1)","O(log n)","O(n)","O(n log n)"],
      ans: 1, exp: "ABR équilibré : hauteur O(log n) → recherche en <strong>O(log n)</strong>, comme la dichotomie." },

    { q: "Si on insère 1, 2, 3, 4, 5 dans cet ordre dans un ABR, on obtient :",
      opts: ["Un arbre équilibré","Un arbre dégénéré (liste chaînée)","Un arbre complet","Un arbre de hauteur 2"],
      ans: 1, exp: "Insertions en ordre croissant → <strong>arbre dégénéré</strong> (chaque nœud n'a qu'un fils droit). Hauteur = n−1 = 4." },

    { q: "Dans un ABR, où se trouve le minimum de l'arbre ?",
      opts: ["À la racine","Dans le fils droit le plus profond","Dans le fils gauche le plus profond (tout à gauche)","Impossible à dire"],
      ans: 2, exp: "Le minimum d'un ABR est le nœud le plus à <strong>gauche</strong> (on descend en suivant les fils gauches jusqu'à None)." },

    { q: "Quelle affirmation sur les ABR est fausse ?",
      opts: ["Le parcours infixe donne les valeurs triées","La recherche est toujours en O(log n)","Un ABR peut dégénérer en liste","Les valeurs gauches sont inférieures à la racine"],
      ans: 1, exp: "La recherche est en O(log n) <strong>uniquement si équilibré</strong>. Dans le pire cas (dégénéré), c'est O(n). Cette affirmation est donc fausse." },

    { q: "Un arbre binaire parfait de hauteur h a une taille de :",
      opts: ["h + 1","2h + 1","2^(h+1) - 1","h²"],
      ans: 2, exp: "Arbre parfait de hauteur h : <strong>2^(h+1) − 1</strong> nœuds. Exemple h=2 : 1+2+4 = 7 nœuds." },

    { q: "Pour compter les feuilles, la relation de récurrence est :",
      opts: ["nb_feuilles(n) = 1 + nb_feuilles(g) + nb_feuilles(d)","Si n est feuille : 1, sinon : nb_feuilles(g) + nb_feuilles(d)","nb_feuilles(n) = max(g, d)","nb_feuilles(None) = 1"],
      ans: 1, exp: "Feuille → 1. Nœud interne → on additionne les feuilles des deux sous-arbres <strong>sans ajouter 1</strong> pour le nœud courant." },

    { q: "Que retourne hauteur(Noeud(5)) avec la convention hauteur(None) = −1 ?",
      opts: ["−1","0","1","2"],
      ans: 1, exp: "hauteur(feuille) = 1 + max(hauteur(None), hauteur(None)) = 1 + max(−1,−1) = 1 + (−1) = <strong>0</strong>." },

    { q: "Quel parcours est adapté pour afficher un répertoire (dossiers puis fichiers) ?",
      opts: ["Parcours infixe","Parcours en largeur","Parcours préfixe","Parcours postfixe"],
      ans: 2, exp: "Le parcours <strong>préfixe</strong> : on affiche d'abord le dossier (nœud), puis récursivement son contenu (sous-arbres)." },

    { q: "Quel parcours est adapté pour évaluer une expression arithmétique en arbre ?",
      opts: ["Préfixe","Infixe","Postfixe","Largeur"],
      ans: 2, exp: "Le parcours <strong>postfixe</strong> : on évalue d'abord les sous-expressions (fils) avant d'appliquer l'opérateur (nœud)." },

    { q: "Quel est le résultat du BFS de l'arbre : racine=1, fils gauche=2, fils droit=3, petit-fils gauche de 2=4 ?",
      opts: ["1 2 4 3","4 2 3 1","1 2 3 4","2 4 3 1"],
      ans: 2, exp: "BFS niveau par niveau : niveau 0 → 1, niveau 1 → 2 3, niveau 2 → 4. Résultat : <strong>1 2 3 4</strong>." },

    { q: "La relation entre taille n et hauteur h d'un arbre binaire quelconque est :",
      opts: ["n = 2h","h + 1 ≤ n ≤ 2^(h+1) − 1","n = h²","n = log(h)"],
      ans: 1, exp: "Un arbre binaire de hauteur h a au minimum <strong>h+1</strong> nœuds (chemin) et au maximum <strong>2^(h+1)−1</strong> nœuds (parfait)." },

  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 3 : Graphes
     ═══════════════════════════════════════════════════════════ */
  graphes: [
    { q:"Un graphe orienté (digraphe) est un graphe où :", opts:["Les arêtes ont un poids","Les arêtes ont une direction (arc)","Les sommets sont colorés","Il n'y a pas de cycle"], ans:1, exp:"Dans un graphe orienté, chaque arc a un sens : (u,v) ≠ (v,u). Les flèches indiquent la direction. Exemples : réseaux sociaux (suit), liens web." },
    { q:"La matrice d'adjacence d'un graphe à n sommets est :", opts:["Un tableau de taille n","Une matrice n×n où M[i][j]=1 si l'arête (i,j) existe","Un dictionnaire de listes","Un arbre binaire de n nœuds"], ans:1, exp:"La matrice d'adjacence est une matrice n×n. M[i][j] = 1 (ou le poids) si l'arête existe entre i et j, 0 sinon." },
    { q:"La liste d'adjacence représente un graphe comme :", opts:["Une matrice n×n","Un tableau des arêtes","Un dictionnaire ou tableau où chaque sommet liste ses voisins","Un arbre couvrant"], ans:2, exp:"La liste d'adjacence stocke, pour chaque sommet, la liste de ses voisins. Plus économe en mémoire que la matrice pour les graphes peu denses." },
    { q:"L'algorithme BFS (parcours en largeur) utilise :", opts:["Une pile","Une file","Un tas","Un dictionnaire"], ans:1, exp:"BFS utilise une file FIFO pour explorer les sommets par niveaux croissants de distance. Le premier sommet enfilé est le premier traité." },
    { q:"L'algorithme DFS (parcours en profondeur) utilise :", opts:["Une file","Un tas","Une pile (ou récursion)","Un tableau trié"], ans:2, exp:"DFS utilise une pile (explicite ou implicite via la récursion) pour explorer aussi loin que possible avant de revenir en arrière (backtrack)." },
    { q:"Un graphe connexe est un graphe où :", opts:["Tous les sommets ont le même degré","Il existe un chemin entre toute paire de sommets","Il n'y a aucun cycle","Chaque sommet a exactement 2 voisins"], ans:1, exp:"Un graphe est connexe si, pour toute paire de sommets (u,v), il existe un chemin de u à v. Si on enlève les orientations, tous les sommets sont 'atteignables'." },
    { q:"La complexité de BFS et DFS sur un graphe à n sommets et m arêtes est :", opts:["O(n)","O(m)","O(n+m)","O(n×m)"], ans:2, exp:"BFS et DFS visitent chaque sommet et chaque arête au plus une fois. La complexité totale est O(n+m) — linéaire en la taille du graphe." },
    { q:"Un cycle dans un graphe est :", opts:["Un chemin qui passe par tous les sommets","Un chemin qui commence et finit au même sommet","Une arête qui boucle sur elle-même","Un sommet sans voisin"], ans:1, exp:"Un cycle est un chemin fermé : il commence et se termine au même sommet. Un graphe sans cycle est dit acyclique." },
    { q:"Quel algorithme trouve le plus court chemin dans un graphe pondéré (poids positifs) ?", opts:["BFS","DFS","Dijkstra","Bellman-Ford uniquement"], ans:2, exp:"L'algorithme de Dijkstra trouve les plus courts chemins depuis une source dans un graphe pondéré à poids positifs, en O((n+m) log n) avec un tas." },
    { q:"Le degré d'un sommet dans un graphe non orienté est :", opts:["Le nombre de chemins passant par ce sommet","Le nombre de voisins (arêtes incidentes)","Sa distance à la racine","Son niveau dans le graphe"], ans:1, exp:"Le degré d'un sommet = nombre de ses voisins (arêtes qui lui sont incidentes). La somme des degrés de tous les sommets = 2 × nombre d'arêtes." },
    { q:"BFS depuis un sommet source donne :", opts:["Un parcours en profondeur","Les plus courts chemins (en nombre d'arêtes) vers tous les autres sommets","L'arbre couvrant de poids minimum","Un tri topologique"], ans:1, exp:"BFS depuis une source s donne la distance minimale (en nombre d'arêtes non pondérées) de s vers chaque sommet. C'est la raison de son utilisation pour le plus court chemin dans les graphes non pondérés." },
    { q:"Un graphe acyclique orienté (DAG) est utilisé pour :", opts:["Représenter des cycles","Modéliser des dépendances (ex: compilation, ordonnancement)","Trouver des cycles","Calculer des chemins non orientés"], ans:1, exp:"Un DAG (Directed Acyclic Graph) modélise des relations de dépendances sans cycle. Exemples : dépendances de packages, ordonnancement de tâches (tri topologique)." },
    { q:"La matrice d'adjacence d'un graphe non orienté est toujours :", opts:["Diagonale","Triangulaire inférieure","Symétrique","Nulle"], ans:2, exp:"Si l'arête (i,j) existe, alors (j,i) existe aussi (non orienté). Donc M[i][j] = M[j][i] : la matrice est symétrique par rapport à sa diagonale." },
    { q:"Pour détecter un cycle dans un graphe non orienté avec DFS, on utilise :", opts:["Un ensemble de sommets visités","La couleur des arêtes","Un tableau de distances","Un tas min"], ans:0, exp:"On maintient un ensemble 'visités'. Si DFS rencontre un sommet déjà visité qui n'est pas le parent direct, il y a un cycle." },
    { q:"Un arbre couvrant minimal (MST) d'un graphe pondéré est :", opts:["L'arbre de plus grande hauteur","Un sous-graphe connexe acyclique reliant tous les sommets avec le poids minimum","Le chemin le plus court","L'arbre AVL du graphe"], ans:1, exp:"Le MST (Minimum Spanning Tree) est un arbre (connexe, acyclique) qui inclut tous les sommets, avec la somme des poids d'arêtes minimale. Algorithmes : Kruskal, Prim." },
    { q:"Dans un graphe orienté, le degré entrant d'un sommet est :", opts:["Le nombre d'arcs sortant de ce sommet","Le nombre d'arcs arrivant à ce sommet","Le nombre total d'arcs","Son degré dans le graphe non orienté sous-jacent"], ans:1, exp:"Degré entrant (in-degree) = nombre d'arcs qui arrivent AU sommet. Degré sortant (out-degree) = nombre d'arcs qui PARTENT du sommet." },
    { q:"Quelle représentation est plus efficace en mémoire pour un graphe peu dense (m << n²) ?", opts:["Matrice d'adjacence","Liste d'adjacence","Les deux sont équivalentes","Matrice d'incidence"], ans:1, exp:"Pour un graphe peu dense, la matrice n×n gaspille de la mémoire (O(n²)). La liste d'adjacence utilise O(n+m) mémoire, bien meilleure pour m << n²." },
    { q:"Le tri topologique d'un DAG est :", opts:["Un tri des sommets par degré","Un ordre linéaire des sommets tel que pour tout arc (u,v), u apparaît avant v","Un parcours BFS","Le tri des arêtes par poids"], ans:1, exp:"Le tri topologique ordonne les sommets d'un DAG tel que toutes les dépendances apparaissent avant leurs dépendants. Impossible si le graphe contient un cycle." },
    { q:"Un graphe complet à n sommets a combien d'arêtes (non orienté) ?", opts:["n","n-1","n(n-1)/2","n²"], ans:2, exp:"Un graphe complet Kₙ relie chaque paire de sommets : il y a C(n,2) = n(n-1)/2 arêtes. Pour n=4 : 4×3/2 = 6 arêtes." },
    { q:"L'algorithme de Dijkstra ne fonctionne pas si :", opts:["Le graphe est non connexe","Le graphe a des cycles","Le graphe a des arêtes de poids négatif","Le graphe est dense"], ans:2, exp:"Dijkstra suppose que les poids sont positifs. Un poids négatif peut remettre en cause un chemin déjà validé. Pour les poids négatifs : Bellman-Ford." },
    { q:"La complexité de l'algorithme de Dijkstra avec un tas (priority queue) est :", opts:["O(n)","O(n²)","O((n+m) log n)","O(m²)"], ans:2, exp:"Avec un tas binaire : chaque extraction est O(log n) × n fois, chaque mise à jour est O(log n) × m fois : total O((n+m) log n)." },
    { q:"Un graphe bipartite est un graphe dont les sommets peuvent être séparés en deux groupes tels que :", opts:["Chaque sommet est dans les deux groupes","Toutes les arêtes relient des sommets de groupes différents","Tous les sommets du même groupe sont reliés","Il n'y a pas d'arêtes"], ans:1, exp:"Dans un graphe bipartite, les sommets se divisent en deux ensembles U et V, et toutes les arêtes vont de U à V (pas d'arête U-U ou V-V)." },
    { q:"Pour représenter un réseau routier (villes + routes), la structure adaptée est :", opts:["Un arbre binaire","Un graphe pondéré non orienté","Une pile","Un tableau 1D"], ans:1, exp:"Un réseau routier est un graphe : les villes = sommets, les routes = arêtes, les distances = poids. Non orienté car les routes sont bidirectionnelles." },
    { q:"Qu'est-ce qu'un sommet isolé dans un graphe ?", opts:["Un sommet qui est la racine","Un sommet de degré 0 (aucun voisin)","Un sommet avec le plus grand degré","Un sommet relié à tous les autres"], ans:1, exp:"Un sommet isolé est un sommet sans aucune arête incidente, donc de degré 0. Il n'est connecté à aucun autre sommet." },
    { q:"La complexité de DFS sur un graphe représenté par liste d'adjacence est :", opts:["O(n²)","O(n+m)","O(n log n)","O(m²)"], ans:1, exp:"DFS visite chaque sommet une fois (O(n)) et examine chaque arête une fois de chaque côté (O(m)). Total : O(n+m) avec liste d'adjacence." },
    { q:"Un graphe eulérien est un graphe qui contient :", opts:["Un chemin hamiltonien","Un circuit passant par chaque arête exactement une fois","Un cycle de longueur maximale","Un arbre couvrant"], ans:1, exp:"Un circuit eulérien passe par chaque arête EXACTEMENT une fois et revient au point de départ. Condition : graphe connexe et tous les sommets de degré pair." },
    { q:"La matrice d'adjacence d'un graphe sans boucle a des :", opts:["1 sur la diagonale","0 sur la diagonale","Valeurs quelconques sur la diagonale","Valeurs négatives sur la diagonale"], ans:1, exp:"Une boucle serait une arête d'un sommet vers lui-même. Sans boucle, M[i][i] = 0 pour tout i." },
    { q:"Quel algorithme détecte si un graphe non orienté est connexe ?", opts:["Uniquement Dijkstra","BFS ou DFS depuis un sommet : si tous les sommets sont visités, il est connexe","Tri topologique","L'algorithme de Floyd-Warshall"], ans:1, exp:"On lance BFS ou DFS depuis n'importe quel sommet. Si tous les n sommets sont visités, le graphe est connexe. Sinon, il y a plusieurs composantes connexes." },
    { q:"Un graphe pondéré est un graphe où :", opts:["Les sommets ont des étiquettes numériques","Les arêtes ont des valeurs (poids) associées","Les sommets sont colorés","Il n'y a pas de chemin direct"], ans:1, exp:"Un graphe pondéré associe un poids (nombre) à chaque arête. Ces poids représentent des distances, durées, coûts, etc." },
    { q:"La différence entre BFS et DFS est :", opts:["BFS est récursif, DFS ne l'est pas","BFS explore par niveaux (file), DFS va en profondeur (pile)","DFS trouve toujours le plus court chemin","BFS utilise moins de mémoire"], ans:1, exp:"BFS (file) explore les voisins proches d'abord, niveau par niveau. DFS (pile/récursion) s'enfonce le plus loin possible avant de revenir." },
    { q:"Un graphe orienté fortement connexe est un graphe où :", opts:["Chaque sommet est accessible depuis tous les autres","Il n'y a aucun cycle","Tous les sommets ont le même degré","Il n'y a qu'un seul chemin entre deux sommets"], ans:0, exp:"Un graphe fortement connexe est orienté et vérifie : pour tout couple (u,v), il existe un chemin de u vers v ET de v vers u (en suivant les orientations)." },
    { q:"Dans la liste d'adjacence, la complexité pour savoir si l'arête (u,v) existe est :", opts:["O(1)","O(degré(u))","O(n)","O(m)"], ans:1, exp:"Il faut parcourir la liste des voisins de u pour chercher v. Dans le pire cas (u connecté à tous), c'est O(n). En général O(degré(u))." },
    { q:"L'algorithme de Bellman-Ford permet de :", opts:["Trier un graphe","Trouver les plus courts chemins même avec des poids négatifs","Colorier un graphe","Trouver l'arbre couvrant minimal"], ans:1, exp:"Bellman-Ford, contrairement à Dijkstra, gère les poids négatifs. Il détecte aussi les cycles de poids négatif. Complexité : O(n×m)." },
    { q:"Un chemin hamiltonien passe par :", opts:["Toutes les arêtes exactement une fois","Tous les sommets exactement une fois","Le plus court chemin de u à v","Tous les sommets de degré pair"], ans:1, exp:"Un chemin hamiltonien passe par chaque SOMMET exactement une fois (contrairement au chemin eulérien qui passe par chaque ARÊTE). Problème NP-complet en général." },
    { q:"La somme des degrés de tous les sommets d'un graphe non orienté est :", opts:["Égale au nombre de sommets","Égale au nombre d'arêtes","Égale à 2 fois le nombre d'arêtes","Toujours paire et égale à n(n-1)"], ans:2, exp:"Chaque arête contribue +1 au degré de chacun de ses deux extrémités. Donc Σ degrés = 2m. Conséquence : le nombre de sommets de degré impair est toujours pair." },
    { q:"Pour modéliser un réseau social (X suit Y mais pas l'inverse), on utilise :", opts:["Un graphe non orienté","Un graphe orienté (digraphe)","Un arbre binaire","Un graphe non pondéré"], ans:1, exp:"Les relations asymétriques (A suit B, mais B ne suit pas A) nécessitent un graphe orienté. Les amis (mutuels) seraient mieux modélisés par un graphe non orienté." },
    { q:"Quel est l'avantage de la matrice d'adjacence sur la liste d'adjacence ?", opts:["Moins de mémoire","Tester si une arête existe en O(1)","Plus rapide pour BFS","Adapté aux graphes peu denses"], ans:1, exp:"La matrice d'adjacence permet de tester l'existence d'une arête (i,j) en O(1) via M[i][j]. Avec une liste, il faut parcourir les voisins de i." },
    { q:"Un graphe planaire est un graphe qui peut être dessiné :", opts:["Avec des couleurs distinctes","Dans le plan sans croisement d'arêtes","Sur une sphère","De manière symétrique"], ans:1, exp:"Un graphe planaire peut être représenté dans le plan euclidien sans que ses arêtes se croisent. Les cartes géographiques sont souvent des graphes planaires." },
    { q:"DFS peut être utilisé pour :", opts:["Seulement trouver les plus courts chemins","Détecter des cycles et trouver les composantes connexes","Trier des tableaux","Construire des tas binaires"], ans:1, exp:"DFS est polyvalent : détection de cycles, composantes connexes, tri topologique, détection de pont/articulation. BFS est plus adapté aux plus courts chemins." },
    { q:"Le nombre de composantes connexes d'un graphe peut être calculé avec :", opts:["Un seul BFS/DFS","En lançant BFS/DFS plusieurs fois jusqu'à couvrir tous les sommets","L'algorithme de Dijkstra","La matrice d'adjacence uniquement"], ans:1, exp:"On lance BFS/DFS depuis chaque sommet non encore visité. Chaque lancement couvre une composante connexe. Le nombre de lancements = nombre de composantes." },
    { q:"La différence fondamentale entre un graphe et un arbre est :", opts:["Un arbre a plus de sommets","Un graphe peut avoir des cycles, un arbre non","Un arbre est orienté, un graphe non","Les graphes sont plus lents à parcourir"], ans:1, exp:"Un arbre est un graphe connexe ACYCLIQUE (sans cycle). Un graphe peut avoir des cycles. De plus, un arbre sur n nœuds a exactement n-1 arêtes." },
    { q:"Dans un graphe de dépendances de modules Python, chaque sommet représente :", opts:["Un fichier texte","Un module/bibliothèque","Une variable","Une fonction"], ans:1, exp:"Dans un graphe de dépendances, chaque sommet est un module. Un arc de A vers B signifie que A importe B (A dépend de B). C'est un DAG." },
    { q:"La notion de 'degré' dans un graphe non orienté correspond à :", opts:["Le nombre de chemins passant par le sommet","Le nombre de voisins directs du sommet","La distance à la racine","Le rang du sommet"], ans:1, exp:"Le degré d'un sommet u = |{v : (u,v) est une arête}|. C'est le nombre de voisins immédiats, ou le nombre d'arêtes incidentes au sommet u." },
    { q:"Le graphe représentant l'internet (pages web + hyperliens) est :", opts:["Un graphe non orienté","Un graphe orienté (chaque lien a une direction)","Un arbre","Un graphe régulier"], ans:1, exp:"Les hyperliens ont une direction (la page A contient un lien vers B, mais B ne pointe pas nécessairement vers A). C'est un graphe orienté massif." },
    { q:"Quel algorithme permet de colorier un graphe avec le moins de couleurs (coloration optimale) ?", opts:["BFS","DFS","Problème NP-difficile (pas d'algo polynomial connu)","Dijkstra"], ans:2, exp:"La coloration optimale de graphe est un problème NP-difficile. Des heuristiques comme l'algorithme glouton sont utilisées en pratique mais ne garantissent pas l'optimal." },
    { q:"Pour trouver tous les sommets atteignables depuis s dans un graphe, on utilise :", opts:["Uniquement Dijkstra","BFS ou DFS depuis s","Uniquement si le graphe est non orienté","Le tri topologique"], ans:1, exp:"BFS ou DFS depuis s visitent exactement les sommets atteignables depuis s (via les arcs orientés ou arêtes). Les non visités ne sont pas atteignables." },
    { q:"L'algorithme de Floyd-Warshall calcule :", opts:["Le chemin le plus court depuis une source","Tous les plus courts chemins entre toutes les paires de sommets","L'arbre couvrant minimal","Le tri topologique"], ans:1, exp:"Floyd-Warshall calcule les plus courtes distances entre TOUTES les paires de sommets en O(n³). Gère les poids négatifs mais pas les cycles négatifs." },
    { q: "Un graphe est dit 'acyclique' si :", opts:["Il n'a pas de sommets isolés","Il ne contient aucun cycle","Tous ses sommets sont connectés","Il est orienté"], ans:1, exp:"Un graphe acyclique ne contient aucun cycle. Un arbre est un exemple de graphe acyclique connecté." },
    { q: "La complexité de BFS sur un graphe avec V sommets et E arêtes est :", opts:["O(V²)","O(E log V)","O(V + E)","O(V × E)"], ans:2, exp:"BFS visite chaque sommet une fois (O(V)) et parcourt chaque arête une fois (O(E)), d'où O(V + E) au total." },
    { q: "L'algorithme de Dijkstra ne fonctionne pas correctement si :", opts:["Le graphe est orienté","Le graphe a des cycles","Le graphe a des arêtes de poids négatif","Le graphe n'est pas connexe"], ans:2, exp:"Dijkstra suppose que les poids sont positifs. Un poids négatif peut créer un chemin 'plus court' qui n'aurait pas été exploré correctement par le tas." },
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 4 : POO
     ═══════════════════════════════════════════════════════════ */
  poo: [
    { q:"Qu'est-ce qu'une classe en POO ?", opts:["Un objet particulier","Un modèle (blueprint) qui définit les attributs et méthodes d'un type d'objet","Une fonction Python","Un module Python"], ans:1, exp:"Une classe est un modèle/gabarit qui décrit la structure (attributs) et les comportements (méthodes) des objets. Les objets sont des INSTANCES de cette classe." },
    { q:"Que fait la méthode __init__ en Python ?", opts:["Détruit l'objet","Initialise les attributs de l'objet lors de sa création","Affiche l'objet","Compare deux objets"], ans:1, exp:"__init__ est le constructeur en Python. Il est appelé automatiquement à la création d'un objet avec Classe(). Il initialise les attributs d'instance." },
    { q:"Qu'est-ce que self en Python ?", opts:["Une variable globale","La classe elle-même","La référence à l'instance courante","Le module courant"], ans:2, exp:"self est la référence à l'objet sur lequel la méthode est appelée. C'est le premier paramètre de toute méthode d'instance. objet.methode() passe implicitement objet comme self." },
    { q:"L'encapsulation en POO consiste à :", opts:["Hériter des propriétés d'une classe mère","Regrouper données et méthodes dans une classe et contrôler l'accès","Créer plusieurs classes identiques","Surcharger des opérateurs"], ans:1, exp:"L'encapsulation regroupe données (attributs) et comportements (méthodes) dans une classe, et cache les détails internes. Elle protège l'état interne des modifications non contrôlées." },
    { q:"L'héritage en POO permet :", opts:["De cacher les attributs","À une classe fille de réutiliser et étendre les attributs/méthodes d'une classe mère","De créer des objets sans classe","De surcharger des fonctions globales"], ans:1, exp:"L'héritage crée une relation 'est-un' : class Chien(Animal) signifie qu'un Chien EST un Animal. La classe fille hérite des attributs et méthodes de la mère." },
    { q:"Le polymorphisme en POO signifie :", opts:["Une classe a plusieurs constructeurs","Des objets de classes différentes peuvent répondre à la même interface/méthode","Un objet peut changer de classe","Une méthode peut s'appeler elle-même"], ans:1, exp:"Le polymorphisme permet d'utiliser un même nom de méthode sur des objets de classes différentes, chacun répondant à sa manière. Ex: chaque Animal a une méthode parler() mais Dog aboie et Cat miaule." },
    { q:"Quelle est la syntaxe pour définir une classe Voiture qui hérite de Vehicule ?", opts:["class Voiture extends Vehicule:","class Voiture(Vehicule):","class Voiture inherits Vehicule:","Voiture = Vehicule.subclass()"], ans:1, exp:"En Python, l'héritage se déclare en mettant la classe mère entre parenthèses : class Voiture(Vehicule):. C'est la syntaxe standard." },
    { q:"Comment appeler le constructeur de la classe mère depuis la classe fille ?", opts:["parent.__init__(self)","super().__init__()","Vehicule.__init__()","self.super()"], ans:1, exp:"super().__init__() appelle le constructeur de la classe mère. super() renvoie un proxy de la classe mère, permettant d'appeler ses méthodes." },
    { q:"Un attribut de classe (vs attribut d'instance) est :", opts:["Propre à chaque objet","Partagé par tous les objets de la classe","Non accessible depuis les objets","Toujours une méthode"], ans:1, exp:"Un attribut défini directement dans la classe (pas dans __init__) est partagé par toutes les instances. Un attribut d'instance (self.x = ...) est propre à chaque objet." },
    { q:"La méthode __str__ sert à :", opts:["Comparer deux objets","Définir la représentation textuelle de l'objet (utilisée par print)","Détruire l'objet","Copier l'objet"], ans:1, exp:"__str__ est appelée par str(obj) et print(obj). Elle doit retourner une chaîne décrivant l'objet. C'est la version lisible pour l'utilisateur." },
    { q:"Quelle est la différence entre __str__ et __repr__ ?", opts:["Elles font la même chose","__str__ est lisible pour l'utilisateur, __repr__ est plus technique pour les développeurs","__repr__ est appelée par print","__str__ est appelée dans la console interactive"], ans:1, exp:"__str__ est la représentation 'conviviale' (pour les utilisateurs). __repr__ est la représentation 'officielle' (pour les développeurs, idéalement permettant de recréer l'objet)." },
    { q:"Un objet est :", opts:["Une classe","Une instance d'une classe","Un module Python","Une variable globale"], ans:1, exp:"Un objet est une instance d'une classe : c'est la réalisation concrète du modèle défini par la classe. ma_voiture = Voiture('rouge') crée UN objet (instance) de la classe Voiture." },
    { q:"L'attribut __dict__ d'un objet contient :", opts:["Les méthodes de la classe","Le dictionnaire des attributs d'instance de l'objet","La liste des classes mères","Les attributs de classe"], ans:1, exp:"obj.__dict__ est un dictionnaire {'nom_attribut': valeur, ...} de tous les attributs d'instance de l'objet. Utile pour déboguer." },
    { q:"La surcharge d'opérateur en Python se fait via :", opts:["Le mot-clé operator","Des méthodes spéciales (dunder) comme __add__, __eq__, __lt__","Un décorateur @operator","Il n'est pas possible de surcharger"], ans:1, exp:"Python permet de redéfinir les opérateurs via des méthodes dunder (double underscore). __add__ pour +, __eq__ pour ==, __lt__ pour <, etc." },
    { q:"Qu'est-ce que la méthode __len__ permet de faire ?", opts:["Comparer deux objets","Utiliser len(objet) pour retourner une longueur","Convertir en liste","Trier l'objet"], ans:1, exp:"En définissant __len__, on peut utiliser len(obj). Exemple : une classe File peut définir __len__ pour retourner le nombre d'éléments." },
    { q:"isinstance(obj, Classe) retourne True si :", opts:["obj EST exactement une instance de Classe (pas d'une sous-classe)","obj est une instance de Classe ou d'une de ses sous-classes","Classe hérite de type(obj)","obj et Classe sont égaux"], ans:1, exp:"isinstance(obj, Classe) retourne True si obj est une instance de Classe OU d'une sous-classe de Classe. Pour une vérification stricte : type(obj) == Classe." },
    { q:"Le principe d'abstraction en POO consiste à :", opts:["Copier une classe","Exposer uniquement ce qui est nécessaire et cacher les détails d'implémentation","Hériter de plusieurs classes","Créer des objets anonymes"], ans:1, exp:"L'abstraction consiste à ne montrer que l'interface nécessaire (méthodes publiques) et à cacher la complexité d'implémentation derrière cette interface." },
    { q:"En Python, un attribut 'privé' est conventionnellement préfixé par :", opts:["private:","__nom (double underscore → name mangling)","#nom","@nom"], ans:1, exp:"Python n'a pas de vrai privé. Par convention, _nom (un underscore) est 'protégé'. __nom (deux underscores) déclenche le name mangling : _Classe__nom, rendant l'accès externe plus difficile." },
    { q:"Quelle méthode est appelée quand on fait `obj1 + obj2` ?", opts:["obj1.__plus__(obj2)","obj1.__add__(obj2)","add(obj1, obj2)","obj1.add(obj2)"], ans:1, exp:"L'opérateur + appelle __add__. Python appelle automatiquement obj1.__add__(obj2). Si non défini, tente obj2.__radd__(obj1)." },
    { q:"Une méthode de classe (@classmethod) reçoit comme premier argument :", opts:["self (l'instance)","cls (la classe elle-même)","Aucun argument automatique","args (tous les arguments)"], ans:1, exp:"@classmethod décore une méthode qui reçoit la classe (cls) comme premier argument, pas l'instance. Utile pour les constructeurs alternatifs." },
    { q:"Une méthode statique (@staticmethod) est :", opts:["Une méthode qui reçoit self","Une méthode liée à la classe mais sans accès à self ni cls","Une méthode héritée","Une méthode privée"], ans:1, exp:"@staticmethod crée une méthode qui n'a pas accès à l'instance (self) ni à la classe (cls). C'est une fonction ordinaire rangée dans l'espace de nommage de la classe." },
    { q:"La méthode __eq__ est automatiquement utilisée par :", opts:["L'opérateur <","L'opérateur ==","La fonction len()","L'opérateur +"], ans:1, exp:"L'opérateur == appelle __eq__. Sans __eq__ défini, Python compare les références mémoire (deux objets différents en mémoire sont !=, même si mêmes valeurs)." },
    { q:"L'héritage multiple en Python :", opts:["Est interdit","Est autorisé : class C(A, B):","Necessite un mot-clé spécial","Crée toujours une erreur"], ans:1, exp:"Python supporte l'héritage multiple : class C(A, B):. L'ordre de résolution des méthodes (MRO) suit l'algorithme C3. C'est plus risqué que l'héritage simple." },
    { q:"La relation 'est-un' (is-a) correspond à :", opts:["La composition","L'héritage","L'encapsulation","L'agrégation"], ans:1, exp:"'est-un' = héritage : un Chien EST un Animal. 'a-un' (has-a) = composition : une Voiture A un Moteur. Distinguer ces relations est fondamental." },
    { q:"Quelle est la bonne façon de créer un objet Cercle de la classe Cercle(rayon=5) ?", opts:["Cercle.new(5)","c = Cercle(5)","c = new Cercle(5)","Cercle.create(5)"], ans:1, exp:"En Python, on crée un objet en appelant la classe comme une fonction : c = Cercle(5). Python appelle automatiquement __init__(self, 5)." },
    { q:"La méthode __init__ doit-elle retourner une valeur ?", opts:["Oui, retourner self","Oui, retourner True si succès","Non, elle doit implicitement retourner None","Oui, retourner l'objet créé"], ans:2, exp:"__init__ NE DOIT PAS utiliser return (sauf return None implicite). Si on retourne autre chose que None, Python lève une TypeError." },
    { q:"Quel est le rôle de la POO par rapport à la programmation procédurale ?", opts:["La POO est toujours plus rapide","La POO organise le code en entités (objets) cohérentes, facilitant la réutilisation et la maintenance","La POO supprime toutes les fonctions","La POO est uniquement pour les grands projets"], ans:1, exp:"La POO améliore l'organisation, la réutilisabilité et la maintenabilité du code en regroupant les données et comportements liés dans des entités cohérentes (objets)." },
    { q:"Qu'est-ce que la composition en POO ?", opts:["Une classe qui hérite d'une autre","Un objet qui contient d'autres objets comme attributs","Un objet qui se transforme","Une méthode qui appelle une autre"], ans:1, exp:"La composition = 'a-un' : class Voiture avec self.moteur = Moteur(). La Voiture CONTIENT un Moteur. Alternative à l'héritage pour la réutilisation de code." },
    { q:"Comment accéder à un attribut x d'un objet obj ?", opts:["obj->x","obj::x","obj.x","obj[x]"], ans:2, exp:"En Python, on accède aux attributs avec la notation pointée : obj.x. Pour les dictionnaires c'est dict['clé']. Pour les tableaux c'est liste[indice]." },
    { q:"Le terme 'dunder' (ex: __init__, __str__) signifie :", opts:["Double under-score (double tiret bas)","Méthode dangereuse","Méthode dépréciée","Méthode de débogage"], ans:0, exp:"'dunder' = double underscore. Ces méthodes spéciales (magiques) permettent aux objets de fonctionner avec les opérateurs et fonctions Python intégrées." },
    { q:"En héritant de la classe mère, une méthode redéfinie dans la classe fille :", opts:["Supprime la méthode de la mère","Remplace (override) la méthode de la mère pour les instances de la fille","Ne fonctionne pas","Crée une erreur de compilation"], ans:1, exp:"Si une classe fille redéfinit une méthode de la mère, c'est la version fille qui est utilisée pour les instances de la fille. C'est le mécanisme de surcharge (override)." },
    { q:"Quelle instruction permet de lister toutes les méthodes et attributs d'un objet ?", opts:["obj.list()","print(obj.__all__)","dir(obj)","inspect(obj)"], ans:2, exp:"dir(obj) retourne la liste de tous les attributs et méthodes disponibles pour obj, y compris les méthodes héritées et les dunder methods." },
    { q:"Un objet immuable en Python est un objet dont :", opts:["Les attributs peuvent être modifiés","L'état ne peut pas être modifié après création","Il ne peut pas être utilisé","Il ne peut pas avoir de méthodes"], ans:1, exp:"Un objet immuable ne peut pas être modifié après sa création. En Python : int, str, float, tuple sont immuables. list, dict, set sont mutables." },
    { q:"La méthode __del__ en Python est :", opts:["Le constructeur","Le destructeur, appelé quand l'objet est supprimé","La méthode de copie","La méthode de comparaison"], ans:1, exp:"__del__ est le destructeur, appelé quand l'objet est collecté par le garbage collector. En Python, son utilisation est déconseillée en général." },
    { q:"Qu'est-ce qu'une méthode abstraite ?", opts:["Une méthode sans corps (body) qui DOIT être implémentée dans les sous-classes","Une méthode privée","Une méthode statique","Une méthode de classe"], ans:0, exp:"Une méthode abstraite définit une interface sans implémentation. Les sous-classes concrètes DOIVENT l'implémenter. En Python : from abc import ABC, abstractmethod." },
    { q:"L'opérateur 'in' sur un objet utilise la méthode :", opts:["__contains__","__in__","__has__","__include__"], ans:0, exp:"x in obj appelle obj.__contains__(x). Si non défini, Python essaie de parcourir l'objet via __iter__. Utile pour créer des collections personnalisées." },
    { q:"Un attribut déclaré en dehors de __init__ mais dans la classe est :", opts:["Inaccessible","Un attribut d'instance","Un attribut de classe (partagé)","Une erreur de syntaxe"], ans:2, exp:"class Chien: pattes = 4 → pattes est un attribut de classe partagé par tous les objets Chien. Modifiable via Chien.pattes = 5 (pour tous) ou obj.pattes = 5 (pour cet objet uniquement)." },
    { q:"Qu'est-ce que le principe de substitution de Liskov (LSP) ?", opts:["Toute sous-classe doit pouvoir remplacer sa classe mère sans casser le programme","Les classes doivent avoir des noms en majuscules","Toute méthode doit retourner un type précis","Les classes ne doivent pas s'hériter"], ans:0, exp:"LSP : une sous-classe doit être utilisable partout où la classe mère est attendue, sans provoquer de comportements inattendus. C'est un principe fondamental du bon design OO." },
    { q:"Quelle est la différence entre un attribut et une méthode ?", opts:["Aucune différence","Un attribut stocke une valeur, une méthode est une fonction définie dans la classe","Un attribut est toujours public, une méthode toujours privée","Les méthodes ne peuvent pas modifier les attributs"], ans:1, exp:"Attribut = donnée/variable associée à un objet (self.nom = 'Alice'). Méthode = fonction associée à la classe qui opère sur les attributs (def saluer(self):)." },
    { q:"Comment définit-on une propriété (getter) avec le décorateur @property ?", opts:["@getter def nom(self):","@property def nom(self): return self._nom","property(self.nom)","def get_nom(self):"], ans:1, exp:"@property transforme une méthode en attribut accédé en lecture. On accède par obj.nom (sans parenthèses). Pour un setter : @nom.setter def nom(self, val):." },
    { q:"La notation obj.__class__.__name__ donne :", opts:["Le nom du module","Le nom de la classe de l'objet","Le type Python interne","L'id de l'objet"], ans:1, exp:"__class__ est la référence à la classe de l'objet. __class__.__name__ donne le nom de cette classe sous forme de chaîne. Équivalent à type(obj).__name__." },
    { q:"Peut-on définir __add__ pour faire A + B où A est un entier et B est un objet personnalisé ?", opts:["Non, impossible","Oui, via __radd__ dans la classe de B","Oui, en modifiant la classe int","Non, seulement si A est aussi de la même classe"], ans:1, exp:"Si A + B échoue (int.__add__ ne sait pas gérer B), Python essaie B.__radd__(A). Définir __radd__ dans la classe de B permet cette opération." },
    { q:"Qu'est-ce que le duck typing en Python ?", opts:["Un type de données Python","Si un objet a les méthodes attendues, il peut être utilisé (peu importe sa classe)","Un type d'héritage","Une forme de polymorphisme uniquement pour les méthodes dunder"], ans:1, exp:"'Si ça marche comme un canard et que ça cancane, c'est un canard.' Python ne vérifie pas le type, mais que les méthodes/attributs nécessaires existent." },
    { q:"La méthode __iter__ permet à un objet d'être :", opts:["Trié","Utilisé dans une boucle for (itérable)","Hashé","Affiché"], ans:1, exp:"__iter__ doit retourner un itérateur (objet avec __next__). En définissant __iter__ et __next__, on rend un objet itérable (utilisable dans for, list(), etc.)." },
    { q:"La relation d'héritage crée-t-elle une copie des méthodes dans la classe fille ?", opts:["Oui, toujours","Non, la classe fille délègue à la mère via MRO sans copier le code","Seulement les méthodes publiques","Uniquement si on utilise super()"], ans:1, exp:"L'héritage ne copie pas le code. Python utilise le MRO (Method Resolution Order) pour trouver la méthode dans la hiérarchie. Le code reste dans la classe où il est défini." },
    { q:"Quelle est la sortie de `print(type(42))`?", opts:["int","<class 'int'>","42","Integer"], ans:1, exp:"type(42) renvoie l'objet classe <class 'int'>. print() affiche sa représentation : <class 'int'>. En Python, TOUT est objet, même les types." },
    { q:"Pour créer une interface (class abstraite) en Python :", opts:["class MaClasse(interface):","from abc import ABC, abstractmethod","@interface","class MaClasse(Abstract):"], ans:1, exp:"Python utilise le module abc (Abstract Base Class). On hérite de ABC et décore les méthodes avec @abstractmethod. Instancier une classe avec des méthodes abstraites lève TypeError." },
    { q: "Quelle est la sortie de : class A:\n    x = 5\na = A()\nb = A()\na.x = 10\nprint(b.x)", opts:["10","5","AttributeError","None"], ans:1, exp:"a.x = 10 crée un attribut d'instance sur a seulement. b.x lit toujours l'attribut de classe (5). Les deux sont distincts." },
    { q: "Le mot-clé `super()` sert à :", opts:["Créer une nouvelle instance","Appeler une méthode de la classe parente","Supprimer un attribut","Vérifier l'héritage"], ans:1, exp:"super() renvoie un proxy vers la classe parente. super().__init__() est le moyen standard d'appeler le constructeur parent depuis une sous-classe." },
    { q: "Quelle méthode est appelée par `print(obj)` ?", opts:["__print__","__display__","__str__","__repr__"], ans:2, exp:"__str__ est appelée par str() et print(). __repr__ est appelée par repr() et dans le REPL. Si __str__ manque, Python utilise __repr__ en fallback." },
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 5 : Bases de données & SQL (programme de Terminale)
     Chaque question porte son niveau (niv). Les requêtes sont dans un
     bloc de code (pre.qcm-code) ; les questions chiffrées affichent à
     côté les tables de la base d'entraînement (div.qcm-data).
     ═══════════════════════════════════════════════════════════ */
  bdd: [

    /* ── FACILE : vocabulaire, lecture de requêtes simples (35 questions) ── */
    { niv:"facile", q:"Dans une relation, une clé primaire :",
      opts:["est toujours le premier attribut","peut prendre deux fois la même valeur","identifie chaque ligne de façon unique et n’est jamais NULL","fait référence à une autre relation"], ans:2, exp:"Deux lignes ne peuvent pas avoir la même clé primaire : c’est la contrainte de relation." },
    { niv:"facile", q:"Une clé étrangère :",
      opts:["identifie chaque ligne de sa relation","est unique dans sa relation","fait référence à la clé primaire d’une autre relation","est toujours un nombre entier"], ans:2, exp:"Exemple : <code>Livre.Num_SS</code> fait référence à <code>Lecteur.Num_SS</code>." },
    { niv:"facile", q:"Le domaine d’un attribut est :",
      opts:["le nom de sa relation","l’ensemble des valeurs qu’il peut prendre","le nombre de lignes de la relation","sa position dans le schéma"], ans:1, exp:"Par exemple : entiers de 15 chiffres pour un numéro de sécurité sociale." },
    { niv:"facile", q:"Dans <code>Livre (<u>Isbn</u>, #Num_SS, Titre, Annee, Prix)</code>, <code>#Num_SS</code> est :",
      opts:["un domaine","un attribut obligatoire","la clé primaire","une clé étrangère"], ans:3, exp:"Le dièse signale une clé étrangère ; la clé primaire est soulignée." },
    { niv:"facile", q:"Un tuple (ou enregistrement) est :",
      opts:["une table","une ligne d’une relation","une colonne d’une relation","une clé"], ans:1, exp:"Tuple = ligne = enregistrement ; attribut = colonne." },
    { niv:"facile", q:"La structure d’une base de données, c’est :",
      opts:["l’ensemble de ses lignes","le fichier stocké sur le disque","l’ensemble de ses schémas relationnels","le résultat d’une requête"], ans:2, exp:"La structure (schémas) change rarement ; le contenu (lignes) change à chaque mise à jour." },
    { niv:"facile", q:"Un schéma relationnel indique :",
      opts:["le nom de la relation, ses attributs, leurs domaines et les clés","toutes les lignes de la relation","le SGBD utilisé","les requêtes autorisées sur la relation"], ans:0, exp:"Le schéma décrit la structure, pas le contenu." },
    { niv:"facile", q:"Combien d’attributs compte la relation <code>Reservation (<u>#Mid, #Bid, jour</u>)</code> ?",
      opts:["1","4","3","2"], ans:2, exp:"<code>Mid</code>, <code>Bid</code> et <code>jour</code> : trois attributs, qui forment ensemble la clé primaire." },
    { niv:"facile", q:"Pour la relation <code>Auteur</code>, on crée un identifiant artificiel <code>Id_auteur</code> car :",
      opts:["la nationalité peut être NULL","SQL interdit les clés primaires textuelles","aucun attribut n’est unique : deux auteurs peuvent porter le même nom","les noms sont trop longs"], ans:2, exp:"Une clé primaire doit être unique pour chaque ligne." },
    { niv:"facile", q:"Insérer un livre dont le <code>Num_SS</code> n’existe pas dans <code>Lecteur</code> viole la contrainte :",
      opts:["de domaine","de relation","de référence","utilisateur"], ans:2, exp:"Une clé étrangère doit référencer une clé primaire existante." },
    { niv:"facile", q:"Insérer deux lignes avec la même clé primaire viole la contrainte :",
      opts:["aucune contrainte","de référence","de relation","de domaine"], ans:2, exp:"La clé primaire doit être unique." },
    { niv:"facile", q:"Saisir <code>'Paul'</code> comme <code>Num_SS</code> (entier de 15 chiffres) viole la contrainte :",
      opts:["de domaine","de référence","de relation","aucune contrainte"], ans:0, exp:"La valeur n’appartient pas au domaine de l’attribut." },
    { niv:"facile", q:"Dans un <code>CREATE TABLE</code>, <code>NOT NULL</code> signifie :",
      opts:["la valeur ne peut pas être absente","l’attribut est une clé étrangère","la valeur vaut 0 par défaut","la valeur doit être unique"], ans:0, exp:"<code>Titre TEXT NOT NULL</code> : tout livre a un titre." },
    { niv:"facile", q:"Recopier le nom de l’auteur sur chaque ligne de <code>Livre</code> provoque surtout :",
      opts:["des accès concurrents","de la redondance","une clé étrangère","une meilleure cohérence"], ans:1, exp:"La même information est stockée plusieurs fois : risque d’anomalies." },
    { niv:"facile", q:"Que signifie SGBD ?",
      opts:["Serveur général de bases distribuées","Système global de bases dynamiques","Script de gestion des bases de données","Système de gestion de bases de données"], ans:3, exp:"Exemples : SQLite, MySQL, PostgreSQL." },
    { niv:"facile", q:"Quel service du SGBD permet à deux bibliothécaires de modifier la base en même temps sans la corrompre ?",
      opts:["l’efficacité des requêtes","la sécurisation des accès","la persistance","la gestion des accès concurrents"], ans:3, exp:"Le SGBD organise les accès simultanés." },
    { niv:"facile", q:"La persistance des données signifie que :",
      opts:["les données sont chiffrées","les données survivent à l’arrêt du programme ou de la machine","les requêtes sont rapides","les données ne changent jamais"], ans:1, exp:"Les données sont stockées sur disque." },
    { niv:"facile", q:"Pour sélectionner les livres non empruntés, on écrit :",
      opts:["<code>WHERE Num_SS == NULL</code>","<code>WHERE NULL(Num_SS)</code>","<code>WHERE Num_SS = NULL</code>","<code>WHERE Num_SS IS NULL</code>"], ans:3, exp:"Avec NULL, on écrit toujours <code>IS NULL</code> ou <code>IS NOT NULL</code>." },
    { niv:"facile", q:"Quel mot-clé supprime les doublons du résultat ?",
      opts:["<code>UNIQUE</code>","<code>ORDER BY</code>","<code>DISTINCT</code>","<code>DELETE</code>"], ans:2, exp:"<code>SELECT DISTINCT Nationalite FROM Auteur;</code>" },
    { niv:"facile", q:"<code>ORDER BY Annee DESC</code> trie :",
      opts:["de la plus petite année à la plus grande","au hasard","de la plus grande année à la plus petite","par ordre alphabétique des titres"], ans:2, exp:"DESC = décroissant ; ASC (par défaut) = croissant." },
    { niv:"facile", q:"<code>Titre LIKE 'Le%'</code> sélectionne les titres :",
      opts:["égaux à « Le% »","de exactement 3 caractères","qui finissent par « Le »","qui commencent par « Le »"], ans:3, exp:"<code>%</code> remplace n’importe quelle suite de caractères, <code>_</code> un seul caractère." },
    { niv:"facile", q:"<code>Annee BETWEEN 1900 AND 1950</code> :",
      opts:["exclut 1900 et 1950","n’existe pas en SQL","inclut 1900 et 1950","inclut 1900 mais pas 1950"], ans:2, exp:"Les bornes de BETWEEN sont incluses." },
    { niv:"facile", q:"En SQL, une chaîne de caractères s’écrit :",
      opts:["entre crochets : <code>[Camus]</code>","sans délimiteur : <code>Camus</code>","entre apostrophes : <code>'Camus'</code>","entre dièses : <code>#Camus#</code>"], ans:2, exp:"Sans apostrophes, Camus serait pris pour un nom de colonne." },
    { niv:"facile", q:"Quel ordre des clauses est correct ?",
      opts:["SELECT … FROM … JOIN … ON … WHERE … ORDER BY …","SELECT … FROM … ORDER BY … WHERE …","FROM … SELECT … WHERE …","SELECT … WHERE … FROM … ORDER BY …"], ans:0, exp:"L’ordre des clauses est imposé." },
    { niv:"facile", q:"Le résultat d’une requête SELECT est :",
      opts:["une table","une clé","une base de données","toujours une seule valeur"], ans:0, exp:"Même un <code>COUNT(*)</code> renvoie une table d’une ligne et une colonne." },
    { niv:"facile", q:"<code>COUNT(Prix)</code> compte :",
      opts:["la somme des prix","les valeurs différentes de Prix","les lignes où Prix n’est pas NULL","toutes les lignes"], ans:2, exp:"<code>COUNT(*)</code> compte toutes les lignes, <code>COUNT(attribut)</code> ignore les NULL." },
    { niv:"facile", q:"<code>COUNT(DISTINCT Ville)</code> compte :",
      opts:["la ville la plus fréquente","le nombre de villes non NULL, doublons compris","le nombre de lignes","le nombre de villes différentes"], ans:3, exp:"DISTINCT dans COUNT : chaque valeur n’est comptée qu’une fois." },
    { niv:"facile", q:"Quelle requête est incorrecte ?",
      opts:["<code>SELECT AVG(Age) FROM Lecteur WHERE Age &gt; 18;</code>","<code>SELECT Titre FROM Livre WHERE COUNT(*) &gt; 3;</code>","<code>SELECT MAX(Annee) FROM Livre;</code>","<code>SELECT COUNT(*) FROM Livre;</code>"], ans:1, exp:"On ne met pas de fonction d’agrégation dans un WHERE." },
    { niv:"facile", q:"Dans une jointure, la condition <code>ON</code> relie le plus souvent :",
      opts:["deux attributs de même nom, quels qu’ils soient","deux clés primaires quelconques","une clé étrangère à la clé primaire qu’elle référence","un attribut et une valeur"], ans:2, exp:"<code>ON Table1.fk = Table2.pk</code>." },
    { niv:"facile", q:"Le message « ambiguous column name: Num_SS » signifie :",
      opts:["Num_SS vaut NULL","la jointure est impossible","Num_SS n’existe pas","Num_SS existe dans plusieurs tables de la requête : il faut le préfixer"], ans:3, exp:"On écrit <code>Livre.Num_SS</code> ou <code>Lecteur.Num_SS</code>." },
    { niv:"facile", q:"Dans <code>Livre JOIN Lecteur ON Livre.Num_SS = Lecteur.Num_SS</code>, un livre non emprunté :",
      opts:["provoque une erreur","apparaît deux fois","n’apparaît pas dans le résultat","apparaît avec un lecteur NULL"], ans:2, exp:"Une jointure ne garde que les lignes qui ont une correspondance." },
    { niv:"facile", q:"Pour relier 4 tables en chaîne, il faut :",
      opts:["3 JOIN","2 JOIN","1 seul JOIN","4 JOIN"], ans:0, exp:"n tables = n − 1 jointures." },
    { niv:"facile", q:"Quelle requête modifie l’année d’un seul livre ?<pre class=\"qcm-code\"><code><span class=\"cm\">-- Requête A</span>\n<span class=\"kw\">UPDATE</span> Livre\n<span class=\"kw\">SET</span> Annee = <span class=\"nb\">1943</span>;\n\n<span class=\"cm\">-- Requête B</span>\n<span class=\"kw\">INSERT</span> <span class=\"kw\">INTO</span> Livre (Annee)\n<span class=\"kw\">VALUES</span> (<span class=\"nb\">1943</span>);\n\n<span class=\"cm\">-- Requête C</span>\n<span class=\"kw\">UPDATE</span> Livre\n<span class=\"kw\">SET</span> Annee = <span class=\"nb\">1943</span>\n<span class=\"kw\">WHERE</span> Isbn = <span class=\"nb\">9782070293889</span>;\n\n<span class=\"cm\">-- Requête D</span>\n<span class=\"kw\">UPDATE</span> Annee = <span class=\"nb\">1943</span>\n<span class=\"kw\">FROM</span> Livre;</code></pre>",
      opts:["Requête A","Requête B","Requête C","Requête D"], ans:2, exp:"Sans WHERE, tous les livres seraient modifiés." },
    { niv:"facile", q:"<code>DELETE FROM Lecteur;</code> (sans WHERE) :",
      opts:["supprime toutes les lignes de Lecteur","provoque une erreur de syntaxe","ne fait rien","supprime la table et sa structure"], ans:0, exp:"La table reste, vide. Tester son WHERE avec un SELECT avant." },
    { niv:"facile", q:"Quelle requête ajoute une ligne ?",
      opts:["<code>UPDATE Marin ADD (12, 'Riou', 3, 30);</code>","<code>ADD INTO Marin VALUES (12, 'Riou', 3, 30);</code>","<code>SELECT INTO Marin (12, 'Riou', 3, 30);</code>","<code>INSERT INTO Marin VALUES (12, 'Riou', 3, 30);</code>"], ans:3, exp:"INSERT INTO … VALUES …" },

    /* ── MOYEN : résultats sur la base d’entraînement, intégrité, agrégats (25 questions) ── */
    { niv:"moyen", q:"La clé primaire de <code>Reservation (<u>#Mid, #Bid, jour</u>)</code> est :",
      opts:["jour seul","le couple (Mid, Bid)","le triplet (Mid, Bid, jour)","Mid seul"], ans:2, exp:"Tous les attributs soulignés forment la clé : un marin peut réserver le même bateau plusieurs fois, à des jours différents." },
    { niv:"moyen", q:"La clé primaire de <code>Ecrire (<u>#Isbn, #Id_auteur</u>, Nb_chapitres)</code> est :",
      opts:["Id_auteur seul","il n’y en a pas","Isbn seul","le couple (Isbn, Id_auteur)"], ans:3, exp:"Un livre ou un auteur peut apparaître plusieurs fois, mais pas le même couple." },
    { niv:"moyen", q:"Un livre a plusieurs auteurs et un auteur écrit plusieurs livres. Pour le modéliser, on :",
      opts:["ajoute une clé étrangère dans Livre","crée une relation d’association avec deux clés étrangères","ajoute une clé étrangère dans Auteur","fusionne Livre et Auteur"], ans:1, exp:"C’est la relation <code>Ecrire(#Isbn, #Id_auteur, …)</code>." },
    { niv:"moyen", q:"Un livre est emprunté par au plus un lecteur à la fois. Où place-t-on la clé étrangère ?",
      opts:["nulle part","dans une nouvelle relation Emprunt obligatoirement","dans Livre : #Num_SS","dans Lecteur : #Isbn"], ans:2, exp:"Chaque livre « pointe » vers son emprunteur ; <code>Num_SS</code> vaut NULL si le livre est disponible." },
    { niv:"moyen", q:"Quelle ligne d’un <code>CREATE TABLE</code> déclare une clé étrangère ?<pre class=\"qcm-code\"><code><span class=\"cm\">-- Requête A</span>\nNum_SS <span class=\"fn\">INTEGER</span> <span class=\"kw\">NOT</span> <span class=\"kw\">NULL</span>\n\n<span class=\"cm\">-- Requête B</span>\n<span class=\"kw\">FOREIGN</span> <span class=\"kw\">KEY</span> (Num_SS) <span class=\"kw\">REFERENCES</span> Lecteur(Num_SS)\n\n<span class=\"cm\">-- Requête C</span>\n<span class=\"kw\">PRIMARY</span> <span class=\"kw\">KEY</span> (Num_SS)\n\n<span class=\"cm\">-- Requête D</span>\n<span class=\"kw\">CHECK</span> (LENGTH(Num_SS) = <span class=\"nb\">15</span>)</code></pre>",
      opts:["Requête A","Requête B","Requête C","Requête D"], ans:1, exp:"On doit savoir <em>lire</em> un CREATE TABLE au bac." },
    { niv:"moyen", q:"Supprimer le seul livre d’un auteur efface toute trace de cet auteur. C’est une anomalie de :",
      opts:["suppression","insertion","mise à jour","jointure"], ans:0, exp:"Remède : une relation <code>Auteur</code> séparée." },
    { niv:"moyen", q:"Dans une table « tout-en-un », on ne peut pas enregistrer un auteur tant qu’on n’a aucun de ses livres. C’est une anomalie :",
      opts:["de domaine","d’insertion","de suppression","de mise à jour"], ans:1, exp:"On découpe en plusieurs relations reliées par des clés étrangères." },
    { niv:"moyen", q:"Pour corriger la nationalité de Camus dans une table « tout-en-un », il faut modifier toutes ses lignes. C’est une anomalie de :",
      opts:["référence","suppression","insertion","mise à jour"], ans:3, exp:"En oublier une rend la base incohérente." },
    { niv:"moyen", q:"Un lecteur peut consulter le catalogue mais pas modifier les prêts. Quel service du SGBD est en jeu ?",
      opts:["la persistance","la sécurisation (droits des utilisateurs)","l’efficacité","les accès concurrents"], ans:1, exp:"Authentification et droits différents selon les utilisateurs." },
    { niv:"moyen", q:"Une transaction respecte l’atomicité lorsqu’elle :",
      opts:["est exécutée par un seul utilisateur","ne peut jamais échouer","ne concerne qu’une seule ligne","est exécutée entièrement ou pas du tout"], ans:3, exp:"Un virement débite ET crédite, ou ne fait rien." },
    { niv:"moyen", q:"Combien de lignes renvoie cette requête sur la base d’entraînement ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> Titre <span class=\"kw\">FROM</span> Livre <span class=\"kw\">WHERE</span> Annee &lt; <span class=\"nb\">1900</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Annee</th></tr><tr><td>Le gai savoir</td><td>1882</td></tr><tr><td>Oui-Oui et son grelot</td><td>1962</td></tr><tr><td>Astérix le Gaulois</td><td>1961</td></tr><tr><td>La serpe d'or</td><td>1962</td></tr><tr><td>L'être et le néant</td><td>1943</td></tr><tr><td>Le deuxième sexe</td><td>1949</td></tr><tr><td>L'étranger</td><td>1942</td></tr><tr><td>La peste</td><td>1947</td></tr><tr><td>1984</td><td>1949</td></tr><tr><td>Fondation</td><td>1951</td></tr><tr><td>Discours de la méthode</td><td>1637</td></tr><tr><td>Frankenstein</td><td>1818</td></tr><tr><td>Les misérables</td><td>1862</td></tr><tr><td>Les dépossédés</td><td>1974</td></tr><tr><td>Le seigneur des anneaux</td><td>1954</td></tr><tr><td>Le vrai goût des tomates mûres</td><td>2016</td></tr><tr><td>La géométrie</td><td>1637</td></tr></table></div></div>",
      opts:["6","4","17","5"], ans:3, exp:"Le gai savoir, La géométrie, Les misérables, Frankenstein, Discours de la méthode." },
    { niv:"moyen", q:"Combien de lignes renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> Bnom <span class=\"kw\">FROM</span> Bateau <span class=\"kw\">WHERE</span> couleur = <span class=\"st\">'rouge'</span> <span class=\"kw\">OR</span> couleur = <span class=\"st\">'bleu'</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Bateau</caption><tr><th>Bnom</th><th>couleur</th></tr><tr><td>Pen Duick</td><td>bleu</td></tr><tr><td>Licorne</td><td>rouge</td></tr><tr><td>Sirène</td><td>vert</td></tr><tr><td>Marie-Galante</td><td>bleu</td></tr><tr><td>Albatros</td><td>blanc</td></tr><tr><td>Goéland</td><td>rouge</td></tr><tr><td>Nautilus</td><td>noir</td></tr><tr><td>Belle-Île</td><td>jaune</td></tr></table></div></div>",
      opts:["2","4","8","0"], ans:1, exp:"Pen Duick, Licorne, Marie-Galante, Goéland. Avec AND, aucun bateau ne serait à la fois rouge et bleu." },
    { niv:"moyen", q:"Combien de lignes renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"kw\">DISTINCT</span> Nationalite <span class=\"kw\">FROM</span> Auteur;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Auteur</caption><tr><th>Nom_auteur</th><th>Nationalite</th></tr><tr><td>Nietzsche</td><td>Allemande</td></tr><tr><td>Sartre</td><td>Française</td></tr><tr><td>Descartes</td><td>Française</td></tr><tr><td>Camus</td><td>Française</td></tr><tr><td>Hugo</td><td>Française</td></tr><tr><td>Blyton</td><td>Britannique</td></tr><tr><td>Orwell</td><td>Britannique</td></tr><tr><td>de Beauvoir</td><td>Française</td></tr><tr><td>Asimov</td><td>Américaine</td></tr><tr><td>Le Guin</td><td>Américaine</td></tr><tr><td>Goscinny</td><td>Française</td></tr><tr><td>Uderzo</td><td>Française</td></tr><tr><td>Potager</td><td>Française</td></tr><tr><td>Shelley</td><td>Britannique</td></tr><tr><td>Tolkien</td><td>Britannique</td></tr></table></div></div>",
      opts:["3","4","1","15"], ans:1, exp:"Allemande, Française, Britannique, Américaine : chaque nationalité une seule fois." },
    { niv:"moyen", q:"Quelle requête donne le nom des marins qui ont effectué <strong>au moins</strong> 15 sorties ?",
      opts:["<code>SELECT Mnom FROM Marin WHERE nbSorties &gt; 15;</code>","<code>SELECT nbSorties FROM Marin WHERE Mnom &gt;= 15;</code>","<code>SELECT Mnom FROM Marin WHERE nbSorties &gt;= 15;</code>","<code>SELECT Mnom FROM Marin ORDER BY 15;</code>"], ans:2, exp:"« Au moins 15 » : 15 compris, donc <code>&gt;=</code>." },
    { niv:"moyen", q:"Que renvoie cette requête ?<pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> Mnom <span class=\"kw\">FROM</span> Marin <span class=\"kw\">WHERE</span> age &lt; <span class=\"nb\">30</span> <span class=\"kw\">ORDER</span> <span class=\"kw\">BY</span> age;</code></pre>",
      opts:["les marins de 30 ans et plus","les marins de moins de 30 ans, du plus jeune au plus âgé","le nombre de marins de moins de 30 ans","les marins de moins de 30 ans, du plus âgé au plus jeune"], ans:1, exp:"ORDER BY sans précision trie par ordre croissant (ASC)." },
    { niv:"moyen", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">COUNT</span>(<span class=\"kw\">DISTINCT</span> Ville) <span class=\"kw\">FROM</span> Client;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Client</caption><tr><th>NomCli</th><th>Ville</th></tr><tr><td>Durand</td><td>Lagny-sur-Marne</td></tr><tr><td>Petit</td><td>Meaux</td></tr><tr><td>Bernard</td><td>Lagny-sur-Marne</td></tr><tr><td>Garcia</td><td>Torcy</td></tr><tr><td>Leroy</td><td>Meaux</td></tr><tr><td>Fontaine</td><td>Chessy</td></tr><tr><td>Roux</td><td>Torcy</td></tr><tr><td>Lefèvre</td><td>Bussy-Saint-Georges</td></tr></table></div></div>",
      opts:["1","5","8","4"], ans:1, exp:"Lagny-sur-Marne, Meaux, Torcy, Chessy, Bussy-Saint-Georges." },
    { niv:"moyen", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">AVG</span>(Age) <span class=\"kw\">FROM</span> Lecteur;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Lecteur</caption><tr><th>Nom_lecteur</th><th>Age</th></tr><tr><td>Martin</td><td>25</td></tr><tr><td>Topor</td><td>88</td></tr><tr><td>Moreau</td><td>64</td></tr><tr><td>De La Grandière</td><td>37</td></tr><tr><td>Bébert</td><td>31</td></tr><tr><td>Nguyen</td><td>27</td></tr><tr><td>Lambert</td><td>21</td></tr><tr><td>Michu</td><td>66</td></tr><tr><td>Diallo</td><td>48</td></tr><tr><td>Rossi</td><td>42</td></tr></table></div></div>",
      opts:["88","44.9","10","449"], ans:1, exp:"La somme des âges vaut 449 pour 10 lecteurs." },
    { niv:"moyen", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">MAX</span>(nbSorties) <span class=\"kw\">FROM</span> Marin;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Marin</caption><tr><th>Mnom</th><th>nbSorties</th></tr><tr><td>Corto</td><td>22</td></tr><tr><td>Haddock</td><td>35</td></tr><tr><td>Surcouf</td><td>8</td></tr><tr><td>Tabarly</td><td>41</td></tr><tr><td>Riou</td><td>15</td></tr><tr><td>Autissier</td><td>12</td></tr><tr><td>Kersauson</td><td>3</td></tr><tr><td>Peyron</td><td>19</td></tr><tr><td>Moitessier</td><td>0</td></tr><tr><td>Joyon</td><td>27</td></tr></table></div></div>",
      opts:["10","52","41","Tabarly"], ans:2, exp:"MAX renvoie la plus grande valeur, pas le nom du marin." },
    { niv:"moyen", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">COUNT</span>(*) <span class=\"kw\">FROM</span> Marin <span class=\"kw\">WHERE</span> age &lt; <span class=\"nb\">30</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Marin</caption><tr><th>Mnom</th><th>age</th></tr><tr><td>Corto</td><td>45</td></tr><tr><td>Haddock</td><td>52</td></tr><tr><td>Surcouf</td><td>31</td></tr><tr><td>Tabarly</td><td>38</td></tr><tr><td>Riou</td><td>27</td></tr><tr><td>Autissier</td><td>29</td></tr><tr><td>Kersauson</td><td>24</td></tr><tr><td>Peyron</td><td>33</td></tr><tr><td>Moitessier</td><td>22</td></tr><tr><td>Joyon</td><td>41</td></tr></table></div></div>",
      opts:["4","3","6","10"], ans:0, exp:"Le WHERE garde d’abord les marins de moins de 30 ans (Riou, Autissier, Kersauson, Moitessier), puis COUNT les compte." },
    { niv:"moyen", q:"Au bac, <code>GROUP BY</code> et <code>HAVING</code> :",
      opts:["sont obligatoires dès qu’il y a un agrégat","servent à trier le résultat","ne sont pas exigibles (pour aller plus loin)","remplacent le WHERE"], ans:2, exp:"Sans GROUP BY, un agrégat donne une seule ligne pour toute la sélection." },
    { niv:"moyen", q:"Combien de lignes renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> Livre.Titre\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Ecrire <span class=\"kw\">ON</span> Livre.Isbn = Ecrire.Isbn\n<span class=\"kw\">JOIN</span> Auteur <span class=\"kw\">ON</span> Ecrire.Id_auteur = Auteur.Id_auteur\n<span class=\"kw\">WHERE</span> Auteur.Nom_auteur = <span class=\"st\">'Camus'</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Auteur</caption><tr><th>Id_auteur</th><th>Nom_auteur</th></tr><tr><td>1</td><td>Nietzsche</td></tr><tr><td>2</td><td>Sartre</td></tr><tr><td>3</td><td>Descartes</td></tr><tr><td>4</td><td>Camus</td></tr><tr><td>5</td><td>Hugo</td></tr><tr><td>6</td><td>Blyton</td></tr><tr><td>7</td><td>Orwell</td></tr><tr><td>8</td><td>de Beauvoir</td></tr><tr><td>9</td><td>Asimov</td></tr><tr><td>10</td><td>Le Guin</td></tr><tr><td>11</td><td>Goscinny</td></tr><tr><td>12</td><td>Uderzo</td></tr><tr><td>13</td><td>Potager</td></tr><tr><td>14</td><td>Shelley</td></tr><tr><td>15</td><td>Tolkien</td></tr></table><table class=\"qcm-tab\"><caption>Ecrire</caption><tr><th>Isbn</th><th>Id_auteur</th></tr><tr><td>9781533468406</td><td>1</td></tr><tr><td>9782010019425</td><td>6</td></tr><tr><td>9782012101333</td><td>11</td></tr><tr><td>9782012101333</td><td>12</td></tr><tr><td>9782012101340</td><td>11</td></tr><tr><td>9782012101340</td><td>12</td></tr><tr><td>9782070293889</td><td>2</td></tr><tr><td>9782070323517</td><td>8</td></tr><tr><td>9782070360024</td><td>4</td></tr><tr><td>9782070360420</td><td>4</td></tr><tr><td>9782070368228</td><td>7</td></tr><tr><td>9782070415731</td><td>9</td></tr><tr><td>9782070612888</td><td>3</td></tr><tr><td>9782253004226</td><td>14</td></tr><tr><td>9782253096344</td><td>5</td></tr><tr><td>9782253113881</td><td>10</td></tr><tr><td>9782266282369</td><td>15</td></tr><tr><td>9782845638556</td><td>13</td></tr><tr><td>9782876470194</td><td>3</td></tr></table><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Isbn</th><th>Titre</th></tr><tr><td>9781533468406</td><td>Le gai savoir</td></tr><tr><td>9782010019425</td><td>Oui-Oui et son grelot</td></tr><tr><td>9782012101333</td><td>Astérix le Gaulois</td></tr><tr><td>9782012101340</td><td>La serpe d'or</td></tr><tr><td>9782070293889</td><td>L'être et le néant</td></tr><tr><td>9782070323517</td><td>Le deuxième sexe</td></tr><tr><td>9782070360024</td><td>L'étranger</td></tr><tr><td>9782070360420</td><td>La peste</td></tr><tr><td>9782070368228</td><td>1984</td></tr><tr><td>9782070415731</td><td>Fondation</td></tr><tr><td>9782070612888</td><td>Discours de la méthode</td></tr><tr><td>9782253004226</td><td>Frankenstein</td></tr><tr><td>9782253096344</td><td>Les misérables</td></tr><tr><td>9782253113881</td><td>Les dépossédés</td></tr><tr><td>9782266282369</td><td>Le seigneur des anneaux</td></tr><tr><td>9782845638556</td><td>Le vrai goût des tomates mûres</td></tr><tr><td>9782876470194</td><td>La géométrie</td></tr></table></div></div>",
      opts:["1","2","3","0"], ans:1, exp:"L’étranger et La peste : trois tables, donc deux JOIN." },
    { niv:"moyen", q:"Pour obtenir le nom des marins qui ont réservé un bateau bleu, quelles tables faut-il relier ?",
      opts:["Marin, Reservation et Bateau (2 JOIN)","Marin et Bateau (1 JOIN)","Reservation seule","Marin seule"], ans:0, exp:"Le nom est dans Marin, la couleur dans Bateau : Reservation fait le lien." },
    { niv:"moyen", q:"Une jointure écrite sans condition de jointure :",
      opts:["supprime les doublons","associe chaque ligne de la première table à toutes les lignes de la seconde","renvoie une erreur","renvoie une table vide"], ans:1, exp:"On obtient toutes les combinaisons : le résultat n’a pas de sens." },
    { niv:"moyen", q:"Paul Nguyen rend « 1984 » (Isbn 9782070368228). Quelle requête l’enregistre ?<pre class=\"qcm-code\"><code><span class=\"cm\">-- Requête A</span>\n<span class=\"kw\">DELETE</span>\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">WHERE</span> Isbn = <span class=\"nb\">9782070368228</span>;\n\n<span class=\"cm\">-- Requête B</span>\n<span class=\"kw\">DELETE</span>\n<span class=\"kw\">FROM</span> Lecteur\n<span class=\"kw\">WHERE</span> Nom_lecteur = <span class=\"st\">'Nguyen'</span>;\n\n<span class=\"cm\">-- Requête C</span>\n<span class=\"kw\">UPDATE</span> Livre\n<span class=\"kw\">SET</span> Num_SS = <span class=\"kw\">NULL</span>;\n\n<span class=\"cm\">-- Requête D</span>\n<span class=\"kw\">UPDATE</span> Livre\n<span class=\"kw\">SET</span> Num_SS = <span class=\"kw\">NULL</span>\n<span class=\"kw\">WHERE</span> Isbn = <span class=\"nb\">9782070368228</span>;</code></pre>",
      opts:["Requête A","Requête B","Requête C","Requête D"], ans:3, exp:"Le livre reste dans la base ; il redevient disponible." },
    { niv:"moyen", q:"Combien de lignes cette requête modifie-t-elle ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">UPDATE</span> Marin <span class=\"kw\">SET</span> nbSorties = nbSorties + <span class=\"nb\">1</span>\n<span class=\"kw\">WHERE</span> nbSorties &gt;= <span class=\"nb\">20</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Marin</caption><tr><th>Mnom</th><th>nbSorties</th></tr><tr><td>Corto</td><td>22</td></tr><tr><td>Haddock</td><td>35</td></tr><tr><td>Surcouf</td><td>8</td></tr><tr><td>Tabarly</td><td>41</td></tr><tr><td>Riou</td><td>15</td></tr><tr><td>Autissier</td><td>12</td></tr><tr><td>Kersauson</td><td>3</td></tr><tr><td>Peyron</td><td>19</td></tr><tr><td>Moitessier</td><td>0</td></tr><tr><td>Joyon</td><td>27</td></tr></table></div></div>",
      opts:["4","3","1","10"], ans:0, exp:"Corto (22), Haddock (35), Tabarly (41) et Joyon (27)." },

    /* ── DIFFICILE : jointures sur plusieurs tables, erreurs, rédaction type bac (15 questions) ── */
    { niv:"difficile", q:"Une clé étrangère peut-elle valoir NULL ?",
      opts:["seulement si elle fait partie de la clé primaire","seulement dans SQLite","non, jamais","oui, si l’attribut n’est pas déclaré NOT NULL"], ans:3, exp:"Dans la base d’entraînement, un livre disponible a <code>Num_SS</code> NULL." },
    { niv:"difficile", q:"Pourquoi le SGBD refuse-t-il <code>DELETE FROM Lecteur WHERE Nom_lecteur = 'Rossi';</code> ?<div class=\"qcm-duo solo\"><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Num_SS</th></tr><tr><td>Le gai savoir</td><td>260097511329671</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td>101127700998877</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td>260097511329671</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td>205037511200145</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td>199117512345678</td></tr><tr><td>Fondation</td><td>278046900112233</td></tr><tr><td>Discours de la méthode</td><td class=\"null\">NULL</td></tr><tr><td>Frankenstein</td><td class=\"null\">NULL</td></tr><tr><td>Les misérables</td><td>199117512345678</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td>284109200445566</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>195084529012355</td></tr></table><table class=\"qcm-tab\"><caption>Lecteur</caption><tr><th>Num_SS</th><th>Nom_lecteur</th></tr><tr><td>101127700998877</td><td>Martin</td></tr><tr><td>138017511671223</td><td>Topor</td></tr><tr><td>162055900776655</td><td>Moreau</td></tr><tr><td>189029231941483</td><td>De La Grandière</td></tr><tr><td>195084529012355</td><td>Bébert</td></tr><tr><td>199117512345678</td><td>Nguyen</td></tr><tr><td>205037511200145</td><td>Lambert</td></tr><tr><td>260097511329671</td><td>Michu</td></tr><tr><td>278046900112233</td><td>Diallo</td></tr><tr><td>284109200445566</td><td>Rossi</td></tr></table></div></div>",
      opts:["Rossi n’existe pas","DELETE est interdit sur Lecteur","Giulia Rossi a un livre : son Num_SS est encore référencé dans Livre","il manque une clé primaire"], ans:2, exp:"Supprimer une ligne encore référencée par une clé étrangère viole la contrainte de référence." },
    { niv:"difficile", q:"Quelle contrainte d’intégrité n’est pas respectée par <code>INSERT INTO Marin VALUES (1, 'Doublon', 0, 30);</code> ?<pre class=\"qcm-code\"><code>Marin (Mid, Mnom, nbSorties, age)\n<span class=\"cm\">-- le marin n° 1 (Corto) existe déjà</span></code></pre>",
      opts:["la contrainte de relation : Mid = 1 est déjà utilisé","la contrainte de domaine : l’âge est trop petit","la contrainte de référence","aucune, l’insertion est acceptée"], ans:0, exp:"Une clé primaire déjà utilisée provoque un refus." },
    { niv:"difficile", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">COUNT</span>(*), <span class=\"fn\">COUNT</span>(Prix) <span class=\"kw\">FROM</span> Livre;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Prix</th></tr><tr><td>Le gai savoir</td><td class=\"null\">NULL</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td class=\"null\">NULL</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td class=\"null\">NULL</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td class=\"null\">NULL</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td class=\"null\">NULL</td></tr><tr><td>Fondation</td><td class=\"null\">NULL</td></tr><tr><td>Discours de la méthode</td><td>15</td></tr><tr><td>Frankenstein</td><td>8</td></tr><tr><td>Les misérables</td><td class=\"null\">NULL</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td class=\"null\">NULL</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>12.5</td></tr></table></div></div>",
      opts:["3 et 3","17 et 3","3 et 17","17 et 17"], ans:1, exp:"17 livres, dont 3 seulement ont un prix renseigné (les autres sont gratuits : Prix NULL)." },
    { niv:"difficile", q:"Que renvoie cette requête (arrondie au centième) ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">AVG</span>(Prix) <span class=\"kw\">FROM</span> Livre;\n<span class=\"cm\">-- 3 livres ont un prix : 12.5 ; 8.0 ; 15.0 (les autres : NULL)</span></code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Prix</th></tr><tr><td>Le gai savoir</td><td class=\"null\">NULL</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td class=\"null\">NULL</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td class=\"null\">NULL</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td class=\"null\">NULL</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td class=\"null\">NULL</td></tr><tr><td>Fondation</td><td class=\"null\">NULL</td></tr><tr><td>Discours de la méthode</td><td>15</td></tr><tr><td>Frankenstein</td><td>8</td></tr><tr><td>Les misérables</td><td class=\"null\">NULL</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td class=\"null\">NULL</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>12.5</td></tr></table></div></div>",
      opts:["NULL","2.09","11.83","35.5"], ans:2, exp:"AVG ignore les NULL : 35,5 / 3 ≈ 11,83. Compter les NULL comme 0 donnerait 35,5 / 17." },
    { niv:"difficile", q:"Pourquoi <code>SELECT Titre, MAX(Annee) FROM Livre;</code> n’est-elle pas acceptée au bac ?",
      opts:["Titre n’existe pas","MAX ne s’applique pas aux années","il manque un WHERE","elle mélange un attribut simple et un agrégat sans GROUP BY"], ans:3, exp:"Sans regroupement, le résultat d’un agrégat tient sur une ligne : on ne peut pas y associer « le » titre." },
    { niv:"difficile", q:"Quelle requête donne le nombre d’auteurs différents qui ont écrit au moins un livre ?",
      opts:["<code>SELECT DISTINCT COUNT(*) FROM Auteur;</code>","<code>SELECT COUNT(Id_auteur) FROM Ecrire;</code>","<code>SELECT COUNT(*) FROM Ecrire;</code>","<code>SELECT COUNT(DISTINCT Id_auteur) FROM Ecrire;</code>"], ans:3, exp:"Goscinny et Uderzo apparaissent plusieurs fois dans Ecrire : sans DISTINCT, on les compterait plusieurs fois." },
    { niv:"difficile", q:"Combien de lignes renvoie cette jointure ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> Livre.Titre, Lecteur.Nom_lecteur\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Lecteur <span class=\"kw\">ON</span> Livre.Num_SS = Lecteur.Num_SS;\n<span class=\"cm\">-- 17 livres, dont 8 non empruntés</span></code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Num_SS</th></tr><tr><td>Le gai savoir</td><td>260097511329671</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td>101127700998877</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td>260097511329671</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td>205037511200145</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td>199117512345678</td></tr><tr><td>Fondation</td><td>278046900112233</td></tr><tr><td>Discours de la méthode</td><td class=\"null\">NULL</td></tr><tr><td>Frankenstein</td><td class=\"null\">NULL</td></tr><tr><td>Les misérables</td><td>199117512345678</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td>284109200445566</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>195084529012355</td></tr></table><table class=\"qcm-tab\"><caption>Lecteur</caption><tr><th>Num_SS</th><th>Nom_lecteur</th></tr><tr><td>101127700998877</td><td>Martin</td></tr><tr><td>138017511671223</td><td>Topor</td></tr><tr><td>162055900776655</td><td>Moreau</td></tr><tr><td>189029231941483</td><td>De La Grandière</td></tr><tr><td>195084529012355</td><td>Bébert</td></tr><tr><td>199117512345678</td><td>Nguyen</td></tr><tr><td>205037511200145</td><td>Lambert</td></tr><tr><td>260097511329671</td><td>Michu</td></tr><tr><td>278046900112233</td><td>Diallo</td></tr><tr><td>284109200445566</td><td>Rossi</td></tr></table></div></div>",
      opts:["8","10","17","9"], ans:3, exp:"Seuls les 9 livres empruntés ont un lecteur correspondant." },
    { niv:"difficile", q:"Quelle requête donne les titres des livres écrits par Descartes ?<pre class=\"qcm-code\"><code><span class=\"cm\">-- Requête A</span>\n<span class=\"kw\">SELECT</span> Livre.Titre\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Auteur <span class=\"kw\">ON</span> Livre.Isbn = Auteur.Id_auteur\n<span class=\"kw\">WHERE</span> Auteur.Nom_auteur = <span class=\"st\">'Descartes'</span>;\n\n<span class=\"cm\">-- Requête B</span>\n<span class=\"kw\">SELECT</span> Livre.Titre\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Ecrire\n<span class=\"kw\">JOIN</span> Auteur\n<span class=\"kw\">WHERE</span> Nom_auteur = Descartes;\n\n<span class=\"cm\">-- Requête C</span>\n<span class=\"kw\">SELECT</span> Titre\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">WHERE</span> Nom_auteur = <span class=\"st\">'Descartes'</span>;\n\n<span class=\"cm\">-- Requête D</span>\n<span class=\"kw\">SELECT</span> Livre.Titre\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Ecrire <span class=\"kw\">ON</span> Livre.Isbn = Ecrire.Isbn\n<span class=\"kw\">JOIN</span> Auteur <span class=\"kw\">ON</span> Ecrire.Id_auteur = Auteur.Id_auteur\n<span class=\"kw\">WHERE</span> Auteur.Nom_auteur = <span class=\"st\">'Descartes'</span>;</code></pre>",
      opts:["Requête A","Requête B","Requête C","Requête D"], ans:3, exp:"Livre et Auteur ne sont reliés que par Ecrire : chemin Livre → Ecrire → Auteur, une condition par lien." },
    { niv:"difficile", q:"Combien de lignes renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"kw\">DISTINCT</span> Lecteur.Nom_lecteur\n<span class=\"kw\">FROM</span> Lecteur\n<span class=\"kw\">JOIN</span> Livre <span class=\"kw\">ON</span> Lecteur.Num_SS = Livre.Num_SS;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Num_SS</th></tr><tr><td>Le gai savoir</td><td>260097511329671</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td>101127700998877</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td>260097511329671</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td>205037511200145</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td>199117512345678</td></tr><tr><td>Fondation</td><td>278046900112233</td></tr><tr><td>Discours de la méthode</td><td class=\"null\">NULL</td></tr><tr><td>Frankenstein</td><td class=\"null\">NULL</td></tr><tr><td>Les misérables</td><td>199117512345678</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td>284109200445566</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>195084529012355</td></tr></table><table class=\"qcm-tab\"><caption>Lecteur</caption><tr><th>Num_SS</th><th>Nom_lecteur</th></tr><tr><td>101127700998877</td><td>Martin</td></tr><tr><td>138017511671223</td><td>Topor</td></tr><tr><td>162055900776655</td><td>Moreau</td></tr><tr><td>189029231941483</td><td>De La Grandière</td></tr><tr><td>195084529012355</td><td>Bébert</td></tr><tr><td>199117512345678</td><td>Nguyen</td></tr><tr><td>205037511200145</td><td>Lambert</td></tr><tr><td>260097511329671</td><td>Michu</td></tr><tr><td>278046900112233</td><td>Diallo</td></tr><tr><td>284109200445566</td><td>Rossi</td></tr></table></div></div>",
      opts:["10","9","5","7"], ans:3, exp:"9 livres empruntés, mais Michu et Nguyen en ont deux chacun : DISTINCT garde 7 noms." },
    { niv:"difficile", q:"Que renvoie cette requête ?<div class=\"qcm-duo\"><div><pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"fn\">COUNT</span>(*)\n<span class=\"kw\">FROM</span> Livre\n<span class=\"kw\">JOIN</span> Lecteur <span class=\"kw\">ON</span> Livre.Num_SS = Lecteur.Num_SS\n<span class=\"kw\">WHERE</span> Lecteur.Age &gt; <span class=\"nb\">40</span>;</code></pre></div><div class=\"qcm-data\"><table class=\"qcm-tab\"><caption>Livre</caption><tr><th>Titre</th><th>Num_SS</th></tr><tr><td>Le gai savoir</td><td>260097511329671</td></tr><tr><td>Oui-Oui et son grelot</td><td class=\"null\">NULL</td></tr><tr><td>Astérix le Gaulois</td><td>101127700998877</td></tr><tr><td>La serpe d'or</td><td class=\"null\">NULL</td></tr><tr><td>L'être et le néant</td><td>260097511329671</td></tr><tr><td>Le deuxième sexe</td><td class=\"null\">NULL</td></tr><tr><td>L'étranger</td><td>205037511200145</td></tr><tr><td>La peste</td><td class=\"null\">NULL</td></tr><tr><td>1984</td><td>199117512345678</td></tr><tr><td>Fondation</td><td>278046900112233</td></tr><tr><td>Discours de la méthode</td><td class=\"null\">NULL</td></tr><tr><td>Frankenstein</td><td class=\"null\">NULL</td></tr><tr><td>Les misérables</td><td>199117512345678</td></tr><tr><td>Les dépossédés</td><td class=\"null\">NULL</td></tr><tr><td>Le seigneur des anneaux</td><td>284109200445566</td></tr><tr><td>Le vrai goût des tomates mûres</td><td class=\"null\">NULL</td></tr><tr><td>La géométrie</td><td>195084529012355</td></tr></table><table class=\"qcm-tab\"><caption>Lecteur</caption><tr><th>Num_SS</th><th>Nom_lecteur</th><th>Age</th></tr><tr><td>101127700998877</td><td>Martin</td><td>25</td></tr><tr><td>138017511671223</td><td>Topor</td><td>88</td></tr><tr><td>162055900776655</td><td>Moreau</td><td>64</td></tr><tr><td>189029231941483</td><td>De La Grandière</td><td>37</td></tr><tr><td>195084529012355</td><td>Bébert</td><td>31</td></tr><tr><td>199117512345678</td><td>Nguyen</td><td>27</td></tr><tr><td>205037511200145</td><td>Lambert</td><td>21</td></tr><tr><td>260097511329671</td><td>Michu</td><td>66</td></tr><tr><td>278046900112233</td><td>Diallo</td><td>48</td></tr><tr><td>284109200445566</td><td>Rossi</td><td>42</td></tr></table></div></div>",
      opts:["9","4","3","5"], ans:1, exp:"Michu (66 ans) a 2 livres, Diallo (48 ans) et Rossi (42 ans) un chacun ; Topor et Moreau n’en ont aucun." },
    { niv:"difficile", q:"Cette requête s’exécute, mais son résultat est faux. Pourquoi ?<pre class=\"qcm-code\"><code><span class=\"kw\">SELECT</span> <span class=\"kw\">DISTINCT</span> Marin.Mnom\n<span class=\"kw\">FROM</span> Marin\n<span class=\"kw\">JOIN</span> Reservation <span class=\"kw\">ON</span> Marin.Mid = Reservation.Mid\n<span class=\"kw\">JOIN</span> Bateau <span class=\"kw\">ON</span> Reservation.Mid = Bateau.Bid\n<span class=\"kw\">WHERE</span> Bateau.couleur = <span class=\"st\">'bleu'</span>;</code></pre>",
      opts:["on ne peut pas écrire deux JOIN","la 2e condition relie Reservation.Mid à Bateau.Bid, des attributs sans rapport","il faut écrire deux DISTINCT","couleur doit être préfixé par Marin"], ans:1, exp:"Il faut <code>Reservation.Bid = Bateau.Bid</code> : clé étrangère = clé primaire qu’elle référence." },
    { niv:"difficile", q:"Pour supprimer l’auteur Camus (Id_auteur 4) sans violer de contrainte, il faut d’abord :",
      opts:["rien, la suppression est directe","supprimer ses lignes dans Ecrire","modifier sa clé primaire","supprimer ses livres dans Lecteur"], ans:1, exp:"On supprime d’abord les lignes qui font référence à l’auteur ; à l’inverse, on insère d’abord la ligne référencée." },
    { niv:"difficile", q:"« Justifier que <code>Num_SS</code> peut servir de clé primaire de <code>Lecteur</code>. » Quelle réponse est complète ?",
      opts:["Parce qu’il est en premier dans la table.","Deux lecteurs distincts ne peuvent pas avoir le même numéro de sécurité sociale, et ce numéro est toujours renseigné.","Num_SS c’est la clé car c’est unique.","Parce que c’est un nombre."], ans:1, exp:"Phrase complète, vocabulaire du cours : unicité et absence de NULL." },
    { niv:"difficile", q:"« Expliquer pourquoi Roland Topor n’apparaît pas dans le résultat de <code>Livre JOIN Lecteur ON Livre.Num_SS = Lecteur.Num_SS</code>. »",
      opts:["La jointure garde seulement la première ligne.","Son nom contient une majuscule.","Il a plus de 80 ans.","Aucun livre ne fait référence à son Num_SS : il n’a pas de correspondance dans la jointure."], ans:3, exp:"Une jointure ne garde que les lignes qui ont une correspondance." }
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 6 : Réseaux
     ═══════════════════════════════════════════════════════════ */
  reseaux: [
    { q:"Le modèle OSI décrit le réseau en combien de couches ?", opts:["4","5","7","3"], ans:2, exp:"Le modèle OSI (Open Systems Interconnection) décompose les communications réseau en 7 couches : physique, liaison, réseau, transport, session, présentation, application." },
    { q:"L'adresse IP identifie :", opts:["Uniquement un réseau","Une machine sur un réseau (interface réseau)","Un câble réseau","Un protocole"], ans:1, exp:"L'adresse IP (Internet Protocol) identifie une interface réseau (généralement une machine) sur un réseau. Elle permet l'adressage et le routage des paquets." },
    { q:"Qu'est-ce qu'un protocole réseau ?", opts:["Un câble réseau","Un ensemble de règles qui définissent comment les données sont échangées","Un type de commutateur","Une adresse IP"], ans:1, exp:"Un protocole est un ensemble de règles et de conventions qui régissent les communications entre équipements réseau. Exemples : TCP, UDP, HTTP, DNS, DHCP." },
    { q:"Le protocole TCP se distingue de UDP par :", opts:["TCP est plus rapide","TCP garantit la livraison des données (connexion fiable), UDP ne le fait pas","UDP est orienté connexion","TCP ne peut pas fragmenter les données"], ans:1, exp:"TCP est orienté connexion (handshake 3 voies), garantit l'ordre et la livraison via acquittements. UDP est sans connexion, plus rapide mais sans garantie (streaming, DNS)." },
    { q:"Le protocole HTTP fonctionne à la couche :", opts:["Physique","Réseau","Transport","Application"], ans:3, exp:"HTTP (HyperText Transfer Protocol) est un protocole de la couche Application. Il s'appuie sur TCP (couche Transport) pour le transport fiable des données web." },
    { q:"Une adresse IPv4 est codée sur :", opts:["4 octets (32 bits)","6 octets (48 bits)","16 octets (128 bits)","8 octets (64 bits)"], ans:0, exp:"IPv4 utilise 32 bits = 4 octets, notée en décimale pointée : 192.168.1.1. IPv6 utilise 128 bits = 16 octets pour pallier l'épuisement des adresses IPv4." },
    { q:"Le routage est l'opération qui consiste à :", opts:["Attribuer une adresse IP","Choisir le chemin que vont emprunter les paquets de données","Chiffrer les données","Convertir les noms de domaine en IP"], ans:1, exp:"Le routage détermine le chemin optimal pour acheminer les paquets d'une source à une destination. Les routeurs examinent l'adresse de destination et consultent leur table de routage." },
    { q:"Le DNS (Domain Name System) sert à :", opts:["Attribuer des adresses IP dynamiques","Traduire les noms de domaine (ex: google.com) en adresses IP","Chiffrer les communications","Router les paquets"], ans:1, exp:"Le DNS est l'annuaire d'Internet : il traduit les noms de domaine lisibles (www.google.com) en adresses IP (142.250.x.x) que les machines comprennent." },
    { q:"HTTPS diffère de HTTP car :", opts:["Il est plus lent","Il chiffre les communications via TLS/SSL","Il ne supporte pas les images","Il utilise un port différent mais sans chiffrement"], ans:1, exp:"HTTPS = HTTP + TLS (Transport Layer Security). Les données sont chiffrées entre le navigateur et le serveur. HTTPS utilise le port 443, HTTP le port 80." },
    { q:"Une adresse MAC est :", opts:["Une adresse IP","L'adresse physique (matérielle) unique d'une interface réseau, codée sur 6 octets","Le nom d'un ordinateur","L'adresse d'un routeur"], ans:1, exp:"L'adresse MAC (Media Access Control) est codée sur 48 bits (6 octets) en hexadécimal : AA:BB:CC:DD:EE:FF. Elle est associée à la carte réseau physique (couche Liaison)." },
    { q:"Le protocole DHCP sert à :", opts:["Chiffrer les données","Attribuer automatiquement des adresses IP aux machines d'un réseau","Router les paquets","Résoudre les noms de domaine"], ans:1, exp:"DHCP (Dynamic Host Configuration Protocol) attribue automatiquement une adresse IP (et autres paramètres réseau) aux machines qui se connectent, évitant la configuration manuelle." },
    { q:"Qu'est-ce qu'un masque de sous-réseau ?", opts:["Une protection contre les virus","Un filtre qui indique quelle partie de l'adresse IP désigne le réseau et quelle partie désigne l'hôte","Un routeur virtuel","Un type de câble réseau"], ans:1, exp:"Le masque (ex: 255.255.255.0 ou /24) indique combien de bits de l'IP sont pour le réseau vs l'hôte. Avec IP=192.168.1.5 et masque /24 : réseau=192.168.1.0, hôte=5." },
    { q:"La couche Transport du modèle OSI gère :", opts:["Le câblage physique","L'adressage MAC","La communication de bout en bout (TCP/UDP), segmentation, contrôle de flux","La traduction des noms de domaine"], ans:2, exp:"La couche Transport (TCP/UDP) assure la communication de bout en bout entre processus, avec gestion des erreurs (TCP), des ports, de la segmentation." },
    { q:"Un routeur opère principalement à la couche :", opts:["Physique","Liaison (MAC)","Réseau (IP)","Application"], ans:2, exp:"Un routeur travaille à la couche Réseau (couche 3 OSI). Il examine les adresses IP pour acheminer les paquets entre différents réseaux." },
    { q:"La technique du chiffrement symétrique utilise :", opts:["Deux clés différentes (publique et privée)","La même clé pour chiffrer et déchiffrer","Aucune clé","Une clé publique pour chiffrer, pas de clé pour déchiffrer"], ans:1, exp:"Chiffrement symétrique : même clé pour chiffrer et déchiffrer (ex: AES). Avantage : rapide. Inconvénient : comment partager la clé secrètement ? Résolu par le chiffrement asymétrique." },
    { q:"Le chiffrement asymétrique (RSA) utilise :", opts:["Une seule clé secrète","Une paire de clés : clé publique (pour chiffrer) et clé privée (pour déchiffrer)","Aucune clé","Plusieurs clés symétriques"], ans:1, exp:"RSA utilise une paire de clés : la clé publique (partageable librement) chiffre les données, seule la clé privée (secrète) peut les déchiffrer. Résout le problème d'échange de clés." },
    { q:"HTTP utilise par défaut le port :", opts:["443","8080","80","22"], ans:2, exp:"HTTP → port 80. HTTPS → port 443. SSH → port 22. FTP → port 21. Ces numéros de port standard permettent aux serveurs de distinguer les services." },
    { q:"Un commutateur (switch) opère à la couche :", opts:["Physique","Liaison (MAC)","Réseau (IP)","Application"], ans:1, exp:"Le commutateur (switch) travaille à la couche Liaison (couche 2). Il utilise les adresses MAC pour transférer les trames à l'intérieur d'un réseau local (LAN)." },
    { q:"Le protocole SSL/TLS sert à :", opts:["Compresser les données","Établir une communication sécurisée chiffrée sur Internet","Router les paquets","Attribuer des IP"], ans:1, exp:"TLS (Transport Layer Security, successeur de SSL) chiffre les communications. Utilisé par HTTPS, mais aussi par d'autres protocoles (SMTP sécurisé, etc.)." },
    { q:"L'adresse IP 127.0.0.1 est :", opts:["L'adresse d'un routeur","L'adresse de loopback (localhost) qui désigne la machine locale","Une adresse de diffusion","Une adresse IPv6"], ans:1, exp:"127.0.0.1 (localhost) est l'adresse de loopback : les paquets envoyés à cette adresse restent sur la machine locale. Utile pour tester les services réseau localement." },
    { q:"Le protocole ARP permet de :", opts:["Trouver l'adresse IP depuis un nom de domaine","Trouver l'adresse MAC correspondant à une adresse IP (dans un LAN)","Chiffrer les communications","Attribuer des IP"], ans:1, exp:"ARP (Address Resolution Protocol) résout les adresses IP en adresses MAC au sein d'un réseau local. Quand une machine veut envoyer à 192.168.1.5, elle diffuse 'qui a cette IP ?'" },
    { q:"Qu'est-ce qu'un pare-feu (firewall) ?", opts:["Un routeur plus rapide","Un dispositif qui filtre le trafic réseau selon des règles, protégeant un réseau","Un serveur DNS","Un type de câble réseau"], ans:1, exp:"Un pare-feu analyse le trafic réseau entrant et sortant selon des règles de sécurité définies, bloquant le trafic non autorisé. Peut être matériel ou logiciel." },
    { q:"L'adresse 192.168.x.x appartient à la plage :", opts:["Adresses publiques Internet","Adresses privées (non routables sur Internet)","Adresses IPv6","Adresses de diffusion"], ans:1, exp:"192.168.0.0/16 est une plage d'adresses privées (RFC 1918), comme 10.0.0.0/8 et 172.16.0.0/12. Ces adresses ne sont pas routées sur Internet (NAT nécessaire)." },
    { q:"Le modèle TCP/IP a combien de couches ?", opts:["7","4","3","5"], ans:1, exp:"Le modèle TCP/IP (Internet) a 4 couches : Accès réseau (≈ Liaison+Physique OSI), Internet (≈ Réseau), Transport, Application (≈ Session+Présentation+Application OSI)." },
    { q:"Un VPN (Virtual Private Network) sert à :", opts:["Accélérer la connexion","Créer un tunnel chiffré pour sécuriser les communications sur un réseau non sûr","Attribuer des IP","Compresser les données"], ans:1, exp:"Un VPN crée un tunnel chiffré entre deux points sur Internet. Utilisé pour sécuriser les communications (travail à distance, protection vie privée) ou contourner les restrictions géographiques." },
    { q:"Le protocole UDP est préféré à TCP pour :", opts:["Les transferts de fichiers","Le streaming vidéo/audio en temps réel et les jeux en ligne","Les emails","La navigation web"], ans:1, exp:"UDP est sans connexion et plus rapide. Pour le streaming ou les jeux, perdre quelques paquets est acceptable, mais la latence doit être minimale. TCP est trop lent (acquittements)." },
    { q:"La notation CIDR /24 dans 192.168.1.0/24 signifie :", opts:["24 machines sur le réseau","Les 24 premiers bits sont l'adresse réseau (masque 255.255.255.0)","24 sous-réseaux","24 routeurs"], ans:1, exp:"/24 signifie que les 24 premiers bits identifient le réseau (192.168.1) et les 8 derniers bits l'hôte (0-255). Cela permet 254 hôtes (256 - adresse réseau - broadcast)." },
    { q:"Qu'est-ce que la latence réseau ?", opts:["La vitesse de téléchargement","Le délai de transmission d'un paquet de sa source à sa destination","La bande passante","Le nombre de routeurs"], ans:1, exp:"La latence est le délai (en ms) entre l'envoi et la réception d'un paquet. Importante pour les applications interactives (jeux, voix). Différente de la bande passante (débit)." },
    { q:"Le protocole SMTP est utilisé pour :", opts:["Naviguer sur le web","Envoyer des emails","Recevoir des emails (IMAP/POP3 pour ça)","Transférer des fichiers"], ans:1, exp:"SMTP (Simple Mail Transfer Protocol) est le protocole d'envoi d'emails. IMAP et POP3 sont utilisés pour recevoir et lire les emails depuis un serveur." },
    { q:"Un réseau local (LAN) diffère d'un WAN par :", opts:["La vitesse : LAN est toujours plus lent","LAN couvre une zone géographique limitée (bâtiment), WAN couvre de grandes distances (internet)","Le protocole utilisé","Le nombre maximum de machines"], ans:1, exp:"LAN (Local Area Network) = réseau local dans un bâtiment ou campus. WAN (Wide Area Network) = réseau à grande échelle (Internet est le plus grand WAN)." },
    { q:"Le chiffrement de bout en bout (end-to-end) garantit que :", opts:["La connexion est rapide","Seuls l'émetteur et le destinataire peuvent lire les données (pas les intermédiaires)","Le paquet ne se perd pas","L'IP est cachée"], ans:1, exp:"Le chiffrement E2E chiffre les données au niveau de l'application. Même si un serveur intermédiaire reçoit les données chiffrées, il ne peut pas les lire. Exemple : WhatsApp, Signal." },
    { q:"L'algorithme de routage à vecteur de distance (RIP) partage :", opts:["Toutes les routes avec tous les routeurs","La distance (coût) vers chaque destination avec ses voisins directs","L'état complet du réseau","Uniquement les routes directes"], ans:1, exp:"Dans RIP (Routing Information Protocol), chaque routeur partage sa table de routage (distances) avec ses voisins. La distance est en nombre de sauts (hops). Max 15 sauts." },
    { q:"L'OSPF est un protocole de routage qui utilise :", opts:["Des vecteurs de distance","L'état des liens (link-state) : chaque routeur connaît la topologie complète","Des tables statiques uniquement","La diffusion de paquets UDP"], ans:1, exp:"OSPF (Open Shortest Path First) est un protocole à état de liens. Chaque routeur diffuse l'état de ses liens, ce qui permet à tous de construire une carte du réseau et calculer les meilleures routes (Dijkstra)." },
    { q:"Qu'est-ce que le NAT (Network Address Translation) ?", opts:["Un type de câble réseau","La traduction d'adresses IP privées en adresses publiques (et vice-versa) au niveau du routeur","Un protocole de chiffrement","Un système de noms de domaine alternatif"], ans:1, exp:"NAT permet à plusieurs machines avec des adresses IP privées de partager une seule adresse IP publique. Le routeur maintient une table de traduction des connexions." },
    { q:"Le protocole FTP est utilisé pour :", opts:["Naviguer sur le web","Envoyer des emails","Transférer des fichiers entre machines","Résoudre des noms de domaine"], ans:2, exp:"FTP (File Transfer Protocol) permet le transfert de fichiers entre machines. Remplacé souvent par SFTP (FTP sécurisé via SSH) pour les transferts chiffrés." },
    { q:"La bande passante (bandwidth) désigne :", opts:["La latence du réseau","Le débit maximum de données pouvant transiter sur un lien (bits/s)","Le nombre de routeurs","La taille des paquets"], ans:1, exp:"La bande passante est la capacité maximale de transmission d'un lien réseau (ex: 100 Mb/s). Ne pas confondre avec la latence (délai) ou le débit effectif (throughput)." },
    { q:"Quel protocole de la couche application permet de sécuriser les échanges web ?", opts:["HTTP","FTP","HTTPS (avec TLS)","SMTP"], ans:2, exp:"HTTPS utilise TLS pour chiffrer les échanges HTTP. Le navigateur vérifie aussi le certificat numérique du serveur pour s'assurer de son authenticité (éviter les attaques man-in-the-middle)." },
    { q:"Un switch VLAN permet de :", opts:["Augmenter la bande passante","Segmenter logiquement un réseau physique en plusieurs réseaux isolés","Chiffrer le trafic","Attribuer des IP dynamiquement"], ans:1, exp:"Un VLAN (Virtual LAN) segmente logiquement un réseau physique. Des machines sur le même VLAN peuvent communiquer entre elles mais pas avec d'autres VLAN sans routeur." },
    { q:"Le rôle du TTL (Time To Live) dans un paquet IP est :", opts:["La durée de validité du chiffrement","Limiter la durée de vie d'un paquet (décrémenté à chaque routeur) pour éviter les boucles","La priorité du paquet","La taille maximale du paquet"], ans:1, exp:"TTL est un compteur décrémenté par chaque routeur. Quand il atteint 0, le paquet est détruit et un message ICMP 'Time Exceeded' est envoyé à l'émetteur. Évite les boucles de routage." },
    { q:"La commande ping utilise le protocole :", opts:["TCP","UDP","ICMP","HTTP"], ans:2, exp:"ping utilise ICMP (Internet Control Message Protocol) pour envoyer des messages 'echo request' et recevoir des 'echo reply', mesurant la connectivité et la latence." },
    { q:"Le protocole SSH (Secure Shell) permet :", opts:["La navigation web sécurisée","L'accès à distance sécurisé (chiffré) à un terminal sur une machine distante","L'envoi d'emails chiffrés","Le transfert de fichiers uniquement"], ans:1, exp:"SSH chiffre la connexion à un terminal distant. Remplace Telnet (non chiffré). Utilise le port 22. Aussi utilisé pour le transfert de fichiers sécurisé (SCP, SFTP)." },
    { q:"Le chiffrement RSA repose sur :", opts:["La difficulté de factoriser de grands nombres","La difficulté de trier un grand tableau","Des clés symétriques","Le protocole TCP"], ans:0, exp:"RSA est basé sur la difficulté computationnelle de factoriser le produit de deux grands nombres premiers. C'est un problème que même les ordinateurs modernes ne savent pas résoudre rapidement." },
    { q: "Le port 443 est associé à quel protocole ?", opts:["HTTP","FTP","HTTPS (TLS)","SSH"], ans:2, exp:"Le port 443 est le port standard pour HTTPS (HTTP sur TLS). Le port 80 est pour HTTP, 22 pour SSH, 21 pour FTP." },
    { q: "Qu'est-ce qu'une adresse MAC ?", opts:["Une adresse IP locale","Un identifiant physique unique de 48 bits d'une carte réseau","Un nom de domaine","Un masque de sous-réseau"], ans:1, exp:"L'adresse MAC (Media Access Control) est un identifiant de 48 bits (6 octets en hexa) gravé dans la carte réseau. Elle opère en couche 2 (liaison)." },
    { q: "Le protocole ARP sert à :", opts:["Résoudre les noms de domaine","Trouver l'adresse MAC correspondant à une adresse IP","Chiffrer les communications","Attribuer des adresses IP dynamiquement"], ans:1, exp:"ARP (Address Resolution Protocol) permet de trouver l'adresse MAC d'une machine à partir de son adresse IP sur le réseau local (couche 2)." },
    { q: "Quelle est la plage d'adresses privées de classe C ?", opts:["10.0.0.0 – 10.255.255.255","172.16.0.0 – 172.31.255.255","192.168.0.0 – 192.168.255.255","169.254.0.0 – 169.254.255.255"], ans:2, exp:"192.168.0.0/16 est la plage privée de classe C. 10.0.0.0/8 est classe A, 172.16.0.0/12 est classe B. 169.254.x.x est APIPA (auto-affectation)." },
    { q: "Un pare-feu (firewall) fonctionne principalement sur :", opts:["Les couches 1 et 2","Les couches 3 et 4 (filtrage par IP et port)","La couche 7 uniquement","La couche physique"], ans:1, exp:"Un pare-feu classique (stateful) filtre selon l'adresse IP (couche 3) et le port TCP/UDP (couche 4). Un WAF (Web Application Firewall) opère en couche 7." },
    { q: "Qu'est-ce que le NAT (Network Address Translation) ?", opts:["Un protocole de chiffrement","Un mécanisme qui traduit les adresses IP privées en adresses publiques","Un type de câble réseau","Un protocole de routage"], ans:1, exp:"Le NAT permet à plusieurs machines d'un réseau privé de partager une seule adresse IP publique. Le routeur modifie les adresses dans les paquets." },
    { q: "La durée de vie d'un paquet IP est contrôlée par :", opts:["Le champ 'checksum'","Le champ TTL (Time To Live)","L'adresse de destination","Le protocole de transport"], ans:1, exp:"Le TTL est décrémenté de 1 à chaque routeur. Quand il atteint 0, le paquet est supprimé et un message ICMP 'Time Exceeded' est envoyé. Évite les boucles infinies." },
    { q: "HTTPS offre principalement :", opts:["Une connexion plus rapide","Confidentialité, intégrité et authentification du serveur","Un meilleur routage","Une compression des données"], ans:1, exp:"TLS garantit : confidentialité (chiffrement), intégrité (HMAC, impossible de modifier les données), et authentification du serveur (certificat vérifié)." },
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 7 : Architecture & OS
     ═══════════════════════════════════════════════════════════ */
  architecture: [
    { q:"Le modèle de Von Neumann décrit un ordinateur avec :", opts:["Seulement un processeur","Un processeur, une mémoire, des entrées/sorties, et un bus reliant ces composants","Plusieurs processeurs indépendants","Un processeur sans mémoire vive"], ans:1, exp:"Le modèle de Von Neumann (1945) : processeur (ALU + UC), mémoire (données et instructions au même endroit), unité d'E/S et bus de communication. Fondement de l'informatique moderne." },
    { q:"Le rôle du processeur (CPU) est :", opts:["Stocker les données","Exécuter les instructions d'un programme","Gérer les E/S uniquement","Afficher les données"], ans:1, exp:"Le CPU (Central Processing Unit) exécute les instructions : il les récupère en mémoire (fetch), les décode (decode), les exécute (execute) et stocke les résultats (write-back)." },
    { q:"La mémoire RAM est :", opts:["Une mémoire permanente","Une mémoire volatile (perdue à l'extinction) et rapide pour stocker les données en cours d'exécution","Une mémoire de masse (disque dur)","Le registre du processeur"], ans:1, exp:"La RAM (Random Access Memory) est volatile : son contenu est perdu à l'extinction. Elle stocke temporairement programmes et données en cours d'exécution. L'accès est rapide (ns)." },
    { q:"Un processus est :", opts:["Un programme stocké sur disque","Un programme en cours d'exécution avec ses ressources (mémoire, fichiers ouverts, état)","Un thread uniquement","Le code source d'un programme"], ans:1, exp:"Un processus = programme en cours d'exécution. Il possède : son propre espace mémoire, des fichiers ouverts, un état (actif, en attente...). Plusieurs processus peuvent exécuter le même programme." },
    { q:"L'ordonnanceur (scheduler) de l'OS gère :", opts:["Le stockage des fichiers","Le réseau","L'allocation du temps processeur entre les processus","La mémoire virtuelle uniquement"], ans:2, exp:"L'ordonnanceur décide quel processus a accès au CPU à chaque instant. Il applique un algorithme (round-robin, priorités...) pour partager équitablement le processeur." },
    { q:"La mémoire cache (L1, L2, L3) est :", opts:["La mémoire virtuelle","Une mémoire très rapide et petite placée entre le CPU et la RAM","Le disque dur SSD","La mémoire ROM"], ans:1, exp:"Le cache est une mémoire ultra-rapide (SRAM) intégrée au CPU. L1 est le plus rapide mais le plus petit, L3 est plus grand mais plus lent. Il stocke les données fréquemment utilisées." },
    { q:"Le rôle du système d'exploitation (OS) est :", opts:["Exécuter uniquement les jeux","Faire l'intermédiaire entre le matériel et les applications, gérer les ressources","Stocker les fichiers de l'utilisateur uniquement","Gérer l'affichage uniquement"], ans:1, exp:"L'OS gère les ressources matérielles (CPU, mémoire, E/S) et fournit des services aux applications via des appels système. Il gère aussi les fichiers, processus et la sécurité." },
    { q:"Un bit est :", opts:["La plus petite unité de stockage : 0 ou 1","8 bits","1024 octets","1 caractère"], ans:0, exp:"Un bit (binary digit) est la plus petite unité d'information : 0 ou 1. 8 bits = 1 octet (byte). 1 Ko = 1024 octets. 1 Mo = 1024 Ko. 1 Go = 1024 Mo." },
    { q:"La représentation en complément à deux est utilisée pour :", opts:["Les nombres flottants","Les entiers signés (positifs et négatifs) en binaire","Les caractères","Les adresses mémoire uniquement"], ans:1, exp:"Le complément à deux permet de représenter les entiers négatifs en binaire. Sur 8 bits : -1 = 11111111, -128 = 10000000. L'addition est identique pour signés et non signés." },
    { q:"Un deadlock (interblocage) se produit quand :", opts:["Le CPU est surchargé","Deux processus s'attendent mutuellement et indéfiniment, chacun bloquant une ressource dont l'autre a besoin","Un processus prend trop de mémoire","L'OS plante"], ans:1, exp:"Deadlock : le processus A détient R1 et attend R2, le processus B détient R2 et attend R1. Personne n'avance. Nécessite 4 conditions (Coffman) : exclusion mutuelle, hold-and-wait, no preemption, attente circulaire." },
    { q:"La mémoire virtuelle permet :", opts:["D'augmenter la vitesse du CPU","D'utiliser l'espace disque comme extension de la RAM, permettant d'exécuter des programmes plus grands que la RAM physique","De partager la mémoire entre programmes sans isolation","De supprimer le cache"], ans:1, exp:"La mémoire virtuelle utilise le disque (espace d'échange/swap) pour étendre la RAM. L'OS crée l'illusion que chaque processus a accès à un grand espace d'adressage continu." },
    { q:"L'ALU (Arithmetic Logic Unit) dans un processeur :", opts:["Stocke les instructions","Effectue les opérations arithmétiques (+,-,*,/) et logiques (AND, OR, NOT)","Gère les entrées/sorties","Décode les instructions uniquement"], ans:1, exp:"L'ALU est le composant du CPU qui effectue les calculs : opérations arithmétiques (add, sub, mul, div) et logiques (and, or, xor, not, comparaisons). C'est le 'moteur de calcul' du CPU." },
    { q:"Les registres d'un processeur sont :", opts:["De la mémoire de masse","De petites mémoires ultra-rapides intégrées au CPU (ex: PC, SP, accumulateurs)","La mémoire RAM","Le cache L3"], ans:1, exp:"Les registres sont les mémoires les plus rapides d'un ordinateur (1 accès par cycle CPU). Le PC (Program Counter) contient l'adresse de la prochaine instruction. Le SP (Stack Pointer) pointe vers le sommet de la pile." },
    { q:"Le bus système dans un ordinateur sert à :", opts:["Alimenter les composants en électricité","Transporter les données entre les composants (CPU, RAM, E/S)","Stocker les données","Calculer les adresses mémoire"], ans:1, exp:"Le bus est un ensemble de fils conducteurs transportant les données, les adresses et les signaux de contrôle entre les composants. Il existe le bus de données, d'adresses et de contrôle." },
    { q:"Un thread (fil d'exécution) est :", opts:["Un processus complet","Une unité d'exécution légère au sein d'un processus, partageant sa mémoire","Une interruption matérielle","Un programme indépendant"], ans:1, exp:"Un thread est une 'micro-tâche' à l'intérieur d'un processus. Plusieurs threads partagent la même mémoire du processus (donc plus légers que les processus). Permettent le parallélisme." },
    { q:"L'instruction fetch-decode-execute est :", opts:["Un algorithme de tri","Le cycle fondamental d'exécution d'une instruction par le CPU","Un protocole réseau","Une étape de compilation"], ans:1, exp:"Chaque instruction passe par : Fetch (lecture depuis la mémoire via le PC), Decode (décodage par l'unité de contrôle), Execute (calcul par l'ALU ou accès mémoire)." },
    { q:"L'encodage ASCII utilise combien de bits par caractère ?", opts:["4 bits","7 ou 8 bits","16 bits","32 bits"], ans:1, exp:"ASCII (American Standard Code for Information Interchange) utilise 7 bits (128 caractères) ou 8 bits (ASCII étendu). UTF-8 est son successeur, compatible ASCII mais supportant tous les caractères Unicode." },
    { q:"UTF-8 est un encodage :", opts:["Fixe à 8 bits par caractère","Variable : 1 à 4 octets par caractère, compatible ASCII pour les 128 premiers","Seulement pour les caractères ASCII","Identique à UTF-16"], ans:1, exp:"UTF-8 est un encodage de longueur variable : les caractères ASCII utilisent 1 octet, les caractères européens 2 octets, et d'autres peuvent nécessiter 3 ou 4 octets." },
    { q:"La représentation binaire de l'entier 13 est :", opts:["1010","1101","1001","1100"], ans:1, exp:"13 en binaire : 8+4+0+1 = 1101. Méthode : 13÷2=6 reste 1, 6÷2=3 reste 0, 3÷2=1 reste 1, 1÷2=0 reste 1. Lecture des restes de bas en haut : 1101." },
    { q:"La mémoire ROM (Read-Only Memory) contient :", opts:["Les données temporaires","Des données permanentes gravées en usine (firmware, BIOS)","Les applications de l'utilisateur","Le cache du processeur"], ans:1, exp:"La ROM contient des données permanentes non modifiables par l'utilisateur (firmware, BIOS). Son contenu est préservé sans alimentation. La Flash ROM (BIOS UEFI) est effaçable électriquement." },
    { q:"Un SSD est plus rapide qu'un HDD car :", opts:["Il est plus grand","Il n'a pas de parties mécaniques mobiles (mémoire flash)","Il consomme plus d'énergie","Il est refroidi différemment"], ans:1, exp:"Un HDD utilise des plateaux magnétiques rotatifs et des têtes de lecture mécaniques (lentes). Un SSD utilise des cellules flash électroniques (aucune pièce mobile) → 10 à 100x plus rapide." },
    { q:"L'adresse 0xFF en hexadécimal correspond à :", opts:["15 en décimal","255 en décimal","256 en décimal","240 en décimal"], ans:1, exp:"0xFF = 15×16 + 15 = 240 + 15 = 255. En hexadécimal, F=15. 0xFF est l'octet maximal (8 bits à 1 = 11111111 en binaire = 255 en décimal)." },
    { q:"Un appel système (syscall) est :", opts:["Un appel à une bibliothèque Python","Une demande d'un programme utilisateur à l'OS pour effectuer une action privilégiée","Un appel réseau","Un appel de fonction récursive"], ans:1, exp:"Un syscall est le mécanisme par lequel un programme utilisateur demande des services à l'OS (lire un fichier, créer un processus, allouer de la mémoire). L'OS contrôle ces opérations sensibles." },
    { q:"La notion de virtualisation permet de :", opts:["Accélérer le CPU","Faire tourner plusieurs systèmes d'exploitation sur un même matériel physique","Augmenter la RAM physique","Compresser les données"], ans:1, exp:"La virtualisation (VMware, VirtualBox, KVM) crée des machines virtuelles (VM) avec leurs propres OS sur un hyperviseur. Chaque VM croit être sur sa propre machine physique." },
    { q:"Le nombre 10101010 en binaire vaut en décimal :", opts:["150","170","160","180"], ans:1, exp:"10101010 = 128+0+32+0+8+0+2+0 = 170. Chaque bit à 1 : 128, 32, 8, 2. Somme : 128+32+8+2 = 170." },
    { q:"La représentation en virgule flottante IEEE 754 (32 bits) utilise :", opts:["1 bit de signe, 8 bits d'exposant, 23 bits de mantisse","8 bits de signe, 8 bits d'exposant, 16 bits de mantisse","32 bits pour l'exposant uniquement","1 octet pour le signe, 3 octets pour la valeur"], ans:0, exp:"IEEE 754 simple précision : 1 bit signe + 8 bits exposant (biaisé de 127) + 23 bits mantisse = 32 bits. Double précision : 1+11+52 = 64 bits." },
    { q:"Le rôle du compilateur est de :", opts:["Exécuter le programme","Transformer le code source en code machine exécutable","Déboguer le programme","Gérer la mémoire"], ans:1, exp:"Le compilateur transforme le code source (ex: C) en code machine (binaire exécutable). L'interpréteur (ex: Python par défaut) exécute ligne par ligne sans générer de binaire." },
    { q:"Un système d'exploitation temps réel (RTOS) garantit :", opts:["La vitesse maximale","Des délais de réponse prévisibles et bornés","L'interface graphique","La sécurité des données"], ans:1, exp:"Un RTOS garantit que les tâches s'exécutent dans des délais précis et bornés. Crucial pour les systèmes embarqués critiques (airbags, robots, équipements médicaux)." },
    { q:"Que signifie BIOS ?", opts:["Binary Input Output System","Basic Input Output System","Basic Integrated Operating Software","Binary Integrated Output System"], ans:1, exp:"BIOS (Basic Input Output System) est le firmware stocké dans la ROM de la carte mère. Il s'exécute au démarrage, initialise le matériel et lance l'OS. Remplacé par UEFI sur les machines modernes." },
    { q:"La pagination mémoire est une technique qui :", opts:["Trie les pages d'un document","Divise la mémoire en blocs fixes (pages) pour gérer l'allocation et la mémoire virtuelle","Compresse les données","Cache les instructions"], ans:1, exp:"La pagination divise la mémoire en pages de taille fixe (4 Ko typiquement). Chaque processus a une table des pages traduisant adresses virtuelles ↔ adresses physiques. Élimine la fragmentation externe." },
    { q:"Le nombre hexadécimal A4 vaut en décimal :", opts:["104","164","140","44"], ans:1, exp:"A4 en hex : A=10, 4=4. Valeur = 10×16 + 4 = 160 + 4 = 164." },
    { q:"Le rôle d'un pilote (driver) est :", opts:["Conduire les données sur le réseau","Permettre à l'OS de communiquer avec un périphérique spécifique","Accélérer les calculs","Gérer les processus"], ans:1, exp:"Un driver (pilote) est un logiciel qui permet à l'OS de contrôler un périphérique matériel spécifique (carte graphique, imprimante...). Il fait l'interface entre le matériel et l'OS." },
    { q:"La fréquence d'un processeur à 3 GHz signifie :", opts:["Il effectue 3 calculs par seconde","Il effectue 3 milliards de cycles d'horloge par seconde","Il a 3 milliards de transistors","Il consomme 3 watts"], ans:1, exp:"1 GHz = 10⁹ Hz = 10⁹ cycles par seconde. À 3 GHz, le processeur exécute 3 milliards de cycles d'horloge par seconde. Chaque instruction nécessite 1 ou plusieurs cycles." },
    { q:"La notion de 'processus zombie' en Linux désigne :", opts:["Un processus malveillant","Un processus terminé dont l'entrée reste dans la table des processus (parent n'a pas encore lu son statut)","Un processus consommant trop de RAM","Un processus bloqué"], ans:1, exp:"Un zombie est un processus terminé qui attend que son processus parent lise son code de sortie (via wait()). Son entrée dans la table reste jusqu'à cette lecture. Pas de ressources CPU/mémoire." },
    { q:"La commande ps ou tasklist affiche :", opts:["Les fichiers du système","Les processus en cours d'exécution","La mémoire disponible","Les connexions réseau"], ans:1, exp:"ps (Linux) et tasklist (Windows) listent les processus actifs avec leur PID, état, et utilisation des ressources. Très utilisé pour identifier des processus à tuer." },
    { q: "Qu'est-ce qu'un registre dans un processeur ?", opts:["Une zone de mémoire sur le disque dur","Une petite mémoire ultra-rapide directement dans le CPU","Un fichier de configuration","Un type de bus"], ans:1, exp:"Les registres sont des cases mémoire minuscules (64 bits typiquement) intégrées dans le CPU. Accès en < 1 cycle d'horloge, contre ~100 cycles pour la RAM." },
    { q: "La fréquence d'horloge d'un processeur mesure :", opts:["La vitesse de la mémoire RAM","Le nombre de cycles d'exécution par seconde (Hz)","La taille du cache","La consommation électrique"], ans:1, exp:"La fréquence (ex: 3,5 GHz = 3,5×10⁹ Hz) indique le nombre de cycles par seconde. Un cycle est l'unité atomique de synchronisation du CPU." },
    { q: "Quelle est la différence entre la RAM et la mémoire cache ?", opts:["La RAM est dans le CPU, le cache est externe","Le cache est plus rapide mais plus petit, intégré dans le CPU","La RAM est plus rapide","Aucune différence fondamentale"], ans:1, exp:"Le cache (L1, L2, L3) est intégré dans le CPU, très rapide (< 10ns) mais petit (Ko à Mo). La RAM est externe, plus lente (~50ns) mais bien plus grande (Go)." },
    { q: "Le terme 'architecture 64 bits' signifie que :", opts:["Le disque dur fait 64 Go","Le CPU peut traiter des registres et adresses de 64 bits","La RAM est de 64 Go","Le bus de données fait 64 MHz"], ans:1, exp:"Architecture 64 bits = registres de 64 bits + espace d'adressage de 2⁶⁴ octets (≈ 18 milliards de Go). Les adresses mémoire font 64 bits." },
    { q: "Quelle instruction Python affiche le code ASCII du caractère 'A' ?", opts:["ascii('A')","ord('A')","chr('A')","code('A')"], ans:1, exp:"ord(c) renvoie le code Unicode (= ASCII pour les 128 premiers) d'un caractère. ord('A') = 65. chr(65) fait l'inverse : renvoie 'A'." },
    { q: "Un système d'exploitation fonctionne en deux modes :", opts:["Mode lecture et mode écriture","Mode noyau (kernel) et mode utilisateur","Mode graphique et mode texte","Mode 32 bits et mode 64 bits"], ans:1, exp:"Mode noyau (ring 0) : accès total au matériel, exécution de l'OS. Mode utilisateur (ring 3) : accès restreint, programmes applicatifs. Les appels système font la transition." },
    { q: "Qu'est-ce qu'un appel système (syscall) ?", opts:["Un appel de fonction ordinaire","Une interface pour qu'un programme utilisateur demande un service au noyau","Un protocole réseau","Une instruction assembleur spéciale"], ans:1, exp:"Les syscalls (open, read, write, fork...) permettent aux programmes en mode utilisateur de demander des services au noyau (accès fichiers, réseau, création de processus)." },
    { q: "La mémoire virtuelle permet :", opts:["D'avoir plus de RAM physique","À chaque processus de croire avoir un espace d'adressage exclusif","De compresser les données","D'accélérer le CPU"], ans:1, exp:"La mémoire virtuelle isole les processus : chacun voit un espace 0 à 2⁶⁴-1. La MMU traduit les adresses virtuelles en physiques. Si la page manque → page fault." },
    { q: "Dans le modèle Von Neumann, quelle est la particularité fondamentale ?", opts:["Le CPU et la mémoire sont séparés par un bus","Programme et données partagent la même mémoire","Les calculs sont parallèles","Les instructions sont exécutées en ordre inverse"], ans:1, exp:"Le principe clé de Von Neumann : programme et données coexistent dans la même mémoire principale. C'est ce qui permet de modifier un programme au même titre que des données." },
    { q: "Qu'est-ce qu'un processus zombie ?", opts:["Un processus malveillant","Un processus terminé mais dont l'entrée reste dans la table des processus","Un processus en attente d'I/O","Un processus consommant trop de CPU"], ans:1, exp:"Quand un processus se termine, son entrée reste dans la table jusqu'à ce que le parent lise son code de retour (wait()). En attendant, c'est un zombie. Inoffensif mais occupe de la mémoire." },
    { q: "La représentation en virgule flottante IEEE 754 sur 32 bits utilise :", opts:["1 bit signe, 31 bits mantisse","1 bit signe, 8 bits exposant, 23 bits mantisse","4 octets entièrement pour la mantisse","16 bits exposant, 16 bits mantisse"], ans:1, exp:"IEEE 754 float 32 bits : 1 bit de signe, 8 bits d'exposant (biaisé par 127), 23 bits de mantisse. Total = 32 bits. Le double (64 bits) : 1+11+52." },
    { q: "Quelle est la valeur de 0b1010 + 0b0110 en binaire ?", opts:["0b10000","0b11000","0b10100","0b1110"], ans:0, exp:"0b1010 = 10, 0b0110 = 6, 10+6=16=0b10000. En binaire : 1010 + 0110 = 10000 (avec retenue propagée)." },
    { q: "Un bus système relie :", opts:["Uniquement le CPU et la RAM","Le CPU, la RAM et les périphériques d'E/S","Uniquement les périphériques","Le CPU et le disque dur uniquement"], ans:1, exp:"Le bus système comprend le bus de données, d'adresses et de contrôle. Il relie le CPU à la RAM (via le contrôleur mémoire) et aux périphériques (via le chipset)." },
    { q: "Le scheduling (ordonnancement) préemptif signifie :", opts:["Les processus s'exécutent jusqu'à ce qu'ils se terminent","L'OS peut interrompre un processus actif pour en exécuter un autre","Les processus décident eux-mêmes quand céder le CPU","Il n'y a qu'un seul processus à la fois"], ans:1, exp:"Préemptif = l'OS contrôle. Après un quantum de temps (timer interrupt), l'OS peut forcer un changement de contexte. Non-préemptif : le processus cède volontairement le CPU." },
    { q: "La localité spatiale en mémoire signifie que :", opts:["La mémoire proche du CPU est plus rapide","Si on accède à une adresse, on accède probablement aux adresses voisines bientôt","La mémoire est répartie spatialement","Les données proches sont compressées"], ans:1, exp:"La localité spatiale : si on accède à adresse X, on accédera probablement à X+1, X+2... Le cache exploite ceci en chargeant des lignes entières de mémoire (64 octets typiquement)." },
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE 8 : Algorithmique
     ═══════════════════════════════════════════════════════════ */
  algorithmique: [
    { q:"La notation O(n log n) pour un algorithme de tri signifie :", opts:["Le tri prend toujours le même temps","Le temps croît comme n×log(n) — plus efficace que O(n²)","Le tri est optimal car log(n) est petit","Le tri fait n passes de log(n) comparaisons"], ans:1, exp:"O(n log n) est la complexité optimale pour les algorithmes de tri par comparaison (tri fusion, tri rapide en moyenne). Bien meilleur que O(n²) (tri à bulles, insertion) pour de grands n." },
    { q:"La recherche dichotomique (binaire) nécessite que le tableau soit :", opts:["Non vide","Trié","Contenir des entiers uniquement","De taille paire"], ans:1, exp:"La recherche dichotomique coupe l'espace de recherche en deux à chaque étape. Pour que la comparaison milieu/cible soit utile, le tableau DOIT être trié." },
    { q:"La complexité de la recherche dichotomique est :", opts:["O(n)","O(n²)","O(log n)","O(1)"], ans:2, exp:"À chaque étape, on divise par 2 l'espace de recherche. Après k étapes, il reste n/2^k éléments. Quand n/2^k = 1, k = log₂(n). Donc O(log n)." },
    { q:"Le tri à bulles a une complexité dans le pire cas de :", opts:["O(n)","O(n log n)","O(n²)","O(log n)"], ans:2, exp:"Le tri à bulles compare chaque paire adjacente et effectue n-1 passes de n-1 comparaisons : O(n²). C'est l'un des tris les moins efficaces en pratique." },
    { q:"L'algorithme de tri fusion (merge sort) suit le paradigme :", opts:["Glouton","Diviser pour régner","Programmation dynamique","Backtracking"], ans:1, exp:"Merge sort divise le tableau en deux moitiés, les trie récursivement, puis fusionne les deux moitiés triées. C'est un classique de 'diviser pour régner'." },
    { q:"La récursion nécessite obligatoirement :", opts:["Une boucle","Un cas de base (condition d'arrêt) pour éviter la récursion infinie","Un dictionnaire","Deux paramètres"], ans:1, exp:"Toute fonction récursive doit avoir un cas de base qui arrête la récursion. Sans cas de base, la récursion est infinie → stack overflow (dépassement de la pile d'appels)." },
    { q:"Un algorithme glouton choisit à chaque étape :", opts:["La décision qui minimise le résultat global","Le choix localement optimal (meilleur choix immédiat) sans revenir en arrière","Une décision aléatoire","La décision qui maximise les regrets futurs"], ans:1, exp:"Un algorithme glouton fait le meilleur choix local à chaque étape, espérant obtenir un optimum global. Fonctionne pour certains problèmes (rendu de monnaie, Huffman, Kruskal) mais pas tous." },
    { q:"La programmation dynamique est utile quand :", opts:["Le problème peut être divisé en sous-problèmes indépendants","Le problème a des sous-problèmes qui se recoupent et une structure de sous-problèmes optimaux","Le problème n'a qu'une seule solution","Les données sont déjà triées"], ans:1, exp:"La prog dynamique mémorise les résultats de sous-problèmes déjà résolus (mémoïsation ou tabulation). Évite de recalculer. Exemples : Fibonacci, sac à dos, distance d'édition." },
    { q:"Quelle est la complexité de la suite de Fibonacci calculée naïvement (récursion sans mémoïsation) ?", opts:["O(n)","O(n log n)","O(2^n)","O(n²)"], ans:2, exp:"Sans mémoïsation, fib(n) recalcule les mêmes valeurs de nombreuses fois. fib(n) appelle fib(n-1) et fib(n-2), qui appellent fib(n-2) et fib(n-3)... Le nombre d'appels est ~2^n." },
    { q:"Avec mémoïsation, la complexité de Fibonacci devient :", opts:["O(2^n)","O(n²)","O(n)","O(log n)"], ans:2, exp:"Avec mémoïsation, chaque valeur fib(i) est calculée une seule fois et stockée. Il y a n+1 valeurs à calculer, chacune en O(1) → O(n) total." },
    { q:"L'algorithme de tri rapide (quicksort) a une complexité moyenne de :", opts:["O(n)","O(n log n)","O(n²)","O(log n)"], ans:1, exp:"Quicksort : choisit un pivot, partitionne autour du pivot (O(n)), et trie récursivement. En moyenne, O(n log n). Pire cas : O(n²) si le pivot est toujours le plus petit ou grand." },
    { q:"Le backtracking est une technique algorithmique qui :", opts:["Ne revient jamais en arrière","Explore systématiquement les possibilités et abandonne les branches sans solution (retour en arrière)","Trouve toujours la solution optimale en O(n)","Utilise la programmation dynamique"], ans:1, exp:"Le backtracking construit incrémentalement des solutions, abandonnant ('backtracks') dès qu'il détecte qu'une branche ne peut mener à une solution valide. Exemples : Sudoku, n-reines, labyrinthe." },
    { q:"La complexité O(1) signifie :", opts:["L'algorithme prend 1 seconde","Le temps d'exécution est constant, indépendant de la taille des données","L'algorithme effectue 1 opération","L'algorithme est optimal"], ans:1, exp:"O(1) = temps constant. Peu importe la taille n des données, l'opération prend le même temps. Ex: accès à un élément de liste par indice, accès à un dict par clé." },
    { q:"La recherche séquentielle dans un tableau non trié a une complexité de :", opts:["O(log n)","O(n)","O(1)","O(n log n)"], ans:1, exp:"La recherche séquentielle parcourt les éléments un par un. Dans le pire cas (élément absent ou en dernière position), on examine tous les n éléments : O(n)." },
    { q:"L'insertion dans une liste chaînée en tête est :", opts:["O(n)","O(log n)","O(1)","O(n²)"], ans:2, exp:"Insérer en tête d'une liste chaînée : créer le nœud, faire pointer son suivant vers l'ancienne tête, mettre à jour la tête. C'est 3 opérations indépendantes de n : O(1)." },
    { q:"Le tri par sélection choisit à chaque passe :", opts:["L'élément le plus grand pour le mettre en début","Le minimum du sous-tableau non trié et le place en bonne position","L'élément médian","Un élément aléatoire"], ans:1, exp:"Le tri par sélection cherche le minimum du sous-tableau [i..n-1] et l'échange avec l'élément en position i. N passes → O(n²) comparaisons, mais seulement n échanges." },
    { q:"La complexité spatiale de la récursion sur une liste de taille n est au moins :", opts:["O(1)","O(log n)","O(n) à cause de la pile d'appels","O(n²)"], ans:2, exp:"Chaque appel récursif utilise de l'espace dans la pile d'appels. Pour une liste de taille n, la profondeur de récursion est n, donc O(n) d'espace pour la pile." },
    { q:"L'algorithme de Dijkstra résout :", opts:["Le problème du voyageur de commerce","Le plus court chemin dans un graphe pondéré (poids positifs)","Le tri d'un tableau","La recherche d'un élément"], ans:1, exp:"Dijkstra trouve les plus courts chemins d'un sommet source vers tous les autres sommets d'un graphe à poids positifs. Utilisé dans GPS, réseaux informatiques." },
    { q:"La notion de 'diviser pour régner' consiste à :", opts:["Résoudre un problème par essais et erreurs","Découper un problème en sous-problèmes indépendants, les résoudre, combiner les résultats","Mémoriser tous les résultats intermédiaires","Faire un choix glouton"], ans:1, exp:"Diviser pour régner (Divide and Conquer) : 1) Diviser en sous-problèmes similaires mais plus petits, 2) Résoudre récursivement, 3) Combiner les solutions. Ex: merge sort, recherche dichotomique." },
    { q:"Le tri par insertion insère chaque élément :", opts:["À la fin du tableau","À sa position correcte dans la partie déjà triée (en décalant les éléments plus grands)","Dans un nouveau tableau","À une position aléatoire"], ans:1, exp:"Tri par insertion : pour chaque élément, le compare avec les précédents et le déplace vers la gauche jusqu'à sa position correcte. Efficace pour les tableaux presque triés." },
    { q:"Quelle est la complexité du tri fusion (merge sort) en tout cas ?", opts:["O(n) dans le meilleur cas, O(n²) dans le pire","O(n log n) dans tous les cas","O(log n)","O(n²) toujours"], ans:1, exp:"Merge sort a une complexité O(n log n) GARANTIE dans le meilleur, pire et moyen cas. C'est son avantage sur quicksort (O(n²) dans le pire cas)." },
    { q:"Un algorithme de complexité O(n!) est :", opts:["Efficace pour les grandes données","Extrêmement lent (factoriel), rend inutilisable pour n > 20 environ","Linéaire","Logarithmique"], ans:1, exp:"O(n!) croît extrêmement vite. Pour n=20, n! ≈ 2,4×10¹⁸. La plupart des algorithmes de permutation brute force ont cette complexité (problème du voyageur de commerce naïf)." },
    { q:"La mémoïsation est une technique qui consiste à :", opts:["Mémoriser le code source","Stocker les résultats des appels de fonction pour ne pas les recalculer","Compresser les données","Optimiser la boucle principale"], ans:1, exp:"La mémoïsation (memoization) stocke les résultats des appels coûteux dans un cache (dictionnaire). Si la même entrée se réproduit, on retourne directement le résultat stocké." },
    { q:"La notation Θ (theta) signifie :", opts:["Borne supérieure","Borne inférieure","Borne exacte (à la fois O et Ω)","Complexité aléatoire"], ans:2, exp:"Θ(f(n)) signifie que l'algorithme se comporte exactement comme f(n) : ni plus, ni moins. O(f(n)) est la borne supérieure, Ω(f(n)) la borne inférieure." },
    { q:"L'algorithme de recherche dichotomique peut s'implémenter :", opts:["Uniquement de façon récursive","Uniquement de façon itérative","De façon récursive ou itérative","Seulement sur des listes chaînées"], ans:2, exp:"La recherche dichotomique a deux implémentations valides : récursive (élégante) et itérative (sans pile d'appels). Les deux ont la même complexité O(log n)." },
    { q:"Trier un tableau de taille n avec le tri à bulles effectue environ :", opts:["n comparaisons","n/2 comparaisons","n(n-1)/2 comparaisons","n² comparaisons exactement"], ans:2, exp:"Le tri à bulles effectue (n-1) + (n-2) + ... + 1 = n(n-1)/2 comparaisons dans le pire cas. C'est bien O(n²) : n(n-1)/2 ≈ n²/2 pour les grands n." },
    { q:"Un algorithme est dit polynomial si sa complexité est :", opts:["O(2^n)","O(n^k) pour un k constant","O(n!)","O(log n) uniquement"], ans:1, exp:"Complexité polynomiale : O(n), O(n²), O(n³)... soit O(n^k). Les problèmes avec solution polynomiale sont dans la classe P. Les problèmes sans solution polynomiale connue sont NP." },
    { q:"Le tri rapide (quicksort) choisit un pivot et :", opts:["L'insère à sa position finale après le tri","Partitionne le tableau en éléments < pivot et éléments > pivot","Effectue une fusion avec un autre tableau","Compte les occurrences du pivot"], ans:1, exp:"Quicksort : choisit un pivot, réorganise le tableau (éléments < pivot à gauche, > pivot à droite), puis trie récursivement les deux parties. La partition est l'étape clé." },
    { q:"La suite de Fibonacci définie par F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) vaut F(5) :", opts:["3","5","8","13"], ans:1, exp:"F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5. La suite : 0,1,1,2,3,5,8,13,21..." },
    { q:"La complexité de la multiplication de deux matrices n×n (algorithme naïf) est :", opts:["O(n²)","O(n³)","O(n log n)","O(2^n)"], ans:1, exp:"La multiplication naïve de matrices n×n : 3 boucles imbriquées de n itérations chacune → O(n³). Des algorithmes plus sophistiqués (Strassen) font mieux." },
    { q:"Un algorithme glouton donne-t-il toujours la solution optimale ?", opts:["Oui, toujours","Non, seulement pour certains problèmes (ex: rendu de monnaie avec certains systèmes)","Non, jamais","Seulement si les données sont triées"], ans:1, exp:"L'approche gloutonne n'est pas toujours optimale. Pour le rendu de monnaie avec pièces canoniques (1, 2, 5, 10...), oui. Pour des systèmes non canoniques : non. Contre-exemple : pièces [1, 3, 4], rendre 6 : glouton donne 4+1+1=3 pièces, optimal est 3+3=2 pièces." },
    { q:"La complexité de l'exponentiation rapide (fast power) est :", opts:["O(n)","O(n²)","O(log n)","O(1)"], ans:2, exp:"Exponentiation rapide : x^n = (x^(n/2))² si n pair, ou x × x^(n-1) si n impair. On divise par 2 à chaque étape → O(log n) multiplications." },
    { q:"Un graphe à n sommets peut être trié topologiquement si et seulement si :", opts:["Il est connexe","Il est un DAG (graphe orienté acyclique)","Il n'a pas de poids négatifs","Il est complet"], ans:1, exp:"Le tri topologique n'est possible que sur les DAG (Directed Acyclic Graphs). Tout cycle dans le graphe rend le tri topologique impossible." },
    { q:"La complexité amortie de l'opération push sur une pile dynamique est :", opts:["O(n)","O(n²)","O(1) amorti","O(log n)"], ans:2, exp:"La plupart des push sont O(1). Parfois, il faut redimensionner le tableau sous-jacent (O(n)), mais cela se produit de moins en moins souvent. Sur n opérations : O(n) total → O(1) amorti." },
    { q:"Le problème du sac à dos (knapsack) est typiquement résolu par :", opts:["Recherche séquentielle","Algorithme glouton uniquement","Programmation dynamique (optimal) ou glouton (approché)","Tri fusion"], ans:2, exp:"Le problème du sac à dos est NP-difficile dans sa version générale. La programmation dynamique le résout en O(n×W) (pseudo-polynomial). Le glouton (fraction) est optimal pour la variante fractionnaire." },
    { q: "Quelle est la complexité du tri à bulles dans le pire cas ?", opts:["O(n log n)","O(n)","O(n²)","O(log n)"], ans:2, exp:"Le tri à bulles compare chaque paire adjacente. Dans le pire cas (liste inversée), il fait n(n-1)/2 comparaisons → O(n²)." },
    { q: "La recherche dichotomique nécessite que le tableau soit :", opts:["De taille paire","Trié","Composé d'entiers","Sans doublons"], ans:1, exp:"La dichotomie exploite l'ordre pour éliminer la moitié des éléments à chaque étape. Sur un tableau non trié, le résultat serait incorrect." },
    { q: "Quelle est la complexité de fib_naif(n) (récursion double sans mémoïsation) ?", opts:["O(n)","O(n²)","O(2ⁿ)","O(n log n)"], ans:2, exp:"fib(n) appelle fib(n-1) et fib(n-2). L'arbre d'appels a une profondeur n et se branche à chaque nœud → 2ⁿ appels au total → O(2ⁿ)." },
    { q: "Le principe 'diviser pour régner' consiste à :", opts:["Résoudre un problème en le découpant en sous-problèmes indépendants, puis combiner","Utiliser des boucles imbriquées","Toujours choisir localement le meilleur choix","Mémoriser les sous-problèmes déjà résolus"], ans:0, exp:"Diviser pour régner : 1) Diviser en sous-problèmes plus petits, 2) Résoudre récursivement, 3) Combiner. Exemples : tri fusion, tri rapide, recherche dichotomique." },
    { q: "La programmation dynamique diffère de la récursion naïve car :", opts:["Elle est toujours itérative","Elle mémorise les résultats des sous-problèmes pour éviter de recalculer","Elle ne peut résoudre que des problèmes linéaires","Elle utilise moins de mémoire"], ans:1, exp:"La DP mémoïse (top-down) ou tabule (bottom-up) les résultats des sous-problèmes. Fibonacci naïf : O(2ⁿ). Fibonacci DP : O(n)." },
    { q: "Un algorithme glouton peut échouer à trouver l'optimum global car :", opts:["Il est trop lent","Il fait le choix localement optimal sans tenir compte des conséquences futures","Il utilise trop de mémoire","Il nécessite un tri préalable"], ans:1, exp:"Le glouton choisit le meilleur localement. Pour le rendu de monnaie avec pièces [1,3,4] et montant 6 : glouton donne 4+1+1 (3 pièces), l'optimal est 3+3 (2 pièces)." },
    { q: "Quelle est la complexité du tri fusion dans le meilleur cas ?", opts:["O(n)","O(n log n)","O(log n)","O(n²)"], ans:1, exp:"Le tri fusion est toujours O(n log n), même quand la liste est déjà triée. C'est sa force (consistance) et sa faiblesse (pas d'optimisation possible)." },
    { q: "Combien d'appels récursifs fait factorielle(5) ?", opts:["4","5","6","25"], ans:1, exp:"factorielle(5)→factorielle(4)→factorielle(3)→factorielle(2)→factorielle(1). C'est 5 appels. La profondeur de récursion est n." },
    { q: "La mémoïsation est une technique qui :", opts:["Trie les données avant traitement","Stocke les résultats de fonctions pour éviter de recalculer","Réduit l'utilisation CPU","Permet la parallélisation"], ans:1, exp:"La mémoïsation (top-down DP) stocke le résultat d'une fonction dans un cache (dict) et le retourne directement si le même argument est revu." },
    { q: "Quelle est la complexité de Dijkstra avec un tas binaire ?", opts:["O(V²)","O(V + E)","O((V + E) log V)","O(E log E)"], ans:2, exp:"Avec un tas binaire (heapq) : chaque sommet est extrait une fois O(V log V) et chaque arête peut déclencher une mise à jour O(E log V). Total : O((V+E) log V)." },
    { q: "Pour un tableau trié de 1024 éléments, combien d'étapes maximum pour la dichotomie ?", opts:["512","1024","10","20"], ans:2, exp:"log₂(1024) = 10. La dichotomie divise par 2 à chaque étape : 1024→512→…→1 = 10 étapes maximum." },
    { q: "La complexité spatiale du tri fusion est :", opts:["O(1)","O(log n)","O(n)","O(n²)"], ans:2, exp:"Le tri fusion crée des sous-listes temporaires lors de la fusion. L'espace total est O(n). Le tri rapide in-place est O(log n) en espace (pile d'appels)." },
    { q: "La condition d'arrêt d'une récursion s'appelle :", opts:["La récurrence","Le cas de base","Le cas inductif","Le pivot"], ans:1, exp:"Le cas de base est la condition qui arrête la récursion. Sans lui, la fonction s'appelle indéfiniment jusqu'à l'erreur RecursionError." },
    { q: "Quel est le nombre d'opérations pour chercher dans un set Python ?", opts:["O(n)","O(log n)","O(1) en moyenne","O(n²)"], ans:2, exp:"Les sets Python utilisent une table de hachage. La recherche 'x in s' est O(1) en moyenne, contre O(n) pour 'x in liste'." },
    { q: "Le problème du sac à dos est typiquement résolu par :", opts:["Recherche séquentielle","Algorithme glouton uniquement","Programmation dynamique (optimal) ou glouton (approché)","Tri fusion"], ans:2, exp:"Le problème du sac à dos est NP-difficile. La DP le résout en O(n×W). Le glouton est optimal pour la variante fractionnaire seulement." }
  ],

  /* ═══════════════════════════════════════════════════════════
     CHAPITRE : Programmation Orientée Objet (POO)
     0-19  → Facile  : syntaxe de base, constructeur, self, attributs
     20-34 → Moyen   : méthodes, encapsulation, listes d'objets
     35-49 → Difficile : héritage, polymorphisme, méthodes spéciales
     ═══════════════════════════════════════════════════════════ */
  poo: [

    /* ── FACILE (0–19) : classe, __init__, self, instanciation ── */
    { q: "Qu'est-ce qu'une classe en Python ?",
      opts: ["Un objet créé en mémoire", "Un modèle (plan) à partir duquel on crée des objets", "Une variable contenant plusieurs valeurs", "Une fonction qui retourne un objet"],
      ans: 1, exp: "Une classe est le plan, le moule. Les objets (instances) sont les pièces concrètes fabriquées à partir de ce plan." },

    { q: "Comment appelle-t-on un objet créé à partir d'une classe ?",
      opts: ["Une méthode", "Un attribut", "Une instance", "Un module"],
      ans: 2, exp: "Un objet créé à partir d'une classe s'appelle une instance. On dit qu'on instancie la classe." },

    { q: "Quelle est la convention de nommage pour une classe Python ?",
      opts: ["tout_en_minuscules", "toutEnMinuscules", "PremièreLettreMajuscule (PascalCase)", "TOUT_EN_MAJUSCULES"],
      ans: 2, exp: "Les classes utilisent le PascalCase selon PEP 8 : Voiture, CompteBancaire, PokemonFeu." },

    { q: "Quel est le nom obligatoire du constructeur Python ?",
      opts: ["constructor", "create", "__init__", "__new__"],
      ans: 2, exp: "Le constructeur Python s'appelle __init__ — deux underscores avant ET après. C'est une méthode spéciale (dunder method)." },

    { q: "Quel est le premier paramètre obligatoire de tout constructeur ?",
      opts: ["this", "cls", "self", "Le nom de la classe"],
      ans: 2, exp: "self représente l'instance en cours de création. Python le passe automatiquement ; on ne l'écrit jamais lors de l'appel." },

    { q: "Quelle ligne instancie correctement la classe Eleve avec nom='Alice' et note=15 ?",
      opts: ["e = Eleve.__init__('Alice', 15)", "e = new Eleve('Alice', 15)", "e = Eleve('Alice', 15)", "e = Eleve(self, 'Alice', 15)"],
      ans: 2, exp: "On instancie avec NomClasse(args). Python appelle __init__ automatiquement. new n'existe pas en Python, et self n'est jamais passé manuellement." },

    { q: "Que se passe-t-il si on oublie self. devant un attribut dans __init__ ?",
      opts: ["Python crée quand même l'attribut", "Une variable locale est créée et disparaît à la fin de __init__", "SyntaxError levée", "L'attribut vaut None"],
      ans: 1, exp: "Sans self., on crée une variable locale qui disparaît à la fin du constructeur. L'objet n'a pas l'attribut → AttributeError à la première utilisation." },

    { q: "Que doit retourner le constructeur __init__ ?",
      opts: ["self", "L'objet créé", "True", "Rien (pas de return)"],
      ans: 3, exp: "__init__ ne retourne jamais rien. Ajouter return self lève un TypeError. Python gère la création en interne." },

    { q: "Comment accède-t-on à l'attribut nom d'un objet p depuis l'extérieur de la classe ?",
      opts: ["p[nom]", "p.get(nom)", "p.nom", "p->nom"],
      ans: 2, exp: "Notation pointée : objet.attribut. Les crochets sont pour les listes/dicts, -> n'existe pas en Python." },

    { q: "Combien d'instances peut-on créer à partir d'une même classe ?",
      opts: ["Une seule", "Deux au maximum", "Autant que l'on veut", "Cela dépend du constructeur"],
      ans: 2, exp: "On peut créer autant d'instances que l'on veut à partir d'une classe. C'est l'intérêt du modèle." },

    { q: "Qu'est-ce qu'un attribut de classe (par opposition à un attribut d'instance) ?",
      opts: ["Un attribut défini dans __init__ avec self.", "Un attribut partagé par toutes les instances, défini dans le corps de la classe", "Un attribut privé préfixé par __", "Un attribut en lecture seule"],
      ans: 1, exp: "Un attribut de classe est défini hors de toute méthode, directement dans le corps. Il est partagé par toutes les instances. Un attribut d'instance (self.x) est propre à chaque objet." },

    { q: "Laquelle de ces définitions de constructeur est correcte ?",
      opts: ["def init(self, x): self.x = x", "def __init__(self, x): self.x = x", "def __init__(x): self.x = x", "def __init__(self, x): return x"],
      ans: 1, exp: "Seule la B est correcte : nom __init__, premier param self, attribut via self.x, pas de return." },

    { q: "Comment déclarer un attribut score initialisé à 0 par défaut si non fourni ?",
      opts: ["def __init__(self, nom, score): self.score = 0", "def __init__(self, nom, score=0): self.score = score", "def __init__(self, nom): self.score = score or 0", "def __init__(self, nom, score): score = 0"],
      ans: 1, exp: "On utilise une valeur par défaut dans la signature : score=0. Si l'appelant ne fournit pas score, Python utilise 0." },

    { q: "Que vaut e.nom après : class Eleve:\\n  def __init__(self, nom):\\n    nom = nom\\ne = Eleve('Alice')\\nprint(e.nom) ?",
      opts: ["'Alice'", "None", "AttributeError", "SyntaxError"],
      ans: 2, exp: "sans self., on crée une variable locale nom qui disparaît. self.nom n'existe jamais → AttributeError." },

    { q: "Que retourne type(p) si p = Pokemon('Pikachu', 'Électrique', 35) ?",
      opts: ["Pokemon", "<class '__main__.Pokemon'>", "object", "str"],
      ans: 1, exp: "type() retourne la classe de l'objet, affichée sous la forme <class '__main__.Pokemon'>." },

    { q: "Deux objets créés à partir de la même classe partagent-ils leurs valeurs d'attributs ?",
      opts: ["Oui, toujours", "Non, chaque instance a ses propres valeurs", "Oui si on utilise self", "Non, ils n'ont aucun attribut en commun"],
      ans: 1, exp: "Chaque instance est indépendante. p1 = Point(3,5) et p2 = Point(7,2) ont toutes les deux x et y, mais avec des valeurs différentes." },

    { q: "Peut-on calculer un attribut directement dans le constructeur ?",
      opts: ["Non, tous les attributs viennent de paramètres", "Oui, comme self.aire = l * h", "Oui mais seulement avec return", "Non, RecursionError"],
      ans: 1, exp: "Oui, on peut parfaitement calculer des attributs dans __init__. self.aire = l * h est valide." },

    { q: "Combien d'objets Balle sont créés par : b1=Balle('rouge'); b2=Balle('bleue'); b3=b1 ?",
      opts: ["3", "2", "1", "0"],
      ans: 1, exp: "b3 = b1 crée une deuxième référence vers le même objet — pas un nouvel objet. Il y a 2 Balles en mémoire." },

    { q: "Que signifie la convention _attribut (un seul underscore) en Python ?",
      opts: ["L'attribut est privé et inaccessible de l'extérieur", "Convention : l'attribut est protégé, accessible mais destiné à un usage interne", "L'attribut est une constante", "Rien de particulier"],
      ans: 1, exp: "Un seul underscore est une convention signalant 'usage interne'. Python n'empêche pas l'accès, mais le programmeur signale qu'il est déconseillé." },

    { q: "Quelle ligne appelle correctement la méthode afficher() sur l'objet e ?",
      opts: ["Eleve.afficher()", "afficher(e)", "e.afficher()", "e.afficher"],
      ans: 2, exp: "La notation pointée e.afficher() est la bonne syntaxe. Python passe automatiquement e comme argument self." },

    /* ── MOYEN (20–34) : méthodes, attribut vs méthode, opérateurs, encapsulation, listes ── */
    { q: "Quelle est la différence entre un accesseur et un mutateur ?",
      opts: ["L'accesseur prend des paramètres, le mutateur non", "L'accesseur retourne une valeur sans modifier l'objet ; le mutateur modifie sans return", "L'accesseur s'appelle get_ obligatoirement", "Aucune différence"],
      ans: 1, exp: "Accesseur (getter) : lit et retourne. Mutateur (setter) : modifie un attribut sans rien retourner." },

    { q: "Que retourne r.aire (sans parenthèses) si aire est une méthode ?",
      opts: ["La valeur calculée de l'aire", "0", "Une référence à l'objet méthode (pas le résultat)", "AttributeError"],
      ans: 2, exp: "Sans (), on obtient l'objet méthode lui-même — toujours truthy. C'est un bug silencieux très courant. Il faut r.aire()." },

    { q: "Un mutateur doit-il contenir un return ?",
      opts: ["Oui, il retourne self", "Oui, il retourne la nouvelle valeur", "Non, il modifie l'attribut et ne retourne rien", "Oui si la modification a réussi"],
      ans: 2, exp: "Un mutateur ne retourne rien. Son seul rôle est de modifier un attribut. Ajouter return est une erreur de conception." },

    { q: "Quel opérateur logique est invalide en Python ?",
      opts: ["and", "or", "&&", "not"],
      ans: 2, exp: "&& est la syntaxe C/Java. En Python, le ET logique s'écrit and (en minuscules)." },

    { q: "Comment afficher proprement les informations d'un objet e depuis l'extérieur de la classe ?",
      opts: ["print(e.__dict__)", "Appeler une méthode afficher() définie dans la classe", "print(e) sans rien définir", "e.display()"],
      ans: 1, exp: "On définit une méthode afficher(self) dans la classe qui utilise print() pour afficher les attributs. C'est l'approche au programme NSI Terminale." },

    { q: "Une méthode afficher(self) doit-elle utiliser print() ou return ?",
      opts: ["return uniquement, jamais print()", "print() uniquement, jamais return", "print() pour afficher les infos — c'est une méthode d'affichage, pas un accesseur", "Les deux sont équivalents"],
      ans: 2, exp: "afficher(self) est un cas particulier : son rôle est d'afficher, donc on utilise print(). Un accesseur comme get_solde() retourne une valeur. Ce sont deux familles différentes de méthodes." },

    { q: "Que signifie 0 <= val <= 100 en Python ?",
      opts: ["SyntaxError", "Équivalent à val>=0 or val<=100", "Équivalent à val>=0 and val<=100", "Équivalent à 0<=val seulement"],
      ans: 2, exp: "Python autorise le chaînage de comparaisons. 0 <= val <= 100 est strictement équivalent à val >= 0 and val <= 100." },

    { q: "Comment accéder à l'attribut pages du 2e livre d'une liste biblio ?",
      opts: ["biblio[1].pages()", "biblio[1].pages", "biblio.pages[1]", "get_pages(biblio[1])"],
      ans: 1, exp: "biblio[1] donne le 2e objet (index 1). .pages accède à l'attribut. Pas de parenthèses — ce n'est pas une méthode." },

    { q: "Pourquoi if e.est_admis: est-il toujours vrai même si l'élève n'est pas admis ?",
      opts: ["La méthode retourne toujours True", "L'objet méthode (sans parenthèses) est toujours truthy", "Python évalue les méthodes à True", "C'est une erreur de syntaxe"],
      ans: 1, exp: "Sans (), e.est_admis est un objet méthode — tout objet non-None est truthy en Python → condition toujours vraie. Bug silencieux redoutable." },

    { q: "Avec quoi initialise-t-on le champion pour chercher le maximum dans une liste d'objets ?",
      opts: ["champion = 0", "champion = None", "champion = liste[0]", "champion = max(liste)"],
      ans: 2, exp: "On initialise avec le premier objet (liste[0]). Initialiser avec 0 ou None → AttributeError lors de la comparaison des attributs." },

    { q: "Que retourne une fonction avec return total placé dans la boucle for ?",
      opts: ["La somme de tous les éléments", "0", "La valeur du premier élément uniquement", "IndexError"],
      ans: 2, exp: "Le return dans la boucle → Python sort dès la première itération. Il faut placer le return après la boucle." },

    { q: "Quelle ligne ajoute correctement un objet Eleve à la liste promo ?",
      opts: ["promo = promo + Eleve('Alice', 15)", "promo.add(Eleve('Alice', 15))", "promo.append(Eleve('Alice', 15))", "promo[len(promo)] = Eleve('Alice', 15)"],
      ans: 2, exp: "list.append(element) est la méthode standard. add n'existe pas sur les listes (c'est pour les sets)." },

    { q: "Comment appeler aire() correctement dans est_plus_grand(self, autre) ?",
      opts: ["self.aire > autre.aire", "self.aire() > autre.aire", "self.aire() > autre.aire()", "aire(self) > aire(autre)"],
      ans: 2, exp: "aire est une méthode → parenthèses obligatoires des deux côtés. self.aire sans () compare des références de méthodes, pas des valeurs." },

    { q: "Quelle est la bonne façon de modifier self.temperature en ajoutant delta ?",
      opts: ["temperature = self.temperature + delta", "self.temperature = temperature + delta", "self.temperature = self.temperature + delta", "return self.temperature + delta"],
      ans: 2, exp: "Il faut self. des deux côtés : on lit l'ancienne valeur via self.temperature et on réassigne le résultat à self.temperature." },

    { q: "Quelle est la différence entre retourner l'objet c et retourner c.titulaire dans une boucle de filtrage ?",
      opts: ["Aucune différence", "c retourne l'objet complet ; c.titulaire retourne uniquement la chaîne du nom", "c est plus rapide à retourner", "c.titulaire crée une copie de l'objet"],
      ans: 1, exp: "Retourner c donne l'objet entier avec tous ses attributs. Retourner c.titulaire donne uniquement la chaîne du nom. Le choix dépend de ce dont l'appelant a besoin." },

    { q: "Que signifie la convention _attribut (un seul underscore) en Python ?",
      opts: ["L'attribut est privé et inaccessible de l'extérieur", "Convention : l'attribut est protégé, usage interne recommandé", "L'attribut est une constante", "Rien de particulier"],
      ans: 1, exp: "Un seul underscore est une convention signalant 'usage interne'. Python n'empêche pas l'accès, mais signale qu'il est déconseillé. C'est différent du double underscore." },

    /* ── DIFFICILE (35–49) : héritage, super(), polymorphisme, dunder avancés ── */
    { q: "Quelle syntaxe crée une sous-classe PokemonFeu héritant de Pokemon ?",
      opts: ["class PokemonFeu inherits Pokemon:", "class PokemonFeu extends Pokemon:", "class PokemonFeu(Pokemon):", "class PokemonFeu < Pokemon:"],
      ans: 2, exp: "En Python, l'héritage se déclare avec le parent entre parenthèses : class Enfant(Parent):. Les mots-clés inherits et extends n'existent pas en Python." },

    { q: "Que permet super() ?",
      opts: ["Créer une super-instance de la classe", "Accéder aux méthodes et attributs de la classe parente", "Rendre une méthode plus rapide", "Vérifier qu'un objet est une instance valide"],
      ans: 1, exp: "super() retourne un proxy qui délègue les appels à la classe parente. Utilisé principalement dans __init__ pour initialiser les attributs hérités." },

    { q: "Que se passe-t-il si on omet super().__init__() dans le constructeur d'une sous-classe ?",
      opts: ["Python l'appelle automatiquement", "Les attributs définis dans le parent ne sont jamais créés → AttributeError possible", "La sous-classe est ignorée", "Un warning est affiché mais le code fonctionne"],
      ans: 1, exp: "Sans super().__init__(), le constructeur parent ne s'exécute jamais. Les attributs qu'il aurait créés n'existent pas → AttributeError à la première utilisation." },

    { q: "Une instance de PokemonFeu peut-elle appeler une méthode définie uniquement dans Pokemon ?",
      opts: ["Non, seulement ses propres méthodes", "Oui, elle hérite de toutes les méthodes de Pokemon", "Oui, mais seulement via super()", "Non, sauf si on la redéfinit dans PokemonFeu"],
      ans: 1, exp: "L'héritage est automatique : PokemonFeu hérite de toutes les méthodes de Pokemon sans avoir à les réécrire." },

    { q: "Qu'est-ce que la surcharge (override) d'une méthode ?",
      opts: ["Appeler une méthode avec trop d'arguments", "Redéfinir dans la sous-classe une méthode déjà présente dans le parent", "Supprimer une méthode héritée", "Appeler une méthode deux fois de suite"],
      ans: 1, exp: "La surcharge consiste à redéfinir dans la sous-classe une méthode héritée. Python utilisera la version de la sous-classe en priorité (MRO)." },

    { q: "Que retourne isinstance(salameche, Pokemon) si salameche est un PokemonFeu héritant de Pokemon ?",
      opts: ["False", "True", "None", "TypeError"],
      ans: 1, exp: "isinstance retourne True si l'objet est une instance de la classe ou d'une de ses sous-classes. Un PokemonFeu est aussi un Pokemon." },

    { q: "Dans quel ordre Python cherche-t-il la méthode attaquer sur un PokemonElectrique ?",
      opts: ["D'abord dans Pokemon, puis PokemonElectrique", "D'abord dans PokemonElectrique, puis Pokemon si absente", "Uniquement dans Pokemon", "Uniquement dans PokemonElectrique"],
      ans: 1, exp: "Python applique la MRO (Method Resolution Order) : il cherche d'abord dans la classe réelle de l'objet (PokemonElectrique), puis remonte vers le parent." },

    { q: "Comment étendre une méthode parente (garder son comportement ET ajouter du spécifique) ?",
      opts: ["Réécrire entièrement la méthode dans la sous-classe", "Appeler super().methode() puis ajouter le comportement spécifique", "Utiliser le mot-clé extend", "C'est impossible en Python"],
      ans: 1, exp: "On appelle super().methode() pour exécuter la logique parente, puis on ajoute le comportement spécifique. Exemple : super().attaquer(cible) puis cible.paralysie = True." },

    { q: "Qu'est-ce que le polymorphisme permet concrètement ?",
      opts: ["Avoir plusieurs classes avec le même nom", "Appeler la même méthode sur des objets de types différents, chacun répondant avec son propre comportement", "Créer des objets sans constructeur", "Partager des attributs entre plusieurs instances"],
      ans: 1, exp: "Le polymorphisme permet for p in equipe: p.attaquer(cible) — chaque Pokémon applique sa propre version de attaquer selon son type réel." },

    { q: "Quel est le problème dans : class PF(Pokemon):\\n  def __init__(self, nom, pdv):\\n    self.flammes = 3 ?",
      opts: ["Pas de problème", "self.flammes ne peut pas être défini avant super()", "Les attributs nom et pdv du parent ne sont jamais créés → AttributeError", "__init__ ne peut pas être redéfinie dans une sous-classe"],
      ans: 2, exp: "Sans super().__init__(nom, 'Feu', pdv), les attributs self.nom, self.type, self.pdv définis dans Pokemon ne sont jamais créés → AttributeError à la première utilisation." },

    { q: "On a une liste d'objets Pokemon. Que fait : for p in equipe: p.attaquer(cible) ?",
      opts: ["Appelle toujours la méthode attaquer de la classe Pokemon de base", "Appelle la version de attaquer propre au type réel de chaque objet (polymorphisme)", "Lève une erreur car attaquer prend un argument", "Ne fait rien si attaquer n'est pas définie dans chaque sous-classe"],
      ans: 1, exp: "C'est le polymorphisme en action : Python regarde le type réel de chaque objet p et appelle SA version de attaquer. Un PokemonFeu utilisera sa propre implémentation, différente de celle de PokemonEau." },

    { q: "Peut-on passer un objet d'une sous-classe là où un objet de la classe parente est attendu ?",
      opts: ["Non, les types doivent correspondre exactement", "Oui, c'est le principe de substitution — une sous-classe peut toujours remplacer son parent", "Oui mais seulement avec isinstance()", "Non, il faut convertir explicitement"],
      ans: 1, exp: "Principe de substitution de Liskov : partout où on attend un Pokemon, on peut utiliser un PokemonFeu. C'est la base du polymorphisme et de l'utilité de l'héritage." },

    { q: "Dans une hiérarchie Compte → CompteEpargne, comment appeler depot() du parent depuis capitaliser() ?",
      opts: ["Compte.depot(self, montant)", "super().depot(montant)", "parent.depot(montant)", "Les deux A et B sont correctes"],
      ans: 3, exp: "Les deux formes fonctionnent. super().depot(montant) est recommandé (plus générique). Compte.depot(self, montant) est explicite mais moins flexible si la hiérarchie change." },

    { q: "On veut que PokemonElectrique.attaquer() applique d'abord l'attaque normale de Pokemon, puis paralyse la cible. Quelle est la bonne implémentation ?",
      opts: [
        "def attaquer(self, cible): cible.pdv -= 10; cible.paralysie = True",
        "def attaquer(self, cible): super().attaquer(cible); cible.paralysie = True",
        "def attaquer(self, cible): Pokemon.attaquer(); cible.paralysie = True",
        "def attaquer(self, cible): self.attaquer(cible); cible.paralysie = True"
      ],
      ans: 1, exp: "super().attaquer(cible) exécute la logique du parent (retire 10 PV), puis on ajoute l'effet spécifique (paralysie). La réponse A duplique la logique ; C oublie self ; D crée une récursion infinie." }

  ]

};

/* Fonction utilitaire : obtenir n questions aléatoires d'un chapitre */
function getRandomQuestions(chapter, n = 10) {
  const pool = QUESTIONS[chapter] || [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}
