/* =========================================================
   ALGOVERSE 2026 · Tech Nova — Logic
   ========================================================= */
'use strict';

/* ------------------ EASY SETTINGS (edit these) ------------------ */
const CONFIG = {
  eventName: 'ALGOVERSE 2026',
  phaseName: 'Tech Nova',          // shown in header + rules card
  roundName: 'Technomyst',       // shown on rules card
  durationMinutes: 30,           // quiz timer (counts down, auto-submits at 00:00)
  showScoreAfterSubmit: true     // set false to hide the score after submission
};

/* ------------------ SECTIONS ------------------ */
const SECTIONS = [
  { id: 'phy',  name: 'Physics',                color: '#cfe6f8' },
  { id: 'ee',   name: 'Electrical Engineering', color: '#fff0b9' },
  { id: 'env',  name: 'Energy & Environment',   color: '#cdeedd' },
  { id: 'math', name: 'Mathematics',            color: '#dcd3f7' },
  { id: 'comm', name: 'Communication',          color: '#ffd9c7' },
  { id: 'soft', name: 'Soft Skills',            color: '#fbd3de' }
];

/* ------------------ QUESTIONS ------------------ */
// q(sectionId, question, [A, B, C, D], indexOfCorrectOption)
const q = (sec, text, options, answer) => ({ sec, text, options, answer });

