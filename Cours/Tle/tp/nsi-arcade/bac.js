'use strict';
// Teacher-authored adaptations: all runtime dependencies remain local.
for (const [id, lesson] of Object.entries(BAC_LESSONS)) {
  STARTERS[id] = lesson.starter;
  TESTS[id] = {unit:[{name:'Résultat et état des structures',code:lesson.unit}],full:[{name:'Vide, doublons et autres cas',code:lesson.full}]};
}
const bacGroup=document.createElement('optgroup');bacGroup.label='🎓 Vers le bac · boucles et transferts';
Object.entries(BAC_LESSONS).forEach(([id,l],i)=>{const o=document.createElement('option');o.value=id;o.textContent=(i+1)+' · '+l.title;bacGroup.append(o);});
document.querySelector('#activity optgroup').after(bacGroup);

// A trace illustrates the intended algorithm. It never pretends to run pupil code.
function bacSnapshots(mode) {
  const states=[],kind={},s={};let count=0;
  const setup=(name,type,values)=>{kind[name]=type;s[name]=values.slice();};
  const snap=(message,x=null)=>states.push({message,x,count,structures:Object.fromEntries(Object.entries(s).map(([k,v])=>[k,v.slice()])),kind:{...kind}});
  const move=(from,to,counting=false)=>{const x=kind[from]==='pile'?s[from].pop():s[from].shift();s[to].push(x);if(counting)count++;snap(`${from} → ${to} : retirer ${JSON.stringify(x)}, puis l’ajouter.`,x);};
  if(mode==='p2p'){setup('P','pile',[6,2,9]);setup('Q','pile',[]);}
  if(mode==='f2p'){setup('F','file',['A','B','C']);setup('P','pile',[]);}
  if(mode==='fsize'){setup('F','file',['Lina','Noe','Zoe']);setup('G','file',[]);}
  if(mode==='psize'){setup('P','pile',[8,3,7]);setup('T','pile',[]);}
  if(mode==='rotate')setup('F','file',['A','B','A','C']);
  if(mode==='former'){setup('F','file',['A','B','C']);setup('T','pile',[]);setup('P','pile',[]);}
  if(mode==='invert'){setup('F','file',['A','B','C']);setup('P','pile',[]);}
  snap(mode==='rotate'?'Départ : n = 4 est mémorisé. On cherche A.':'Départ : repère la sortie de chaque structure.');
  const drain=(from,to,counting=false)=>{while(s[from].length)move(from,to,counting);};
  if(mode==='p2p')drain('P','Q');
  if(mode==='f2p')drain('F','P');
  if(mode==='fsize'){drain('F','G',true);snap('F est vide : fin du comptage. On commence la restauration.');drain('G','F');}
  if(mode==='psize'){drain('P','T',true);snap('P est vide : on restaure P depuis T.');drain('T','P');}
  if(mode==='rotate'){const n=s.F.length;for(let i=0;i<n;i++){const x=s.F.shift();if(x==='A')count++;s.F.push(x);snap(`Tour ${i+1} / ${n} : défiler ${x}, comparer à A, puis réenfiler ${x}.`,x);}}
  if(mode==='former'){drain('F','T');snap('F est vide. Deuxième transfert : T → P.');drain('T','P');}
  if(mode==='invert'){drain('F','P');snap('F est vide. Deuxième transfert : P → F.');drain('P','F');}
  snap(mode==='rotate'?'Arrêt : les 4 tours sont terminés. F n’est pas vide, mais son ordre initial est restauré.':mode==='fsize'||mode==='psize'?'Arrêt : la structure temporaire est vide ; la structure initiale est restaurée.':'Arrêt : la source de la dernière boucle est vide.');
  return states;
}

function appendBacTrace(box, mode) {
  const d=document.createElement('details');d.className='bac-trace';
  d.innerHTML='<summary>🔎 Vérifier ma trace, un tour à la fois</summary><p>Prévois d’abord sur papier : tour, valeur retirée, structures après le tour. Cette démonstration illustre l’algorithme attendu ; elle ne lit pas ton code.</p><div class="bac-trace-state" aria-live="polite"></div><div class="toolbar"><button type="button" data-trace="reset">Recommencer</button><button type="button" data-trace="prev">← Revenir</button><button type="button" data-trace="next">Tour suivant →</button></div>';
  const states=bacSnapshots(mode);let step=0;const state=d.querySelector('.bac-trace-state');
  const render=()=>{const frame=states[step];state.replaceChildren();const msg=document.createElement('p');msg.textContent=`Étape de trace ${step} / ${states.length-1} · ${frame.message}`;state.append(msg);
    if(frame.x!==null){const p=document.createElement('p');p.textContent='Valeur retirée pendant ce tour : '+JSON.stringify(frame.x);state.append(p);}
    for(const [name,values] of Object.entries(frame.structures)){const row=document.createElement('div');row.className='bac-structure';const label=document.createElement('strong');label.textContent=name+' · '+(frame.kind[name]==='pile'?'bas → sommet (à droite)':'sortie (à gauche) → entrée');row.append(label);const tokens=document.createElement('div');tokens.className='bac-tokens';
      if(!values.length)tokens.textContent='∅ vide';values.forEach((v,i)=>{const e=document.createElement('span');e.textContent=v;e.className=(frame.kind[name]==='pile'?i===values.length-1:i===0)?'bac-exit':'';tokens.append(e);});row.append(tokens);state.append(row);}
    if(['rotate','fsize','psize'].includes(mode)){const p=document.createElement('p');p.textContent=(mode==='rotate'?'Occurrences de A : ':'Compteur : ')+frame.count;state.append(p);}
    d.querySelector('[data-trace=prev]').disabled=step===0;d.querySelector('[data-trace=next]').disabled=step===states.length-1;
  };
  d.querySelector('[data-trace=reset]').onclick=()=>{step=0;render();};
  d.querySelector('[data-trace=prev]').onclick=()=>{if(step>0)step--;render();};
  d.querySelector('[data-trace=next]').onclick=()=>{if(step<states.length-1)step++;render();};
  render();box.append(d);
}

