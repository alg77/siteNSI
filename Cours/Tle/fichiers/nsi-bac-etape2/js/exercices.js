/* ============================================================
   exercices.js — Moteur d'exercices progressifs NSI Bac
   ============================================================ */

/* ── Styles injectés ────────────────────────────────────────── */
(function injectStyles() {
  if (document.getElementById('exo-styles')) return;
  const s = document.createElement('style');
  s.id = 'exo-styles';
  s.textContent = `
/* Bloc notion */
.notion-block { margin: 2.5rem 0; }
.notion-block h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  margin-bottom: 1rem;
  padding-bottom: .5rem;
  border-bottom: 2px solid var(--border);
  display: flex;
  align-items: center;
  gap: .6rem;
}
.notion-block h3 .notion-badge {
  font-size: .7rem;
  background: var(--accent);
  color: #000;
  border-radius: 4px;
  padding: .15rem .5rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
}

/* Exercice */
.exo-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin: .8rem 0;
  overflow: hidden;
  transition: border-color .15s;
}
.exo-card.solved { border-color: #3fb950; }
.exo-card.failed  { border-color: #ff7b72; }

.exo-header {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .75rem 1rem;
  cursor: pointer;
  user-select: none;
  background: transparent;
  transition: background .12s;
}
.exo-header:hover { background: rgba(255,255,255,.03); }

.exo-stars { font-size: .9rem; letter-spacing: 1px; flex-shrink: 0; }
.star-on  { color: #d29922; }
.star-off { color: var(--border); }

.exo-title { flex: 1; font-size: .9rem; font-weight: 600; }
.exo-status { font-size: 1rem; flex-shrink: 0; }
.exo-chevron { color: var(--text2); font-size: .75rem; transition: transform .2s; flex-shrink: 0; }
.exo-header.open .exo-chevron { transform: rotate(180deg); }

.exo-body { display: none; padding: 0 1rem 1rem; }
.exo-body.open { display: block; }

.exo-enonce { font-size: .9rem; margin-bottom: .75rem; }
.exo-enonce pre { margin: .5rem 0; }

/* Zone de réponse */
.exo-answer-zone { margin: .75rem 0; }
.exo-textarea {
  width: 100%;
  min-height: 90px;
  background: #0d1117;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text1);
  font-family: 'JetBrains Mono', monospace;
  font-size: .85rem;
  padding: .6rem .8rem;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color .15s;
}
.exo-textarea:focus { outline: none; border-color: var(--accent); }

/* Boutons */
.exo-actions { display: flex; gap: .5rem; flex-wrap: wrap; margin-top: .5rem; }
.exo-btn {
  padding: .35rem .9rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text1);
  font-size: .82rem;
  cursor: pointer;
  transition: background .12s, border-color .12s;
  font-family: 'Inter', sans-serif;
}
.exo-btn:hover { background: rgba(255,255,255,.06); border-color: var(--accent); }
.exo-btn.primary { background: var(--accent); color: #000; border-color: var(--accent); font-weight: 700; }
.exo-btn.primary:hover { opacity: .85; }

/* Correction */
.exo-correction {
  display: none;
  margin-top: .75rem;
  background: #0d1117;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: .75rem 1rem;
  font-size: .87rem;
}
.exo-correction.open { display: block; }
.exo-correction .corr-header {
  font-weight: 700;
  margin-bottom: .4rem;
  display: flex;
  align-items: center;
  gap: .4rem;
}
.corr-ok  { color: #3fb950; }
.corr-tip { color: #d29922; }
.corr-ko  { color: #ff7b72; }

/* QCM amélioré */
.qcm-container {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
}
.qcm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: .5rem;
}
.qcm-header h3 { margin: 0; font-family: 'Syne', sans-serif; font-size: 1.1rem; }
.qcm-count-btns { display: flex; gap: .4rem; }
.qcm-count-btn {
  padding: .25rem .6rem;
  border-radius: 5px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text2);
  font-size: .78rem;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  transition: background .12s, color .12s, border-color .12s;
}
.qcm-count-btn.active { background: var(--accent); color: #000; border-color: var(--accent); font-weight: 700; }

.qcm-progress-wrap { margin-bottom: 1rem; }
.qcm-progress-bar {
  width: 100%;
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.qcm-progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width .3s ease;
}
.qcm-progress-text {
  font-size: .78rem;
  color: var(--text2);
  margin-top: .25rem;
  font-family: 'JetBrains Mono', monospace;
}

.qcm-question-block { display: none; }
.qcm-question-block.active { display: block; }
.qcm-question-text { font-size: .92rem; margin-bottom: .75rem; font-weight: 600; }
.qcm-question-code {
  background: #0d1117;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: .6rem .8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: .82rem;
  margin-bottom: .75rem;
  overflow-x: auto;
  white-space: pre;
}

.qcm-options { display: flex; flex-direction: column; gap: .4rem; margin-bottom: .75rem; }
.qcm-opt-btn {
  text-align: left;
  padding: .5rem .8rem;
  border-radius: 7px;
  border: 1.5px solid var(--border);
  background: transparent;
  color: var(--text1);
  font-size: .87rem;
  cursor: pointer;
  transition: border-color .12s, background .12s;
  display: flex;
  align-items: flex-start;
  gap: .6rem;
}
.qcm-opt-btn:hover:not(:disabled) { border-color: var(--accent); background: rgba(88,166,255,.06); }
.qcm-opt-btn.correct { border-color: #3fb950 !important; background: rgba(63,185,80,.1); color: #3fb950; }
.qcm-opt-btn.wrong   { border-color: #ff7b72 !important; background: rgba(255,123,114,.1); color: #ff7b72; }
.qcm-opt-btn:disabled { cursor: default; }
.opt-letter {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 4px;
  background: var(--bg3, #21262d);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .7rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  flex-shrink: 0;
}
.qcm-opt-btn.correct .opt-letter { background: #3fb950; color: #000; border-color: #3fb950; }
.qcm-opt-btn.wrong   .opt-letter { background: #ff7b72; color: #000; border-color: #ff7b72; }

.qcm-explication {
  font-size: .82rem;
  color: var(--text2);
  padding: .5rem .75rem;
  background: rgba(0,0,0,.2);
  border-radius: 6px;
  margin-bottom: .5rem;
  display: none;
  border-left: 3px solid var(--accent);
}
.qcm-explication.visible { display: block; }

.qcm-nav { display: flex; justify-content: space-between; align-items: center; gap: .5rem; }
.qcm-score-block {
  text-align: center;
  padding: 1.5rem;
  display: none;
}
.qcm-score-block.visible { display: block; }
.qcm-score-big {
  font-family: 'Syne', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}
.qcm-score-label { color: var(--text2); margin: .5rem 0 1rem; font-size: .9rem; }
.score-great { color: #3fb950; }
.score-ok    { color: #d29922; }
.score-bad   { color: #ff7b72; }

/* Progression globale */
.notion-progress-summary {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.nps-label { font-size: .85rem; color: var(--text2); flex: 1; min-width: 120px; }
.nps-stars { display: flex; gap: .25rem; }
.nps-star { width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid var(--border); }
.nps-star.done { background: #d29922; border-color: #d29922; }

  `;
  document.head.appendChild(s);
})();