const QUESTIONS = [
  /* ---- Physics ---- */
  q('phy', 'Which laser is commonly used in barcode scanners and many laboratory applications?',
    ['Ruby laser', 'Helium–Neon laser', 'CO₂ laser', 'Excimer laser'], 1),
  q('phy', 'Which laser is particularly associated with industrial cutting and welding because of its high-power infrared output?',
    ['CO₂ laser', 'Helium–Neon laser', 'Low-power diode laser pointer', 'Ruby laser only'], 0),
  q('phy', 'At resonance in a lightly damped forced oscillator, the amplitude becomes:',
    ['Zero', 'Maximum or near maximum', 'Independent of driving frequency in all cases', 'Always equal to the initial displacement'], 1),
  q('phy', 'The minimum wavelength of X-rays produced by an X-ray tube primarily depends on:',
    ['Target colour', 'Tube voltage', 'Target shape only', 'Filament length only'], 1),
  q('phy', 'Which statement best distinguishes hard X-rays from soft X-rays?',
    ['Hard X-rays have lower frequency', 'Hard X-rays have longer wavelengths', 'Hard X-rays have higher photon energy', 'Soft X-rays travel slower in vacuum'], 2),
  q('phy', 'In simple harmonic motion, acceleration is proportional to displacement and directed:',
    ['Away from the mean position', 'Toward the mean position', 'Along the direction of velocity always', 'Perpendicular to displacement'], 1),

  /* ---- Electrical Engineering ---- */
  q('ee', 'A 10 Ω resistor carries a current of 2 A. How much power does it dissipate?',
    ['20 W', '30 W', '40 W', '100 W'], 2),
  q('ee', 'When applying the superposition theorem to a circuit containing independent voltage and current sources, an ideal independent voltage source that is turned off is replaced by:',
    ['An open circuit', 'A short circuit', 'A resistor of infinite value', 'A current source'], 1),
  q('ee', 'Three equal resistors of 9 Ω each form a star network. What is the resistance of each resistor in the equivalent delta network?',
    ['9 Ω', '18 Ω', '27 Ω', '81 Ω'], 2),
  q('ee', 'An ideal current source has a resistance of:',
    ['Zero', 'Very low', 'Infinite', 'Equal to its load resistance'], 2),
  q('ee', 'A DC network has Thevenin resistance of 8 Ω. For maximum power transfer to a purely resistive load, the load resistance should be:',
    ['4 Ω', '8 Ω', '16 Ω', '32 Ω'], 1),
  q('ee', 'The reciprocity theorem is generally applicable to which type of network?',
    ['Linear bilateral network', 'Nonlinear unilateral network', 'Any nonlinear network', 'Any network containing only current sources'], 0),

  /* ---- Energy & Environment ---- */
  q('env', 'Which statement correctly distinguishes primary succession from secondary succession?',
    ['Primary succession begins where soil is absent; secondary succession begins where soil remains.', 'Primary succession always occurs faster.', 'Secondary succession begins only in water.', 'Both always begin on bare rock.'], 0),
  q('env', 'Which statement best describes the difference between the greenhouse effect and global warming?',
    ['They are exactly the same phenomenon.', "The greenhouse effect is a heat-trapping process; global warming is the long-term rise in Earth's average temperature.", 'Global warming causes all greenhouse gases to disappear.', 'The greenhouse effect occurs only because of ozone depletion.'], 1),
  q('env', 'Which gas has a stronger heat-trapping effect per molecule than CO₂ over a 100-year period, but generally has a much lower atmospheric concentration?',
    ['Oxygen', 'Methane', 'Nitrogen', 'Argon'], 1),
  q('env', 'Photochemical smog forms when nitrogen oxides and volatile organic compounds react in the presence of:',
    ['Sunlight', 'Darkness', 'Pure nitrogen only', 'Low temperature alone'], 0),
  q('env', "Which pollutant is particularly associated with incomplete combustion and reduces the blood's oxygen-carrying capacity?",
    ['Carbon monoxide', 'Carbon dioxide', 'Oxygen', 'Nitrogen'], 0),
  q('env', 'Minamata disease is associated with exposure to:',
    ['Lead', 'Mercury', 'Arsenic', 'Cadmium'], 1),

  /* ---- Mathematics ---- */
  q('math', 'A system of three homogeneous linear equations has four unknowns. Which statement is necessarily true?',
    ['It has no solution', 'It has only the trivial solution', 'It has at least one non-trivial solution', 'It has exactly four solutions'], 2),
  q('math', 'Which condition is essential for a matrix to be in row echelon form?',
    ['Every entry must be non-zero', 'Every diagonal entry must equal 1', 'Each leading entry must be to the right of the leading entry in the row above', 'Every row must have the same number of non-zero entries'], 2),
  q('math', 'A matrix has 5 columns and rank 3. What is the dimension of its null space?',
    ['1', '2', '3', '5'], 1),
  q('math', 'The Cayley–Hamilton theorem states that every square matrix satisfies its own:',
    ['Row echelon form', 'Characteristic equation', 'Inverse equation', 'Orthogonality condition'], 1),
  q('math', 'The main objective of the Gauss–Jordan method when solving a system of linear equations is to reduce the augmented matrix to:',
    ['Upper triangular form only', 'Reduced row echelon form', 'A diagonal matrix in every case', 'A symmetric matrix'], 1),
  q('math', 'Which set forms a basis for ℝ²?',
    ['{(1, 2), (2, 4)}', '{(1, 0), (0, 1)}', '{(1, 1), (2, 2)}', '{(0, 0), (1, 1)}'], 1),

  /* ---- Communication ---- */
  q('comm', 'In the Shannon–Weaver model, which element represents interference that distorts a message during transmission?',
    ['Feedback', 'Noise', 'Receiver', 'Channel'], 1),
  q('comm', 'Which of the Seven Cs of Effective Communication requires a message to contain all necessary information?',
    ['Conciseness', 'Completeness', 'Courtesy', 'Correctness'], 1),
  q('comm', '“Submit the report by 4 PM on Friday” is more effective than “Submit the report soon.” Which communication principle does this illustrate most directly?',
    ['Concreteness', 'Courtesy', 'Completeness', 'Consideration'], 0),
  q('comm', 'A manager writes, “You failed to complete the task,” while another writes, “Let’s identify what prevented completion and resolve it.” Which principle is better reflected in the second message?',
    ['Courtesy and consideration', 'Completeness only', 'Correctness only', 'Conciseness only'], 0),
  q('comm', "Which type of communication aims primarily to influence someone's opinion or decision through reasons and arguments?",
    ['Order', 'Persuasion', 'Warning', 'Information storage'], 1),
  q('comm', 'A sender communicates an idea clearly, but the receiver interprets it differently because both attach different meanings to the same word. This is primarily a:',
    ['Semantic barrier', 'Physical barrier', 'Feedback mechanism', 'Communication channel'], 0),

  /* ---- Soft Skills ---- */
  q('soft', 'During a team project, two members disagree strongly about the solution. What should the team leader do first?',
    ['Support the more experienced member', 'Ask both to explain their reasoning and compare the evidence', 'Choose the faster solution immediately', 'Remove one member from the project'], 1),
  q('soft', 'Which leadership style is most appropriate when a team is inexperienced and facing a strict deadline?',
    ['Provide clear direction and priorities', 'Avoid giving instructions', 'Let everyone independently choose the goal', 'Delay decisions until everyone agrees'], 0),
  q('soft', 'You notice that a teammate is unusually quiet after receiving negative feedback. What should you do first?',
    ['Assume they are unwilling to work', 'Ask privately if they are okay and whether they need support', 'Publicly question their attitude', 'Exclude them from future discussions'], 1),
  q('soft', 'In conflict resolution, a win-win outcome means:',
    ['One person gets everything they want', 'Both sides make no changes', 'Both sides work toward a solution that addresses their important needs', 'The conflict is ignored'], 2),
  q('soft', 'Which technique is most useful for reducing procrastination on a large assignment?',
    ['Wait until motivation appears', 'Break the assignment into smaller, scheduled tasks', 'Work only when under pressure', 'Avoid setting intermediate deadlines'], 1),
  q('soft', 'A new software tool is introduced just before a group assignment. Which response best demonstrates adaptability?',
    ['Refuse to use it because it is unfamiliar', 'Learn the essential features and practise using them', 'Ask another person to do all your work', 'Continue using the old tool even if it is incompatible'], 1)
];

