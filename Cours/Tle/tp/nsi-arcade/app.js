/* Page controller: no fetch, dependency, server or student data required. */
(() => {
  'use strict';
  const A=window.Arcade, $=id=>document.getElementById(id);
  const hints={
"p1":["Quelles informations appartiennent à une personne ?", "Les heures sont en minutes ; la satisfaction est un nombre.", "Construis un dictionnaire neuf avec les clés nom, arrivee et satisfaction à chaque appel."],"p2":["Le plus ancien se trouve au début de la liste.", "Teste le vide avant de retirer ; un ajout ne change pas l’ordre existant.", "append ajoute à la fin ; pop(indice) retire et renvoie. Quel indice correspond au plus ancien ?"],"p3":["Deux limites : places disponibles et visiteurs présents.", "Accumule les passagers dans une nouvelle liste et utilise retirer_visiteur.", "Tant que la file est non vide et le nombre de passagers inférieur à capacite, retire un visiteur et calcule heure - visiteur[\"arrivee\"]."],"p4":["Les passagers ne sont plus dans la file après embarquement.", "Deux boucles, une pour chaque groupe.", "Pour borner x entre 0 et 100 : max(0, min(100, x))."],"p5":["Il faut le nombre de personnes, la somme des attentes et la somme des satisfactions.", "Isole les 20 premiers : sortis[:20]. Traite le cas vide avant toute division.", "Divise chaque somme par la taille de l’échantillon, pas par 20 si seulement quelques personnes sont sorties."],
    b1:['Comment obtenir chaque combinaison valeur/couleur une seule fois ?', 'Deux boucles imbriquées permettent de fabriquer les tuples. Mélange avant de couper le paquet.', 'Piste : for couleur in couleurs: puis for valeur in range(2, 15):. Deux tranches de même taille distribuent ensuite les cartes.'],
    b2:['Quel élément attend depuis le plus longtemps ? À quelle extrémité entre un nouvel élément ?', 'Ajoute en fin de liste. Le retrait doit renvoyer le premier élément, après avoir vérifié que la liste est non vide.', 'list.append(element) ajoute à la fin ; list.pop(indice) retire ET renvoie un élément. Quel indice correspond au début ?'],
    b3:['La force d’une carte dépend-elle de sa couleur ou de sa valeur ?', 'Conserve les cartes sorties dans enjeu, puis transfère tout l’enjeu au gagnant dans le même ordre.', 'Pour une carte représentée par un tuple, carte[0] donne sa valeur. Utilise tes fonctions de file pour les transferts.'],
    b4:['Où restent les cartes lorsqu’aucun gagnant n’est encore connu ?', 'Garde enjeu entre les appels. Avant une carte cachée et une nouvelle carte visible, vérifie les effectifs.', 'Pseudo-code : égalité → si continuation possible, déposer une carte cachée chacun ; sinon appliquer la règle de fin. Ne vide enjeu qu’après attribution.'],
    b5:['Qu’est-ce qui oblige la partie à s’arrêter ? Peut-elle durer indéfiniment ?', 'Combine files non vides, absence de résultat terminal et compteur inférieur à la limite.', 'Pseudo-code : tant que partie en cours et compteur < limite : jouer ; incrémenter. En sortie, distingue victoire, nul et interruption.'],
    s1:['Quelle position disparaît en premier ? Est-ce la dernière position ajoutée ?', 'Suis l’âge des positions : la position ajoutée côté tête attend plusieurs déplacements avant de sortir côté queue.', 'Marque queue = serpent[0] et tete = serpent[-1]. Compare l’ordre d’entrée et l’ordre de sortie : FIFO ou LIFO ?'],
    s2:['Quelles coordonnées changent pour un déplacement horizontal ? Et vertical ?', 'Pars du dernier tuple du serpent et ajoute séparément les deux composantes de la direction.', 'Décompose : ligne, colonne = serpent[-1] ; dl, dc = direction. Construis un nouveau tuple avec les deux sommes.'],
    s3:['Combien d’ajouts et de retraits faut-il pour garder la même longueur ?', 'Il y a toujours un ajout de tête. Le retrait de queue dépend uniquement de grandit.', 'Pseudo-code : ajouter tete en fin ; si pas grandit, retirer l’élément le plus ancien. Vérifie les longueurs avant et après.'],
    s4:['Comment être certain de ne jamais choisir une case occupée ?', 'Énumère les cases, conserve celles qui ne sont pas dans serpent, puis choisis dans cette liste.', 'random.choice(cases_libres) attend une liste non vide. Traite séparément le cas où il ne reste aucune case.'],
    s5:['La queue occupera-t-elle encore sa case après ce déplacement ?', 'Teste les bornes, puis cherche la tête dans le corps qui restera après retrait éventuel de la queue.', 'Piste : corps_a_tester = serpent if grandit else serpent[1:]. Il reste à combiner ce test avec ceux des quatre bords.'],
    h1:['Peut-on prendre un disque au milieu d’une tour ?', 'Le sommet est le dernier élément, et les valeurs doivent décroître du bas vers le haut.', 'Pour lire le sommet d’une pile non vide : pile[-1]. Pour le retirer, quelle opération de liste connais-tu ?'],
    h2:['Quelles vérifications faut-il faire avant de toucher aux deux piles ?', 'Refuse un départ vide, un départ identique à l’arrivée, ou un disque trop grand. Une arrivée vide est autorisée.', 'Pseudo-code : vérifier → retirer le sommet du départ → ajouter au sommet de l’arrivée → renvoyer True. Toute erreur doit renvoyer False avant le retrait.'],
    h3:['Pour déplacer le disque 3, où les deux petits doivent-ils être rangés ?', 'Utilise la tour intermédiaire comme destination temporaire des petits disques.', 'Décompose en trois objectifs : libérer le 3 ; déplacer le 3 sur C ; remettre les deux petits sur C. Note chaque coup, pas seulement les objectifs.'],
    h4:['Si tu savais déjà déplacer n−1 disques, comment cela aiderait-il pour n ?', 'Il faut déplacer n−1 disques vers la tour intermédiaire, déplacer le plus grand vers l’arrivée, puis déplacer les petits sur lui.', 'Cas de base possible : n == 0, ne rien faire. Puis : hanoi(n-1, depart, arrivee, intermediaire) ; déplacer le grand disque ; écrire le second appel en échangeant les rôles des tours.'],
    e1:['Quelles quatre coordonnées entourent une case (ligne, colonne) ?', 'Construis les quatre candidats puis filtre les coordonnées hors matrice et les murs.', 'Avant labyrinthe[l][c], vérifie 0 <= l < len(labyrinthe) et 0 <= c < len(labyrinthe[l]).'],
    e2:['Quelle case doit sortir d’une pile après plusieurs ajouts ?', 'Retire la dernière ajoutée. Pour chaque voisin inconnu, marque-le immédiatement et ajoute-le à la pile.', 'Piste : case = a_explorer.pop(). Il reste à gérer la boucle, la sortie et l’ajout des voisins.'],
    e3:['Quelle case attend depuis le plus longtemps parmi celles à explorer ?', 'Retire au début, ajoute à la fin. Tout le reste, notamment l’ordre des voisins, doit rester identique.', 'Avec une liste, pop(0) retire la première case. Explique pourquoi cette modification change la forme de l’exploration.'],
    e4:['Compare d’abord toutes les cases à un pas du départ, puis à deux pas.', 'Une file traite les découvertes dans leur ordre d’arrivée : chaque couche de distance précède la suivante.', 'BFS garantit un chemin de longueur minimale ici : toutes les arêtes ont le même coût. DFS trouve un chemin sans garantir qu’il est minimal. Une seule démo n’est pas une preuve : justifie par les couches.'],
    e5:['Quelle information permet de revenir d’une case à celle qui l’a découverte ?', 'Au premier ajout d’un voisin, mémorise la case courante comme son parent. Ne remplace plus ce parent.', 'Piste : predecesseurs[voisin] = case. Depuis la sortie, suis les parents jusqu’à None, puis inverse la liste obtenue.']
  };
  document.querySelectorAll('[data-hints]').forEach(box=>{
    const entries=hints[box.dataset.hints], controls=document.createElement('div'), output=document.createElement('div');
    controls.className='controls';output.className='hint-output';output.hidden=true;
    output.id=`hints-${box.dataset.hints}`;
    entries.forEach((hint,i)=>{
      const b=document.createElement('button'); b.textContent=`💡 Indice ${i+1}`;b.disabled=i>0;
      b.setAttribute('aria-controls',output.id);b.setAttribute('aria-expanded','false');
      b.addEventListener('click',()=>{
        if(b.dataset.revealed)return;
        b.dataset.revealed='true';b.setAttribute('aria-expanded','true');output.hidden=false;
        const p=document.createElement('p');p.textContent=`${i+1}. ${hint}`;output.append(p);
        b.textContent=`✓ Indice ${i+1}`;
        if(controls.children[i+1])controls.children[i+1].disabled=false;
      });controls.append(b);
    });box.append(controls,output);
  });

  const storageKey='nsi-arcade-progress-v1', checks=[...document.querySelectorAll('[data-mission]')];
  let saved={};
  try {saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};}catch{ $('storage-note').textContent='Stockage indisponible : coches conservées pour cette visite seulement.'; }
  const progress=()=>{const n=checks.filter(c=>c.checked).length;$('progress').max=checks.length;$('progress').value=n;$('progress-text').textContent=`${n} / ${checks.length} missions validées`;};
  const save=()=>{try {localStorage.setItem(storageKey,JSON.stringify(Object.fromEntries(checks.map(c=>[c.dataset.mission,c.checked]))));}catch{$('storage-note').textContent='Stockage indisponible : coches conservées pour cette visite seulement.';}progress();};
  checks.forEach(c=>{c.checked=saved[c.dataset.mission]===true;c.addEventListener('change',save);});progress();
  $('clear-progress').addEventListener('click',()=>{checks.forEach(c=>c.checked=false);save();});

  // Tokenize in one pass, always create text nodes (never interpret code as HTML).
  const tokenPattern=/(#[^\n]*|"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:def|class|return|if|else|elif|for|in|while|import|from|as|raise|try|except|with|and|or|not|is|None|True|False|pass)\b|\b\d+\b)/g;
  document.querySelectorAll('.code-panel').forEach(panel=>{
    const source=panel.querySelector('textarea').value, code=panel.querySelector('pre code'), raw=code.textContent;
    code.textContent='';let start=0;
    for(const match of raw.matchAll(tokenPattern)) {
      code.append(document.createTextNode(raw.slice(start,match.index)));
      const span=document.createElement('span'), token=match[0];
      span.className='token-'+(token.startsWith('#')?'comment':/^["']/.test(token)?'string':/^\d/.test(token)?'number':'keyword');
      span.textContent=token;code.append(span);start=match.index+token.length;
    }code.append(document.createTextNode(raw.slice(start)));
    panel.querySelector('[data-copy]').addEventListener('click',async e=>{
      const button=e.currentTarget;
      try {
        if(!navigator.clipboard)throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(source);button.textContent='✓ Fichier complet copié';
      }catch{
        const field=panel.querySelector('textarea');field.hidden=false;field.style.width='100%';field.rows=8;field.focus();field.select();button.textContent='Sélection prête : Ctrl+C / ⌘C';
      }
    });
    // Embedded source also powers downloads offline, without a second HTTP request.
    const link=panel.querySelector('[download]');
    link.href=URL.createObjectURL(new Blob([source],{type:'text/x-python;charset=utf-8'}));
  });

  let battle=A.deck(), battleTimer=null;
  const cardName=c=>`${({11:'V',12:'D',13:'R',14:'As'})[c.value]||c.value}${c.suit}`;
  function stopBattle(){clearInterval(battleTimer);battleTimer=null;$('battle-pause').disabled=true;$('battle-play').disabled=battle.done||battle.turn>=1000;}
  function renderBattle(){
    for(const [who,id,name] of [['a','alice','Alice'],['b','bob','Bob']]){
      $(`${id}-count`).textContent=`${name} : ${battle[who].length} cartes · début → fin`;
      $(`${id}-queue`).replaceChildren(...battle[who].slice(0,8).map(c=>{const el=document.createElement('span');el.className='card'+(['♥','♦'].includes(c.suit)?' red-card':'');el.textContent=cardName(c);return el;}));
    }
    $('battle-played').textContent=`TOUR ${battle.turn}\n`+(battle.played?`Alice : ${cardName(battle.played[0])}\nBob   : ${cardName(battle.played[1])}`:'Les deux files sont prêtes.');
    $('battle-pot').textContent=`Au centre : ${battle.pot.length} cartes · total conservé : ${battle.a.length+battle.b.length+battle.pot.length}`;
    $('battle-status').textContent=battle.message||'Prédis les cartes qui vont sortir, puis joue un tour.';
    $('battle-step').disabled=battle.done||battle.turn>=1000||!!battleTimer;
    $('battle-play').disabled=battle.done||battle.turn>=1000||!!battleTimer;
  }
  function battleTick(){battle=A.battleStep(battle);if(battle.turn>=1000&&!battle.done)battle.message='Limite de 1 000 tours atteinte : partie interrompue, aucun gagnant déclaré.';if(battle.done||battle.turn>=1000)stopBattle();renderBattle();}
  $('battle-step').onclick=battleTick;
  $('battle-play').onclick=()=>{if(battleTimer)return;battleTimer=setInterval(battleTick,400);$('battle-pause').disabled=false;renderBattle();};
  $('battle-pause').onclick=()=>{stopBattle();renderBattle();};
  $('battle-reset').onclick=()=>{stopBattle();battle=A.deck();renderBattle();};
  $('battle-tie').onclick=()=>{stopBattle();const c=v=>({value:v,suit:'♠'});battle={a:[8,3,12,4].map(c),b:[8,2,10,5].map(v=>({value:v,suit:'♥'})),pot:[],turn:0,done:false,message:'Petit paquet de 8 cartes : prédis l’égalité, puis joue un tour.'};renderBattle();};
  renderBattle();

  let body,apple,lastSnake,snakeTimer=null,snakeOver=false;
  function stopSnake(){clearInterval(snakeTimer);snakeTimer=null;$('snake-pause').disabled=true;$('snake-play').disabled=snakeOver;$('snake-step').disabled=snakeOver;}
  function resetSnake(withApple=false){stopSnake();body=[[5,3],[5,4],[5,5],[5,6]];apple=withApple?[5,7]:[2,8];lastSnake=null;snakeOver=false;$('snake-play').disabled=false;$('snake-step').disabled=false;renderSnake(withApple?'Pomme juste devant : prédis la longueur après un déplacement.':'Prédis la prochaine liste, puis avance.');}
  function renderSnake(message){
    const cells=[];
    for(let r=0;r<10;r++)for(let c=0;c<10;c++){
      const p=[r,c],el=document.createElement('span');el.className='cell';
      if(A.same(p,lastSnake?.removed)){el.classList.add('removed');el.textContent='×';}
      if(body.some(q=>A.same(p,q)))el.classList.add('snake');
      if(A.same(p,body.at(-1))){el.classList.add('head');el.textContent='T';}
      if(A.same(p,apple)){el.classList.add('apple');el.textContent='🍎';}
      el.title=`(${r}, ${c})`;cells.push(el);
    }
    $('snake-board').replaceChildren(...cells);$('snake-board').setAttribute('aria-label',`Snake : ${body.length} cases, tête ${body.at(-1).join(', ')}`);
    $('snake-state').textContent=`serpent = [${body.map(p=>`(${p.join(', ')})`).join(', ')}]\nlongueur = ${body.length}`;
    $('snake-status').textContent=message;
  }
  function snakeTick(){const result=A.snakeStep(body,[0,1],apple);if(result.error){snakeOver=true;stopSnake();renderSnake('Mur atteint : déplacement refusé, corps inchangé. Recommence pour une nouvelle observation.');return;}
    body=result.body;lastSnake=result;if(result.grows)apple=null;
    renderSnake(`Ajout : (${result.added.join(', ')}) ; `+(result.removed?`retrait : (${result.removed.join(', ')}). La longueur reste constante.`:'aucun retrait ! La pomme est mangée, la longueur augmente de 1.'));
  }
  $('snake-step').onclick=snakeTick;$('snake-play').onclick=()=>{if(snakeTimer||snakeOver)return;snakeTimer=setInterval(snakeTick,850);$('snake-pause').disabled=false;$('snake-play').disabled=true;$('snake-step').disabled=true;};
  $('snake-pause').onclick=stopSnake;$('snake-reset').onclick=()=>resetSnake();$('snake-apple').onclick=()=>resetSnake(true);resetSnake();

  let towers,selected=null,moves=0;
  const colors=['#0969da','#167346','#8250df','#9a6700','#b43b43'];
  function resetHanoi(){const n=Number($('hanoi-size').value);towers=[Array.from({length:n},(_,i)=>n-i),[],[]];selected=null;moves=0;renderHanoi('Objectif : transférer tous les disques de A vers C. Choisis une tour de départ.');}
  function renderHanoi(message){
    document.querySelectorAll('[data-tower]').forEach((button,i)=>{
      button.replaceChildren(...[...towers[i]].reverse().map(d=>{const span=document.createElement('span');span.className='disk';span.style.width=`${25+d*14}%`;span.style.background=colors[d-1];span.textContent=d;return span;}));
      button.setAttribute('aria-pressed',String(selected===i));button.setAttribute('aria-label',`Tour ${'ABC'[i]}, du bas au sommet : ${towers[i].join(', ')||'vide'}`);
    });
    $('hanoi-count').textContent=`${moves} déplacement${moves>1?'s':''}`;$('hanoi-status').textContent=message;$('hanoi-state').textContent=towers.map((t,i)=>`${'ABC'[i]} = [${t.join(', ')}]`).join('\n')+'\nFin de liste = sommet';
  }
  document.querySelectorAll('[data-tower]').forEach(button=>button.onclick=()=>{
    const to=Number(button.dataset.tower);
    if(towers[2].length===Number($('hanoi-size').value))return;
    if(selected===null){if(!towers[to].length){renderHanoi('Cette tour est vide. Choisis une tour contenant un disque.');return;}selected=to;renderHanoi(`Départ ${'ABC'[to]} sélectionné : choisis l’arrivée.`);return;}
    const from=selected;selected=null;
    if(from===to){renderHanoi('Sélection annulée.');return;}
    if(!A.moveDisk(towers,from,to)){renderHanoi('Déplacement interdit : un grand disque ne peut pas reposer sur un plus petit.');return;}
    moves++;
    renderHanoi(towers[2].length===Number($('hanoi-size').value)?`Bravo ! Puzzle terminé en ${moves} déplacements. Minimum théorique : ${2**Number($('hanoi-size').value)-1}.`:`Disque déplacé de ${'ABC'[from]} vers ${'ABC'[to]}. Choisis le prochain départ.`);
  });
  $('hanoi-size').onchange=resetHanoi;$('hanoi-reset').onclick=resetHanoi;resetHanoi();

  let frames,frameIndex=0,mazeTimer=null;const results={};
  function stopMaze(){clearInterval(mazeTimer);mazeTimer=null;$('maze-pause').disabled=true;$('maze-play').disabled=frames?.[frameIndex].done||false;$('maze-step').disabled=frames?.[frameIndex].done||false;}
  function resetMaze(){stopMaze();frames=A.search(A.maze,$('maze-mode').value);frameIndex=0;$('maze-play').disabled=false;$('maze-step').disabled=false;renderMaze();}
  function renderMaze(){const f=frames[frameIndex],cells=[];
    A.maze.forEach((row,r)=>[...row].forEach((ch,c)=>{
      const p=[r,c],el=document.createElement('span');el.className='cell';el.textContent=ch==='#'?'':ch==='.'?'':ch;
      if(ch==='#')el.classList.add('wall');
      if(f.visited.some(q=>A.same(p,q))){el.classList.add('visited');el.textContent='·';}
      if(f.frontier.some(q=>A.same(p,q))){el.classList.add('frontier');el.textContent='?';}
      if(f.path.some(q=>A.same(p,q))){el.classList.add('path');el.textContent='◆';}
      if(A.same(p,f.current)){el.classList.add('current');el.textContent='@';}
      if(ch==='S')el.textContent='S';if(ch==='E'){el.classList.add('exit');el.textContent='E';}
      el.title=`(${r}, ${c}) ${ch==='#'?'mur':el.textContent}`;cells.push(el);
    }));
    $('maze-board').replaceChildren(...cells);$('maze-board').setAttribute('aria-label',`Labyrinthe, ${f.visited.length} cases explorées ; case courante ${f.current?.join(', ')||'aucune'}.`);
    $('maze-frontier').textContent=`à explorer = [${f.frontier.map(p=>`(${p.join(',')})`).join(', ')}]`;
    $('maze-order').textContent=f.visited.map((p,i)=>`${i+1}: (${p.join(', ')})`).join(' → ')||'Aucune case explorée.';
    $('maze-status').textContent=`${f.visited.length} cases explorées · ${f.frontier.length} en attente. `+(f.done?(f.path.length?`Sortie trouvée ! Chemin : ${f.path.length-1} déplacements.`:'Sortie inaccessible.'):'Prédis la prochaine case retirée.');
    if(f.done){results[$('maze-mode').value]={visits:f.visited.length,length:f.path.length-1};stopMaze();}
    if(results.dfs&&results.bfs)$('maze-comparison').textContent=`Pile : ${results.dfs.visits} cases explorées, chemin de ${results.dfs.length} pas. File : ${results.bfs.visits} cases explorées, chemin de ${results.bfs.length} pas. Compare avant d’ouvrir les indices de l’étape 4.`;
  }
  function mazeTick(){if(frameIndex<frames.length-1)frameIndex++;renderMaze();}
  $('maze-step').onclick=mazeTick;$('maze-play').onclick=()=>{if(mazeTimer)return;mazeTimer=setInterval(mazeTick,400);$('maze-pause').disabled=false;$('maze-play').disabled=true;$('maze-step').disabled=true;};
  $('maze-pause').onclick=stopMaze;$('maze-reset').onclick=resetMaze;$('maze-mode').onchange=resetMaze;resetMaze();
  // Leaving a demonstration or hiding the page pauses all automatic activity.
  function pauseAll(){stopBattle();renderBattle();stopSnake();stopMaze();}
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseAll();});
  window.addEventListener('hashchange',pauseAll);
})();
