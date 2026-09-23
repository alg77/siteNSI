(() => {
 'use strict';
 for(const mode of ['pile','file']){
  const box=document.getElementById(`demo-${mode}`);if(!box)continue;
  let values=[1,2,3],next=4;
  const view=box.querySelector('.sd-items'),status=box.querySelector('[role=status]');
  function draw(){view.replaceChildren();const shown=mode==='pile'?[...values].reverse():values;shown.forEach(n=>{const item=document.createElement('span');item.className=mode==='pile'?'sd-plate':'sd-person';item.textContent=mode==='pile'?`Assiette ${n}`:`🚶 V${n}`;view.append(item);});if(!values.length)view.textContent='Vide';box.querySelector('.sd-state').textContent=`${mode==='pile'?'P':'F'} = [${values.join(', ')}] · taille = ${values.length} · estVide = ${!values.length?'True':'False'}`;box.querySelector('[data-action=add]').disabled=values.length>=6;}
  box.querySelector('[data-action=add]').onclick=()=>{if(values.length>=6)return;const n=next++;values.push(n);draw();status.textContent=`${mode==='pile'?'Empiler au sommet':'Enfiler à l’entrée'} : ${n}. ${mode==='pile'?'Ce sera le prochain élément retiré (LIFO).':'Il sortira après les personnes déjà présentes (FIFO).'}`;};
  box.querySelector('[data-action=remove]').onclick=()=>{if(!values.length){status.textContent='Structure vide : aucun retrait possible. Vérifie estVide avant de retirer.';return;}const n=mode==='pile'?values.pop():values.shift();draw();status.textContent=`${mode==='pile'?'Dépiler':'Défiler'} renvoie ${n} et le retire. ${mode==='pile'?'Dernier entré, premier sorti.':'Premier entré, premier sorti.'}`;};
  box.querySelector('[data-action=reset]').onclick=()=>{values=[1,2,3];next=4;draw();status.textContent='1, puis 2, puis 3 ont été ajoutés. Prédis le prochain retrait.';};draw();
 }
})();
