const INTRO = {
  "debut01": {
    "title": "Lire une liste",
    "goal": "Repérer un élément et distinguer indice et longueur.",
    "text": "<p>Une liste contient plusieurs valeurs dans un ordre précis. L’indice est la position d’une valeur ; en Python, il commence à <strong>0</strong>.</p><div class=\"list-picture\" aria-label=\"Liste : Lina à l’indice 0, Noé à l’indice 1, Zoé à l’indice 2\"><span><small>indice 0</small>Lina</span><span><small>indice 1</small>Noé</span><span><small>indice 2</small>Zoé</span></div><p><code>len(prenoms)</code> donne le nombre d’éléments. <code>print</code> affiche une valeur dans la console.</p><ol><li>Sans exécuter, prévois les trois lignes affichées.</li><li>Clique sur Exécuter, puis compare avec ta prévision.</li><li>Remplace <code>prenoms[0]</code> par <code>prenoms[2]</code> et prévois ce qui change.</li></ol>",
    "starter": "prenoms = [\"Lina\", \"Noé\", \"Zoé\"]\nprint(prenoms)\nprint(prenoms[0])\nprint(len(prenoms))\n",
    "expected": "['Lina', 'Noé', 'Zoé']\nLina\n3",
    "hints": [
      "La première valeur est à l’indice 0, mais la liste contient bien 3 valeurs.",
      "L’indice du dernier élément est 2. L’indice 3 serait en dehors de cette liste."
    ],
    "unit": null,
    "full": null
  },
  "debut02": {
    "title": "Suivre une boucle for",
    "goal": "Comprendre le parcours direct d’une liste.",
    "text": "<p><code>for prenom in prenoms:</code> signifie : « pour chaque valeur de la liste, appeler cette valeur <code>prenom</code> et exécuter les lignes indentées ». Les quatre espaces au début de <code>print</code> placent cette instruction dans la boucle. Le deux-points est nécessaire.</p><ol><li>Prévois l’affichage. Combien de fois « Bonjour » sera-t-il affiché ? Et « Terminé » ?</li><li>Exécute le code.</li><li>Ajoute un quatrième prénom dans la liste, puis relance.</li><li>Essaie ensuite avec <code>prenoms = []</code>. Que reste-t-il affiché ?</li></ol><p>Pas besoin de <code>range</code> ni d’indices pour lire chaque valeur !</p>",
    "starter": "prenoms = [\"Lina\", \"Noé\", \"Zoé\"]\nfor prenom in prenoms:\n    print(\"Bonjour\", prenom)\nprint(\"Terminé\")\n",
    "expected": "Bonjour Lina\nBonjour Noé\nBonjour Zoé\nTerminé",
    "hints": [
      "À chaque tour, prenom prend la valeur suivante : Lina, puis Noé, puis Zoé.",
      "La dernière ligne n’est pas indentée : elle s’exécute une fois, après la boucle, même si la liste est vide."
    ],
    "unit": null,
    "full": null
  },
  "debut03": {
    "title": "Compléter un parcours",
    "goal": "Afficher chaque valeur, une par ligne.",
    "text": "<p>Une <strong>fonction</strong> est un petit programme auquel on donne un nom. <code>def afficher(prenoms):</code> définit la fonction ; <code>afficher([\"Lina\", \"Noé\"])</code> l’appelle avec une liste. Le paramètre <code>prenoms</code> désigne cette liste pendant l’appel.</p><p>Remplace seulement <code>...</code> par le nom de la valeur à afficher. Dans la fonction, la boucle est indentée de 4 espaces ; son affichage, de 8 espaces. Exécute, puis clique sur « Vérifier cet exercice ».</p>",
    "starter": "def afficher(prenoms):\n    for prenom in prenoms:\n        print(...)\n\nafficher([\"Lina\", \"Noé\"])\n",
    "expected": "Lina\nNoé",
    "hints": [
      "Affiche la valeur du tour en cours, pas toute la liste.",
      "La variable après for s’appelle prenom."
    ],
    "unit": "import io, contextlib\nsortie = io.StringIO()\nwith contextlib.redirect_stdout(sortie):\n    afficher([\"Lina\", \"Noé\"])\nassert sortie.getvalue() == \"Lina\\nNoé\\n\", \"Attendu : Lina puis Noé, une par ligne. Obtenu : \" + repr(sortie.getvalue())",
    "full": "import io, contextlib\nfor valeurs in ([], [\"Zoé\"], [\"A\", \"B\", \"C\"]):\n    sortie = io.StringIO()\n    with contextlib.redirect_stdout(sortie):\n        afficher(valeurs)\n    assert sortie.getvalue() == \"\".join(x + \"\\n\" for x in valeurs), \"Chaque prénom doit être affiché une fois ; aucun affichage pour une liste vide.\""
  },
  "debut04": {
    "title": "Renvoyer un résultat",
    "goal": "Distinguer return et print.",
    "text": "<p><code>print</code> affiche pour la personne devant l’écran. <code>return</code> renvoie une valeur au programme qui a appelé la fonction et termine cet appel. On peut conserver cette valeur dans une variable.</p><p>Complète <code>nombre_visiteurs</code> pour <strong>renvoyer</strong> la longueur de la liste. N’écris pas de <code>print</code> dans cette fonction : il est déjà fourni en bas.</p>",
    "starter": "def nombre_visiteurs(file):\n    return ...\n\nnombre = nombre_visiteurs([\"Lina\", \"Noé\", \"Zoé\"])\nprint(nombre)\n",
    "expected": "3",
    "hints": [
      "La longueur d’une liste se calcule avec len.",
      "Écris len(file) après return."
    ],
    "unit": "resultat = nombre_visiteurs([\"Lina\", \"Noé\", \"Zoé\"])\nassert resultat == 3, f\"Attendu : 3 ; obtenu : {resultat!r}. Il faut renvoyer la valeur.\"",
    "full": "assert nombre_visiteurs([]) == 0, \"Une liste vide contient 0 visiteur.\"\nassert nombre_visiteurs([\"A\"]) == 1, \"Une liste d’un élément a une longueur de 1.\""
  },
  "debut05": {
    "title": "Ajouter à une liste",
    "goal": "Modifier une liste avec append.",
    "text": "<p><code>file.append(\"Zoé\")</code> ajoute « Zoé » à la fin de la liste. La liste est <strong>modifiée sur place</strong>. Il ne faut pas écrire <code>file = file.append(...)</code> : <code>append</code> ne renvoie pas la liste.</p><p>Complète la fonction avec une seule instruction : ajoute la valeur du paramètre <code>visiteur</code> à la liste <code>file</code>. Aucun <code>return</code> n’est nécessaire ici. Prévois le résultat avant d’exécuter.</p>",
    "starter": "def ajouter(file, visiteur):\n    ...\n\nattente = [\"Lina\", \"Noé\"]\najouter(attente, \"Zoé\")\nprint(attente)\n",
    "expected": "['Lina', 'Noé', 'Zoé']",
    "hints": [
      "La liste à modifier s’appelle file ; la valeur à ajouter s’appelle visiteur.",
      "Utilise file.append(visiteur)."
    ],
    "unit": "f = [\"Lina\", \"Noé\"]\najouter(f, \"Zoé\")\nassert f == [\"Lina\", \"Noé\", \"Zoé\"], f\"Attendu : Lina, Noé, Zoé ; obtenu : {f!r}\"",
    "full": "f = []\najouter(f, \"A\")\najouter(f, \"B\")\nassert f == [\"A\", \"B\"], f\"Après deux ajouts dans une liste vide, attendu : [A, B] ; obtenu : {f!r}\""
  },
  "debut06": {
    "title": "Construire une liste avec for",
    "goal": "Associer une boucle et un ajout.",
    "text": "<p>Cette fois, on fabrique une <strong>nouvelle liste</strong> : on part de <code>[]</code>, on parcourt les nombres et on ajoute leur double.</p><p>Complète uniquement la ligne dans la boucle avec <code>resultat.append(...)</code>. <code>nombre * 2</code> calcule le double du nombre courant. Le <code>return</code> est placé <strong>après</strong> la boucle : sinon on s’arrêterait au premier nombre.</p>",
    "starter": "def doubler(nombres):\n    resultat = []\n    for nombre in nombres:\n        ...\n    return resultat\n\nprint(doubler([2, 5, 3]))\n",
    "expected": "[4, 10, 6]",
    "hints": [
      "Ajoute un seul nombre à chaque tour de boucle.",
      "La ligne manquante est resultat.append(nombre * 2)."
    ],
    "unit": "r = doubler([2, 5, 3])\nassert r == [4, 10, 6], f\"Attendu : [4, 10, 6] ; obtenu : {r!r}\"",
    "full": "assert doubler([]) == [], \"Sans nombre à parcourir, le résultat reste vide.\"\na = [0, -2]\nassert doubler(a) == [0, -4], \"Le double de -2 est -4.\"\nassert a == [0, -2], \"La liste de départ doit rester inchangée.\""
  },
  "debut07": {
    "title": "Une pile d’assiettes",
    "goal": "Retirer et renvoyer le dernier élément : LIFO.",
    "text": "<p>Le sommet de notre pile est à la <strong>fin de la liste</strong>. Empiler ajoute au sommet ; dépiler retire et renvoie ce sommet. C’est <strong>LIFO : dernier entré, premier sorti</strong>.</p><p><code>pile.pop()</code> fait deux choses : retire le dernier élément <em>et</em> renvoie sa valeur. Complète le <code>return</code> de <code>depiler</code>. La fonction <code>empiler</code> est fournie.</p><p>Pour cette introduction, dépiler une pile vide renvoie <code>None</code>, c’est-à-dire « aucune valeur utile ». <code>if len(pile) == 0:</code> teste ce cas avant le retrait.</p>",
    "starter": "def empiler(pile, assiette):\n    pile.append(assiette)\n\ndef depiler(pile):\n    if len(pile) == 0:\n        return None\n    return ...\n\nassiettes = [\"bleue\", \"verte\"]\nempiler(assiettes, \"rouge\")\nretiree = depiler(assiettes)\nprint(retiree)\nprint(assiettes)\n",
    "expected": "rouge\n['bleue', 'verte']",
    "hints": [
      "La rouge est arrivée en dernier : elle doit sortir en premier.",
      "Écris pile.pop() après return. Le return permet de récupérer l’assiette retirée."
    ],
    "unit": "p = [\"bleue\", \"verte\", \"rouge\"]\nr = depiler(p)\nassert r == \"rouge\", f\"Sommet attendu : rouge ; obtenu : {r!r}\"\nassert p == [\"bleue\", \"verte\"], f\"Le sommet doit être retiré ; pile obtenue : {p!r}\"",
    "full": "p = []\nassert depiler(p) is None, \"Sur une pile vide, on attend None dans cet exercice.\"\nempiler(p, \"A\")\nempiler(p, \"B\")\nassert [depiler(p), depiler(p)] == [\"B\", \"A\"], \"Une pile sort B avant A.\"\nassert p == [], \"La pile doit être vide après les deux retraits.\""
  },
  "debut08": {
    "title": "Une file à PyLand",
    "goal": "Retirer et renvoyer le premier élément : FIFO.",
    "text": "<p>Les visiteurs entrent à la <strong>fin</strong> de la liste et sortent au <strong>début</strong>. C’est <strong>FIFO : premier entré, premier sorti</strong>. <code>file.pop(0)</code> retire et renvoie l’élément à l’indice 0.</p><p>Complète seulement le retrait dans <code>defiler</code>. Comme précédemment, on renvoie <code>None</code> si la file est vide. Prédit qui entre dans l’attraction et qui reste dans la file.</p><p>Les noms <code>enfiler</code> et <code>defiler</code> décrivent les opérations d’une file. Ici, on les réalise avec une liste Python.</p>",
    "starter": "def enfiler(file, visiteur):\n    file.append(visiteur)\n\ndef defiler(file):\n    if len(file) == 0:\n        return None\n    return ...\n\nattente = [\"Lina\", \"Noé\"]\nenfiler(attente, \"Zoé\")\nprint(defiler(attente))\nprint(attente)\n",
    "expected": "Lina\n['Noé', 'Zoé']",
    "hints": [
      "Le visiteur arrivé en premier est à l’indice 0.",
      "Écris file.pop(0) après return. Compare avec le pop() de la pile."
    ],
    "unit": "f = [\"Lina\", \"Noé\", \"Zoé\"]\nr = defiler(f)\nassert r == \"Lina\", f\"Premier visiteur attendu : Lina ; obtenu : {r!r}\"\nassert f == [\"Noé\", \"Zoé\"], f\"File restante attendue : Noé, Zoé ; obtenue : {f!r}\"",
    "full": "f = []\nassert defiler(f) is None, \"Sur une file vide, on attend None.\"\nenfiler(f, \"A\")\nenfiler(f, \"B\")\nassert [defiler(f), defiler(f)] == [\"A\", \"B\"], \"Une file sort A avant B.\"\nassert f == [], \"La file doit maintenant être vide.\""
  },
  "debut09": {
    "title": "Comparer pile et file",
    "goal": "Expliquer pourquoi l’ordre de sortie change.",
    "text": "<p>Les deux listes contiennent les mêmes lettres. Sans exécuter, prévois les deux lignes affichées, puis justifie la différence avec les mots <strong>premier</strong> et <strong>dernier</strong>.</p><p><code>range(3)</code> produit 0, 1, 2 : la boucle répète donc son bloc trois fois. La variable <code>tour</code> n’est pas utilisée ici. Ne parcours pas directement une liste tout en retirant ses éléments : certains pourraient être sautés.</p><p>Exécute, puis explique à ton voisin : quelle structure choisir pour une file d’attente ? Pour une pile d’assiettes ?</p>",
    "starter": "pile = [\"A\", \"B\", \"C\"]\nfile = [\"A\", \"B\", \"C\"]\nsortie_pile = []\nsortie_file = []\nfor tour in range(3):\n    sortie_pile.append(pile.pop())\n    sortie_file.append(file.pop(0))\nprint(sortie_pile)\nprint(sortie_file)\n",
    "expected": "['C', 'B', 'A']\n['A', 'B', 'C']",
    "hints": [
      "pop() retire à la fin ; pop(0) retire au début.",
      "La pile inverse ici l’ordre d’arrivée. La file le conserve."
    ],
    "unit": null,
    "full": null
  },
  "debut10": {
    "title": "Faire embarquer trois visiteurs",
    "goal": "Assembler des opérations simples dans une boucle fournie.",
    "text": "<p>Voici ton premier petit programme pour PyLand. La fonction <code>defiler</code> est déjà écrite : tu peux avancer même si tu n’as pas terminé l’exercice précédent.</p><p>La nacelle a trois places. Complète <strong>deux lignes</strong> : récupérer le premier visiteur avec <code>defiler</code>, puis l’ajouter à <code>passagers</code>. Le test <code>if len(file) &gt; 0:</code> évite de retirer un visiteur lorsque la file est vide.</p><p>Exécute l’exemple à quatre visiteurs. Ensuite, essaie avec un seul visiteur, puis avec une liste vide. Enfin lance les essais supplémentaires.</p>",
    "starter": "def defiler(file):\n    if len(file) == 0:\n        return None\n    return file.pop(0)\n\ndef embarquer(file):\n    passagers = []\n    for place in range(3):\n        if len(file) > 0:\n            visiteur = ...\n            ...\n    return passagers\n\nattente = [\"Lina\", \"Noé\", \"Zoé\", \"Adam\"]\nprint(embarquer(attente))\nprint(attente)\n",
    "expected": "['Lina', 'Noé', 'Zoé']\n['Adam']",
    "hints": [
      "defiler(file) retire un prénom et te le renvoie. Conserve-le dans visiteur.",
      "Première ligne : visiteur = defiler(file). Deuxième ligne : passagers.append(visiteur)."
    ],
    "unit": "f = [\"Lina\", \"Noé\", \"Zoé\", \"Adam\"]\nr = embarquer(f)\nassert r == [\"Lina\", \"Noé\", \"Zoé\"], f\"Passagers attendus : Lina, Noé, Zoé ; obtenus : {r!r}\"\nassert f == [\"Adam\"], f\"Il doit rester Adam ; obtenu : {f!r}\"",
    "full": "for depart, attendus in [([], []), ([\"A\"], [\"A\"]), ([\"A\", \"B\"], [\"A\", \"B\"])]:\n    f = depart.copy()\n    r = embarquer(f)\n    assert r == attendus and f == [], f\"Avec {depart!r}, attendu {attendus!r} et une file vide ; obtenu {r!r}, reste {f!r}\"\nf = [\"A\", \"B\", \"C\", \"D\"]\nassert embarquer(f) == [\"A\", \"B\", \"C\"]\nassert embarquer(f) == [\"D\"], \"Au deuxième départ, seul D doit embarquer.\""
  }
};
for (const [id, lesson] of Object.entries(INTRO)) {
 STARTERS[id] = lesson.starter;
 TESTS[id] = {unit: lesson.unit ? [{name:'Vérifier cet exercice',code:lesson.unit}] : [], full: lesson.full ? [{name:'Essais supplémentaires',code:lesson.full}] : []};
}
const introSelect = document.getElementById('activity');
const introGroup = document.createElement('optgroup');introGroup.label='🌱 Avant les jeux · parcours guidé';
Object.entries(INTRO).forEach(([id,l],i)=>{const o=document.createElement('option');o.value=id;o.textContent=(i+1)+' · '+l.title;introGroup.append(o);});
introSelect.prepend(introGroup);
function showIntro(id) {
 const lesson=INTRO[id],box=document.getElementById('intro-lesson');box.hidden=!lesson;
 document.getElementById('intro-entry').hidden=!!lesson;
 document.getElementById('unit').hidden=!!lesson&&!lesson.unit;
 document.getElementById('full').hidden=!!lesson&&!lesson.full;
 document.getElementById('unit').textContent=lesson?'✓ Vérifier cet exercice':'1 · Tests unitaires';
 document.getElementById('full').textContent=lesson?'Aller plus loin · essais supplémentaires':'2 · Tests complets';
 if(!lesson)return;
 const ids=Object.keys(INTRO),i=ids.indexOf(id);
 box.innerHTML='<p class="small">TP2 · Avant les jeux · Étape '+(i+1)+' / '+ids.length+'</p><h2>'+lesson.title+'</h2><p><strong>Objectif : </strong>'+lesson.goal+'</p>'+lesson.text;
 const expected=document.createElement('details');expected.innerHTML='<summary>👀 Affichage attendu du code de départ complété — après ta prévision</summary>';const pre=document.createElement('pre');pre.textContent=lesson.expected;expected.append(pre);box.append(expected);
 lesson.hints.forEach((h,n)=>{const d=document.createElement('details');const s=document.createElement('summary');s.textContent='💡 Indice '+(n+1)+(n===0?' · une piste':' · aide plus précise');const p=document.createElement('p');p.textContent=h;d.append(s,p);box.append(d);});
 const nav=document.createElement('nav');nav.className='toolbar';nav.setAttribute('aria-label','Étapes du parcours');
 if(i>0){const a=document.createElement('a');a.href='?activite='+ids[i-1];a.textContent='← Étape précédente';nav.append(a);}
 if(i<ids.length-1){const a=document.createElement('a');a.href='?activite='+ids[i+1];a.textContent='Étape suivante →';nav.append(a);}
 else {const p=document.createElement('div');p.innerHTML='<strong>Avant de passer aux jeux</strong><p><a href="atelier.html?activite=bac01">🎓 Vers le bac : boucles et transferts, sans classes →</a></p><p>Explique sans lire ton code : que fait la boucle ? Quelle différence entre print et return ? Qui sort d’une pile, et d’une file ? Montre ton embarquement à ton professeur pour choisir la suite.</p><p>Les jeux complets ajoutent de nouvelles difficultés. Dans la Bataille, une file vide déclenche une exception : ce contrat diffère de notre introduction. La récursivité de Hanoï et les parcours du labyrinthe seront à reprendre plus tard.</p><a href="index.html#parcours">Voir les projets avec mon professeur →</a>';nav.append(p);}
 box.append(nav);
 document.getElementById('activity-note').textContent=lesson.unit?'Remplace les ... dans le code. Exécute, puis vérifie uniquement cet exercice. Chaque étape est indépendante ; tes brouillons sont conservés séparément.':'Ici, on observe et on expérimente : aucun test à réussir. Prévois, exécute, modifie puis explique.';
}