/* ── Utilitaires ────────────────────────────────────────────── */
function stars(n, max = 5) {
  return Array.from({ length: max }, (_, i) =>
    `<span class="${i < n ? 'star-on' : 'star-off'}">★</span>`
  ).join('');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Rendu d'un bloc notion avec exercices ──────────────────── */
function renderNotionBlock(containerId, config) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const html = config.exercices.map((exo, idx) => {
    const id = `${containerId}-exo-${idx}`;
    const hasCode = !!exo.code;
    const hasOptions = Array.isArray(exo.options);

    let answerZone = '';
    if (hasOptions) {
      answerZone = `<div class="exo-options-zone" style="display:flex;flex-wrap:wrap;gap:.4rem;margin:.5rem 0">
        ${exo.options.map((o, oi) =>
          `<button class="exo-btn exo-opt-btn" data-exo="${id}" data-idx="${oi}" onclick="exoOptionClick(this,'${id}',${oi},${exo.answer})">${o}</button>`
        ).join('')}
      </div>`;
    } else {
      answerZone = `<textarea class="exo-textarea" id="${id}-ta" placeholder="Écris ta réponse ici…"></textarea>
        <div class="exo-actions">
          <button class="exo-btn primary" onclick="exoShowCorr('${id}')">Voir la correction</button>
        </div>`;
    }

    return `
<div class="exo-card" id="${id}">
  <div class="exo-header" onclick="exoToggle('${id}')">
    <div class="exo-stars">${stars(exo.stars)}</div>
    <div class="exo-title">${exo.titre}</div>
    <div class="exo-status" id="${id}-status"></div>
    <div class="exo-chevron">▼</div>
  </div>
  <div class="exo-body" id="${id}-body">
    <div class="exo-enonce">
      ${exo.enonce}
      ${hasCode ? `<pre><code>${exo.code}</code></pre>` : ''}
    </div>
    <div class="exo-answer-zone">${answerZone}</div>
    <div class="exo-correction" id="${id}-corr">
      <div class="corr-header corr-ok">✅ Correction</div>
      ${exo.correction}
    </div>
  </div>
</div>`;
  }).join('');

  el.innerHTML = html;
}

/* ── Interactions exercices ─────────────────────────────────── */
function exoToggle(id) {
  const body = document.getElementById(id + '-body');
  const header = document.querySelector(`#${id} .exo-header`);
  const open = body.classList.toggle('open');
  header.classList.toggle('open', open);
}

function exoShowCorr(id) {
  document.getElementById(id + '-corr').classList.add('open');
  document.getElementById(id + '-status').textContent = '📖';
}