/* ------------------ HELPERS ------------------ */
const $ = (id) => document.getElementById(id);
const secById = (id) => SECTIONS.find((s) => s.id === id);
const LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = QUESTIONS.length;
const TOTAL_SECONDS = CONFIG.durationMinutes * 60;
const STORAGE_KEY = 'technova-1st-year-session-v1';

const state = {
  current: 0,
  answers: new Array(TOTAL).fill(-1),
  marked: new Set(),
  teamName: '',
  started: false,
  submitted: false,
  endTime: 0,
  startTime: 0,
  timerId: null,
  expiryId: null,
  result: null,
  warned5: false,
  warned1: false
};

const esc = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const pad = (n) => String(n).padStart(2, '0');
const fmt = (sec) => {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0 });
}

/* ------------------ INTRO SETUP ------------------ */
function setupIntro() {
  const phaseText = `${CONFIG.phaseName} · ${CONFIG.roundName}`;
  $('headerPhase').textContent = `${CONFIG.phaseName} · ${CONFIG.roundName}`;
  document.querySelector('.brand').setAttribute('data-phase', phaseText);
  $('cardPhase').textContent = CONFIG.phaseName;
  $('cardRound').textContent = CONFIG.roundName;

  $('metaRow').innerHTML = `
    <div><b>${TOTAL}</b>Questions</div>
    <div><b>${CONFIG.durationMinutes}</b>Minutes</div>
    <div><b>${SECTIONS.length}</b>Sections</div>`;

  const rules = [
    `This quiz is only for <b>1st Year</b> students. It has <b>${TOTAL} multiple-choice questions</b> across ${SECTIONS.length} sections.`,
    `Every question has <b>four options (A–D)</b> and only <b>one</b> correct answer. Each correct answer earns <b>4 marks</b>, each incorrect answer loses <b>1 mark</b>, and unanswered questions earn <b>0 marks</b>.`,
    `You get <b>${CONFIG.durationMinutes} minutes</b>. The timer starts as soon as you press <b>Enter Quiz</b> and the test is <b>auto-submitted</b> when time runs out.`,
    `Move freely between questions using the palette. You can <b>change an answer</b> or <b>mark a question for review</b> any time before submitting.`,
    `Do <b>not</b> refresh, go back or close this page during the test.`,
    `Play fair — no mobiles, notes or help from others. Press <b>Submit Test</b> on the last question when you are done.`
  ];
  const list = $('rulesList');
  list.innerHTML = '';
  rules.forEach((r, i) => {
    const li = document.createElement('li');
    li.innerHTML = r;
    li.style.animationDelay = `${0.5 + i * 0.1}s`;
    list.appendChild(li);
  });

  // floating background symbols
  const symbols = ['∑', 'π', 'Ω', 'λ', '∫', '</>', 'Δ', '{ }', 'θ', '√', '01', '∞', 'φ', 'μ'];
  const wrap = $('symbols');
  symbols.forEach((s, i) => {
    const el = document.createElement('span');
    el.textContent = s;
    el.style.left = `${(i * 7.3 + Math.random() * 6) % 96}%`;
    el.style.fontSize = `${22 + Math.random() * 34}px`;
    el.style.animationDuration = `${18 + Math.random() * 18}s`;
    el.style.animationDelay = `${-Math.random() * 30}s`;
    wrap.appendChild(el);
  });
}

