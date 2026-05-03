/* ============================================================
   NSI BAC — quiz.js — Moteur QCM
   ============================================================ */

class QuizEngine {
  constructor(containerId, chapter, nbQuestions = 10) {
    this.container = document.getElementById(containerId);
    this.chapter = chapter;
    this.nb = nbQuestions;
    this.questions = [];
    this.answered = [];
    this.score = 0;
  }

  start() {
    if (!this.container) return;
    this.questions = getRandomQuestions(this.chapter, this.nb);
    this.answered = new Array(this.questions.length).fill(false);
    this.score = 0;
    this.render();
  }

  render() {
    if (!this.questions.length) {
      this.container.innerHTML = '<p style="color:var(--text2)">Aucune question disponible pour ce chapitre.</p>';
      return;
    }
    let html = `<div class="quiz-progress">
      <div class="quiz-progress-text">0 / ${this.questions.length} répondu</div>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:0%" id="qpbar"></div></div>
    </div>`;
    this.questions.forEach((q, i) => {
      html += `<div class="quiz-question" id="qq${i}">
        <div class="q-text"><span style="color:var(--text2);font-family:var(--font-mono)">Q${i+1}.</span> ${q.q}</div>
        <div class="q-opts">`;
      q.opts.forEach((opt, j) => {
        html += `<label class="q-opt" id="qo${i}_${j}">
          <input type="radio" name="q${i}" value="${j}" onchange="window._quiz.answer(${i},${j})">
          <span>${opt}</span>
        </label>`;
      });
      html += `</div>
        <div class="q-explication" id="qexp${i}">💡 ${q.exp}</div>
      </div>`;
    });
    html += `<div style="text-align:center;margin-top:2rem">
      <button class="btn btn-primary" id="quiz-submit" onclick="window._quiz.submit()">Voir mes résultats</button>
    </div>`;
    this.container.innerHTML = html;
  }

  answer(qi, optIdx) {
    if (this.answered[qi]) return;
    this.answered[qi] = true;
    const correct = this.questions[qi].ans;
    // Style options
    for (let j = 0; j < this.questions[qi].opts.length; j++) {
      const el = document.getElementById(`qo${qi}_${j}`);
      if (!el) continue;
      el.classList.add('disabled');
      if (j === correct) el.classList.add('correct');
      else if (j === optIdx) el.classList.add('wrong');
      const inp = el.querySelector('input');
      if (inp) inp.disabled = true;
    }
    // Show explanation
    const exp = document.getElementById(`qexp${qi}`);
    if (exp) exp.classList.add('visible');
    // Update score & progress
    if (optIdx === correct) this.score++;
    const done = this.answered.filter(Boolean).length;
    const pbar = document.getElementById('qpbar');
    if (pbar) pbar.style.width = (done / this.questions.length * 100) + '%';
    const ptxt = this.container.querySelector('.quiz-progress-text');
    if (ptxt) ptxt.textContent = `${done} / ${this.questions.length} répondu`;
  }

  submit() {
    // Auto-answer remaining unanswered
    this.questions.forEach((q, i) => {
      if (!this.answered[i]) {
        // mark as skipped (wrong)
        this.answered[i] = true;
        for (let j = 0; j < q.opts.length; j++) {
          const el = document.getElementById(`qo${i}_${j}`);
          if (el) { el.classList.add('disabled'); if (j === q.ans) el.classList.add('correct'); }
        }
        const exp = document.getElementById(`qexp${i}`);
        if (exp) exp.classList.add('visible');
      }
    });
    this.showScore();
  }

  showScore() {
    const pct = Math.round(this.score / this.questions.length * 100);
    let cls = pct >= 70 ? 'great' : pct >= 50 ? 'ok' : 'bad';
    let msg = pct >= 70 ? '🎉 Excellent ! Tu maîtrises le sujet.' : pct >= 50 ? '📚 Pas mal, encore un peu de révision !' : '💪 Continue à réviser, tu vas y arriver !';
    const sb = document.createElement('div');
    sb.className = 'quiz-score-box';
    sb.innerHTML = `<div class="score-n ${cls}">${this.score}/${this.questions.length}</div>
      <p>${msg}</p>
      <p style="font-size:.85rem;color:var(--text2);margin-bottom:1.5rem">Score : ${pct}%</p>
      <button class="btn btn-outline" onclick="window._quiz.restart()">🔄 Rejouer</button>`;
    this.container.insertBefore(sb, this.container.firstChild);
    const submitBtn = document.getElementById('quiz-submit');
    if (submitBtn) submitBtn.remove();
  }

  restart() {
    this.start();
    this.container.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ── Init widgets QCM embarqués dans les chapitres ── */
function initChapterQuiz(containerId, chapter, nb = 5) {
  const btn = document.getElementById('quiz-start');
  if (!btn) return;
  const eng = new QuizEngine(containerId, chapter, nb);
  window._quiz = eng;
  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    eng.start();
  });
}

/* ── Init page quiz.html ── */
function initQuizPage() {
  const form = document.getElementById('quiz-form');
  if (!form) return;
  let selectedChapter = 'structures';

  // Chapter buttons
  document.querySelectorAll('.ch-sel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ch-sel-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedChapter = btn.dataset.chapter;
    });
  });
  // Select first by default
  const first = document.querySelector('.ch-sel-btn');
  if (first) first.classList.add('selected');

  document.getElementById('quiz-launch').addEventListener('click', () => {
    const nb = parseInt(document.getElementById('nb-questions').value) || 10;
    const container = document.getElementById('quiz-main');
    container.innerHTML = '';
    const eng = new QuizEngine('quiz-main', selectedChapter, nb);
    window._quiz = eng;
    eng.start();
    container.scrollIntoView({ behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', initQuizPage);
