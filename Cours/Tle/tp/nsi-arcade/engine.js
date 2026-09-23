/* Pure simulation rules, shared by the page and the Node tests. */
(function (root) {
  'use strict';
  const key = p => p.join(',');
  const same = (a, b) => !!a && !!b && a[0] === b[0] && a[1] === b[1];
  const maze = ['###########', '#S..#.....#', '#.#.#.###.#', '#.#...#...#', '#.#####.#E#', '#.........#', '###########'];
  function neighbors(grid, [r, c]) {
    return [[r-1,c],[r,c-1],[r+1,c],[r,c+1]].filter(([y,x]) => grid[y]?.[x] && grid[y][x] !== '#');
  }
  function search(grid, mode) {
    if (!['dfs','bfs'].includes(mode)) throw new Error('Unknown search mode');
    let start, end;
    grid.forEach((row,r) => [...row].forEach((v,c) => { if(v==='S') start=[r,c]; if(v==='E') end=[r,c]; }));
    if (!start || !end) throw new Error('Missing start or exit');
    const frontier=[start], discovered=new Set([key(start)]), visited=[], parents=new Map(), frames=[];
    const frame = (current, path=[], done=false) => ({current, frontier:frontier.map(p=>[...p]), visited:visited.map(p=>[...p]), path, done});
    frames.push(frame(null));
    while(frontier.length) {
      const p=mode==='bfs'?frontier.shift():frontier.pop();
      visited.push(p);
      if(same(p,end)) {
        const path=[];
        for(let q=p;q;q=parents.get(key(q))) path.unshift(q);
        frames.push(frame(p,path,true)); return frames;
      }
      for(const q of neighbors(grid,p)) if(!discovered.has(key(q))) {
        discovered.add(key(q)); parents.set(key(q),p); frontier.push(q);
      }
      frames.push(frame(p));
    }
    frames.push(frame(null,[],true)); return frames;
  }
  function moveDisk(towers, from, to) {
    if(from===to || !towers[from]?.length || !towers[to]) return false;
    const disk=towers[from].at(-1), top=towers[to].at(-1);
    if(top!==undefined && disk>top) return false;
    towers[to].push(towers[from].pop()); return true;
  }
  function snakeStep(body, direction, apple, size=10) {
    const head=body.at(-1), next=[head[0]+direction[0],head[1]+direction[1]], grows=same(next,apple);
    const occupied=grows?body:body.slice(1);
    if(next.some(v=>v<0 || v>=size)) return {body, error:'mur'};
    if(occupied.some(p=>same(p,next))) return {body,error:'corps'};
    return {body:[...(grows?body:body.slice(1)),next], added:next, removed:grows?null:body[0], grows};
  }
  function deck(random=Math.random) {
    const cards=[];
    for(const suit of ['♠','♥','♦','♣']) for(let value=2;value<=14;value++) cards.push({value,suit});
    for(let i=cards.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [cards[i],cards[j]]=[cards[j],cards[i]]; }
    return {a:cards.slice(0,26),b:cards.slice(26),pot:[],turn:0,done:false};
  }
  // One click = one face-up comparison. On a tie, each player stakes one face-down card.
  function battleStep(state) {
    if(state.done) return state;
    const s={...state,a:[...state.a],b:[...state.b],pot:[...state.pot],turn:state.turn+1};
    const settle = winner => {s[winner].push(...s.pot);s.pot=[];s.done=true;s.message=`${winner==='a'?'Alice':'Bob'} gagne la partie.`;return s;};
    if(!s.a.length || !s.b.length) {
      if(!s.a.length && !s.b.length) {s.done=true;s.message='Match nul : les deux files sont vides. Les cartes engagées restent au centre.';return s;}
      return settle(s.a.length?'a':'b');
    }
    s.played=[s.a.shift(),s.b.shift()];s.pot.push(...s.played);
    if(s.played[0].value===s.played[1].value) {
      if(s.a.length<2 || s.b.length<2) {
        if(s.a.length===s.b.length) {s.done=true;s.message='Match nul : aucun joueur ne peut poursuivre la bataille.';return s;}
        return settle(s.a.length>s.b.length?'a':'b');
      }
      s.pot.push(s.a.shift(),s.b.shift());
      s.message='Égalité ! Une carte cachée chacun. Cliquez pour comparer les suivantes.';
    } else {
      const winner=s.played[0].value>s.played[1].value?'a':'b';
      s[winner].push(...s.pot);s.pot=[];
      s.message=`${winner==='a'?'Alice':'Bob'} remporte le pli : les cartes sont ajoutées en fin de file.`;
      if(!s.a.length || !s.b.length) return settle(winner);
    }
    return s;
  }
  const api={key,same,maze,neighbors,search,moveDisk,snakeStep,deck,battleStep};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  else root.Arcade=api;
})(typeof globalThis!=='undefined'?globalThis:this);