/* ------------------ START ------------------ */
function startQuiz() {
  if (state.started) return;
  if (!$('studentDetails').reportValidity()) return;
  state.teamName = $('teamName').value.trim();
  if (!state.teamName) {
    $('teamName').focus();
    toast('Please enter your team name.');
    return;
  }
  $('teamName').value = state.teamName;
  state.started = true;
  state.startTime = Date.now();
  state.endTime = state.startTime + TOTAL_SECONDS * 1000;
  if (!saveSession()) {
    state.started = false;
    state.startTime = 0;
    state.endTime = 0;
    return;
  }

  $('headerPhase').textContent = `${CONFIG.phaseName} · ${CONFIG.roundName} · ${state.teamName}`;
  document.querySelector('.brand').setAttribute('data-phase', $('headerPhase').textContent);
  $('timer').hidden = false;
  tick();
  state.timerId = setInterval(tick, 250);
  state.expiryId = setTimeout(() => submitTest(true), Math.max(0, state.endTime - Date.now()));

  buildPalette();
  $('totalCount').textContent = TOTAL;
  showScreen('quizScreen');
  renderQuestion(0, 'next');
  window.addEventListener('beforeunload', guardUnload);
}

function guardUnload(e) {
  if (state.started && !state.submitted) {
    e.preventDefault();
    e.returnValue = '';
  }
}

function saveSession() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      started: state.started,
      submitted: state.submitted,
      startTime: state.startTime,
      endTime: state.endTime,
      current: state.current,
      answers: state.answers,
      marked: [...state.marked],
      teamName: state.teamName,
      result: state.result
    }));
    return true;
  } catch (error) {
    console.error('Could not save the Technova test session:', error);
    toast('Your test session could not be saved. Please keep this page open.');
    return false;
  }
}

