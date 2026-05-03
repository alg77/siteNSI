/* ============================================================
   NSI BAC — quiz.js — Moteur QCM avec niveaux
   Niveaux : facile (ans=0 majoritaire), moyen, difficile
   En pratique on tag les questions par position dans le pool :
   - facile  = questions 0-19  du chapitre
   - moyen   = questions 20-34
   - difficile = questions 35-49
   ============================================================ */

function getQuestionsByLevel(chapter, level, nb) {
  const pool = (typeof QUESTIONS !== "undefined" && QUESTIONS[chapter]) ? QUESTIONS[chapter] : [];
  let slice;
  if      (level === 'facile')    slice = pool.slice(0, 20);
  else if (level === 'moyen')     slice = pool.slice(20, 35);
  else if (level === 'difficile') slice = pool.slice(35, 50);
  else                            slice = pool;          // 'tous'
  const shuffled = [...slice].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(nb, shuffled.length));
}

class QuizEngine {
  constructor(containerId, chapter, nb = 5, level = 'tous') {
    this.container = document.getElementById(containerId);
    this.chapter   = chapter;
    this.nb        = nb;
    this.level     = level;
    this.questions = [];
    this.answered  = [];
    this.score     = 0;
    this._uid      = containerId; // pour éviter collisions si plusieurs quiz
  }

  start() {
    if (!this.container) return;
    this.questions = getQuestionsByLevel(this.chapter, this.level, this.nb);
    this.answered  = new Array(this.questions.length).fill(false);
    this.score     = 0;
    this.render();
  }

  render() {
    if (!this.questions.length) {
      this.container.innerHTML = '<p style="color:var(--text2);padding:1rem">Aucune question disponible pour ce niveau.</p>';
      return;
    }
    const uid = this._uid;
    let html = `<div class="quiz-progress">
      <div class="quiz-progress-text">0 / ${this.questions.length} répondu</div>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:0%" id="${uid}_pbar"></div></div>
    </div>`;

    this.questions.forEach((q, i) => {
      html += `<div class="quiz-question" id="${uid}_qq${i}">
        <div class="q-text"><span style="color:var(--text2);font-family:var(--font-mono)">Q${i+1}.</span> ${q.q}</div>
        <div class="q-opts">`;
      q.opts.forEach((opt, j) => {
        html += `<label class="q-opt" id="${uid}_qo${i}_${j}">
          <input type="radio" name="${uid}_q${i}" value="${j}" onchange="window['_quiz_${uid}'].answer(${i},${j})">
          <span>${opt}</span>
        </label>`;
      });
      html += `</div>
        <div class="q-explication" id="${uid}_qexp${i}">💡 ${q.exp}</div>
      </div>`;
    });

    html += `<div style="text-align:center;margin-top:2rem">
      <button class="btn btn-primary" id="${uid}_submit" onclick="window['_quiz_${uid}'].submit()">Voir mes résultats</button>
    </div>`;

    this.container.innerHTML = html;
    window[`_quiz_${uid}`] = this;
  }

  answer(qi, optIdx) {
    if (this.answered[qi]) return;
    this.answered[qi] = true;
    const uid     = this._uid;
    const correct = this.questions[qi].ans;
    for (let j = 0; j < this.questions[qi].opts.length; j++) {
      const el = document.getElementById(`${uid}_qo${qi}_${j}`);
      if (!el) continue;
      el.classList.add('disabled');
      if (j === correct)  el.classList.add('correct');
      else if (j === optIdx) el.classList.add('wrong');
      const inp = el.querySelector('input');
      if (inp) inp.disabled = true;
    }
    const exp = document.getElementById(`${uid}_qexp${qi}`);
    if (exp) exp.classList.add('visible');
    if (optIdx === correct) this.score++;
    const done = this.answered.filter(Boolean).length;
    const pbar = document.getElementById(`${uid}_pbar`);
    if (pbar) pbar.style.width = (done / this.questions.length * 100) + '%';
    const ptxt = this.container.querySelector('.quiz-progress-text');
    if (ptxt) ptxt.textContent = `${done} / ${this.questions.length} répondu`;
  }

  submit() {
    const uid = this._uid;
    this.questions.forEach((q, i) => {
      if (!this.answered[i]) {
        this.answered[i] = true;
        for (let j = 0; j < q.opts.length; j++) {
          const el = document.getElementById(`${uid}_qo${i}_${j}`);
          if (el) { el.classList.add('disabled'); if (j === q.ans) el.classList.add('correct'); }
        }
        const exp = document.getElementById(`${uid}_qexp${i}`);
        if (exp) exp.classList.add('visible');
      }
    });
    this.showScore();
  }

