/* ============================================================
   Banque de questions — Algorithmique & Complexité
   ============================================================ */
window.NSI_QUESTIONS = window.NSI_QUESTIONS || {};
window.NSI_QUESTIONS['algo'] = [
  {
    question: "Quelle est la complexité temporelle de la recherche dichotomique ?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: 2,
    explanation: "La recherche dichotomique divise le problème par 2 à chaque étape. Sur n éléments, elle effectue au plus log₂(n) comparaisons. C'est bien O(log n), bien plus efficace que la recherche linéaire O(n)."
  },
  {
    question: "Que signifie O(n²) pour la complexité d'un algorithme ?",
    options: [
      "L'algorithme effectue exactement n² opérations",
      "Le nombre d'opérations croît comme le carré de la taille de l'entrée",
      "L'algorithme est deux fois moins rapide que O(n)",
      "L'algorithme utilise n² octets de mémoire"
    ],
    answer: 1,
    explanation: "O(n²) indique que le temps d'exécution croît proportionnellement au carré de la taille n. Doubler n multiplie le temps par 4. C'est typique des algorithmes avec deux boucles imbriquées sur n éléments."
  },
  {
    question: "Quelle est la complexité de la recherche d'un élément dans une liste non triée ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 2,
    explanation: "Dans une liste non triée, il faut potentiellement parcourir tous les éléments. Dans le pire cas, l'élément est en dernière position ou absent. La complexité est O(n) — linéaire."
  },
  {
    question: "Quel algorithme de tri a une complexité O(n log n) en moyenne ?",
    options: ["Tri par insertion", "Tri à bulles", "Tri par sélection", "Tri fusion"],
    answer: 3,
    explanation: "Le tri fusion (merge sort) a une complexité O(n log n) garantie dans tous les cas. Le tri par insertion, à bulles et par sélection sont tous O(n²) dans le pire cas."
  },
  {
    question: "Quelle est la complexité du tri par insertion dans le meilleur cas ?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
    answer: 2,
    explanation: "Le meilleur cas du tri par insertion est une liste déjà triée. L'algorithme ne fait qu'une comparaison par élément sans déplacement : complexité O(n). Dans le pire cas (liste inversée) : O(n²)."
  },
  {
    question: "Qu'est-ce que la récursivité ?",
    options: [
      "Un algorithme qui utilise plusieurs boucles",
      "Une fonction qui s'appelle elle-même avec des paramètres plus simples",
      "Un algorithme qui utilise une pile externe",
      "Une méthode de tri avancée"
    ],
    answer: 1,
    explanation: "Une fonction récursive s'appelle elle-même avec des paramètres réduits vers un cas de base. Toute récursion nécessite : un ou plusieurs cas de base (arrêt) et des appels récursifs qui convergent vers ces cas."
  },
  {
    question: "Quel est le cas de base de la fonction factorielle récursive ?",
    options: ["n == 0 ou n == 1, retourne 1", "n == 0, retourne 0", "n > 0, retourne n", "n == 2, retourne 2"],
    answer: 0,
    explanation: "factorielle(0) = 1 et factorielle(1) = 1 sont les cas de base. Pour n > 1 : factorielle(n) = n * factorielle(n-1). Sans cas de base, la récursion serait infinie et provoquerait un dépassement de pile."
  },
  {
    question: "Qu'est-ce que le principe 'diviser pour régner' (divide and conquer) ?",
    options: [
      "Diviser un problème en sous-problèmes indépendants, les résoudre récursivement, puis combiner les solutions",
      "Utiliser plusieurs processeurs pour résoudre un problème",
      "Réduire la complexité en divisant les données par deux",
      "Appliquer un algorithme glouton à chaque étape"
    ],
    answer: 0,
    explanation: "Diviser pour régner : on divise le problème en sous-problèmes plus simples (souvent de même nature), on résout chacun récursivement, puis on combine les résultats. Exemples : tri fusion, recherche dichotomique."
  },
  {
    question: "Quelle est la complexité spatiale (mémoire) du tri fusion ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Le tri fusion nécessite un tableau auxiliaire de taille n pour fusionner les sous-tableaux. Sa complexité spatiale est O(n). Le tri en place (comme le tri à bulles) a une complexité spatiale O(1)."
  },
  {
    question: "Quelle est la différence entre un algorithme glouton et la programmation dynamique ?",
    options: [
      "L'algorithme glouton explore toutes les solutions ; la programmation dynamique prend la meilleure locale",
      "L'algorithme glouton prend la meilleure décision locale à chaque étape ; la programmation dynamique mémorise les sous-solutions pour éviter les recalculs",
      "Aucune différence en pratique",
      "La programmation dynamique est toujours plus lente"
    ],
    answer: 1,
    explanation: "Un algorithme glouton fait le meilleur choix local à chaque étape, sans revenir en arrière. La programmation dynamique résout les sous-problèmes en mémorisant leurs solutions (mémoïsation) pour éviter les calculs redondants."
  },
  {
    question: "Qu'est-ce que la complexité O(1) signifie ?",
    options: [
      "L'algorithme prend 1 seconde",
      "L'algorithme effectue exactement 1 opération",
      "Le temps d'exécution est constant, indépendant de la taille de l'entrée",
      "L'algorithme ne consomme pas de mémoire"
    ],
    answer: 2,
    explanation: "O(1) — temps constant — signifie que le nombre d'opérations ne dépend pas de n. Accès à un tableau par indice, insertion/suppression en tête de pile, hachage dans un dictionnaire sont des opérations O(1)."
  },
  {
    question: "Dans le tri par sélection, qu'est-ce qu'on sélectionne à chaque itération ?",
    options: [
      "L'élément le plus grand et on le place en début",
      "L'élément minimum de la partie non triée et on le place à sa position finale",
      "Deux éléments adjacents que l'on compare et échange",
      "L'élément médian de la liste"
    ],
    answer: 1,
    explanation: "Le tri par sélection trouve le minimum de la partie non triée et le place à la bonne position (en échangeant avec le premier élément non trié). Il fait O(n²) comparaisons mais seulement O(n) échanges."
  },
  {
    question: "Qu'est-ce qu'une invariant de boucle ?",
    options: [
      "Une variable qui ne change pas pendant la boucle",
      "Une propriété vraie avant, pendant (à chaque itération) et après la boucle, permettant de prouver sa correction",
      "La condition d'arrêt de la boucle",
      "Le nombre d'itérations de la boucle"
    ],
    answer: 1,
    explanation: "Un invariant de boucle est une propriété P qui est vraie avant la boucle, reste vraie après chaque itération, et à la fin (quand la condition d'arrêt est atteinte), permet de prouver que la boucle est correcte."
  },
  {
    question: "Quelle est la complexité de l'algorithme de Dijkstra avec une file de priorité ?",
    options: ["O(V + E)", "O(V² )", "O((V + E) log V)", "O(E log E)"],
    answer: 2,
    explanation: "Avec une file de priorité (tas binaire), Dijkstra est O((V + E) log V). Sans optimisation (tableau simple), c'est O(V²). V = nombre de sommets, E = nombre d'arêtes."
  },
  {
    question: "Quel est le principal risque de la récursion sans cas de base bien défini ?",
    options: [
      "Un résultat incorrect",
      "Une boucle infinie avec un dépassement de pile (RecursionError)",
      "Une consommation excessive de mémoire heap",
      "Un ralentissement graduel de l'exécution"
    ],
    answer: 1,
    explanation: "Sans cas de base, la récursion s'appelle indéfiniment. Python lève une RecursionError (stack overflow) quand la profondeur dépasse la limite (par défaut ~1000). Python limite la récursion contrairement à certains autres langages."
  },
  {
    question: "Quelle est la complexité de la recherche dans une table de hachage en cas moyen ?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: 2,
    explanation: "En cas moyen (peu de collisions), la table de hachage offre une recherche O(1) : on calcule l'empreinte (hash) de la clé et on accède directement à la case. En pire cas (toutes les clés dans la même case) : O(n)."
  },
  {
    question: "Qu'est-ce qu'un algorithme en place (in-place) ?",
    options: [
      "Un algorithme qui s'exécute à un seul endroit du code",
      "Un algorithme qui trie les données au bon endroit sans tableau auxiliaire important",
      "Un algorithme dont la complexité est O(1)",
      "Un algorithme qui modifie les données de façon irréversible"
    ],
    answer: 1,
    explanation: "Un algorithme en place (in-place) effectue ses opérations avec une quantité mémoire supplémentaire constante O(1), sans copier le tableau. Le tri à bulles, tri par insertion, tri par sélection sont en place. Le tri fusion ne l'est pas."
  },
  {
    question: "Quel algorithme de tri est stable ?",
    options: [
      "Tri par sélection",
      "Tri à bulles",
      "Tri rapide (quicksort)",
      "Tri par sélection et tri rapide"
    ],
    answer: 1,
    explanation: "Un tri stable préserve l'ordre relatif des éléments égaux. Le tri à bulles et le tri par insertion sont stables. Le tri par sélection et le tri rapide ne le sont généralement pas."
  },
  {
    question: "Quelle est la complexité de l'accès au k-ième élément d'une liste chaînée ?",
    options: ["O(1)", "O(log n)", "O(k)", "O(n)"],
    answer: 2,
    explanation: "Dans une liste chaînée, il faut parcourir les k premiers nœuds pour atteindre le k-ième. La complexité est O(k), et O(n) dans le pire cas. C'est différent des tableaux (O(1) par indice)."
  },
  {
    question: "Dans l'algorithme de tri fusion, que fait l'étape de 'fusion' ?",
    options: [
      "Elle divise le tableau en deux moitiés",
      "Elle fusionne deux sous-tableaux déjà triés en un tableau trié",
      "Elle sélectionne le pivot",
      "Elle vérifie que le tableau est trié"
    ],
    answer: 1,
    explanation: "Le tri fusion divise d'abord le tableau en deux moitiés (diviser), les trie récursivement, puis fusionne (merge) les deux moitiés triées en comparant les éléments un par un pour obtenir un tableau trié."
  },
  {
    question: "Qu'est-ce que la mémoïsation dans le contexte de la récursivité ?",
    options: [
      "L'écriture de commentaires dans le code récursif",
      "Le stockage des résultats d'appels récursifs déjà calculés pour éviter les recalculs",
      "La limitation de la profondeur de récursion",
      "Le débogage des fonctions récursives"
    ],
    answer: 1,
    explanation: "La mémoïsation consiste à stocker (dans un dictionnaire par exemple) les résultats des appels récursifs déjà effectués. Cela évite de recalculer plusieurs fois le même sous-problème — c'est la base de la programmation dynamique."
  },
  {
    question: "Pour un algorithme de complexité O(n log n), si n double, comment évolue approximativement le temps de calcul ?",
    options: [
      "Il double (×2)",
      "Il quadruple (×4)",
      "Il est multiplié par environ 2.something (légèrement plus que ×2)",
      "Il reste constant"
    ],
    answer: 2,
    explanation: "Si n → 2n : le nouveau temps est 2n log(2n) = 2n(log n + log 2) ≈ 2n log n + 2n. Pour de grands n, le ratio est environ 2 + 2/log n, légèrement supérieur à 2. L'augmentation est un peu plus que le double."
  },
  {
    question: "Quelle est la différence entre complexité dans le pire cas et complexité en moyenne ?",
    options: [
      "Aucune différence en pratique",
      "Le pire cas donne la borne supérieure sur n'importe quelle entrée ; la moyenne est calculée sur toutes les entrées possibles",
      "Le pire cas est toujours O(n²), la moyenne toujours O(n log n)",
      "La complexité en moyenne s'applique seulement aux algorithmes de tri"
    ],
    answer: 1,
    explanation: "La complexité dans le pire cas (worst case) garantit une borne supérieure pour toute entrée. La complexité en moyenne est calculée sur la distribution des entrées possibles. Ex: quicksort est O(n²) en pire cas mais O(n log n) en moyenne."
  },
  {
    question: "Que retourne cet algorithme récursif ? def mystere(n): return 1 if n <= 1 else n * mystere(n-1)",
    options: ["La somme 1+2+...+n", "n! (factorielle de n)", "2^n", "n²"],
    answer: 1,
    explanation: "mystere(n) = n * mystere(n-1) = n * (n-1) * mystere(n-2) = ... = n * (n-1) * ... * 1 = n! (factorielle). Le cas de base est mystere(1) = 1 = 1!."
  },
  {
    question: "Quelle est la complexité de l'algorithme de Fibonacci naïf (récursif sans mémoïsation) ?",
    options: ["O(n)", "O(n²)", "O(2^n)", "O(n log n)"],
    answer: 2,
    explanation: "L'algorithme de Fibonacci naïf recalcule les mêmes valeurs exponentiellement de fois. La complexité est O(2^n) car l'arbre des appels se double presque à chaque niveau. Avec mémoïsation ou de façon itérative : O(n)."
  },
  {
    question: "Qu'est-ce qu'un algorithme glouton (greedy) ?",
    options: [
      "Un algorithme qui explore toutes les solutions pour trouver l'optimale",
      "Un algorithme qui fait le choix localement optimal à chaque étape, sans revenir en arrière",
      "Un algorithme qui utilise des sous-problèmes mémoïsés",
      "Un algorithme de tri particulièrement efficace"
    ],
    answer: 1,
    explanation: "Un algorithme glouton fait à chaque étape le meilleur choix local, sans remettre en question les décisions passées. Il n'est pas toujours optimal globalement. Exemples : algorithme de Kruskal, problème du rendu de monnaie."
  },
  {
    question: "Quel est le nombre minimum de comparaisons pour trier 3 éléments ?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "Pour trier 3 éléments, il faut au minimum 3 comparaisons dans le pire cas. La borne inférieure théorique pour trier n éléments est Ω(n log n) comparaisons."
  },
  {
    question: "Qu'est-ce que la terminaison d'un algorithme ?",
    options: [
      "L'arrêt normal du programme principal",
      "La garantie que l'algorithme se termine en un nombre fini d'étapes pour toute entrée valide",
      "L'affichage du résultat final",
      "Le cas de base d'une récursion"
    ],
    answer: 1,
    explanation: "La terminaison est une propriété de correction partielle : on prouve qu'un algorithme se termine toujours. Pour les boucles, on utilise un variant (une quantité entière positive qui décroît strictement à chaque itération)."
  },
  {
    question: "Quelle est la complexité du parcours d'un tableau de n éléments avec une boucle for simple ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Une boucle for sur n éléments effectue exactement n itérations. La complexité est O(n) — linéaire. Si deux boucles for sont imbriquées sur le même tableau, la complexité devient O(n²)."
  },
  {
    question: "Quel algorithme de tri utilise un pivot pour partitionner le tableau ?",
    options: ["Tri fusion", "Tri par insertion", "Tri rapide (quicksort)", "Tri par sélection"],
    answer: 2,
    explanation: "Le tri rapide (quicksort) choisit un pivot, place à sa gauche les éléments plus petits et à sa droite les plus grands, puis trie récursivement les deux parties. Complexité : O(n log n) en moyenne, O(n²) en pire cas."
  },
  {
    question: "Que signifie 'correction' d'un algorithme ?",
    options: [
      "L'absence de bugs dans le code Python",
      "La garantie que l'algorithme produit le résultat attendu pour toute entrée valide",
      "La performance de l'algorithme",
      "La lisibilité du code source"
    ],
    answer: 1,
    explanation: "La correction (ou justesse) d'un algorithme signifie qu'il produit toujours le bon résultat. On distingue correction partielle (si ça termine, c'est correct) et correction totale (ça termine ET c'est correct)."
  },
  {
    question: "Quelle est la complexité de l'insertion au début d'une liste Python (liste[0:0] = [x]) ?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Insérer au début d'une liste Python nécessite de décaler tous les n éléments existants d'une position. C'est O(n). Pour des insertions fréquentes en tête, collections.deque est plus efficace (O(1) avec appendleft)."
  }
];