function restoreSession() {
  let raw;
  try {
    raw = sessionStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error('Could not restore the Technova test session:', error);
    toast('Your saved test session could not be accessed.');
    return;
  }
  if (!raw) return;

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (error) {
    console.error('Could not parse the saved Technova test session:', error);
    toast('Your saved test session is invalid.');
    return;
  }
  const validAnswers = saved && Array.isArray(saved.answers) && saved.answers.length === TOTAL &&
    saved.answers.every((answer, i) => Number.isInteger(answer) && answer >= -1 && answer < QUESTIONS[i].options.length);
  const validMarks = saved && Array.isArray(saved.marked) && saved.marked.every((i) => Number.isInteger(i) && i >= 0 && i < TOTAL);
  if (!saved || saved.version !== 1 || !saved.started || typeof saved.teamName !== 'string' ||
      !Number.isFinite(saved.startTime) || !Number.isFinite(saved.endTime) ||
      !Number.isInteger(saved.current) || saved.current < 0 || saved.current >= TOTAL ||
      !validAnswers || !validMarks || (saved.submitted && (!saved.result || !Number.isFinite(saved.result.score)))) {
    console.error('The saved Technova test session has an invalid shape.');
    toast('Your saved test session is invalid.');
    return;
  }

  state.started = true;
  state.submitted = Boolean(saved.submitted);
  state.startTime = saved.startTime;
  state.endTime = saved.endTime;
  state.current = saved.current;
  state.answers = saved.answers;
  state.marked = new Set(saved.marked);
  state.teamName = saved.teamName;
  state.result = saved.result || null;
  $('teamName').value = state.teamName;
  $('headerPhase').textContent = `${CONFIG.phaseName} · ${CONFIG.roundName} · ${state.teamName}`;
  document.querySelector('.brand').setAttribute('data-phase', $('headerPhase').textContent);
  $('timer').hidden = false;

  if (state.submitted) {
    renderResult(state.result);
    showScreen('resultScreen');
    $('submissionStatus').textContent = 'Results are available on this page.';
    return;
  }

  buildPalette();
  $('totalCount').textContent = TOTAL;
  showScreen('quizScreen');
  renderQuestion(state.current, 'next');
  window.addEventListener('beforeunload', guardUnload);
  state.timerId = setInterval(tick, 250);
  state.expiryId = setTimeout(() => submitTest(true), Math.max(0, state.endTime - Date.now()));
  tick();
}

/* ------------------ TIMER ------------------ */
function tick() {
  const remaining = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
  $('timeText').textContent = fmt(remaining);

  const t = $('timer');
  t.classList.toggle('warn', remaining <= 300 && remaining > 60);
  t.classList.toggle('danger', remaining <= 60);

  if (remaining <= 300 && !state.warned5 && TOTAL_SECONDS > 600) {
    state.warned5 = true;
    toast('⏳ Only 5 minutes left!');
  }
  if (remaining <= 60 && !state.warned1 && TOTAL_SECONDS > 120) {
    state.warned1 = true;
    toast('⚠️ Last minute — wrap up your answers!');
  }
  if (remaining <= 0 && !state.submitted) {
    submitTest(true);
  }
}

/* ------------------ PALETTE ------------------ */
function buildPalette() {
  const body = $('paletteBody');
  body.innerHTML = '';
  SECTIONS.forEach((sec) => {
    const group = document.createElement('div');
    group.className = 'sec-group';
    group.style.setProperty('--sec', sec.color);
    group.innerHTML = `<div class="sec-title"><i></i>${sec.name}</div><div class="sec-grid"></div>`;
    const grid = group.querySelector('.sec-grid');
    QUESTIONS.forEach((qu, i) => {
      if (qu.sec !== sec.id) return;
      const b = document.createElement('button');
      b.className = 'pbtn';
      b.textContent = i + 1;
      b.dataset.index = i;
      b.setAttribute('aria-label', `Go to question ${i + 1}`);
      b.addEventListener('click', () => {
        goTo(i);
        $('palette').classList.remove('open');
        $('paletteToggle').setAttribute('aria-expanded', 'false');
      });
      grid.appendChild(b);
    });
    body.appendChild(group);
  });
}

function refreshPalette() {
  document.querySelectorAll('.pbtn').forEach((b) => {
    const i = Number(b.dataset.index);
    b.classList.toggle('answered', state.answers[i] !== -1 && !state.marked.has(i));
    b.classList.toggle('marked', state.marked.has(i));
    b.classList.toggle('current', i === state.current);
  });
  const answered = state.answers.filter((a) => a !== -1).length;
  $('answeredCount').textContent = answered;
  $('paletteCount').textContent = `${answered}/${TOTAL}`;
  $('progressBar').style.width = `${(answered / TOTAL) * 100}%`;
}