  showScore() {
    const pct = Math.round(this.score / this.questions.length * 100);
    const cls = pct >= 70 ? 'great' : pct >= 50 ? 'ok' : 'bad';
    const msg = pct >= 70
      ? '🎉 Excellent ! Tu maîtrises ce niveau.'
      : pct >= 50
      ? '📚 Pas mal — encore un peu de révision !'
      : '💪 Continue à réviser, tu vas y arriver !';
    const sb = document.createElement('div');
    sb.className = 'quiz-score-box';
    const uid = this._uid;
    sb.innerHTML = `
      <div class="score-n ${cls}">${this.score}/${this.questions.length}</div>
      <p>${msg}</p>
      <p style="font-size:.85rem;color:var(--text2);margin-bottom:1.5rem">Score : ${pct}%</p>
      <button class="btn btn-outline" onclick="window['_quiz_${uid}'].restart()">🔄 Rejouer</button>`;
    this.container.insertBefore(sb, this.container.firstChild);
    const submitBtn = document.getElementById(`${uid}_submit`);
    if (submitBtn) submitBtn.remove();
  }

  restart() { this.start(); this.container.scrollIntoView({ behavior: 'smooth' }); }
}

/* ── Widget QCM embarqué dans les chapitres ── */
function initChapterQuiz(chapter, containerId, nb) {
  const wrapper = document.getElementById(containerId);
  if (!wrapper) return;

  // Injecter les contrôles nb + niveau
  wrapper.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;align-items:flex-end;margin-bottom:1.25rem">
      <div>
        <div style="font-size:.8rem;color:var(--text2);margin-bottom:.4rem;font-weight:600">Nombre de questions</div>
        <div style="display:flex;gap:.5rem" id="${containerId}_nb">
          <button class="btn btn-outline qnb-btn active-qnb" data-nb="5">5</button>
          <button class="btn btn-outline qnb-btn" data-nb="10">10</button>
        </div>
      </div>
      <div>
        <div style="font-size:.8rem;color:var(--text2);margin-bottom:.4rem;font-weight:600">Niveau</div>
        <div style="display:flex;gap:.5rem" id="${containerId}_lvl">
          <button class="btn btn-outline qlvl-btn active-qlvl" data-lvl="facile">⭐ Facile</button>
          <button class="btn btn-outline qlvl-btn" data-lvl="moyen">⭐⭐ Moyen</button>
          <button class="btn btn-outline qlvl-btn" data-lvl="difficile">⭐⭐⭐ Difficile</button>
        </div>
      </div>
      <button class="btn btn-primary" id="${containerId}_launch" style="margin-left:auto">▶ Lancer</button>
    </div>
    <div id="${containerId}_area"></div>`;

  // Style actif
  const style = document.createElement('style');
  style.textContent = `.active-qnb,.active-qlvl{background:var(--accent)!important;color:#fff!important;border-color:var(--accent)!important}`;
  document.head.appendChild(style);

  let selNb  = 5;
  let selLvl = 'facile';

  wrapper.querySelectorAll('.qnb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrapper.querySelectorAll('.qnb-btn').forEach(b => b.classList.remove('active-qnb'));
      btn.classList.add('active-qnb');
      selNb = parseInt(btn.dataset.nb);
    });
  });

  wrapper.querySelectorAll('.qlvl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrapper.querySelectorAll('.qlvl-btn').forEach(b => b.classList.remove('active-qlvl'));
      btn.classList.add('active-qlvl');
      selLvl = btn.dataset.lvl;
    });
  });

  document.getElementById(`${containerId}_launch`).addEventListener('click', () => {
    const area = document.getElementById(`${containerId}_area`);
    area.innerHTML = '';
    const eng = new QuizEngine(`${containerId}_area`, chapter, selNb, selLvl);
    eng.start();
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ── Page quiz.html globale ── */
function initQuizPage() {
  const form = document.getElementById('quiz-form');
  if (!form) return;
  let selectedChapter = 'structures';

  document.querySelectorAll('.ch-sel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ch-sel-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedChapter = btn.dataset.chapter;
    });
  });
  const first = document.querySelector('.ch-sel-btn');
  if (first) first.classList.add('selected');

  document.getElementById('quiz-launch')?.addEventListener('click', () => {
    const nb  = parseInt(document.getElementById('nb-questions')?.value) || 10;
    const lvl = document.querySelector('.qlvl-btn.active-qlvl')?.dataset?.lvl || 'tous';
    const container = document.getElementById('quiz-main');
    container.innerHTML = '';
    const eng = new QuizEngine('quiz-main', selectedChapter, nb, lvl);
    window._quiz = eng;
    eng.start();
    container.scrollIntoView({ behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', initQuizPage);