/* ============================================================
   Banque de questions — Architecture matérielle & OS
   ============================================================ */
window.NSI_QUESTIONS['archi'] = [
  {
    question: "Que signifie l'acronyme CPU ?",
    options: ["Central Processing Unit", "Core Program Unit", "Computer Power Unit", "Central Program Utility"],
    answer: 0,
    explanation: "CPU (Central Processing Unit) est le processeur central de l'ordinateur. Il exécute les instructions des programmes. Un CPU moderne contient plusieurs cœurs (cores) permettant l'exécution parallèle."
  },
  {
    question: "Quel est le modèle d'architecture matérielle que l'on enseigne en NSI pour décrire le fonctionnement d'un ordinateur ?",
    options: ["Architecture RISC", "Architecture de Von Neumann", "Architecture Harvard", "Architecture ARM"],
    answer: 1,
    explanation: "L'architecture de Von Neumann (1945) décrit un ordinateur avec : une mémoire centrale (données + programme), un processeur (UAL + UC), des entrées/sorties et un bus de communication. C'est le modèle de base de tous les ordinateurs modernes."
  },
  {
    question: "Que contient le registre 'compteur de programme' (Program Counter / PC) ?",
    options: [
      "La valeur calculée par la dernière instruction",
      "L'adresse mémoire de la prochaine instruction à exécuter",
      "Le nombre d'instructions exécutées depuis le démarrage",
      "La valeur du registre d'accumulation"
    ],
    answer: 1,
    explanation: "Le compteur de programme (PC ou IP - Instruction Pointer) contient l'adresse en mémoire de la prochaine instruction à exécuter. Après chaque instruction, il est incrémenté (ou modifié par un saut)."
  },
  {
    question: "Qu'est-ce que la mémoire RAM ?",
    options: [
      "Une mémoire permanente pour stocker le système d'exploitation",
      "Une mémoire volatile à accès aléatoire, utilisée pour le stockage temporaire pendant l'exécution",
      "La mémoire du processeur (registres)",
      "Le disque dur de l'ordinateur"
    ],
    answer: 1,
    explanation: "La RAM (Random Access Memory) est volatile (les données sont perdues à l'extinction) et rapide. Elle stocke les programmes en cours d'exécution et leurs données. Contrairement au disque dur (persistant mais plus lent)."
  },
  {
    question: "Dans le cycle fetch-decode-execute, que fait l'étape 'fetch' ?",
    options: [
      "Exécuter l'instruction courante",
      "Décoder l'opcode de l'instruction",
      "Charger depuis la mémoire l'instruction pointée par le PC",
      "Stocker le résultat en mémoire"
    ],
    answer: 2,
    explanation: "Le cycle d'exécution d'une instruction : Fetch (chercher) → lire l'instruction à l'adresse PC en mémoire. Decode → décoder l'instruction (quel opcode ?). Execute → exécuter l'opération."
  },
  {
    question: "Qu'est-ce qu'un processus dans un système d'exploitation ?",
    options: [
      "Un fichier exécutable stocké sur le disque",
      "Un programme en cours d'exécution, avec ses ressources (mémoire, registres, état)",
      "Une partie du noyau du système d'exploitation",
      "Un pilote matériel"
    ],
    answer: 1,
    explanation: "Un processus est un programme en cours d'exécution. Il comprend le code, les données, la pile d'appel, et un état (en attente, en cours, bloqué). Le SE gère les processus via un ordonnanceur."
  },
  {
    question: "Qu'est-ce que l'ordonnancement des processus ?",
    options: [
      "La compilation des programmes",
      "L'allocation du temps processeur entre les différents processus",
      "La gestion de la mémoire virtuelle",
      "Le chargement des pilotes au démarrage"
    ],
    answer: 1,
    explanation: "L'ordonnanceur (scheduler) du système d'exploitation décide quel processus utilise le CPU à chaque instant. Il alterne entre processus pour donner l'illusion de parallélisme sur un CPU (time-sharing)."
  },
  {
    question: "Que signifie le terme 'bit' ?",
    options: [
      "Binary Integer Transition",
      "La plus petite unité d'information, valant 0 ou 1",
      "Une unité de mesure de vitesse du processeur",
      "Huit octets d'information"
    ],
    answer: 1,
    explanation: "Un bit (binary digit) est l'unité de base de l'information en informatique. Il peut prendre deux valeurs : 0 ou 1. 8 bits = 1 octet (byte). 1 kilo-octet = 1024 octets, 1 méga-octet = 1024 ko..."
  },
  {
    question: "Comment représenter le nombre décimal 13 en binaire ?",
    options: ["1001", "1011", "1101", "1110"],
    answer: 2,
    explanation: "13 en binaire : 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ = 1101. Méthode : 13÷2=6R1, 6÷2=3R0, 3÷2=1R1, 1÷2=0R1 → on lit les restes de bas en haut : 1101."
  },
  {
    question: "Combien de valeurs différentes peut représenter un entier non signé sur 8 bits ?",
    options: ["128", "255", "256", "512"],
    answer: 2,
    explanation: "Sur 8 bits, on peut représenter 2⁸ = 256 valeurs différentes (de 0 à 255). Sur n bits : 2ⁿ valeurs. Pour les entiers signés sur 8 bits : de -128 à 127 (toujours 256 valeurs)."
  },
  {
    question: "Qu'est-ce que la mémoire cache du processeur ?",
    options: [
      "La mémoire virtuelle sur le disque dur",
      "Une mémoire très rapide intégrée au CPU pour stocker temporairement les données fréquemment utilisées",
      "Le buffer de l'écran",
      "La mémoire utilisée par le BIOS"
    ],
    answer: 1,
    explanation: "Le cache (L1, L2, L3) est une mémoire très rapide (mais petite et coûteuse) proche du CPU. Elle stocke les données et instructions récemment utilisées pour éviter d'accéder à la RAM (plus lente). La hiérarchie est : registres > cache > RAM > disque."
  },
  {
    question: "Quelle est la différence entre la ROM et la RAM ?",
    options: [
      "La ROM est plus rapide que la RAM",
      "La ROM est non volatile (données persistantes) ; la RAM est volatile (données perdues à l'extinction)",
      "La RAM stocke le système d'exploitation ; la ROM stocke les données utilisateur",
      "Il n'y a aucune différence fonctionnelle"
    ],
    answer: 1,
    explanation: "ROM (Read Only Memory) : non volatile, stocke le firmware (BIOS/UEFI). RAM (Random Access Memory) : volatile, rapide, stocke les données des programmes en cours. Les SSD/HDD sont aussi persistants mais beaucoup plus lents."
  },
  {
    question: "Qu'est-ce qu'un système d'exploitation ?",
    options: [
      "Un logiciel bureautique comme Microsoft Office",
      "Un logiciel qui fait l'interface entre le matériel et les applications, gérant les ressources",
      "Le BIOS de l'ordinateur",
      "Un logiciel de programmation"
    ],
    answer: 1,
    explanation: "Le système d'exploitation (OS) gère le matériel (CPU, RAM, périphériques) et fournit des services aux applications (gestion des fichiers, processus, mémoire, réseau). Exemples : Linux, Windows, macOS, Android."
  },
  {
    question: "Qu'est-ce que la concurrence entre processus ?",
    options: [
      "La compétition entre deux algorithmes pour le même problème",
      "L'exécution de plusieurs processus semblant simultanés, se partageant les ressources",
      "L'accélération d'un processus sur plusieurs cœurs",
      "La synchronisation des horloges des processeurs"
    ],
    answer: 1,
    explanation: "La concurrence (concurrent computing) désigne l'exécution de plusieurs processus dont les périodes d'exécution se chevauchent. L'OS les entrelace sur le CPU. Ne pas confondre avec le parallélisme (vrai simultané sur plusieurs cœurs)."
  },
  {
    question: "Qu'est-ce qu'un interblocage (deadlock) ?",
    options: [
      "Un processus qui bouche le CPU à 100%",
      "Une situation où plusieurs processus s'attendent mutuellement, bloqués indéfiniment",
      "Un crash du système d'exploitation",
      "Un conflit entre driver matériel et application"
    ],
    answer: 1,
    explanation: "Un interblocage (deadlock) survient quand plusieurs processus s'attendent mutuellement pour libérer des ressources. Ex: P1 attend une ressource R2 détenue par P2, et P2 attend R1 détenue par P1 → blocage mutuel."
  },
  {
    question: "Quelle base est utilisée pour l'hexadécimal ?",
    options: ["Base 2", "Base 8", "Base 10", "Base 16"],
    answer: 3,
    explanation: "L'hexadécimal est une base 16. Les chiffres sont : 0-9 puis A(10), B(11), C(12), D(13), E(14), F(15). Un octet (8 bits) s'écrit avec 2 chiffres hexadécimaux. Ex: FF = 255, 1A = 26."
  },
  {
    question: "Que signifie 'instruction machine' (langage machine) ?",
    options: [
      "Un programme écrit en Python",
      "Des instructions directement exécutables par le processeur, en binaire",
      "Le code source d'un programme",
      "Les commentaires dans un programme"
    ],
    answer: 1,
    explanation: "Le langage machine est le seul que le CPU comprend directement. C'est une suite de bits (souvent représentée en hexa) encodant les opérations. Le langage assembleur est sa représentation symbolique. C, Python... sont compilés/interprétés vers le langage machine."
  },
  {
    question: "Dans quelle unité mesure-t-on la fréquence d'horloge d'un processeur ?",
    options: ["Octets/seconde", "MIPS", "GHz (GigaHertz)", "Go (GigaOctets)"],
    answer: 2,
    explanation: "La fréquence d'un processeur se mesure en Hz (Hertz). Un processeur à 3,5 GHz effectue 3,5 milliards de cycles par seconde. Chaque instruction prend un certain nombre de cycles."
  },
  {
    question: "Qu'est-ce qu'un appel système (system call) ?",
    options: [
      "Un appel de fonction ordinaire dans un programme",
      "Une requête d'un programme vers le noyau du SE pour accéder à des ressources protégées",
      "Un message d'erreur du système",
      "Une interruption matérielle"
    ],
    answer: 1,
    explanation: "Un appel système (syscall) est l'interface entre les programmes utilisateur et le noyau de l'OS. Pour accéder au disque, au réseau, créer un processus... le programme doit demander au noyau via un syscall (ex: read, write, fork en Unix)."
  },
  {
    question: "Quelle est la différence entre un processus et un thread ?",
    options: [
      "Un thread est plus puissant qu'un processus",
      "Un processus a son propre espace mémoire isolé ; les threads d'un même processus partagent la mémoire",
      "Un processus est créé par l'utilisateur, un thread par le système",
      "Il n'y a aucune différence en pratique"
    ],
    answer: 1,
    explanation: "Un processus est une instance isolée d'un programme avec son propre espace mémoire. Un thread est un flux d'exécution à l'intérieur d'un processus, partageant mémoire et ressources avec les autres threads du même processus."
  },
  {
    question: "Comment convertir l'hexadécimal 2F en décimal ?",
    options: ["29", "47", "27", "35"],
    answer: 1,
    explanation: "2F en hexa : 2 × 16¹ + F × 16⁰ = 2 × 16 + 15 × 1 = 32 + 15 = 47. F vaut 15 en décimal. Pour mémoriser : A=10, B=11, C=12, D=13, E=14, F=15."
  },
  {
    question: "Qu'est-ce que la mémoire virtuelle ?",
    options: [
      "Une mémoire RAM imaginaire qui n'existe pas physiquement",
      "Un mécanisme qui donne l'illusion à chaque processus d'avoir sa propre mémoire continue, en utilisant le disque comme extension",
      "La mémoire utilisée par les machines virtuelles",
      "Le nom de la RAM avant 1990"
    ],
    answer: 1,
    explanation: "La mémoire virtuelle donne à chaque processus l'illusion d'un espace d'adressage continu et large. L'OS et le matériel (MMU) traduisent les adresses virtuelles en adresses physiques. La pagination permet d'utiliser le disque si la RAM est pleine (swapping)."
  },
  {
    question: "Qu'est-ce que le bit de parité ?",
    options: [
      "Un bit qui indique le signe d'un nombre",
      "Un bit ajouté à un groupe de bits pour permettre la détection d'erreurs de transmission",
      "Le bit de poids le plus fort d'un octet",
      "Un bit utilisé pour l'encodage UTF-8"
    ],
    answer: 1,
    explanation: "Le bit de parité est un bit de contrôle ajouté aux données. La parité paire garantit que le nombre total de 1 est pair. Si un bit est modifié lors de la transmission, la parité change et l'erreur est détectée (pas corrigée)."
  },
  {
    question: "Dans la notation en complément à deux sur 8 bits, quelle est la représentation de -1 ?",
    options: ["00000001", "10000001", "11111111", "01111111"],
    answer: 2,
    explanation: "En complément à deux, -1 est représenté par tous les bits à 1 : 11111111. Pour obtenir -n : inverser tous les bits de n, puis ajouter 1. Pour -1 : inverser 00000001 → 11111110, ajouter 1 → 11111111."
  },
  {
    question: "Que fait la commande Unix/Linux 'ps' ?",
    options: [
      "Elle affiche l'espace disque disponible",
      "Elle liste les processus en cours d'exécution",
      "Elle change les permissions d'un fichier",
      "Elle affiche la mémoire disponible"
    ],
    answer: 1,
    explanation: "La commande ps (process status) affiche les processus en cours. ps aux affiche tous les processus. top affiche les processus en temps réel avec leur consommation CPU/RAM."
  },
  {
    question: "Qu'est-ce que le bus système dans l'architecture de Von Neumann ?",
    options: [
      "Un logiciel gérant les périphériques",
      "Un ensemble de conducteurs transportant données, adresses et signaux de contrôle entre composants",
      "Le nom du processeur dans certains ordinateurs",
      "La connexion internet de l'ordinateur"
    ],
    answer: 1,
    explanation: "Le bus système est un ensemble de fils (conducteurs) qui interconnectent les composants : bus de données (transfère les données), bus d'adresses (indique l'emplacement mémoire), bus de contrôle (signaux de lecture/écriture)."
  },
  {
    question: "Quelle est la valeur décimale de l'octet binaire 10110101 ?",
    options: ["165", "181", "171", "185"],
    answer: 1,
    explanation: "10110101 = 1×128 + 0×64 + 1×32 + 1×16 + 0×8 + 1×4 + 0×2 + 1×1 = 128 + 32 + 16 + 4 + 1 = 181."
  },
  {
    question: "Qu'est-ce qu'un pilote (driver) dans un système d'exploitation ?",
    options: [
      "Un programme de gestion des mots de passe",
      "Un logiciel faisant l'interface entre le SE et un périphérique matériel spécifique",
      "Un optimiseur de performances CPU",
      "Une interface graphique pour configurer le matériel"
    ],
    answer: 1,
    explanation: "Un pilote (driver) est un logiciel qui permet au SE de communiquer avec un périphérique matériel (carte graphique, imprimante, souris...). Il traduit les commandes génériques du SE en commandes spécifiques au matériel."
  },
  {
    question: "Quelle opération bit à bit correspond au ET logique entre 1010 et 1100 ?",
    options: ["1110", "1000", "0110", "0010"],
    answer: 1,
    explanation: "L'opération AND bit à bit : 1&1=1, 1&0=0, 0&1=0, 0&0=0. Donc 1010 AND 1100 = 1000. L'AND est souvent utilisé comme masque pour isoler certains bits d'un octet."
  },
  {
    question: "Comment s'appelle le programme exécuté en premier au démarrage d'un ordinateur ?",
    options: ["Le chargeur d'amorçage (bootloader)", "Le noyau (kernel)", "Le shell", "Le SGBD"],
    answer: 0,
    explanation: "Le BIOS/UEFI est exécuté en premier, puis charge le bootloader (GRUB par exemple) qui se trouve sur le disque. Le bootloader charge ensuite le noyau du SE en mémoire."
  },
  {
    question: "Qu'est-ce que la multiprogrammation ?",
    options: [
      "L'utilisation de plusieurs langages de programmation dans un projet",
      "La capacité du SE à gérer plusieurs programmes chargés en mémoire simultanément",
      "La programmation sur plusieurs ordinateurs en réseau",
      "L'utilisation de plusieurs processeurs dans un ordinateur"
    ],
    answer: 1,
    explanation: "La multiprogrammation permet de charger plusieurs programmes en mémoire. Pendant qu'un programme attend (E/S), le CPU peut travailler sur un autre. C'est une technique clé pour maximiser l'utilisation du CPU."
  }
];

