/* ============================================================
   Banque de questions — Bases de données & SQL
   ============================================================ */
window.NSI_QUESTIONS = window.NSI_QUESTIONS || {};
window.NSI_QUESTIONS['bdd'] = [
  {
    question: "Qu'est-ce qu'une clé primaire dans une table de base de données relationnelle ?",
    options: [
      "La première colonne de la table",
      "Un attribut (ou ensemble d'attributs) qui identifie de manière unique chaque enregistrement",
      "Un champ qui peut contenir des valeurs NULL",
      "Un index sur la colonne la plus fréquemment utilisée"
    ],
    answer: 1,
    explanation: "La clé primaire (PRIMARY KEY) est un attribut ou un ensemble d'attributs qui identifie de façon unique chaque ligne de la table. Elle ne peut pas contenir NULL et ses valeurs doivent être uniques."
  },
  {
    question: "Qu'est-ce qu'une clé étrangère ?",
    options: [
      "Un attribut crypté dans la table",
      "Un attribut qui référence la clé primaire d'une autre table, établissant une relation",
      "Une clé primaire composée de plusieurs attributs",
      "Un attribut indexé mais non unique"
    ],
    answer: 1,
    explanation: "Une clé étrangère (FOREIGN KEY) est un attribut d'une table qui correspond à la clé primaire d'une autre table. Elle établit un lien entre deux tables et garantit l'intégrité référentielle."
  },
  {
    question: "Que fait la requête SQL suivante ? SELECT nom, age FROM Eleves WHERE age > 17 ;",
    options: [
      "Supprime les élèves de plus de 17 ans",
      "Affiche le nom et l'âge de tous les élèves de plus de 17 ans",
      "Compte le nombre d'élèves de plus de 17 ans",
      "Met à jour l'âge des élèves ayant plus de 17 ans"
    ],
    answer: 1,
    explanation: "SELECT nom, age (projection sur 2 colonnes) FROM Eleves (table source) WHERE age > 17 (sélection des lignes vérifiant la condition). Cette requête affiche nom et âge des élèves âgés de plus de 17 ans."
  },
  {
    question: "Quelle clause SQL permet de trier les résultats ?",
    options: ["GROUP BY", "ORDER BY", "SORT BY", "HAVING"],
    answer: 1,
    explanation: "ORDER BY colonne ASC/DESC trie les résultats. ASC = ordre croissant (par défaut), DESC = ordre décroissant. Ex: ORDER BY nom ASC trie par nom alphabétique."
  },
  {
    question: "Quelle requête SQL permet de compter le nombre de lignes dans la table Produits ?",
    options: [
      "SELECT NUMBER(*) FROM Produits",
      "SELECT COUNT(*) FROM Produits",
      "SELECT SUM(*) FROM Produits",
      "SELECT LEN(*) FROM Produits"
    ],
    answer: 1,
    explanation: "COUNT(*) est une fonction d'agrégation qui compte le nombre de lignes. On peut aussi écrire COUNT(colonne) pour compter les valeurs non-NULL d'une colonne."
  },
  {
    question: "Que fait la clause JOIN dans une requête SQL ?",
    options: [
      "Elle fusionne deux tables en une seule de façon permanente",
      "Elle combine les lignes de deux tables selon une condition de jointure",
      "Elle supprime les doublons entre deux tables",
      "Elle crée une relation entre deux tables"
    ],
    answer: 1,
    explanation: "JOIN combine les lignes de deux tables selon une condition (généralement une égalité entre clé étrangère et clé primaire). INNER JOIN = seulement les correspondances. LEFT JOIN = toutes les lignes de la table gauche."
  },
  {
    question: "Quelle est la différence entre WHERE et HAVING en SQL ?",
    options: [
      "WHERE filtre avant groupement, HAVING filtre après groupement (sur les agrégats)",
      "WHERE filtre les colonnes, HAVING filtre les lignes",
      "HAVING est plus récent et remplace WHERE",
      "Aucune différence, ce sont des synonymes"
    ],
    answer: 0,
    explanation: "WHERE filtre les lignes AVANT le regroupement (GROUP BY). HAVING filtre les groupes APRÈS le regroupement, souvent sur des fonctions d'agrégation (COUNT, SUM...). Ex: HAVING COUNT(*) > 2."
  },
  {
    question: "Que fait la requête : DELETE FROM Commandes WHERE statut = 'annulée' ;",
    options: [
      "Affiche les commandes annulées",
      "Marque les commandes comme annulées",
      "Supprime définitivement les lignes dont le statut est 'annulée'",
      "Crée une nouvelle table pour les commandes annulées"
    ],
    answer: 2,
    explanation: "DELETE FROM supprime des lignes de la table. La clause WHERE limite la suppression aux lignes vérifiant la condition. Sans WHERE, TOUTES les lignes sont supprimées ! Cette opération est irréversible sans transaction."
  },
  {
    question: "Quelle requête SQL permet d'insérer un nouveau client dans la table Clients ?",
    options: [
      "ADD INTO Clients VALUES ('Alice', 25)",
      "INSERT INTO Clients (nom, age) VALUES ('Alice', 25)",
      "NEW Clients (nom, age) VALUES ('Alice', 25)",
      "CREATE ROW Clients ('Alice', 25)"
    ],
    answer: 1,
    explanation: "INSERT INTO table (colonnes) VALUES (valeurs) est la syntaxe d'insertion. On peut omettre les colonnes si on fournit des valeurs pour toutes dans l'ordre, mais c'est risqué et déconseillé."
  },
  {
    question: "Quelle requête SQL modifie le salaire de l'employé n°5 ?",
    options: [
      "MODIFY Employes SET salaire = 3000 WHERE id = 5",
      "CHANGE Employes salaire = 3000 WHERE id = 5",
      "UPDATE Employes SET salaire = 3000 WHERE id = 5",
      "ALTER Employes SET salaire = 3000 WHERE id = 5"
    ],
    answer: 2,
    explanation: "UPDATE table SET colonne = valeur WHERE condition est la syntaxe de mise à jour. Sans WHERE, TOUS les enregistrements sont modifiés. Il faut toujours spécifier une condition précise."
  },
  {
    question: "Qu'est-ce que la normalisation d'une base de données ?",
    options: [
      "Le processus d'optimisation des requêtes SQL",
      "Le processus d'organisation des données pour réduire la redondance et les anomalies",
      "La conversion des types de données",
      "L'indexation de toutes les colonnes"
    ],
    answer: 1,
    explanation: "La normalisation organise les tables pour éliminer la redondance de données et les anomalies d'insertion/mise à jour/suppression. Les formes normales (1NF, 2NF, 3NF) définissent des règles progressives d'organisation."
  },
  {
    question: "Quelle est la première forme normale (1NF) ?",
    options: [
      "Chaque table a une clé primaire",
      "Chaque attribut contient une valeur atomique (non décomposable) et il n'y a pas de groupe répétitif",
      "Toutes les dépendances fonctionnelles sont sur la clé primaire entière",
      "Il n'y a aucune dépendance transitive"
    ],
    answer: 1,
    explanation: "La 1NF exige : des valeurs atomiques (pas de liste dans une case), des colonnes de même type, une clé primaire, et pas de lignes dupliquées. Ex: stocker '0612345678; 0687654321' dans une case viole la 1NF."
  },
  {
    question: "Qu'est-ce qu'une dépendance fonctionnelle ?",
    options: [
      "Une relation de cause à effet entre deux fonctions SQL",
      "A → B signifie que la valeur de A détermine de façon unique la valeur de B",
      "Une contrainte d'intégrité entre deux tables",
      "Un index sur une colonne calculée"
    ],
    answer: 1,
    explanation: "A → B (A détermine B) signifie que pour chaque valeur de A, il existe une unique valeur de B. Ex: NumEleve → Nom : chaque numéro d'élève correspond à un seul nom."
  },
  {
    question: "Quelle clause SQL permet de grouper les résultats et d'appliquer des fonctions d'agrégation ?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "PARTITION BY"],
    answer: 2,
    explanation: "GROUP BY regroupe les lignes ayant la même valeur dans la colonne spécifiée. On peut ensuite appliquer COUNT, SUM, AVG, MIN, MAX sur chaque groupe. Ex: GROUP BY ville pour compter les clients par ville."
  },
  {
    question: "Que retourne SELECT DISTINCT pays FROM Clients ; ?",
    options: [
      "Toutes les lignes de la colonne pays, avec doublons",
      "Le nombre de pays différents",
      "La liste des pays sans doublons",
      "Le premier pays de la table"
    ],
    answer: 2,
    explanation: "DISTINCT supprime les doublons du résultat. SELECT DISTINCT pays retourne chaque valeur unique de la colonne pays, sans répétition."
  },
  {
    question: "Quelle est la différence entre INNER JOIN et LEFT JOIN ?",
    options: [
      "INNER JOIN retourne toutes les lignes de la table gauche, LEFT JOIN seulement les correspondances",
      "INNER JOIN retourne seulement les lignes avec une correspondance dans les deux tables ; LEFT JOIN retourne toutes les lignes de la table gauche, même sans correspondance",
      "Aucune différence en pratique",
      "LEFT JOIN fonctionne sur une seule table"
    ],
    answer: 1,
    explanation: "INNER JOIN = seulement les lignes qui ont une correspondance dans les deux tables. LEFT JOIN = toutes les lignes de la table gauche + les correspondances de droite (NULL si pas de correspondance à droite)."
  },
  {
    question: "Dans une base de données relationnelle, qu'est-ce qu'un schéma relationnel ?",
    options: [
      "Un diagramme entité-association",
      "La description de la structure d'une table (nom + types des attributs + contraintes)",
      "L'ensemble des requêtes possibles sur la base",
      "Un fichier de configuration de la base de données"
    ],
    answer: 1,
    explanation: "Le schéma relationnel décrit la structure d'une relation : nom de la table, nom et type de chaque attribut, clé primaire (soulignée), clés étrangères (flèches). Ex: Eleve(#id:INT, nom:VARCHAR, classe:VARCHAR)."
  },
  {
    question: "Quelle requête SQL affiche la moyenne des notes de la table Resultats ?",
    options: [
      "SELECT MEAN(note) FROM Resultats",
      "SELECT AVERAGE(note) FROM Resultats",
      "SELECT AVG(note) FROM Resultats",
      "SELECT MID(note) FROM Resultats"
    ],
    answer: 2,
    explanation: "AVG(colonne) calcule la moyenne des valeurs non-NULL d'une colonne. Les autres fonctions d'agrégation SQL sont : SUM (somme), COUNT (comptage), MIN (minimum), MAX (maximum)."
  },
  {
    question: "Qu'est-ce que l'intégrité référentielle ?",
    options: [
      "La garantie que les requêtes SQL retournent des résultats cohérents",
      "La contrainte garantissant que les valeurs d'une clé étrangère existent comme clé primaire dans la table référencée",
      "La vérification des types de données lors de l'insertion",
      "L'impossibilité de supprimer une table utilisée"
    ],
    answer: 1,
    explanation: "L'intégrité référentielle garantit que les valeurs d'une clé étrangère correspondent à des valeurs existantes dans la table référencée. On ne peut pas insérer une commande pour un client qui n'existe pas."
  },
  {
    question: "Quelle est la syntaxe correcte pour créer une table Livre en SQL ?",
    options: [
      "NEW TABLE Livre (id INTEGER PRIMARY KEY, titre TEXT)",
      "MAKE TABLE Livre (id INTEGER PRIMARY KEY, titre TEXT)",
      "CREATE TABLE Livre (id INTEGER PRIMARY KEY, titre TEXT)",
      "BUILD TABLE Livre (id INTEGER, titre TEXT)"
    ],
    answer: 2,
    explanation: "CREATE TABLE nom (colonne1 TYPE contrainte, colonne2 TYPE ...) est la syntaxe de création. PRIMARY KEY désigne la clé primaire, NOT NULL interdit les valeurs vides, UNIQUE impose l'unicité."
  },
  {
    question: "Que fait la requête : SELECT nom, COUNT(*) FROM Commandes GROUP BY client_id HAVING COUNT(*) > 3 ;",
    options: [
      "Affiche les clients ayant exactement 3 commandes",
      "Affiche le nombre total de commandes",
      "Affiche les clients ayant plus de 3 commandes avec leur nombre de commandes",
      "Affiche les 3 premiers clients"
    ],
    answer: 2,
    explanation: "GROUP BY client_id regroupe les commandes par client. COUNT(*) compte les commandes par groupe. HAVING COUNT(*) > 3 ne garde que les groupes de plus de 3 commandes."
  },
  {
    question: "Qu'est-ce qu'une requête imbriquée (sous-requête) ?",
    options: [
      "Une requête qui joint plusieurs tables",
      "Une requête SELECT utilisée dans une autre requête SQL",
      "Une requête qui modifie la structure de la base",
      "Une requête qui retourne plusieurs colonnes"
    ],
    answer: 1,
    explanation: "Une sous-requête est un SELECT à l'intérieur d'un autre SELECT. Ex: SELECT nom FROM Eleves WHERE note > (SELECT AVG(note) FROM Eleves) — les élèves ayant une note supérieure à la moyenne."
  },
  {
    question: "Quelle clause SQL limite le nombre de résultats retournés ?",
    options: ["TOP n", "LIMIT n", "MAX n", "FETCH n"],
    answer: 1,
    explanation: "LIMIT n (SQLite, MySQL, PostgreSQL) limite le nombre de résultats à n lignes. Ex: SELECT * FROM Produits ORDER BY prix DESC LIMIT 5 — les 5 produits les plus chers."
  },
  {
    question: "Qu'est-ce qu'un index dans une base de données ?",
    options: [
      "La liste des tables de la base",
      "Une structure de données permettant d'accélérer les recherches sur une colonne",
      "La numérotation automatique des lignes",
      "Un synonyme de clé primaire"
    ],
    answer: 1,
    explanation: "Un index est une structure additionnelle (souvent un arbre B) qui accélère les recherches sur une colonne. Il améliore les performances SELECT mais ralentit légèrement les INSERT/UPDATE/DELETE."
  },
  {
    question: "Quelle est la différence entre DELETE et DROP TABLE ?",
    options: [
      "Aucune différence, ce sont des synonymes",
      "DELETE supprime des lignes ; DROP TABLE supprime toute la table (structure + données)",
      "DROP TABLE supprime des lignes ; DELETE supprime la table",
      "DELETE supprime une colonne ; DROP TABLE supprime une contrainte"
    ],
    answer: 1,
    explanation: "DELETE supprime des enregistrements (lignes) de la table, qui continue d'exister. DROP TABLE supprime toute la table (structure et données) de façon irréversible. TRUNCATE vide une table de ses données sans la supprimer."
  },
  {
    question: "Dans quelle situation utilise-t-on une table de jonction (table associative) ?",
    options: [
      "Quand une table a trop de colonnes",
      "Pour modéliser une relation plusieurs-à-plusieurs entre deux tables",
      "Pour stocker les résultats des requêtes complexes",
      "Quand deux tables ont la même clé primaire"
    ],
    answer: 1,
    explanation: "Une relation plusieurs-à-plusieurs (N:N) est modélisée par une table de jonction contenant les clés étrangères des deux tables. Ex: Etudiant-Cours : un étudiant suit plusieurs cours, un cours a plusieurs étudiants → table Inscription(etudiant_id, cours_id)."
  },
  {
    question: "Quelle est la fonction de la contrainte NOT NULL ?",
    options: [
      "Empêcher la valeur zéro dans une colonne numérique",
      "Garantir qu'un attribut doit toujours avoir une valeur (pas de valeur absente)",
      "Vérifier que les valeurs sont uniques",
      "Interdire les chaînes vides"
    ],
    answer: 1,
    explanation: "NOT NULL est une contrainte d'intégrité qui interdit les valeurs NULL (absentes/inconnues) dans une colonne. C'est différent de 0 ou de '' (chaîne vide). La clé primaire est implicitement NOT NULL."
  },
  {
    question: "Que fait `SELECT * FROM Produits WHERE prix BETWEEN 10 AND 50` ?",
    options: [
      "Affiche les produits dont le prix est supérieur à 10 et inférieur à 50 (strictement)",
      "Affiche les produits dont le prix est compris entre 10 et 50 inclus",
      "Affiche les produits dont le prix est de 10 ou 50 exactement",
      "Affiche les 10 premiers et les 50 derniers produits"
    ],
    answer: 1,
    explanation: "BETWEEN a AND b est équivalent à >= a AND <= b. C'est une condition inclusive : les valeurs exactes a et b sont incluses. BETWEEN 10 AND 50 correspond à prix >= 10 AND prix <= 50."
  },
  {
    question: "Quelle requête cherche tous les clients dont le nom commence par 'Mar' ?",
    options: [
      "SELECT * FROM Clients WHERE nom = 'Mar%'",
      "SELECT * FROM Clients WHERE nom LIKE 'Mar%'",
      "SELECT * FROM Clients WHERE nom STARTS WITH 'Mar'",
      "SELECT * FROM Clients WHERE nom CONTAINS 'Mar'"
    ],
    answer: 1,
    explanation: "LIKE permet de filtrer avec des motifs. Le % remplace 0 ou plusieurs caractères. _ remplace exactement 1 caractère. 'Mar%' correspond à tout nom commençant par 'Mar'."
  },
  {
    question: "Quelle est la différence entre une relation 1:1, 1:N et N:N ?",
    options: [
      "Elles correspondent aux trois types de jointures SQL",
      "1:1 = à chaque enregistrement d'A correspond au plus un de B ; 1:N = un A peut avoir plusieurs B ; N:N = plusieurs A avec plusieurs B",
      "Ce sont des types de clés primaires différents",
      "Ces notations décrivent le nombre de tables dans la base"
    ],
    answer: 1,
    explanation: "Les cardinalités décrivent les relations entre entités. 1:1 (une personne a un passeport), 1:N (un client a plusieurs commandes), N:N (étudiants et cours). N:N nécessite une table de jonction."
  },
  {
    question: "Que signifie SGBD ?",
    options: [
      "Système de Gestion de Bases de Données",
      "Système Général de Bases de Données",
      "Schéma Global de Base de Données",
      "Standard de Gestion et de Base de Données"
    ],
    answer: 0,
    explanation: "SGBD = Système de Gestion de Bases de Données (DBMS en anglais). Un SGBD gère le stockage, la sécurité, les accès concurrents et les transactions. SQLite, MySQL, PostgreSQL, Oracle sont des SGBD."
  },
  {
    question: "Quelle est la requête SQL pour obtenir le salaire maximum par département ?",
    options: [
      "SELECT dept, MAX(salaire) FROM Employes",
      "SELECT dept, MAX(salaire) FROM Employes GROUP BY dept",
      "SELECT MAX(salaire) FROM Employes WHERE dept",
      "SELECT dept, MAX(salaire) FROM Employes ORDER BY dept"
    ],
    answer: 1,
    explanation: "MAX(salaire) calcule le maximum, GROUP BY dept regroupe par département. Sans GROUP BY, MAX retournerait un seul maximum pour toute la table."
  },
  {
    question: "Qu'est-ce qu'une vue (VIEW) en SQL ?",
    options: [
      "Une représentation graphique de la base de données",
      "Une requête stockée sous forme de table virtuelle interrogeable",
      "Un index sur plusieurs colonnes",
      "Un type de jointure entre tables"
    ],
    answer: 1,
    explanation: "Une vue est une requête SELECT sauvegardée. Elle se comporte comme une table et peut être interrogée. Ex: CREATE VIEW ElevesExcellents AS SELECT * FROM Eleves WHERE moyenne > 15. Elle ne stocke pas les données."
  },
  {
    question: "Que retourne la requête : SELECT COUNT(DISTINCT ville) FROM Clients ;",
    options: [
      "La liste de toutes les villes",
      "Le nombre total de clients",
      "Le nombre de villes différentes parmi les clients",
      "Le nom de la ville ayant le plus de clients"
    ],
    answer: 2,
    explanation: "COUNT(DISTINCT colonne) compte le nombre de valeurs distinctes (uniques) dans la colonne. Ici, on obtient le nombre de villes différentes d'où proviennent les clients."
  },
  {
    question: "Qu'est-ce qu'une transaction dans une base de données ?",
    options: [
      "Un transfert de données entre deux bases",
      "Une séquence d'opérations traitée comme une unité atomique (tout ou rien)",
      "Une requête complexe avec plusieurs JOIN",
      "Un mécanisme de sauvegarde automatique"
    ],
    answer: 1,
    explanation: "Une transaction est un groupe d'opérations qui s'exécute de façon atomique. Soit tout réussit (COMMIT), soit tout est annulé (ROLLBACK). Propriétés ACID : Atomicité, Cohérence, Isolation, Durabilité."
  },
  {
    question: "Quelle requête permet de renommer une colonne dans les résultats ?",
    options: [
      "SELECT prix AS tarif FROM Produits",
      "SELECT prix RENAME tarif FROM Produits",
      "SELECT prix = tarif FROM Produits",
      "SELECT prix CALL tarif FROM Produits"
    ],
    answer: 0,
    explanation: "AS permet de donner un alias à une colonne ou à une table dans les résultats. SELECT prix AS tarif affichera la colonne prix avec l'en-tête 'tarif'. Les alias peuvent aussi simplifier les jointures."
  },
  {
    question: "Quelle est la différence entre le modèle entité-association et le modèle relationnel ?",
    options: [
      "Ce sont deux noms pour la même chose",
      "Le modèle E-A est conceptuel (représentation graphique) ; le modèle relationnel est logique (tables, attributs, clés)",
      "Le modèle E-A est utilisé en SQL, le modèle relationnel en UML",
      "Le modèle relationnel est plus ancien que le modèle E-A"
    ],
    answer: 1,
    explanation: "Le modèle E-A (entité-association) est un modèle conceptuel graphique pour concevoir la base. Le modèle relationnel est le modèle logique implémenté par SQL : on y traduit les entités en tables et les associations en clés étrangères ou tables de jonction."
  },
  {
    question: "Que fait ORDER BY note DESC LIMIT 3 ?",
    options: [
      "Affiche les 3 lignes avec les notes les plus basses",
      "Affiche les 3 premières lignes dans l'ordre d'insertion",
      "Affiche les 3 lignes avec les notes les plus hautes",
      "Trie par note et supprime les 3 derniers"
    ],
    answer: 2,
    explanation: "DESC = ordre décroissant. ORDER BY note DESC trie par note du plus élevé au plus bas. LIMIT 3 ne garde que les 3 premières lignes du résultat trié → les 3 meilleures notes."
  },
  {
    question: "Dans un schéma relationnel, comment note-t-on la clé primaire ?",
    options: [
      "En italique",
      "En gras ou souligné",
      "Avec le symbole *",
      "En majuscules"
    ],
    answer: 1,
    explanation: "Par convention, la clé primaire est soulignée dans un schéma relationnel. Certains notations utilisent le gras ou le symbole # (en France). Les clés étrangères peuvent être indiquées par des flèches ou le symbole #."
  },
  {
    question: "Quel opérateur SQL permet de combiner des conditions avec un OU logique ?",
    options: ["AND", "OR", "NOT", "XOR"],
    answer: 1,
    explanation: "OR est le OU logique en SQL. AND est le ET logique. NOT est la négation. Exemple : WHERE ville = 'Paris' OR ville = 'Lyon' retourne les clients de Paris ou de Lyon."
  },
  {
    question: "Que fait la requête : SELECT * FROM Eleves WHERE nom IS NULL ;",
    options: [
      "Affiche les élèves dont le nom est la chaîne 'NULL'",
      "Affiche les élèves dont le nom est vide",
      "Affiche les élèves dont le nom n'a pas de valeur (valeur absente)",
      "Affiche les élèves dont le nom est zéro"
    ],
    answer: 2,
    explanation: "IS NULL teste si une valeur est absente (NULL). On ne peut pas utiliser = NULL car NULL n'est pas comparable avec =. Pour les valeurs présentes : IS NOT NULL."
  },
  {
    question: "Qu'est-ce que la deuxième forme normale (2NF) ?",
    options: [
      "L'absence de valeurs NULL dans la table",
      "Être en 1NF et que chaque attribut non-clé dépende de la totalité de la clé primaire (pas d'une partie)",
      "Être en 1NF et en 3NF simultanément",
      "Que chaque attribut soit de type simple"
    ],
    answer: 1,
    explanation: "La 2NF s'applique aux tables avec une clé primaire composée. Elle exige : être en 1NF + chaque attribut non-clé doit dépendre de TOUTE la clé, pas d'une partie. Élimine les dépendances partielles."
  },
  {
    question: "Quel est le résultat d'un INNER JOIN entre deux tables s'il n'y a aucune correspondance ?",
    options: [
      "Toutes les lignes de la première table",
      "Toutes les lignes de la deuxième table",
      "Un résultat vide (0 lignes)",
      "Une erreur SQL"
    ],
    answer: 2,
    explanation: "INNER JOIN ne retourne que les lignes où la condition de jointure est satisfaite dans les deux tables. Si aucune correspondance n'existe, le résultat est vide. LEFT JOIN évite ce problème pour la table gauche."
  },
  {
    question: "Quelle requête SQL permet de modifier la structure d'une table (ajouter une colonne) ?",
    options: [
      "UPDATE TABLE Eleves ADD COLUMN email VARCHAR(100)",
      "MODIFY TABLE Eleves ADD email VARCHAR(100)",
      "ALTER TABLE Eleves ADD COLUMN email VARCHAR(100)",
      "CHANGE TABLE Eleves ADD email VARCHAR(100)"
    ],
    answer: 2,
    explanation: "ALTER TABLE est la commande DDL (Data Definition Language) pour modifier la structure d'une table. On peut ajouter, supprimer ou modifier des colonnes, ajouter des contraintes."
  },
  {
    question: "Dans une jointure, à quoi sert la clause ON ?",
    options: [
      "Elle indique le nom de la colonne résultat",
      "Elle spécifie la condition de jointure entre les deux tables",
      "Elle filtre les résultats après la jointure",
      "Elle trie les résultats de la jointure"
    ],
    answer: 1,
    explanation: "La clause ON spécifie la condition de jointure. Ex: JOIN Commandes ON Clients.id = Commandes.client_id. C'est généralement l'égalité entre clé étrangère et clé primaire."
  },
  {
    question: "Que retourne SUM(quantite) FROM Ventes WHERE produit_id = 3 ?",
    options: [
      "Le nombre de ventes du produit 3",
      "La somme totale de toutes les quantités vendues",
      "La somme des quantités vendues pour le produit 3",
      "Le produit le plus vendu"
    ],
    answer: 2,
    explanation: "SUM(quantite) calcule la somme des valeurs de la colonne quantite. La clause WHERE filtre d'abord les lignes (seulement le produit 3). SUM est appliqué après le filtrage."
  },
  {
    question: "Dans le contexte de SQLite utilisé en NSI, que fait sqlite3.connect('ma_base.db') en Python ?",
    options: [
      "Crée une connexion à un serveur MySQL",
      "Ouvre ou crée la base de données 'ma_base.db' et retourne un objet connexion",
      "Importe le schéma de la base",
      "Exécute une requête SQL"
    ],
    answer: 1,
    explanation: "sqlite3.connect('fichier.db') ouvre le fichier de base SQLite (ou le crée s'il n'existe pas) et retourne un objet connexion. De cet objet, on crée un curseur : conn.cursor() pour exécuter des requêtes."
  },
  {
    question: "Comment exécuter une requête SQL en Python avec SQLite ?",
    options: [
      "conn.sql('SELECT ...')",
      "cursor.execute('SELECT ...') puis cursor.fetchall()",
      "sqlite3.query('SELECT ...')",
      "cursor.run('SELECT ...') "
    ],
    answer: 1,
    explanation: "On utilise cursor.execute('requête') pour exécuter, puis cursor.fetchall() pour récupérer tous les résultats (liste de tuples) ou cursor.fetchone() pour le premier résultat uniquement."
  },
  {
    question: "Que fait la contrainte UNIQUE sur une colonne ?",
    options: [
      "Elle empêche NULL dans cette colonne",
      "Elle garantit que toutes les valeurs de la colonne sont différentes",
      "Elle fait de cette colonne la clé primaire",
      "Elle indexe automatiquement la colonne"
    ],
    answer: 1,
    explanation: "UNIQUE garantit l'unicité des valeurs dans une colonne (ou combinaison de colonnes), mais contrairement à PRIMARY KEY, UNIQUE autorise NULL (une seule valeur NULL en général). Ex: colonne email UNIQUE."
  }
];