/* ------------------ QUESTION RENDER ------------------ */
function renderQuestion(index, dir = 'next') {
  state.current = index;
  const qu = QUESTIONS[index];
  const sec = secById(qu.sec);
  const card = $('qCard');

  card.style.setProperty('--sec', sec.color);
  card.innerHTML = `
    <div class="q-top">
      <span class="sec-tag">${sec.name}</span>
      <span class="q-num">Question <b>${index + 1}</b> / ${TOTAL}</span>
    </div>
    <p class="q-text"></p>
    <div class="options" role="radiogroup" aria-label="Answer options"></div>`;
  card.querySelector('.q-text').textContent = qu.text;

  const opts = card.querySelector('.options');
  qu.options.forEach((text, i) => {
    const b = document.createElement('button');
    b.className = 'opt' + (state.answers[index] === i ? ' selected' : '');
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', state.answers[index] === i ? 'true' : 'false');
    b.innerHTML = `<span class="letter">${LETTERS[i]}</span><span class="txt"></span>`;
    b.querySelector('.txt').textContent = text;
    b.addEventListener('click', () => selectOption(i));
    opts.appendChild(b);
  });

  // restart slide animation
  card.classList.remove('enter-next', 'enter-prev');
  void card.offsetWidth;
  card.classList.add(dir === 'prev' ? 'enter-prev' : 'enter-next');

  const last = index === TOTAL - 1;
  $('prevBtn').disabled = index === 0;
  $('nextBtn').hidden = last;
  $('submitBtn').hidden = !last;
  updateMarkBtn();
  refreshPalette();
}

function updateMarkBtn() {
  const on = state.marked.has(state.current);
  const b = $('markBtn');
  b.classList.toggle('on', on);
  b.textContent = on ? '★ Marked for review' : '☆ Mark for review';
}

function selectOption(i) {
  if (state.submitted) return;
  state.answers[state.current] = i;
  saveSession();
  document.querySelectorAll('.opt').forEach((el, idx) => {
    el.classList.toggle('selected', idx === i);
    el.setAttribute('aria-checked', idx === i ? 'true' : 'false');
  });
  refreshPalette();
}

function goTo(i) {
  if (state.submitted || i < 0 || i >= TOTAL || i === state.current) return;
  renderQuestion(i, i > state.current ? 'next' : 'prev');
  saveSession();
}

/* ------------------ SUBMIT ------------------ */
function openConfirm() {
  const answered = state.answers.filter((a) => a !== -1).length;
  const left = TOTAL - answered;
  const marked = state.marked.size;
  let txt = `You have answered <b>${answered}</b> of <b>${TOTAL}</b> questions.`;
  if (left > 0) txt += ` <b>${left}</b> ${left === 1 ? 'question is' : 'questions are'} still unanswered.`;
  if (marked > 0) txt += ` <b>${marked}</b> marked for review.`;
  txt += '<br>You cannot change your answers after submitting.';
  $('confirmText').innerHTML = txt;
  $('confirmModal').hidden = false;
  $('confirmSubmitBtn').focus();
}

function submitTest(auto = false) {
  if (state.submitted) return;
  if (Date.now() >= state.endTime) auto = true;
  state.submitted = true;
  clearInterval(state.timerId);
  clearTimeout(state.expiryId);
  window.removeEventListener('beforeunload', guardUnload);
  $('confirmModal').hidden = true;

  const timeTaken = Math.min(TOTAL_SECONDS, Math.round((Date.now() - state.startTime) / 1000));

  // score
  let correct = 0;
  let wrong = 0;
  let score = 0;
  const per = {};
  SECTIONS.forEach((s) => (per[s.id] = { got: 0, total: 0 }));
  QUESTIONS.forEach((qu, i) => {
    per[qu.sec].total++;
    if (state.answers[i] === qu.answer) { correct++; score += 4; per[qu.sec].got++; }
    else if (state.answers[i] !== -1) { wrong++; score--; }
  });
  const answered = state.answers.filter((a) => a !== -1).length;
  const result = { score, per, answered, correct, wrong, timeTaken, auto };
  state.result = result;
  saveSession();

  renderResult(result);
  showScreen('resultScreen');
  launchConfetti();
  $('submissionStatus').textContent = 'Results are available on this page.';
}