function showBac(id) {
  const lesson=BAC_LESSONS[id],box=document.getElementById('bac-lesson');box.hidden=!lesson;
  if(!lesson)return;
  document.getElementById('intro-entry').hidden=true;
  document.getElementById('unit').textContent='✓ Vérifier cet exercice';document.getElementById('full').textContent='Tester les cas particuliers';
  const ids=Object.keys(BAC_LESSONS),i=ids.indexOf(id);
  box.innerHTML='<p class="small">TP2 · Vers le bac · '+(i+1)+' / '+ids.length+' · '+lesson.stage+'</p><h2>'+lesson.title+'</h2><p><strong>Objectif : </strong>'+lesson.goal+'</p><p>1. Trace sur papier → 2. Complète ou écris → 3. Teste → 4. Explique l’arrêt et l’ordre final.</p>'+lesson.text;
  const source=document.createElement('p');source.className='small';source.textContent=lesson.reference+' ';const a=document.createElement('a');a.href=lesson.url;a.target='_blank';a.rel='noopener';a.textContent='Sujet officiel (PDF, connexion nécessaire)';source.append(a);box.append(source);
  const api=document.createElement('details');api.innerHTML='<summary>🧰 Fonctions disponibles · sans classes</summary><p>Une <strong>interface</strong> décrit les opérations utilisables. Tu les appelles comme des fonctions : <code>empiler(P, valeur)</code>, jamais <code>P.empiler(valeur)</code>.</p><ul><li><code>creer_pile_vide()</code> et <code>creer_file_vide()</code> créent des structures vides.</li><li><code>est_vide(S)</code> renvoie un booléen, sans retirer d’élément.</li><li><code>empiler(P, x)</code> ajoute au sommet ; <code>depiler(P)</code> retire et renvoie le sommet.</li><li><code>enfiler(F, x)</code> ajoute à la fin ; <code>defiler(F)</code> retire et renvoie le premier élément.</li></ul><p>Dans tes fonctions à compléter, utilise seulement cette interface pour manipuler les structures. Pas de <code>len(P)</code>, <code>pop</code>, <code>append</code>, d’indices, de découpage ni de parcours direct <code>for x in P</code>. Les listes ne servent ici qu’à réaliser les outils fournis et à afficher les essais. Les tests peuvent aussi utiliser des listes pour comparer les résultats.</p><p><strong>Avant un retrait, la structure doit être non vide.</strong> La condition de boucle le garantit. Contrairement à l’introduction, les outils de ce parcours ne renvoient pas None à vide : un retrait invalide déclenche IndexError.</p><p>Les outils Python sont fournis en bas du fichier et repliés dans l’éditeur. Ils sont inclus dans ton export .py. Ne les modifie pas. Les tests vérifient le résultat ; vérifie aussi sur ta copie le respect de l’interface.</p>';
  box.append(api);
  const method=document.createElement('details');method.innerHTML='<summary>💡 Choisir entre while et for</summary><p><code>while not est_vide(source):</code> convient si chaque tour réduit le contenu de la source, sans y remettre d’élément. On termine quand elle est vide.</p><p><code>for tour in range(n):</code> convient pour traiter un nombre connu d’éléments, notamment si on les remet dans la même file. On termine après n tours.</p><p>Attention aux sources et destinations : un retrait peut vider une structure, l’ajout doit utiliser exactement la valeur retirée. Place le <code>return</code> après les transferts, pas dans la boucle.</p>';box.append(method);
  lesson.hints.forEach((hint,n)=>{const d=document.createElement('details');const s=document.createElement('summary');s.textContent='💡 Indice '+(n+1);const p=document.createElement('p');p.textContent=hint;d.append(s,p);box.append(d);});
  appendBacTrace(box,lesson.mode);
  const expected=document.createElement('details');expected.innerHTML='<summary>👀 Résultat attendu après résolution</summary>';const pre=document.createElement('pre');pre.textContent=lesson.expected;expected.append(pre);box.append(expected);
  const nav=document.createElement('nav');nav.className='toolbar';nav.setAttribute('aria-label','Entraînements vers le bac');
  const prev=document.createElement('a');prev.href='?activite='+(i?ids[i-1]:'debut10');prev.textContent=i?'← Exercice précédent':'← Revenir à l’introduction';nav.append(prev);
  if(i<ids.length-1){const next=document.createElement('a');next.href='?activite='+ids[i+1];next.textContent='Exercice suivant →';nav.append(next);}else{const next=document.createElement('a');next.href='index.html#parcours';next.textContent='Choisir la suite avec le professeur →';nav.append(next);}
  box.append(nav);
  document.getElementById('activity-note').textContent='Travaille dans la fonction du haut. Les outils sont fournis en bas. Remplace les ... et les conditions indiquées ; explique ensuite sur papier pourquoi la boucle s’arrête. Les tests sont une aide, pas une note.';
  if(window.ace){const editor=ace.edit('editor'),lines=editor.session.getDocument().getAllLines();const start=lines.findIndex(l=>l.startsWith('# === Fonctions fournies')),end=lines.findIndex(l=>l.startsWith('# === Fin des fonctions fournies'));
    if(start>=0&&end>start){const Range=ace.require('ace/range').Range;editor.session.addFold(' Outils fournis — cliquer pour déplier ',new Range(start,lines[start].length,end,lines[end].length));}
  }
}