/* ============================================================
   Banque de questions — Réseaux & Sécurité
   ============================================================ */
window.NSI_QUESTIONS['reseaux'] = [
  {
    question: "Quelle est la différence entre une adresse IP et une adresse MAC ?",
    options: [
      "L'adresse IP est physique, l'adresse MAC est logique",
      "L'adresse MAC identifie la carte réseau (couche liaison), l'adresse IP identifie l'hôte dans le réseau (couche réseau)",
      "L'adresse MAC change à chaque connexion, l'IP est permanente",
      "Elles désignent la même chose"
    ],
    answer: 1,
    explanation: "L'adresse MAC est une adresse physique sur 48 bits, gravée dans la carte réseau. L'adresse IP (32 bits en IPv4) est une adresse logique attribuée par configuration. MAC = couche 2 (liaison), IP = couche 3 (réseau)."
  },
  {
    question: "Qu'est-ce que le protocole TCP par rapport à UDP ?",
    options: [
      "TCP est plus rapide qu'UDP",
      "TCP garantit la livraison et l'ordre des données (orienté connexion) ; UDP est non fiable mais plus rapide",
      "UDP est sécurisé, TCP ne l'est pas",
      "TCP est pour les réseaux locaux, UDP pour Internet"
    ],
    answer: 1,
    explanation: "TCP (Transmission Control Protocol) garantit la livraison complète et ordonnée des données via accusés de réception, retransmission... UDP est sans connexion : plus rapide mais sans garantie. TCP pour HTTP, email ; UDP pour streaming, jeux."
  },
  {
    question: "Qu'est-ce qu'une adresse IP en notation CIDR (ex: 192.168.1.0/24) ?",
    options: [
      "Une adresse IP avec un numéro de port",
      "Une adresse réseau avec un masque indiquant le nombre de bits réservés à la partie réseau",
      "Un protocole de communication sécurisé",
      "Une adresse IPv6 abrégée"
    ],
    answer: 1,
    explanation: "La notation CIDR (Classless Inter-Domain Routing) /24 signifie que les 24 premiers bits sont la partie réseau. /24 = masque 255.255.255.0, permettant 256 adresses (254 utilisables). /16 = 65536 adresses."
  },
  {
    question: "Quel protocole permet la résolution d'un nom de domaine (ex: google.com) en adresse IP ?",
    options: ["HTTP", "DHCP", "DNS", "ARP"],
    answer: 2,
    explanation: "DNS (Domain Name System) traduit les noms de domaine en adresses IP. Quand vous tapez 'google.com', votre ordinateur interroge un serveur DNS pour obtenir l'IP correspondante avant d'établir la connexion."
  },
  {
    question: "Qu'est-ce que le modèle TCP/IP ?",
    options: [
      "Un protocole de sécurité pour les communications chiffrées",
      "Un modèle en couches (4 couches) décrivant les protocoles de communication sur Internet",
      "Un système d'exploitation pour les routeurs",
      "Un algorithme de routage"
    ],
    answer: 1,
    explanation: "Le modèle TCP/IP a 4 couches : Application (HTTP, FTP, DNS...), Transport (TCP, UDP), Internet/Réseau (IP), Accès réseau (Ethernet, WiFi). C'est le modèle pratique d'Internet, à distinguer du modèle OSI à 7 couches."
  },
  {
    question: "Qu'est-ce que le protocole HTTP ?",
    options: [
      "Un protocole de transfert de fichiers sécurisé",
      "Le protocole de communication client-serveur pour le transfert de pages web",
      "Un protocole de messagerie électronique",
      "Un protocole de routage"
    ],
    answer: 1,
    explanation: "HTTP (HyperText Transfer Protocol) est le protocole de la couche Application pour le Web. Le client (navigateur) envoie des requêtes (GET, POST...) et le serveur répond avec des ressources HTML, CSS, images... HTTPS ajoute le chiffrement TLS."
  },
  {
    question: "Quel est le rôle d'un routeur dans un réseau ?",
    options: [
      "Connecter des appareils au réseau local par câble",
      "Acheminer les paquets IP entre différents réseaux en choisissant le meilleur chemin",
      "Attribuer des adresses IP aux appareils du réseau",
      "Chiffrer les communications entre deux hôtes"
    ],
    answer: 1,
    explanation: "Un routeur opère à la couche réseau (couche 3). Il reçoit des paquets IP, consulte sa table de routage pour déterminer le prochain saut (next hop), et transmet le paquet vers sa destination. Il interconnecte des réseaux différents."
  },
  {
    question: "Qu'est-ce que le chiffrement symétrique ?",
    options: [
      "Un chiffrement qui ne peut être déchiffré que d'un seul côté",
      "Un chiffrement où la même clé secrète sert au chiffrement et au déchiffrement",
      "Un chiffrement utilisant une paire clé publique/clé privée",
      "Un chiffrement basé sur des clés différentes pour l'émetteur et le récepteur"
    ],
    answer: 1,
    explanation: "Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer. Rapide et efficace. Le problème est l'échange de la clé secrète. Exemples : AES, DES. Différent du chiffrement asymétrique (RSA) avec paire de clés."
  },
  {
    question: "Qu'est-ce qu'une clé publique et une clé privée dans le chiffrement asymétrique ?",
    options: [
      "Deux clés secrètes identiques partagées entre émetteur et récepteur",
      "La clé publique chiffre (ou vérifie une signature) ; la clé privée déchiffre (ou signe), et elles sont mathématiquement liées",
      "Deux variantes de la même clé AES",
      "Un protocole d'authentification à deux facteurs"
    ],
    answer: 1,
    explanation: "En cryptographie asymétrique (RSA par exemple) : la clé publique (partageable librement) chiffre un message que seule la clé privée correspondante peut déchiffrer. Aussi utilisée pour les signatures numériques."
  },
  {
    question: "Qu'est-ce qu'un protocole de routage comme OSPF ou RIP ?",
    options: [
      "Un protocole pour sécuriser les communications entre routeurs",
      "Un algorithme permettant aux routeurs d'échanger des informations pour construire leurs tables de routage",
      "Un protocole d'attribution d'adresses IP",
      "Une méthode de compression des paquets réseau"
    ],
    answer: 1,
    explanation: "Les protocoles de routage (RIP, OSPF, BGP...) permettent aux routeurs de s'échanger des informations sur la topologie du réseau pour construire et maintenir leurs tables de routage. OSPF utilise l'algorithme de Dijkstra."
  },
  {
    question: "Qu'est-ce qu'un pare-feu (firewall) ?",
    options: [
      "Un antivirus pour les serveurs web",
      "Un système filtrant le trafic réseau selon des règles pour protéger un réseau",
      "Un logiciel de chiffrement des données sur le disque",
      "Un routeur avec authentification"
    ],
    answer: 1,
    explanation: "Un pare-feu (firewall) filtre le trafic réseau entrant et sortant selon des règles. Il peut bloquer des ports, des adresses IP, des protocoles. C'est la première ligne de défense d'un réseau."
  },
  {
    question: "Qu'est-ce que le protocole DHCP ?",
    options: [
      "Un protocole de sécurité pour les connexions WiFi",
      "Un protocole qui attribue automatiquement des adresses IP aux appareils d'un réseau",
      "Un protocole de résolution de noms de domaine",
      "Un protocole de transfert de fichiers"
    ],
    answer: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) attribue automatiquement une adresse IP, un masque, une passerelle et des serveurs DNS à chaque appareil qui se connecte au réseau. Sans DHCP, il faudrait configurer manuellement chaque appareil."
  },
  {
    question: "Quelle est la différence entre un commutateur (switch) et un concentrateur (hub) ?",
    options: [
      "Aucune différence, ce sont des synonymes",
      "Un switch envoie les données uniquement au destinataire ciblé ; un hub diffuse à tous les appareils connectés",
      "Un hub est plus récent et plus efficace qu'un switch",
      "Un switch fonctionne en sans fil, un hub en câblé"
    ],
    answer: 1,
    explanation: "Un hub diffuse les trames à tous les ports (couche 1). Un switch apprend les adresses MAC et envoie les trames uniquement au port du destinataire (couche 2). Le switch est beaucoup plus efficace et sécurisé."
  },
  {
    question: "Qu'est-ce qu'une attaque par déni de service (DoS) ?",
    options: [
      "Un vol de données sur un serveur",
      "Une attaque visant à rendre un service indisponible en le saturant de requêtes",
      "Une attaque par force brute sur un mot de passe",
      "Un logiciel malveillant chiffrant les données"
    ],
    answer: 1,
    explanation: "Une attaque DoS (Denial of Service) vise à rendre un service indisponible en le submergeant de requêtes. DDoS (Distributed DoS) est la version distribuée via des milliers de machines compromises (botnet)."
  },
  {
    question: "Que signifie HTTPS par rapport à HTTP ?",
    options: [
      "HTTPS est plus rapide que HTTP",
      "HTTPS ajoute le chiffrement TLS à HTTP, garantissant la confidentialité et l'authenticité",
      "HTTPS utilise un port différent mais sans chiffrement",
      "HTTPS est une ancienne version de HTTP"
    ],
    answer: 1,
    explanation: "HTTPS = HTTP + TLS (Transport Layer Security). Le TLS chiffre les communications, protège contre l'écoute (man-in-the-middle) et authentifie le serveur via un certificat. HTTPS utilise le port 443, HTTP le port 80."
  },
  {
    question: "Qu'est-ce qu'une adresse IPv4 ?",
    options: [
      "Une adresse sur 128 bits notée en hexadécimal",
      "Une adresse sur 32 bits notée en 4 octets décimaux séparés par des points",
      "Une adresse MAC étendue",
      "Un identifiant de réseau sur 64 bits"
    ],
    answer: 1,
    explanation: "Une adresse IPv4 est sur 32 bits, notée en décimal pointé : 4 groupes de 0 à 255 séparés par des points. Ex: 192.168.1.42. Il y a 2³² ≈ 4 milliards d'adresses possibles (insuffisant, d'où IPv6 sur 128 bits)."
  },
  {
    question: "Qu'est-ce qu'une fonction de hachage cryptographique (SHA-256, MD5...) ?",
    options: [
      "Une fonction de chiffrement réversible",
      "Une fonction à sens unique produisant une empreinte de taille fixe à partir de données quelconques",
      "Un algorithme de compression de données",
      "Un protocole d'échange de clés"
    ],
    answer: 1,
    explanation: "Une fonction de hachage cryptographique transforme des données de taille quelconque en une empreinte (hash) de taille fixe. Elle est irréversible (on ne peut pas retrouver les données depuis le hash) et une petite modification des données change complètement le hash."
  },
  {
    question: "Qu'est-ce qu'une VPN ?",
    options: [
      "Un antivirus en ligne",
      "Un réseau privé virtuel créant un tunnel chiffré sur Internet",
      "Un protocole de routage avancé",
      "Un type d'adresse IP dynamique"
    ],
    answer: 1,
    explanation: "Un VPN (Virtual Private Network) crée un tunnel chiffré entre deux points sur Internet. Il permet d'accéder à un réseau privé à distance de façon sécurisée, ou de masquer son adresse IP réelle."
  },
  {
    question: "Dans le modèle en couches, à quelle couche TCP/IP opère le protocole Ethernet ?",
    options: ["Couche Application", "Couche Transport", "Couche Internet", "Couche Accès réseau (liaison)"],
    answer: 3,
    explanation: "Ethernet opère à la couche Accès réseau (couche 1-2 dans OSI : physique + liaison de données). Il gère la transmission physique et l'adressage MAC. IP opère à la couche réseau, TCP/UDP à la couche transport."
  },
  {
    question: "Qu'est-ce qu'une injection SQL ?",
    options: [
      "Une technique d'optimisation de requêtes SQL",
      "Une attaque qui insère du code SQL malveillant dans une entrée utilisateur pour manipuler la base de données",
      "Un outil de migration de base de données",
      "Une méthode de sauvegarde des données"
    ],
    answer: 1,
    explanation: "Une injection SQL est une faille de sécurité où un attaquant insère du code SQL dans une entrée (formulaire web par exemple). Si le code n'est pas nettoyé, le SGBD l'exécute. Protection : utiliser des requêtes paramétrées."
  },
  {
    question: "Qu'est-ce que le protocole ARP ?",
    options: [
      "Un protocole de routage entre AS",
      "Un protocole qui associe une adresse IP à une adresse MAC sur un réseau local",
      "Un protocole de résolution de noms de domaine",
      "Un protocole de transfert de fichiers"
    ],
    answer: 1,
    explanation: "ARP (Address Resolution Protocol) permet de trouver l'adresse MAC correspondant à une adresse IP sur le réseau local. L'hôte diffuse 'Qui a l'IP x.x.x.x ?' et l'hôte concerné répond avec son adresse MAC."
  },
  {
    question: "Quel port est conventionnellement utilisé par le protocole HTTPS ?",
    options: ["21", "80", "443", "8080"],
    answer: 2,
    explanation: "Le port 443 est le port standard de HTTPS. Le port 80 est pour HTTP. Le port 21 est pour FTP. Le port 22 est pour SSH. Les ports < 1024 sont réservés (bien connus), les ports 1024-65535 sont libres."
  },
  {
    question: "Qu'est-ce qu'une signature numérique ?",
    options: [
      "Un dessin électronique remplaçant une signature manuscrite",
      "Un mécanisme cryptographique garantissant l'authenticité et l'intégrité d'un message, basé sur la clé privée de l'émetteur",
      "Un certificat SSL/TLS",
      "Un code secret partagé entre deux parties"
    ],
    answer: 1,
    explanation: "Une signature numérique utilise la clé privée de l'émetteur pour signer (hacher puis chiffrer). Le récepteur vérifie avec la clé publique. Elle garantit : authenticité (seul le propriétaire de la clé privée peut signer) et intégrité."
  },
  {
    question: "Qu'est-ce que la latence dans un réseau ?",
    options: [
      "La bande passante maximale de la connexion",
      "Le délai entre l'envoi d'une donnée et sa réception",
      "Le nombre de paquets perdus par seconde",
      "La taille maximale d'un paquet réseau"
    ],
    answer: 1,
    explanation: "La latence (ou temps de réponse) est le délai entre l'envoi et la réception d'un message. Elle se mesure en millisecondes. Une latence faible est importante pour les jeux en temps réel et la VoIP. À distinguer du débit (quantité de données par seconde)."
  },
  {
    question: "Qu'est-ce qu'une requête GET en HTTP ?",
    options: [
      "Une requête pour envoyer des données confidentielles au serveur",
      "Une requête pour récupérer une ressource du serveur, les paramètres étant dans l'URL",
      "Une requête pour supprimer une ressource",
      "Une requête pour mettre à jour une ressource"
    ],
    answer: 1,
    explanation: "GET demande une ressource au serveur. Les paramètres sont visibles dans l'URL (?clé=valeur). Idéal pour consulter. POST envoie des données dans le corps de la requête (formulaires, données sensibles). GET est idempotent et cachable."
  },
  {
    question: "Qu'est-ce que le routage par défaut (route par défaut, gateway) ?",
    options: [
      "L'adresse du serveur DNS principal",
      "L'adresse vers laquelle un routeur envoie les paquets dont la destination n'est pas dans sa table de routage",
      "Le protocole de routage utilisé par défaut",
      "L'adresse IP du routeur lui-même"
    ],
    answer: 1,
    explanation: "La passerelle par défaut (default gateway) est l'adresse du routeur auquel on envoie les paquets quand on ne sait pas comment les router directement. C'est la 'sortie' du réseau local vers Internet."
  },
  {
    question: "Qu'est-ce qu'un certificat SSL/TLS ?",
    options: [
      "Un mot de passe chiffré pour accéder à un serveur",
      "Un document numérique signé par une autorité de certification qui authentifie l'identité d'un serveur web",
      "Un protocole de chiffrement des emails",
      "Un fichier de configuration du serveur web"
    ],
    answer: 1,
    explanation: "Un certificat TLS contient la clé publique du serveur et son identité, signé par une autorité de certification (CA) de confiance. Le navigateur vérifie ce certificat pour s'assurer qu'il communique bien avec le bon serveur (et non un imposteur)."
  },
  {
    question: "Qu'est-ce qu'un réseau local (LAN) ?",
    options: [
      "Un réseau couvrant une région géographique",
      "Un réseau limité à une zone géographique restreinte (bâtiment, entreprise) géré localement",
      "Un réseau uniquement sans fil",
      "Le nom du réseau Internet avant 1990"
    ],
    answer: 1,
    explanation: "Un LAN (Local Area Network) est un réseau privé couvrant une zone limitée (maison, entreprise, campus). Il utilise Ethernet ou WiFi. Un WAN (Wide Area Network) couvre de grandes distances. Internet est le WAN mondial."
  },
  {
    question: "Que fait le protocole NAT (Network Address Translation) ?",
    options: [
      "Il traduit les noms de domaine en adresses IP",
      "Il traduit les adresses IP privées en adresses IP publiques pour permettre l'accès à Internet",
      "Il compresse les paquets réseau",
      "Il chiffre les communications entre réseaux"
    ],
    answer: 1,
    explanation: "NAT traduit les adresses IP privées (192.168.x.x, 10.x.x.x) en une adresse IP publique partagée pour accéder à Internet. Il permet à tout un réseau local de partager une seule IP publique, résolvant partiellement la pénurie d'adresses IPv4."
  },
  {
    question: "Quelle est la différence entre chiffrement et encodage ?",
    options: [
      "L'encodage est plus sécurisé que le chiffrement",
      "L'encodage transforme des données dans un autre format sans secret ; le chiffrement utilise une clé secrète pour protéger la confidentialité",
      "L'encodage nécessite une clé, pas le chiffrement",
      "Ce sont deux termes synonymes"
    ],
    answer: 1,
    explanation: "L'encodage (Base64, UTF-8...) transforme des données en un autre format sans protection — tout le monde peut décoder. Le chiffrement utilise une clé secrète et rend les données illisibles sans cette clé."
  }
];
