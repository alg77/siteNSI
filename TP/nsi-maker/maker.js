'use strict';
const $ = id => document.getElementById(id);
const escapeHTML = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
// One token pass: markup is never re-parsed as source code.
function highlight(code) {
  const pattern = /(#.*|\/\/.*)|("[^"\n]*"|'[^'\n]*')|\b(import|try|except|as|with|for|in|if|pass|range|len|print|open|difference|translate|cylinder|cube)\b|\b(\d+(?:\.\d+)?)\b/g;
  const source = code.textContent;
  let result = '', end = 0;
  for (const match of source.matchAll(pattern)) {
    result += escapeHTML(source.slice(end, match.index));
    const kind = match[1] ? 'comment' : match[2] ? 'string' : match[3] ? 'keyword' : 'number';
    result += `<span class="tok-${kind}">${escapeHTML(match[0])}</span>`;
    end = match.index + match[0].length;
  }
  code.innerHTML = result + escapeHTML(source.slice(end));
}
function setCode(id, text) { $(id).textContent = text; highlight($(id)); }
function download(name, text) {
  const url = URL.createObjectURL(new Blob([text], {type:'text/plain;charset=utf-8'}));
  const a = document.createElement('a'); a.href = url; a.download = name;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const stages = [
  ['💡 Idée', 'Définir le besoin : un jeu manipulable, avec des disques percés qui glissent sur trois tiges.'],
  ['📐 Modèle 3D', 'Décrire la forme et ses dimensions. Avec OpenSCAD, cette description est un programme paramétrique.'],
  ['📦 STL / 3MF', 'Exporter un modèle échangeable. Le STL décrit la surface par des triangles ; le 3MF peut transporter davantage d’informations.'],
  ['🍕 Slicer', 'Bambu Studio découpe virtuellement le modèle en couches selon le profil choisi.'],
  ['🧵 Trajectoires', 'Le tranchage prépare les mouvements de la buse, les dépôts de filament et les autres instructions machine.'],
  ['🖨️ Impression', 'Après validation par l’enseignant, la P1S exécute les instructions et dépose les couches.'],
  ['✨ Objet', 'Après refroidissement et retrait autorisé, vérifier les dimensions et tester le fonctionnement.']
];
stages.forEach(([title, description], i) => {
  const button = document.createElement('button'); button.textContent = title;
  button.setAttribute('aria-pressed', String(i === 0));
  button.addEventListener('click', () => {
    $('steps').querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    $('step-info').textContent = description;
  }); $('steps').append(button);
});
$('step-info').textContent = stages[0][1];
function renderLayers() {
  const n = Number($('layer').value); $('layer-value').textContent = n;
  let svg = '<path d="M35 183H280" stroke="#728777" stroke-width="5"/>';
  for (let i=0;i<n;i++) svg += `<rect x="80" y="${179-i*2.7}" width="160" height="2.2" rx="1" fill="${i===n-1?'#d68451':'#55836a'}"/>`;
  svg += `<path d="M145 ${158-n*2.7}h30l-10 16h-10Z" fill="#384e40"/><text x="160" y="210" text-anchor="middle" fill="#3c5846" font-size="13">${n} couches · ${(n*.2).toFixed(1)} mm</text>`;
  $('layers').innerHTML = svg;
  $('layers').setAttribute('aria-label', `${n} couches déposées, hauteur ${(n*.2).toFixed(1)} mm`);
}
let timer;
function stopAnimation() { clearInterval(timer); timer = null; $('animate').textContent = '▶ Construire'; }
$('layer').addEventListener('input', () => {stopAnimation(); renderLayers();});
$('animate').addEventListener('click', () => {
  if (timer) {stopAnimation(); return;}
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { $('layer').value = 50; renderLayers(); return; }
  $('layer').value = 1; renderLayers(); $('animate').textContent = 'Ⅱ Pause';
  timer = setInterval(() => { $('layer').value = Number($('layer').value)+1; renderLayers(); if (+$('layer').value===50) stopAnimation(); }, 110);
});
document.addEventListener('visibilitychange', () => {if (document.hidden) stopAnimation();});
renderLayers();
function ring(d, h, hole) {
  const r=d*1.25, ry=r*.43, depth=h*3, x=160, y=105;
  return `<ellipse cx="${x}" cy="${y+depth}" rx="${r}" ry="${ry}" fill="#3f694f"/><rect x="${x-r}" y="${y}" width="${r*2}" height="${depth}" fill="#3f694f"/><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${ry}" fill="#99bb85"/><ellipse cx="${x}" cy="${y}" rx="${hole*1.25}" ry="${hole*.54}" fill="#344e3d"/><text x="160" y="200" text-anchor="middle" font-size="13" fill="#365340">Ø ${d} mm · h ${h} mm · trou Ø ${hole} mm</text>`;
}
const shapes = {
  cube:['cube([30, 30, 10]);', 'Un pavé de 30 × 30 × 10 mm : dimensions selon x, y et z.', '<path d="M65 85 180 55 250 95 135 130Z" fill="#a6c593"/><path d="M65 85v50l70 45v-50Z" fill="#688e69"/><path d="M135 130v50l115-35V95Z" fill="#426e52"/>'],
  cylinder:['cylinder(h=10, d=30);','h fixe la hauteur, d le diamètre. Le cylindre est centré sur l’axe z et part de z = 0.',ring(60,10,0)],
  translate:['translate([40, 0, 0])\n    cylinder(h=10, d=30);','translate déplace la forme suivante de 40 mm sur x. Sa taille ne change pas.','<path d="M30 150h90" stroke="#c66438" stroke-width="3"/><text x="30" y="175" font-size="13">x : +40 mm →</text><g transform="translate(60 -10)">'+ring(45,10,0)+'</g>'],
  difference:['difference() {\n    cylinder(h=6, d=50);\n    cylinder(h=8, d=10);\n}','On conserve le grand cylindre et on retire le petit. Pour un export robuste, fais dépasser la forme retirée des deux côtés (activité suivante).',ring(70,6,10)]
};
function showShape(name) {
  const [code,info,svg] = shapes[name]; setCode('shape-code',code); $('shape-info').textContent = info;
  // Geometry illustration dimensions are independent of the code's scale.
  $('shape-svg').innerHTML = svg.replace(/<text[\s\S]*?<\/text>/g, text => text.includes('x :') ? text : '');
  $('shape-buttons').querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.shape===name)));
}
$('shape-buttons').addEventListener('click', e => { if(e.target.dataset.shape) showShape(e.target.dataset.shape); });
showShape('cube');
function diskCode() {
  return `diametre = ${$('diameter').value};\nepaisseur = ${$('thickness').value};\ndiametre_trou = ${$('hole').value};\n$fn = 96; // finesse du contour\n\ndifference() {\n    cylinder(h=epaisseur, d=diametre);\n    translate([0, 0, -1])\n        cylinder(h=epaisseur + 2, d=diametre_trou);\n}`;
}
function updateDisk() {
  ['diameter','thickness','hole'].forEach(id => $(id+'-value').textContent = $(id).value);
  setCode('disk-code',diskCode());
  $('disk-svg').innerHTML = ring(+$('diameter').value,+$('thickness').value,+$('hole').value);
  $('disk-svg').setAttribute('aria-label',`Disque de diamètre ${$('diameter').value}, épaisseur ${$('thickness').value}, trou ${$('hole').value} millimètres`);
}
$('disk-controls').addEventListener('input',updateDisk); updateDisk();
$('download-scad').addEventListener('click', () => download('disque.scad',diskCode()));
const solution = `nb_disques = 5
diametre_min = 30
pas = 8
epaisseur = 6
trou = 10
espacement = 10

diametre_max = diametre_min + (nb_disques - 1) * pas
elements = []
for i in range(nb_disques):
    diametre = diametre_min + i * pas
    x = i * (diametre_max + espacement)
    disque = f'''
difference() {{
    cylinder(h={epaisseur}, d={diametre}, $fn=96);
    translate([0, 0, -1])
        cylinder(h={epaisseur + 2}, d={trou}, $fn=96);
}}
'''
    elements.append(f"translate([{x}, 0, 0])\\n" + disque)
    # Une pièce par fichier pour organiser les plateaux ensuite.
    with open(f"disque_{i + 1}.scad", "w", encoding="utf-8") as fichier:
        fichier.write(disque)

with open("hanoi.scad", "w", encoding="utf-8") as fichier:
    fichier.write("\\n".join(elements))`;