function renderResult({ score, per, answered, timeTaken, auto, correct, wrong }) {
  const card = $('resultCard');
  const pct = Math.max(0, Math.round((score / (TOTAL * 4)) * 100));
  const R = 70, C = 2 * Math.PI * R;

  let scoreBlock = '';
  if (CONFIG.showScoreAfterSubmit) {
    scoreBlock = `
      <div class="ring-wrap">
        <svg width="170" height="170" viewBox="0 0 170 170" aria-hidden="true">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#7566c9"/><stop offset="100%" stop-color="#e98474"/>
            </linearGradient>
          </defs>
          <circle class="ring-bg" cx="85" cy="85" r="${R}" fill="none" stroke-width="14"/>
          <circle class="ring-fg" id="ringFg" cx="85" cy="85" r="${R}" fill="none" stroke-width="14"
                  stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
        </svg>
        <div class="ring-text"><b id="scoreNum">0</b><span>out of ${TOTAL * 4} marks</span></div>
      </div>
      <div class="breakdown">
        ${SECTIONS.map((s) => `
          <div class="bk-row" style="--sec:${s.color}">
            <span>${s.name}</span>
            <div class="bk-bar"><div class="bk-fill" data-w="${(per[s.id].got / per[s.id].total) * 100}"></div></div>
            <span class="bk-val">${per[s.id].got}/${per[s.id].total}</span>
          </div>`).join('')}
      </div>`;
  }

  card.innerHTML = `
    <div class="badge-ok">
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
    </div>
    <h2>${auto ? "Time's up — test submitted!" : 'Test submitted!'}</h2>
    <p class="sub">${CONFIG.phaseName} · ${CONFIG.roundName} &middot; ${CONFIG.eventName}</p>
    <p class="team-result">Team: <b>${esc(state.teamName)}</b></p>
    <div class="stats">
      <div class="stat s-ok"><b>${CONFIG.showScoreAfterSubmit ? correct : '–'}</b>Correct</div>
      <div class="stat s-bad"><b>${CONFIG.showScoreAfterSubmit ? wrong : '–'}</b>Wrong</div>
      <div class="stat s-skip"><b>${TOTAL - answered}</b>Unattempted</div>
      <div class="stat s-time"><b>${fmt(timeTaken)}</b>Time taken</div>
    </div>
    ${CONFIG.showScoreAfterSubmit ? `<p class="marks-line">Marks scored: <b>${score} / ${TOTAL * 4}</b> &middot; ${pct}% &middot; ${remark(pct)}</p>` : ''}
    ${scoreBlock}
    ${renderAnswerReview()}
    <p class="bye">Thank you for participating in ALGOVERSE 2026. Good luck! 🎉</p>`;

  if (CONFIG.showScoreAfterSubmit) {
    requestAnimationFrame(() => setTimeout(() => {
      $('ringFg').style.strokeDashoffset = C * (1 - Math.max(0, score) / (TOTAL * 4));
      document.querySelectorAll('.bk-fill').forEach((f) => (f.style.width = f.dataset.w + '%'));
      animateNumber($('scoreNum'), score, 1400);
    }, 250));
  }
}

