'use strict';
(() => {
  const el = id => document.getElementById(id);
  let towers, moves;
  const names = ['A','B','C'];
  function drawTowers() {
    el('hanoi-towers').replaceChildren();
    towers.forEach((pile,i) => {
      const column = document.createElement('div'); column.className='s01-tower';
      const title=document.createElement('strong');title.textContent=names[i]; column.append(title);
      const discs=document.createElement('div'); discs.className='s01-discs';
      [...pile].reverse().forEach(value=>{const d=document.createElement('span');d.className='s01-disc';d.style.width=`${30+value*13}%`;d.textContent=value;discs.append(d);});
      if(!pile.length) discs.textContent='vide';column.append(discs);el('hanoi-towers').append(column);
    });
    el('hanoi-state').textContent=names.map((n,i)=>`${n} = [${towers[i].join(', ')}]`).join(' · ')+' · sommet à droite';
  }
  function resetHanoi(){towers=[[5,4,3,2,1],[],[]];moves=0;drawTowers();el('hanoi-message').textContent='Transfère les cinq disques de A vers C.';setCode('hanoi-trace','A = [5, 4, 3, 2, 1]  # sommet à droite\nB = []\nC = []');}
  el('hanoi-move').addEventListener('click',()=>{
    const from=names.indexOf(el('hanoi-from').value),to=names.indexOf(el('hanoi-to').value),source=towers[from],destination=towers[to];
    if(from===to){el('hanoi-message').textContent='Choisis deux tiges différentes. Aucun disque déplacé.';return;}
    if(!source.length){el('hanoi-message').textContent='Pile de départ vide : impossible de dépiler. Aucun disque déplacé.';return;}
    if(destination.length && source.at(-1)>destination.at(-1)){el('hanoi-message').textContent='Interdit à Hanoï : un grand disque ne va pas sur un plus petit. Piles inchangées.';return;}
    const disc=source.pop();destination.push(disc);moves++;drawTowers();
    setCode('hanoi-trace',`disque = ${names[from]}.pop()  # renvoie ${disc}\n${names[to]}.append(disque)\n# `+names.map((n,i)=>`${n} = [${towers[i].join(', ')}]`).join('\n# '));
    el('hanoi-message').textContent=`Disque ${disc} : ${names[from]} → ${names[to]}. ${moves} déplacement(s).`+(towers[2].length===5?' Bravo, les cinq disques sont sur C !':'');
  });
  el('hanoi-reset').addEventListener('click',resetHanoi);resetHanoi();
  let queue=[],serial=0;
  function drawQueue(){el('job-queue').replaceChildren();queue.forEach(job=>{const card=document.createElement('span');card.textContent=job;el('job-queue').append(card);});if(!queue.length)el('job-queue').textContent='File vide';el('job-add').disabled=queue.length>=8;}
  el('job-add').addEventListener('click',()=>{if(queue.length>=8)return;const job=`${el('job-kind').value} #${++serial}`;queue.push(job);drawQueue();setCode('job-trace',`F.append(${JSON.stringify(job)})  # enqueue\n# F : ${JSON.stringify(queue)}\n# taille(F) = ${queue.length}`);el('job-message').textContent=`${job} ajouté à l’entrée. Taille : ${queue.length}.`+(queue.length===8?' Limite visuelle de 8 travaux atteinte.':'');});
  el('job-remove').addEventListener('click',()=>{if(!queue.length){el('job-message').textContent='File vide : estVide(F) vaut True. Aucun défilement possible.';return;}const job=queue.shift();drawQueue();setCode('job-trace',`prochain = F.popleft()  # dequeue renvoie ${JSON.stringify(job)}\n# F : ${JSON.stringify(queue)}\n# taille(F) = ${queue.length}`);el('job-message').textContent=`Sortie : ${job}. Taille restante : ${queue.length}. Simulation uniquement.`;});
  el('job-reset').addEventListener('click',()=>{queue=[];serial=0;drawQueue();setCode('job-trace','from collections import deque\nF = deque()');el('job-message').textContent='La file est vide : estVide(F) vaut True.';});drawQueue();
  let pancakes=[5,9,3,6];
  function drawPancakes(){el('pancake-stack').replaceChildren();[...pancakes].reverse().forEach(v=>{const d=document.createElement('span');d.className='s01-disc';d.style.width=`${v*10}%`;d.textContent=v;el('pancake-stack').append(d);});el('pancake-state').textContent=`P = [${pancakes.join(', ')}] · bas → sommet`;}drawPancakes();
  el('pancake-flip').addEventListener('click',()=>{const j=+el('pancake-count').value;pancakes=pancakes.slice(0,-j).concat(pancakes.slice(-j).reverse());drawPancakes();const sorted=pancakes.every((v,i)=>i===0||pancakes[i-1]>=v);el('pancake-message').textContent=`retourner(P, ${j}) : les ${j} disque(s) du sommet sont inversés.`+(sorted?' Tri réussi : le plus grand est en bas !':'');});
  el('pancake-reset').addEventListener('click',()=>{pancakes=[5,9,3,6];drawPancakes();el('pancake-message').textContent='Trouve le plus grand disque, puis amène-le en bas en deux retournements.';});
})();
