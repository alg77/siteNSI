/* Deterministic educational model, independent of the DOM. */
(function(root){
  'use strict';
  const clamp=x=>Math.max(0,Math.min(100,x));
  function create(){return {time:0,turn:0,next:5,queue:[1,2,3,4].map(i=>({name:`V${i}`,arrival:0,satisfaction:75})),exited:[],last:[],log:'Quatre visiteurs sont arrivés à t = 0.'};}
  function step(previous,capacity=2,mascot=0){
    if(![1,2,4].includes(capacity)||![0,2,4].includes(mascot))throw new RangeError('Invalid settings');
    if(previous.turn>=30)return previous;
    const s=JSON.parse(JSON.stringify(previous)),start=s.time;
    const riders=s.queue.splice(0,capacity).map(v=>({...v,wait:start-v.arrival,satisfaction:clamp(v.satisfaction+10),exit:start+2}));
    const count=[3,1,5,2,4][s.turn%5];
    for(let i=0;i<count;i++){const id=s.next++;s.queue.push({name:`V${id}`,arrival:start,satisfaction:50+(id*17)%51});}
    s.queue.forEach(v=>v.satisfaction=clamp(v.satisfaction-5));
    s.time+=2;s.turn++;
    const visit=mascot>0&&s.turn%mascot===0;
    if(visit)s.queue.forEach(v=>v.satisfaction=clamp(v.satisfaction+10));
    s.last=riders;s.exited.push(...riders);
    s.log=`Départ à ${start} min : ${riders.map(v=>v.name).join(', ')||'personne'}. Puis ${count} arrivée(s). Attente : −5 points. Retour à ${s.time} min : ${riders.length} sortie(s), +10 points à chacun.`+(visit?' Mascotte : +10 points aux visiteurs encore dans la file.':'');
    return s;
  }
  function stats(s){const sample=s.exited.slice(0,20);return {n:sample.length,wait:sample.length?sample.reduce((a,v)=>a+v.wait,0)/sample.length:null,satisfaction:sample.length?sample.reduce((a,v)=>a+v.satisfaction,0)/sample.length:null};}
  const api={create,step,stats};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.PyLand=api;
})(typeof window==='undefined'?globalThis:window);