function exoOptionClick(btn, id, idx, answer) {
  // Désactiver tous les boutons
  document.querySelectorAll(`[data-exo="${id}"]`).forEach(b => {
    b.disabled = true;
    b.classList.remove('primary');
  });
  const correct = idx === answer;
  btn.classList.add(correct ? 'exo-btn' : 'exo-btn');
  btn.style.borderColor = correct ? '#3fb950' : '#ff7b72';
  btn.style.color = correct ? '#3fb950' : '#ff7b72';
  // Montrer la bonne réponse
  document.querySelectorAll(`[data-exo="${id}"]`).forEach((b, i) => {
    if (i === answer) { b.style.borderColor = '#3fb950'; b.style.color = '#3fb950'; }
  });
  const card = document.getElementById(id);
  card.classList.add(correct ? 'solved' : 'failed');
  document.getElementById(id + '-status').textContent = correct ? '✅' : '❌';
  document.getElementById(id + '-corr').classList.add('open');
}

/* ── QCM amélioré ───────────────────────────────────────────── */
function initQCM(containerId, chapter, defaultCount = 10) {
  const el = document.getElementById(containerId);
  if (!el || !window.QUESTIONS || !QUESTIONS[chapter]) return;

  const pool = QUESTIONS[chapter];
  let count = defaultCount;
  let questions = [];
  let current = 0;
  let score = 0;
  let answered = [];

  function getRandomQ(n) {
    return shuffle(pool).slice(0, Math.min(n, pool.length));
  }

  function start() {
    questions = getRandomQ(count);
    current = 0; score = 0; answered = Array(questions.length).fill(null);
    render();
  }

  function render() {
    const q = questions[current];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const isAnswered = answered[current] !== null;
    const pct = Math.round((current / questions.length) * 100);

    el.innerHTML = `
<div class="qcm-container">
  <div class="qcm-header">
    <h3>🎯 QCM — ${document.title.split('—')[0].trim()}</h3>
    <div class="qcm-count-btns">
      ${[5,10,20,30].map(n =>
        `<button class="qcm-count-btn ${n === count ? 'active' : ''}" onclick="(${changeCount})(${n})">${n}</button>`
      ).join('')}
    </div>
  </div>
  <div class="qcm-progress-wrap">
    <div class="qcm-progress-bar"><div class="qcm-progress-fill" style="width:${pct}%"></div></div>
    <div class="qcm-progress-text">Question ${current + 1} / ${questions.length} — Score : ${score}/${current + (isAnswered ? 1 : 0)}</div>
  </div>
  <div class="qcm-question-text">${q.question}</div>
  ${q.code ? `<div class="qcm-question-code">${q.code}</div>` : ''}
  <div class="qcm-options">
    ${q.options.map((o, i) => {
      let cls = '';
      if (isAnswered) {
        if (i === q.answer) cls = 'correct';
        else if (i === answered[current]) cls = 'wrong';
      }
      return `<button class="qcm-opt-btn ${cls}" ${isAnswered ? 'disabled' : ''} onclick="(${answer})(${i})">
        <span class="opt-letter">${letters[i]}</span>${o}
      </button>`;
    }).join('')}
  </div>
  ${isAnswered ? `<div class="qcm-explication visible">${q.explication || ''}</div>` : ''}
  <div class="qcm-nav">
    <button class="exo-btn" onclick="(${prev})()" ${current === 0 ? 'disabled' : ''}>← Précédent</button>
    <span style="font-size:.78rem;color:var(--text2);font-family:'JetBrains Mono',monospace">${current+1}/${questions.length}</span>
    ${current < questions.length - 1
      ? `<button class="exo-btn primary" onclick="(${next})()" ${!isAnswered ? 'disabled' : ''}>Suivant →</button>`
      : `<button class="exo-btn primary" onclick="(${showScore})()" ${!isAnswered ? 'disabled' : ''}>Voir le score</button>`
    }
  </div>
</div>`;
  }

  function answer(i) {
    if (answered[current] !== null) return;
    const q = questions[current];
    answered[current] = i;
    if (i === q.answer) score++;
    render();
  }

  function next() { if (current < questions.length - 1) { current++; render(); } }
  function prev() { if (current > 0) { current--; render(); } }
  function changeCount(n) { count = n; start(); }

  function showScore() {
    const pct = Math.round((score / questions.length) * 100);
    const cls = pct >= 80 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-bad';
    const msg = pct >= 80 ? '🎉 Excellent !' : pct >= 50 ? '👍 Pas mal, continue !' : '📚 À retravailler…';
    el.innerHTML = `
<div class="qcm-container">
  <div class="qcm-score-block visible">
    <div class="qcm-score-big ${cls}">${score}/${questions.length}</div>
    <div class="qcm-score-label">${pct}% — ${msg}</div>
    <div style="margin-top:.5rem">
      ${[5,10,20,30].map(n =>
        `<button class="qcm-count-btn ${n === count ? 'active' : ''}" style="margin:.2rem" onclick="(${changeCount})(${n})">${n} questions</button>`
      ).join('')}
    </div>
    <button class="exo-btn primary" style="margin-top:.75rem" onclick="(${start})()">🔄 Rejouer</button>
  </div>
</div>`;
  }

  start();
}

/* ── Export global ──────────────────────────────────────────── */
window.renderNotionBlock = renderNotionBlock;
window.exoToggle = exoToggle;
window.exoShowCorr = exoShowCorr;
window.exoOptionClick = exoOptionClick;
window.initQCM = initQCM;
