/* ============================================================
   Banque de questions — Programmation Orientée Objet (POO)
   ============================================================ */
window.NSI_QUESTIONS = window.NSI_QUESTIONS || {};
window.NSI_QUESTIONS['poo'] = [
  {
    question: "Qu'est-ce qu'une classe en programmation orientée objet ?",
    options: [
      "Un fichier Python contenant des fonctions",
      "Un modèle (plan) qui définit les attributs et méthodes d'un type d'objet",
      "Une variable contenant plusieurs valeurs",
      "Un module importé depuis une bibliothèque"
    ],
    answer: 1,
    explanation: "Une classe est un modèle (blueprint) qui décrit les attributs (données) et les méthodes (comportements) que posséderont les objets créés à partir de cette classe."
  },
  {
    question: "Qu'est-ce qu'un objet en POO ?",
    options: [
      "Une copie d'une classe",
      "Une instance d'une classe — une réalisation concrète du modèle",
      "Une fonction définie dans une classe",
      "Un attribut d'une classe"
    ],
    answer: 1,
    explanation: "Un objet est une instance d'une classe. Si Voiture est une classe, alors ma_voiture = Voiture('Rouge') crée un objet (instance) concrète avec ses propres valeurs d'attributs."
  },
  {
    question: "Quel est le rôle de la méthode __init__ en Python ?",
    options: [
      "Détruire l'objet en mémoire",
      "Initialiser les attributs de l'objet lors de sa création",
      "Afficher l'objet dans la console",
      "Comparer deux objets"
    ],
    answer: 1,
    explanation: "__init__ est le constructeur. Il est appelé automatiquement lors de la création d'une instance (ex: mon_objet = MaClasse(...)). Il initialise les attributs de l'instance."
  },
  {
    question: "Que représente le paramètre 'self' dans les méthodes d'une classe Python ?",
    options: [
      "La classe elle-même",
      "L'instance sur laquelle la méthode est appelée",
      "Le premier argument passé à la méthode",
      "Un paramètre optionnel que l'on peut omettre"
    ],
    answer: 1,
    explanation: "self représente l'instance courante. Quand on écrit mon_objet.methode(), Python appelle en réalité MaClasse.methode(mon_objet). self doit être le premier paramètre de toute méthode d'instance."
  },
  {
    question: "Qu'est-ce que l'encapsulation en POO ?",
    options: [
      "Le fait de créer plusieurs classes",
      "Le regroupement des données et méthodes dans une classe, avec contrôle d'accès",
      "L'héritage entre classes",
      "La création d'objets à partir d'une classe"
    ],
    answer: 1,
    explanation: "L'encapsulation consiste à regrouper données (attributs) et comportements (méthodes) dans une classe, et à masquer les détails internes. En Python, on préfixe par _ (privé par convention) ou __ (name mangling)."
  },
  {
    question: "Qu'est-ce que l'héritage en POO ?",
    options: [
      "La copie d'une classe vers un autre fichier",
      "Le mécanisme par lequel une classe fille hérite des attributs et méthodes d'une classe mère",
      "La suppression d'une méthode dans une classe",
      "L'instanciation d'une classe abstraite"
    ],
    answer: 1,
    explanation: "L'héritage permet à une classe fille de réutiliser les attributs et méthodes d'une classe mère. En Python : class Fille(Mere):. La fille peut aussi redéfinir (surcharger) des méthodes."
  },
  {
    question: "Comment déclarer une classe Voiture héritant de Vehicule en Python ?",
    options: [
      "class Voiture extends Vehicule:",
      "class Voiture inherits Vehicule:",
      "class Voiture(Vehicule):",
      "class Voiture -> Vehicule:"
    ],
    answer: 2,
    explanation: "La syntaxe Python pour l'héritage est class Fille(Mere):. C'est différent de Java (extends) ou C++ (:). Python supporte aussi l'héritage multiple : class C(A, B):."
  },
  {
    question: "Qu'est-ce que la surcharge (override) d'une méthode ?",
    options: [
      "Créer plusieurs méthodes avec le même nom mais des paramètres différents",
      "Redéfinir dans une classe fille une méthode héritée de la classe mère",
      "Appeler la méthode de la classe mère depuis la classe fille",
      "Supprimer une méthode héritée"
    ],
    answer: 1,
    explanation: "La surcharge (override) consiste à redéfinir dans la classe fille une méthode déjà définie dans la classe mère. La fille redéfinit le comportement pour l'adapter à son contexte."
  },
  {
    question: "Comment appeler la méthode __init__ de la classe mère depuis la classe fille en Python ?",
    options: [
      "parent.__init__(self, ...)",
      "super().__init__(...)",
      "Mere.__init__(...)",
      "self.parent_init(...)"
    ],
    answer: 1,
    explanation: "super().__init__(...) est la façon recommandée d'appeler le constructeur de la classe mère. C'est plus robuste que Mere.__init__(self,...) car ça fonctionne correctement avec l'héritage multiple."
  },
  {
    question: "Qu'affiche ce code ?\nclass Animal:\n  def __init__(self, nom): self.nom = nom\n  def parler(self): return 'Générique'\nclass Chien(Animal):\n  def parler(self): return 'Ouaf'\nc = Chien('Rex')\nprint(c.parler())",
    options: ["Générique", "Ouaf", "None", "Erreur"],
    answer: 1,
    explanation: "Chien redéfinit la méthode parler(). Lorsqu'on appelle c.parler(), Python cherche parler dans la classe Chien en premier (ordre de résolution des méthodes, MRO). Il trouve 'Ouaf'."
  },
  {
    question: "Qu'est-ce qu'un attribut de classe (vs attribut d'instance) ?",
    options: [
      "Un attribut défini dans __init__ avec self",
      "Un attribut partagé par toutes les instances de la classe",
      "Un attribut privé commençant par __",
      "Un attribut qui ne peut pas être modifié"
    ],
    answer: 1,
    explanation: "Un attribut de classe est défini directement dans le corps de la classe (pas dans __init__) et est partagé par toutes les instances. Un attribut d'instance (self.x) est propre à chaque objet."
  },
  {
    question: "Que fait la méthode __str__ d'une classe ?",
    options: [
      "Convertit un entier en chaîne",
      "Définit la représentation textuelle de l'objet (utilisée par print())",
      "Compare deux objets entre eux",
      "Supprime l'objet de la mémoire"
    ],
    answer: 1,
    explanation: "__str__ est une méthode spéciale appelée par print(obj) et str(obj). Elle doit retourner une chaîne représentant l'objet de façon lisible. Sans __str__, Python affiche l'adresse mémoire de l'objet."
  },
  {
    question: "Qu'est-ce que le polymorphisme en POO ?",
    options: [
      "La capacité d'une classe à hériter de plusieurs classes",
      "La capacité de différents objets à répondre à la même interface de façon différente",
      "La création de plusieurs instances d'une classe",
      "L'encapsulation des données privées"
    ],
    answer: 1,
    explanation: "Le polymorphisme permet d'appeler la même méthode sur des objets de types différents, chacun répondant à sa façon. Ex: animal.parler() fonctionne pour Chien, Chat, Oiseau — chacun ayant sa propre implémentation."
  },
  {
    question: "En Python, comment définir un attribut 'protégé' (convention) ?",
    options: [
      "Préfixé par # : #attribut",
      "Préfixé par _ : _attribut",
      "Préfixé par @ : @attribut",
      "Utiliser le mot-clé private"
    ],
    answer: 1,
    explanation: "Par convention en Python, un attribut préfixé par _ est considéré 'protégé' (usage interne à la classe et ses sous-classes). Un attribut préfixé par __ active le name mangling. Il n'y a pas de vrai mot-clé private en Python."
  },
  {
    question: "Qu'est-ce qu'une méthode de classe (classmethod) en Python ?",
    options: [
      "Une méthode qui ne prend pas self comme premier paramètre",
      "Une méthode décorée par @classmethod qui reçoit la classe (cls) comme premier paramètre",
      "Une méthode statique qui n'accède ni à l'instance ni à la classe",
      "Une méthode définie en dehors de la classe"
    ],
    answer: 1,
    explanation: "Une méthode de classe (@classmethod) reçoit la classe elle-même (cls) en premier paramètre, pas l'instance. Elle peut accéder et modifier les attributs de classe. Souvent utilisée comme constructeur alternatif."
  },
  {
    question: "Que se passe-t-il quand on accède à un attribut inexistant d'un objet Python ?",
    options: [
      "Python retourne None",
      "Python lève une AttributeError",
      "Python crée automatiquement l'attribut",
      "Python lève une TypeError"
    ],
    answer: 1,
    explanation: "Accéder à un attribut qui n'existe pas lève une AttributeError. On peut utiliser hasattr(obj, 'attr') pour vérifier ou getattr(obj, 'attr', valeur_par_defaut) pour avoir une valeur de secours."
  },
  {
    question: "Comment appelle-t-on la relation 'est un(e)' en POO (ex: Un Chien est un Animal) ?",
    options: ["Composition", "Agrégation", "Héritage", "Association"],
    answer: 2,
    explanation: "La relation 'est un(e)' (is-a) correspond à l'héritage. La relation 'a un(e)' (has-a) correspond à la composition/agrégation. Ex: Une Voiture A un Moteur (composition), Une Voiture EST un Véhicule (héritage)."
  },
  {
    question: "Que retourne type(obj) pour un objet obj créé à partir de la classe MaClasse ?",
    options: [
      "La valeur de l'attribut principal de l'objet",
      "<class 'MaClasse'>",
      "True",
      "Le nom de la méthode appelée"
    ],
    answer: 1,
    explanation: "type(obj) retourne la classe de l'objet. isinstance(obj, MaClasse) retourne True si obj est une instance de MaClasse (ou d'une sous-classe). isinstance() est préférable à type() == ... pour tenir compte de l'héritage."
  },
  {
    question: "Quelle est la sortie de ce code ?\nclass Compteur:\n  nb = 0\n  def __init__(self): Compteur.nb += 1\nc1 = Compteur()\nc2 = Compteur()\nprint(Compteur.nb)",
    options: ["0", "1", "2", "Erreur"],
    answer: 2,
    explanation: "nb est un attribut de classe (partagé). Chaque création d'instance incrémente Compteur.nb. Après deux instanciations, Compteur.nb vaut 2."
  },
  {
    question: "Comment appelle-t-on le mécanisme qui permet à Python de choisir la bonne méthode selon le type de l'objet au moment de l'exécution ?",
    options: [
      "La compilation",
      "L'encapsulation dynamique",
      "La liaison dynamique (dynamic dispatch)",
      "La surcharge statique"
    ],
    answer: 2,
    explanation: "Python utilise la liaison dynamique : la méthode appelée est déterminée au moment de l'exécution selon le type réel de l'objet. C'est ce qui permet le polymorphisme."
  },
  {
    question: "Qu'est-ce qu'une méthode statique (@staticmethod) en Python ?",
    options: [
      "Une méthode qui ne peut pas être appelée depuis les instances",
      "Une méthode qui n'accède ni à l'instance (self) ni à la classe (cls)",
      "Une méthode qui ne peut être définie qu'une seule fois",
      "Une méthode héritable uniquement"
    ],
    answer: 1,
    explanation: "Une méthode statique (@staticmethod) n'a ni self ni cls. Elle se comporte comme une fonction ordinaire, mais est rangée dans la classe pour des raisons d'organisation. Elle ne peut pas accéder aux attributs d'instance ou de classe."
  },
  {
    question: "Que fait ce code ?\nclass A:\n  def f(self): return 'A'\nclass B(A):\n  pass\nb = B()\nprint(b.f())",
    options: ["Erreur (f non définie dans B)", "'A'", "None", "'B'"],
    answer: 1,
    explanation: "B hérite de A. La méthode f n'est pas redéfinie dans B, donc Python remonte l'héritage et utilise f de la classe A, qui retourne 'A'. C'est le mécanisme de recherche de méthode (MRO)."
  },
  {
    question: "Qu'est-ce que la composition en POO ?",
    options: [
      "Créer une classe qui hérite d'une autre",
      "Inclure un objet d'une classe comme attribut d'une autre classe",
      "Définir plusieurs méthodes dans une classe",
      "Appeler super() dans le constructeur"
    ],
    answer: 1,
    explanation: "La composition est une relation 'a un(e)' : une classe contient un objet d'une autre classe. Ex: class Voiture: def __init__(self): self.moteur = Moteur(). C'est souvent préférable à l'héritage pour la flexibilité."
  },
  {
    question: "Quelle méthode spéciale permet d'utiliser l'opérateur + entre deux objets ?",
    options: ["__plus__", "__add__", "__sum__", "__concat__"],
    answer: 1,
    explanation: "__add__ est la méthode spéciale appelée par l'opérateur +. En définissant __add__(self, other), on peut écrire obj1 + obj2. Python appelle en réalité obj1.__add__(obj2)."
  },
  {
    question: "Comment définir une méthode qui permet de comparer deux objets avec l'opérateur == ?",
    options: [
      "def equals(self, other):",
      "def __eq__(self, other):",
      "def compare(self, other):",
      "def __compare__(self, other):"
    ],
    answer: 1,
    explanation: "__eq__(self, other) est la méthode spéciale pour l'opérateur ==. Par défaut, Python compare les identités des objets (comme is). En définissant __eq__, on compare les attributs."
  },
  {
    question: "En POO, que désigne le terme 'interface' ?",
    options: [
      "L'interface graphique de l'application",
      "L'ensemble des méthodes publiques qu'un objet expose",
      "Le fichier de configuration d'une classe",
      "La méthode __str__ de la classe"
    ],
    answer: 1,
    explanation: "L'interface d'une classe désigne l'ensemble des méthodes et attributs publics qu'elle expose à l'extérieur. C'est ce que l'utilisateur de la classe voit et peut utiliser, indépendamment de l'implémentation interne."
  },
  {
    question: "Qu'est-ce que l'ordre de résolution des méthodes (MRO) en Python ?",
    options: [
      "L'ordre d'exécution des méthodes dans une classe",
      "L'ordre dans lequel Python cherche une méthode dans la hiérarchie de classes",
      "L'ordre d'initialisation des attributs",
      "La liste des méthodes disponibles dans une classe"
    ],
    answer: 1,
    explanation: "Le MRO (Method Resolution Order) définit l'ordre dans lequel Python cherche une méthode ou un attribut dans la hiérarchie de classes. On peut le consulter avec MaClasse.__mro__ ou MaClasse.mro()."
  },
  {
    question: "Qu'est-ce qu'une classe abstraite en Python ?",
    options: [
      "Une classe qui ne peut pas être modifiée",
      "Une classe qui définit des méthodes sans les implémenter, servant de modèle pour les sous-classes",
      "Une classe sans attributs",
      "Une classe importée d'un module externe"
    ],
    answer: 1,
    explanation: "Une classe abstraite définit une interface mais laisse aux sous-classes le soin d'implémenter certaines méthodes. En Python, on utilise le module abc : from abc import ABC, abstractmethod."
  },
  {
    question: "Que retourne isinstance(3, int) ?",
    options: ["3", "int", "True", "False"],
    answer: 2,
    explanation: "isinstance(objet, classe) retourne True si l'objet est une instance de la classe (ou d'une sous-classe). 3 est bien un entier (int), donc isinstance(3, int) retourne True."
  },
  {
    question: "Dans un programme orienté objet, quelle est la bonne pratique concernant les attributs d'une classe ?",
    options: [
      "Les rendre tous publics pour faciliter leur accès",
      "Les encapsuler et fournir des accesseurs/mutateurs (getters/setters) si nécessaire",
      "Les définir tous en dehors de __init__",
      "Les nommer avec des majuscules"
    ],
    answer: 1,
    explanation: "La bonne pratique est d'encapsuler les attributs (les préfixer par _ ou __) et d'exposer des méthodes publiques (accesseurs/mutateurs) pour y accéder. Cela protège l'intégrité des données."
  },
  {
    question: "Qu'est-ce qu'un getter (accesseur) en POO ?",
    options: [
      "Une méthode qui supprime un attribut",
      "Une méthode qui retourne la valeur d'un attribut privé",
      "Une méthode qui initialise un attribut",
      "Une méthode héritée de la classe mère"
    ],
    answer: 1,
    explanation: "Un getter (accesseur) est une méthode publique qui permet de lire la valeur d'un attribut privé. Exemple : def get_nom(self): return self._nom. En Python, on peut aussi utiliser @property."
  },
  {
    question: "À quoi sert le décorateur @property en Python ?",
    options: [
      "À rendre un attribut immuable",
      "À définir un getter accessible comme un attribut (sans parenthèses)",
      "À créer un attribut de classe",
      "À exporter une méthode vers d'autres modules"
    ],
    answer: 1,
    explanation: "@property permet d'accéder à une méthode getter comme si c'était un attribut. Avec @property, obj.nom est appelé sans parenthèses, mais exécute la méthode get_nom derrière. Très pythonique."
  },
  {
    question: "Qu'est-ce qu'un setter (mutateur) en POO ?",
    options: [
      "Une méthode qui affiche la valeur d'un attribut",
      "Une méthode qui modifie la valeur d'un attribut privé, avec validation possible",
      "Une méthode qui détruit l'objet",
      "Une méthode automatiquement appelée lors de la création"
    ],
    answer: 1,
    explanation: "Un setter (mutateur) est une méthode publique qui modifie un attribut privé, souvent avec une validation. Exemple : def set_age(self, age): if age >= 0: self._age = age. En Python, on utilise @nom.setter."
  },
  {
    question: "Quelle est la différence entre __repr__ et __str__ ?",
    options: [
      "Aucune différence, ce sont des synonymes",
      "__repr__ donne une représentation non ambiguë (pour les devs), __str__ une représentation lisible (pour les users)",
      "__repr__ est utilisé par print(), __str__ par repr()",
      "__str__ est obligatoire, __repr__ optionnel"
    ],
    answer: 1,
    explanation: "__repr__ fournit une représentation non ambiguë, idéalement qui permet de recréer l'objet. __str__ fournit une représentation lisible. print() appelle __str__ (ou __repr__ si __str__ n'est pas défini)."
  },
  {
    question: "Peut-on modifier un attribut d'instance d'un objet depuis l'extérieur de la classe en Python ?",
    options: [
      "Non, c'est impossible en Python",
      "Oui, sauf s'il commence par __ (name mangling)",
      "Oui, Python n'a pas de vraie protection des attributs",
      "Non, si l'attribut commence par _"
    ],
    answer: 2,
    explanation: "Python n'a pas de vrai contrôle d'accès. Par convention, _ signifie 'usage interne'. Le préfixe __ active le name mangling (renommage en _ClassName__attr), rendant l'accès plus difficile mais pas impossible."
  },
  {
    question: "Que signifie UML dans le contexte de la POO ?",
    options: [
      "Universal Machine Language",
      "Unified Modeling Language — un langage de modélisation graphique",
      "Unified Method Library",
      "Un langage de programmation orienté objet"
    ],
    answer: 1,
    explanation: "UML (Unified Modeling Language) est un langage de modélisation graphique. Les diagrammes de classes UML représentent les classes, leurs attributs, méthodes et relations (héritage, composition, association)."
  },
  {
    question: "Comment représente-t-on l'héritage dans un diagramme de classes UML ?",
    options: [
      "Une flèche pleine de la classe mère vers la classe fille",
      "Une flèche avec triangle vide de la classe fille vers la classe mère",
      "Une ligne pointillée entre les deux classes",
      "Une flèche avec losange de la classe mère vers la classe fille"
    ],
    answer: 1,
    explanation: "Dans un diagramme UML, l'héritage est représenté par une flèche à triangle vide (non rempli) pointant de la classe fille vers la classe mère. La composition est représentée par un losange plein."
  },
  {
    question: "Quelle est la sortie de ce code ?\nclass Forme:\n  def aire(self): return 0\nclass Carre(Forme):\n  def __init__(self, c): self.c = c\n  def aire(self): return self.c**2\nformes = [Carre(3), Carre(5)]\nprint(sum(f.aire() for f in formes))",
    options: ["0", "9", "25", "34"],
    answer: 3,
    explanation: "Carre(3).aire() = 9, Carre(5).aire() = 25. sum([9, 25]) = 34. C'est un exemple de polymorphisme : sum parcourt la liste et appelle aire() sur chaque objet, Python sachant quel aire() utiliser."
  },
  {
    question: "Qu'est-ce que l'agrégation en POO (différente de la composition) ?",
    options: [
      "L'agrégation implique que les objets contenus existent indépendamment du contenant",
      "L'agrégation est une forme d'héritage multiple",
      "L'agrégation signifie que la classe fille possède plus d'attributs que la classe mère",
      "L'agrégation est synonyme de composition"
    ],
    answer: 0,
    explanation: "Dans l'agrégation, l'objet contenu peut exister sans le contenant. Ex: Université agrège des Étudiants — si l'Université ferme, les Étudiants continuent d'exister. Dans la composition, les objets contenus sont détruits avec le contenant."
  },
  {
    question: "En Python, que fait la méthode __len__ ?",
    options: [
      "Elle retourne la longueur d'une chaîne de caractères",
      "Elle permet d'utiliser la fonction len() sur un objet personnalisé",
      "Elle calcule la taille en mémoire de l'objet",
      "Elle retourne le nombre d'attributs de l'objet"
    ],
    answer: 1,
    explanation: "En définissant __len__(self), on peut utiliser len(mon_objet). Python appelle mon_objet.__len__(). Toutes les méthodes spéciales (dunder methods) permettent de personnaliser le comportement des objets avec les opérations Python."
  },
  {
    question: "Quelle est la principale différence entre la programmation procédurale et la POO ?",
    options: [
      "La POO est plus lente que la programmation procédurale",
      "En POO, données et comportements sont encapsulés dans des objets ; en procédural, les fonctions opèrent sur des données séparées",
      "La programmation procédurale utilise des classes",
      "La POO ne permet pas l'utilisation de fonctions"
    ],
    answer: 1,
    explanation: "En programmation procédurale, on a des données et des fonctions séparées qui les manipulent. En POO, données (attributs) et comportements (méthodes) sont regroupés dans des objets, favorisant l'organisation et la réutilisation."
  },
  {
    question: "Que désigne le terme 'instanciation' ?",
    options: [
      "La définition d'une classe",
      "La création d'un objet (instance) à partir d'une classe",
      "L'héritage d'une classe",
      "La modification d'un attribut"
    ],
    answer: 1,
    explanation: "L'instanciation est l'acte de créer un objet à partir d'une classe. Syntax : mon_objet = MaClasse(arguments). Python appelle alors automatiquement __init__ pour initialiser l'objet."
  },
  {
    question: "Quelle est la sortie de ce code ?\nclass Vehicule:\n  def __init__(self, vitesse): self.vitesse = vitesse\n  def __str__(self): return f'Véhicule à {self.vitesse} km/h'\nv = Vehicule(120)\nprint(v)",
    options: ["<Vehicule object>", "Véhicule à 120 km/h", "120", "Erreur"],
    answer: 1,
    explanation: "print(v) appelle v.__str__(). La méthode __str__ retourne la f-string 'Véhicule à 120 km/h'. Sans __str__, Python afficherait quelque chose comme <__main__.Vehicule object at 0x...>."
  },
  {
    question: "En Python, les classes héritent implicitement de quelle classe de base ?",
    options: ["BaseClass", "Root", "object", "Class"],
    answer: 2,
    explanation: "En Python 3, toutes les classes héritent implicitement de la classe object. C'est pourquoi tous les objets Python ont des méthodes comme __str__, __repr__, __eq__ etc. (héritées de object)."
  },
  {
    question: "Qu'est-ce qu'une méthode dunder (double underscore) ?",
    options: [
      "Une méthode privée qui commence par __",
      "Une méthode spéciale entourée de __ permettant de personnaliser le comportement Python",
      "Une méthode qui ne peut être appelée que par la classe mère",
      "Une méthode décorative sans fonctionnalité réelle"
    ],
    answer: 1,
    explanation: "Les méthodes 'dunder' (double underscore, ex: __init__, __str__, __add__) sont des méthodes spéciales qui permettent aux objets de s'intégrer au comportement Python (opérateurs, fonctions built-in, etc.)."
  },
  {
    question: "Que permet de faire l'héritage multiple en Python ?",
    options: [
      "Créer plusieurs instances d'une classe",
      "Hériter des attributs et méthodes de plusieurs classes parentes",
      "Définir plusieurs constructeurs __init__",
      "Surcharger une méthode plusieurs fois"
    ],
    answer: 1,
    explanation: "Python supporte l'héritage multiple : class C(A, B): hérite de A et de B. Le MRO (C3 linearization) détermine l'ordre de recherche des méthodes pour éviter les ambiguïtés."
  },
  {
    question: "Quelle est la bonne façon de créer un objet de la classe Etudiant avec nom='Alice' et note=15 ?",
    options: [
      "Etudiant.create('Alice', 15)",
      "e = new Etudiant('Alice', 15)",
      "e = Etudiant('Alice', 15)",
      "Etudiant.__init__('Alice', 15)"
    ],
    answer: 2,
    explanation: "En Python, on instancie une classe avec NomClasse(arguments). Pas besoin du mot-clé new (contrairement à Java). Python appelle automatiquement __new__ puis __init__."
  },
  {
    question: "Un chien est un animal. Quelle relation POO représente cette phrase ?",
    options: ["Composition", "Héritage", "Agrégation", "Association"],
    answer: 1,
    explanation: "'Est un(e)' (is-a) = héritage. class Chien(Animal):. 'A un(e)' (has-a) = composition/agrégation. Il est important de choisir la bonne relation pour concevoir une architecture objet cohérente."
  },
  {
    question: "Que fait ce code ?\nclass MaListe:\n  def __init__(self): self.data = []\n  def __len__(self): return len(self.data)\n  def ajouter(self, x): self.data.append(x)\nml = MaListe()\nml.ajouter(1); ml.ajouter(2)\nprint(len(ml))",
    options: ["0", "1", "2", "Erreur"],
    answer: 2,
    explanation: "On ajoute 2 éléments à self.data. len(ml) appelle ml.__len__() qui retourne len(self.data) = 2. C'est un exemple de personnalisation du comportement Python via les méthodes spéciales."
  }
];