const hints = ['Les disques doivent être décalés pour ne pas se chevaucher. Il faut tenir compte de leur diamètre, pas seulement du trou.', 'La position dépend de i. Calcule d’abord le diamètre maximal : diametre_min + (nb_disques - 1) * pas.', 'Une possibilité : x = i * (diametre_max + espacement). Utilise translate([x, 0, 0]) avant chaque disque et assemble les chaînes.'];
let hintCount = 0;
$('hint').addEventListener('click', () => {
  if(hintCount>=3) return;
  const p = document.createElement('p'); p.className='callout'; p.textContent=`💡 Indice ${hintCount+1} — ${hints[hintCount++]}`; $('hints').append(p);
  $('hint').textContent=hintCount<3?`💡 Afficher l’indice ${hintCount+1} / 3`:'Les 3 indices sont affichés';
  $('hint').disabled=hintCount===3; $('show-solution').disabled=hintCount<3;
});
$('show-solution').addEventListener('click', () => {
  if(hintCount<3) return;
  const show=$('solution').hidden; $('solution').hidden=!show;
  if(show) setCode('solution-code',solution);
  $('show-solution').setAttribute('aria-expanded',String(show)); $('show-solution').textContent=show?'Masquer la correction':'Voir la correction';
});
$('download-python').addEventListener('click',()=>download('hanoi.py',solution));
['#########','#S......#','#.###.#.#','#...#.#E#','#########'].forEach(row=>{
  [...row].forEach(c=>{const cell=document.createElement('span'); if(c==='#')cell.className='wall'; cell.textContent='SE'.includes(c)?c:''; $('maze').append(cell);});
});
const questions=[
  ['Quel fichier contient notre modèle paramétrique OpenSCAD ?',['STL','SCAD','JPG','GCODE'],1,'Le SCAD conserve la description géométrique paramétrique ; le STL en conserve le maillage.'],
  ['Quel logiciel prépare le modèle pour la P1S ?',['Python','OpenSCAD','Bambu Studio','Le navigateur'],2,'Bambu Studio choisit les trajectoires et prépare l’impression à partir du modèle et des profils.'],
  ['Pourquoi prévoir un jeu entre tige et trou ?',['Pour changer la couleur','Pour compenser les écarts réels de fabrication','Pour accélérer Python'],1,'Les dimensions imprimées peuvent différer des dimensions théoriques. Une pièce test permet de choisir le jeu.'],
  ['Dans notre export automatique, qui calcule le maillage STL ?',['Python seul','L’AMS','OpenSCAD lancé par Python'],2,'subprocess lance OpenSCAD, qui effectue le rendu et l’export.'],
  ['Quel est le rôle de l’AMS ?',['Gérer plusieurs bobines','Dessiner le modèle','Remplacer le plateau'],0,'L’AMS alimente l’imprimante et automatise les changements de filament compatibles.'],
  ['Que se passe-t-il si nb_disques passe de 5 à 8 ?',['La boucle génère huit disques','Il faut redessiner chaque disque','Le STL devient un programme Python'],0,'La géométrie est générée par une règle ; vérifie encore le placement et les contraintes de fabrication.'],
  ['Un fichier 3MF contient-il toujours tous les réglages Bambu Studio ?',['Oui, obligatoirement','Non, cela dépend de l’outil et du workflow'],1,'Le format peut contenir des informations enrichies, sans garantir que tous les producteurs les écrivent.'],
  ['Avant une longue impression, que faire ?',['Lancer seul sans vérification','Toucher la buse pour tester','Faire valider le modèle et imprimer un petit test autorisé'],2,'L’enseignant valide l’impression ; le test limite les échecs et le gaspillage.']
];
questions.forEach(([question,answers],i)=>{
  const field=document.createElement('fieldset'); const legend=document.createElement('legend'); legend.textContent=`${i+1}. ${question}`; field.append(legend);
  answers.forEach((answer,j)=>{const label=document.createElement('label');const radio=document.createElement('input');radio.type='radio';radio.name=`q${i}`;radio.value=j;label.append(radio,document.createTextNode(answer));field.append(label);});
  const feedback=document.createElement('p'); feedback.id=`feedback-${i}`;feedback.className='feedback';field.append(feedback);$('questions').append(field);
});
$('quiz-form').addEventListener('submit',e=>{
  e.preventDefault();let score=0,missing=0;const data=new FormData(e.target);
  questions.forEach(([,answers,correct,explanation],i)=>{
    const value=data.get(`q${i}`), ok=value!==null && +value===correct;if(ok)score++;if(value===null)missing++;
    const feedback=$(`feedback-${i}`); feedback.className=`feedback ${ok?'correct':'incorrect'}`;
    feedback.textContent=`${ok?'✓ Correct.':value===null?'À compléter.':'↳ Bonne réponse : '+answers[correct]+'.'} ${explanation}`;
  });
  $('score').textContent=`${score} / ${questions.length} — ${missing?`${missing} question(s) sans réponse. `:''}${score===8?'Prêt à concevoir ton projet !':'Relis les explications, puis essaie à nouveau.'}`; $('score').focus();
});
$('quiz-form').addEventListener('reset',()=>{document.querySelectorAll('.feedback').forEach(p=>p.textContent='');$('score').textContent='';});
document.querySelectorAll('pre').forEach(pre=>{
  const code=pre.querySelector('code');highlight(code);
  const button=document.createElement('button');button.type='button';button.className='copy';button.textContent='Copier';button.setAttribute('aria-label',`Copier le code ${pre.dataset.lang}`);
  button.addEventListener('click',async()=>{
    try {
      if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(code.textContent);
      else {const text=document.createElement('textarea');text.value=code.textContent;text.style.position='fixed';text.style.opacity='0';document.body.append(text);text.select();let ok;try{ok=document.execCommand('copy');}finally{text.remove();button.focus();}if(!ok)throw new Error('copy');}
      button.textContent='Copié ✓';
    }catch {button.textContent='Sélectionne le code';const range=document.createRange();range.selectNodeContents(code);getSelection().removeAllRanges();getSelection().addRange(range);}
    setTimeout(()=>button.textContent='Copier',2500);
  });pre.append(button);
});
const navLinks=[...document.querySelectorAll('nav a')];
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;$('progress').style.width=`${max>0?Math.min(100,scrollY/max*100):0}%`;let current;navLinks.forEach(link=>{if(document.querySelector(link.hash).getBoundingClientRect().top<=150)current=link;});navLinks.forEach(link=>{link.classList.toggle('active',link===current);if(link===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
