(() => {
 'use strict';const $=id=>document.getElementById(id);let state=PyLand.create(),timer=null;
 function stop(){clearInterval(timer);timer=null;$('park-pause').disabled=true;}
 function render(){
  $('park-queue').replaceChildren();state.queue.slice(0,12).forEach(v=>{const card=document.createElement('span');card.className='park-person';card.textContent=`${v.name} · ${v.satisfaction}/100`;const small=document.createElement('small');small.textContent=`attend ${state.time-v.arrival} min`;card.append(small);$('park-queue').append(card);});
  $('park-tail').textContent=`${state.queue.length} visiteur(s) en attente.`+(state.queue.length>12?` ${state.queue.length-12} autres après les 12 affichés.`:'');
  $('park-riders').textContent=state.last.length?state.last.map(v=>`${v.name} : attente ${v.wait} min, satisfaction ${v.satisfaction}/100`).join('\n'):'Aucun retour pour le moment.';
  const stats=PyLand.stats(state);$('park-stats').textContent=`Tour ${state.turn}/30 · horloge ${state.time} min · ${state.exited.length} sorties au total\nÉchantillon : ${stats.n}/20 premiers visiteurs sortis\nAttente moyenne : ${stats.wait===null?'—':stats.wait.toFixed(1)+' min'} · satisfaction moyenne : ${stats.satisfaction===null?'—':stats.satisfaction.toFixed(1)+'/100'}${stats.n<20?' (provisoire)':''}`;
  $('park-status').textContent=state.log+(state.turn===30?' Limite de 30 tours atteinte. Recommence pour comparer.':'');
  $('park-step').disabled=!!timer||state.turn>=30;$('park-play').disabled=!!timer||state.turn>=30;$('park-pause').disabled=!timer;
  $('park-capacity').disabled=state.turn>0;$('park-mascot').disabled=state.turn>0;
 }
 function tick(){state=PyLand.step(state,+$('park-capacity').value,+$('park-mascot').value);if(state.turn>=30)stop();render();}
 $('park-step').onclick=tick;$('park-play').onclick=()=>{if(timer||state.turn>=30)return;timer=setInterval(tick,1000);render();};$('park-pause').onclick=()=>{stop();render();};$('park-reset').onclick=()=>{stop();state=PyLand.create();render();};
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();render();}});render();
})();