function renderAnswerReview() {
  return `<section class="answer-review"><h3>Answer review</h3>${QUESTIONS.map((question, index) => {
    const selected = state.answers[index];
    const isCorrect = selected === question.answer;
    const outcome = selected === -1 ? 'Unanswered' : (isCorrect ? 'Correct' : 'Incorrect');
    const marked = state.marked.has(index);
    return `<article class="answer-review-item">
      <h4>Question ${index + 1}: ${esc(question.text)}</h4>
      <p class="review-status ${selected === -1 ? 'is-unanswered' : (isCorrect ? 'is-correct' : 'is-incorrect')}">${outcome}${marked ? ' · Marked for review' : ''}</p>
      <ul>${question.options.map((option, optionIndex) => {
        const correctOption = optionIndex === question.answer;
        const chosenOption = optionIndex === selected;
        return `<li class="${correctOption ? 'review-correct' : ''} ${chosenOption ? 'review-selected' : ''}">${LETTERS[optionIndex]}. ${esc(option)}${correctOption ? ' — Correct answer' : ''}${chosenOption ? ' — Team answer' : ''}</li>`;
      }).join('')}</ul>
    </article>`;
  }).join('')}</section>`;
}

function remark(p) {
  if (p >= 85) return 'Outstanding! 🌟';
  if (p >= 65) return 'Great work! 👏';
  if (p >= 40) return 'Good effort, keep going! 💪';
  return 'Keep practising, you will get there! 🌱';
}

function animateNumber(el, to, ms) {
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function launchConfetti() {
  const colors = ['#dcd3f7', '#ffd9c7', '#cdeedd', '#cfe6f8', '#fff0b9', '#fbd3de', '#7566c9', '#f2b66b'];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement('i');
    c.className = 'confetti';
    c.style.left = `${Math.random() * 100}%`;
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = `${2.8 + Math.random() * 2.6}s`;
    c.style.animationDelay = `${Math.random() * 0.8}s`;
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }
}

/* ------------------ EVENTS ------------------ */
function bindEvents() {
  $('studentDetails').addEventListener('submit', (event) => event.preventDefault());
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && state.started && !state.submitted) tick();
  });
  $('enterBtn').addEventListener('click', startQuiz);
  $('prevBtn').addEventListener('click', () => goTo(state.current - 1));
  $('nextBtn').addEventListener('click', () => goTo(state.current + 1));
  $('clearBtn').addEventListener('click', () => {
    if (state.submitted) return;
    state.answers[state.current] = -1;
    renderQuestionKeepAnim();
    saveSession();
  });
  $('markBtn').addEventListener('click', () => {
    if (state.submitted) return;
    const i = state.current;
    state.marked.has(i) ? state.marked.delete(i) : state.marked.add(i);
    updateMarkBtn();
    refreshPalette();
    saveSession();
  });
  $('submitBtn').addEventListener('click', openConfirm);
  $('reviewBtn').addEventListener('click', () => ($('confirmModal').hidden = true));
  $('confirmSubmitBtn').addEventListener('click', () => submitTest(false));

  $('paletteToggle').addEventListener('click', () => {
    const open = $('palette').classList.toggle('open');
    $('paletteToggle').setAttribute('aria-expanded', String(open));
  });

  // keyboard: A–D / 1–4 select, arrows navigate
  document.addEventListener('keydown', (e) => {
    if (!state.started || state.submitted || !$('confirmModal').hidden) return;
    const k = e.key.toLowerCase();
    if (['a', 'b', 'c', 'd', '1', '2', '3', '4'].includes(k)) {
      const idx = 'abcd'.includes(k) ? 'abcd'.indexOf(k) : Number(k) - 1;
      selectOption(idx);
    } else if (e.key === 'ArrowRight') goTo(state.current + 1);
    else if (e.key === 'ArrowLeft') goTo(state.current - 1);
  });
}

// re-render options after "Clear" without replaying the slide animation
function renderQuestionKeepAnim() {
  document.querySelectorAll('.opt').forEach((el) => {
    el.classList.remove('selected');
    el.setAttribute('aria-checked', 'false');
  });
  refreshPalette();
}

/* ------------------ INIT ------------------ */
setupIntro();
bindEvents();
restoreSession();