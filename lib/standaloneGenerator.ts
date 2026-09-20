import { QUESTIONS, LEVEL_CONFIGS } from '@/data/questions';

export function generateStandaloneHTML(): string {
  const jsonQuestions = JSON.stringify(QUESTIONS);
  const jsonLevels = JSON.stringify(LEVEL_CONFIGS);

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flashcard Tantangan: Organ Gerak Manusia - IPAS Kelas 6 SD</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #059669;
      --primary-dark: #047857;
      --bg: #F8FAFC;
      --card-bg: #FFFFFF;
      --text: #1E293B;
      --text-muted: #64748B;
      --border: #E2E8F0;
      --radius: 20px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background: #FFFFFF;
      border-bottom: 1px solid var(--border);
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 40;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #ECFDF5;
      color: #059669;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
    .brand h1 { font-size: 16px; font-weight: 800; color: #0F172A; }
    .brand p { font-size: 11px; color: var(--text-muted); font-weight: 600; }
    .nav-actions { display: flex; align-items: center; gap: 8px; }
    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      outline: none;
      transition: all 0.15s ease;
    }
    .btn {
      padding: 8px 16px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-dark); }
    .btn-outline { background: white; border: 1px solid var(--border); color: var(--text); }
    .btn-outline:hover { background: #F1F5F9; }
    main { flex: 1; padding: 24px 16px; max-width: 900px; margin: 0 auto; width: 100%; }
    .view { display: none; }
    .view.active { display: block; animation: fadeIn 0.2s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    /* Home View */
    .hero {
      background: linear-gradient(135deg, #059669, #0d9488);
      border-radius: 24px;
      padding: 32px 24px;
      color: white;
      text-align: center;
      margin-bottom: 24px;
      box-shadow: 0 10px 25px -5px rgba(5, 150, 105, 0.2);
    }
    .hero-badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 4px 14px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .hero h2 { font-size: 26px; font-weight: 800; margin-bottom: 8px; }
    .hero p { font-size: 14px; opacity: 0.95; max-width: 600px; margin: 0 auto 20px; }
    .hero-buttons { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .hero-btn {
      padding: 12px 24px;
      border-radius: 14px;
      font-weight: 800;
      font-size: 14px;
      cursor: pointer;
    }
    .hero-btn-main { background: white; color: #059669; }
    .hero-btn-alt { background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.3); }

    .level-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .level-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 18px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .level-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 20px -8px rgba(0,0,0,0.08);
      border-color: var(--primary);
    }
    .level-tag {
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 8px;
    }
    .tag-mudah { background: #ECFDF5; color: #059669; }
    .tag-sedang { background: #EFF6FF; color: #2563EB; }
    .tag-menantang { background: #FFF1F2; color: #E11D48; }
    .level-card h3 { font-size: 15px; font-weight: 800; margin-bottom: 4px; color: #0F172A; }
    .level-card p { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 700; color: var(--primary); }

    /* Quiz Gameplay */
    .quiz-box {
      background: white;
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    .quiz-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
      flex-wrap: wrap;
      gap: 8px;
    }
    .badge-pill {
      background: #F1F5F9;
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 700;
    }
    .hearts { color: #EF4444; font-size: 16px; letter-spacing: 2px; }
    .quiz-title { font-size: 18px; font-weight: 800; margin: 16px 0 20px; line-height: 1.5; color: #0F172A; }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }
    @media (min-width: 600px) {
      .options-grid { grid-template-columns: 1fr 1fr; }
    }
    .option-btn {
      padding: 14px 16px;
      background: #F8FAFC;
      border: 1px solid var(--border);
      border-radius: 16px;
      text-align: left;
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      min-height: 52px;
    }
    .option-btn:hover:not(:disabled) { background: #F1F5F9; border-color: #CBD5E1; }
    .option-key {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      background: #E2E8F0;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 800;
      flex-shrink: 0;
    }
    .option-btn.correct {
      background: #ECFDF5 !important;
      border-color: #10B981 !important;
      color: #065F46 !important;
    }
    .option-btn.correct .option-key { background: #10B981; color: white; }
    .option-btn.wrong {
      background: #FFF1F2 !important;
      border-color: #F43F5E !important;
      color: #881337 !important;
    }
    .option-btn.wrong .option-key { background: #F43F5E; color: white; }
    .feedback-box {
      margin-top: 16px;
      padding: 16px;
      border-radius: 16px;
      font-size: 13px;
      line-height: 1.5;
    }
    .feedback-correct { background: #ECFDF5; border: 1px solid #A7F3D0; color: #065F46; }
    .feedback-wrong { background: #FFF1F2; border: 1px solid #FECDD3; color: #881337; }

    /* Flashcard View */
    .fc-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 36px 24px;
      min-height: 320px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 8px 20px -4px rgba(0,0,0,0.06);
      transition: transform 0.2s;
    }
    .fc-card:hover { transform: scale(1.01); }

    /* Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 100;
      padding: 16px;
    }
    .modal-overlay.active { display: flex; }
    .modal-card {
      background: white;
      border-radius: 24px;
      max-width: 600px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      position: relative;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    canvas#confetti { position: fixed; inset: 0; pointer-events: none; z-index: 99; width: 100%; height: 100%; }
  </style>
</head>
<body>

<canvas id="confetti"></canvas>

<header>
  <div class="brand">
    <div class="brand-icon">🦴</div>
    <div>
      <h1>Flashcard Organ Gerak</h1>
      <p>IPAS Kelas 6 SD • 100 Soal Tantangan</p>
    </div>
  </div>
  <div class="nav-actions">
    <button class="btn btn-outline" onclick="openCPModal()">🎯 Capaian</button>
    <button class="btn btn-outline" onclick="openRangkumanModal()">📖 Rangkuman</button>
    <button class="btn btn-outline" onclick="openDeveloperModal()">👤 Pengembang</button>
    <button class="btn btn-outline" id="bgm-toggle-btn" onclick="toggleBgmStandalone()">🎵 Musik: Off</button>
    <button class="btn btn-primary" onclick="toggleAudio()"><span id="audio-icon">🔊</span></button>
  </div>
</header>

<main>
  <!-- HOME VIEW -->
  <section id="view-home" class="view active">
    <div class="hero">
      <div class="hero-badge">🧬 Ilmu Pengetahuan Alam dan Sosial (IPAS)</div>
      <h2>Petualangan Organ Gerak Manusia</h2>
      <p>Pelajari sistem rangka, persendian, cara kerja otot, dan refleksikan cara merawat kesehatan tubuhmu melalui 100 flashcard interaktif!</p>
      <div class="hero-buttons">
        <button class="hero-btn hero-btn-main" onclick="startLevel(1)">🚀 Mulai Kuis Tantangan</button>
        <button class="hero-btn hero-btn-alt" onclick="openStudyMode(1)">💡 Mode Belajar Santai</button>
        <button class="hero-btn hero-btn-alt" onclick="openDeveloperModal()">👤 Profil Pengembang</button>
      </div>
    </div>

    <div style="margin-bottom: 14px; font-weight: 800; font-size: 16px;">Pilih Level Tantangan (100 Soal):</div>
    <div class="level-grid" id="level-grid-container"></div>
  </section>

  <!-- QUIZ VIEW -->
  <section id="view-quiz" class="view">
    <div class="quiz-box">
      <div class="quiz-bar">
        <button class="btn btn-outline" onclick="showView('home')">← Keluar</button>
        <div class="badge-pill" id="quiz-level-badge">Level 1</div>
        <div class="hearts" id="quiz-hearts">❤️❤️❤️</div>
        <div class="badge-pill" style="background:#ECFDF5; color:#059669;" id="quiz-score">0 Poin</div>
      </div>

      <div style="font-size: 12px; color: var(--text-muted); font-weight: 700;" id="quiz-progress-text">Soal 1 dari 25</div>
      <div style="height: 6px; background:#F1F5F9; border-radius:99px; margin: 6px 0 16px; overflow:hidden;">
        <div id="quiz-progress-bar" style="width: 4%; height:100%; background:#059669; border-radius:99px; transition:width 0.2s;"></div>
      </div>

      <div class="quiz-title" id="quiz-question-text">Memuat pertanyaan...</div>
      <div class="options-grid" id="quiz-options-container"></div>

      <div id="quiz-feedback-box" style="display:none;" class="feedback-box">
        <div id="quiz-feedback-title" style="font-weight: 800; margin-bottom: 4px;"></div>
        <div id="quiz-feedback-text"></div>
        <button id="quiz-next-btn" class="btn btn-primary" style="margin-top: 12px; width: 100%; justify-content: center;" onclick="nextQuestion()">Soal Berikutnya →</button>
      </div>
    </div>
  </section>

  <!-- FLASHCARD STUDY VIEW -->
  <section id="view-study" class="view">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <button class="btn btn-outline" onclick="showView('home')">← Beranda</button>
      <div class="badge-pill" id="study-level-title">Level 1: Rangka</div>
      <button class="btn btn-primary" onclick="startCurrentLevelQuiz()">Mulai Kuis Level Ini</button>
    </div>

    <div class="fc-card" onclick="flipStudyCard()">
      <div style="font-size: 12px; color: var(--text-muted); font-weight: 700;" id="study-card-num">Kartu 1</div>
      <div style="font-size: 18px; font-weight: 800; padding: 20px 0;" id="study-card-content">Pertanyaan</div>
      <div style="font-size: 11px; color: var(--text-muted);">🔄 Ketuk kartu untuk melihat jawaban & pembahasan</div>
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 16px;">
      <button class="btn btn-outline" onclick="prevStudyCard()">← Sebelumnya</button>
      <button class="btn btn-outline" onclick="nextStudyCard()">Berikutnya →</button>
    </div>
  </section>

  <!-- RESULT VIEW -->
  <section id="view-result" class="view">
    <div class="quiz-box" style="text-align: center;">
      <div style="font-size: 48px; margin-bottom: 12px;">🏆</div>
      <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">Level Selesai!</h2>
      <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;" id="result-subtitle">Hebat! Kamu telah menyelesaikan tantangan ini.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
        <div style="background:#F8FAFC; padding:16px; border-radius:16px; border:1px solid var(--border);">
          <div style="font-size:11px; color:var(--text-muted); font-weight:700;">TOTAL SKOR</div>
          <div style="font-size:24px; font-weight:800; color:#059669;" id="result-score">0</div>
        </div>
        <div style="background:#F8FAFC; padding:16px; border-radius:16px; border:1px solid var(--border);">
          <div style="font-size:11px; color:var(--text-muted); font-weight:700;">AKURASI</div>
          <div style="font-size:24px; font-weight:800; color:#2563EB;" id="result-accuracy">0%</div>
        </div>
      </div>

      <div style="display:flex; gap:12px; justify-content:center;">
        <button class="btn btn-primary" onclick="showView('home')">Pilih Level Lain</button>
      </div>
    </div>
  </section>
</main>

<!-- CP / TP MODAL -->
<div id="modal-cp" class="modal-overlay">
  <div class="modal-card">
    <div class="modal-header">
      <h3 style="font-weight: 800;">Tujuan & Capaian Pembelajaran (Fase C)</h3>
      <button class="btn btn-outline" onclick="closeModal('modal-cp')">✕</button>
    </div>
    <div style="font-size: 13px; line-height: 1.6; color: #334155;">
      <p><strong>Capaian Pembelajaran (CP):</strong><br>Merefleksikan sistem organ tubuh manusia yang dikaitkan dengan cara menjaga kesehatan tubuhnya dalam kehidupan sehari-hari.</p>
      <br>
      <p><strong>Tujuan Pembelajaran (TP):</strong><br>1. Mengidentifikasi macam-macam tulang, sendi, dan otot pada manusia.<br>2. Menjelaskan mekanisme gerak organ tubuh manusia.<br>3. Menganalisis kelainan/penyakit organ gerak serta membiasakan pola hidup sehat.</p>
    </div>
  </div>
</div>

<!-- RANGKUMAN MODAL -->
<div id="modal-rangkuman" class="modal-overlay">
  <div class="modal-card">
    <div class="modal-header">
      <h3 style="font-weight: 800;">Rangkuman Konsep Organ Gerak</h3>
      <button class="btn btn-outline" onclick="closeModal('modal-rangkuman')">✕</button>
    </div>
    <div style="font-size: 13px; line-height: 1.6; color: #334155; space-y: 12px;">
      <p>🦴 <strong>1. Sistem Rangka (Alat Gerak Pasif):</strong> Terdiri dari 206 tulang (tulang pipa, pipih, pendek, tak beraturan). Berfungsi memberi bentuk, menegakkan tubuh, melindungi organ dalam, dan memproduksi sel darah merah.</p><br>
      <p>🔗 <strong>2. Sistem Persendian:</strong> Penghubung antartulang. Sendi engsel (siku, lutut), sendi peluru (bahu, paha), sendi putar (leher), sendi pelana (ibu jari), sendi geser (pergelangan).</p><br>
      <p>⚡ <strong>3. Sistem Otot (Alat Gerak Aktif):</strong> Otot lurik (sadar), otot polos (tidak sadar pada organ dalam), dan otot jantung (otomatis). Gerak antagonis bisep-trisep.</p><br>
      <p>❤️ <strong>4. Kesehatan:</strong> Hindari lordosis, kifosis, dan skoliosis dengan duduk tegak. Konsumsi kalsium dan berjemur matahari pagi untuk mencegah osteoporosis dan rakhitis.</p>
    </div>
  </div>
</div>

<!-- DEVELOPER MODAL -->
<div id="modal-developer" class="modal-overlay">
  <div class="modal-card">
    <div class="modal-header">
      <h3 style="font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <span>👤 Profil Pengembang</span>
        <span style="font-size: 11px; font-weight: 700; background: #ECFDF5; color: #059669; padding: 2px 8px; border-radius: 9999px; border: 1px solid #A7F3D0;">Terkunci Resmi</span>
      </h3>
      <button class="btn btn-outline" onclick="closeModal('modal-developer')">✕</button>
    </div>
    <div style="display: flex; gap: 16px; align-items: center; background: #F8FAFC; padding: 14px; border-radius: 16px; border: 1px solid #E2E8F0; margin-bottom: 14px;">
      <div style="width: 76px; height: 96px; border-radius: 14px; overflow: hidden; border: 2px solid #059669; flex-shrink: 0; background: white; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
        <a href="https://ibb.co.com/RkLn8FYH" target="_blank" rel="noopener noreferrer" title="Buka Pas-Foto di ImgBB" style="display: block; width: 100%; height: 100%;">
          <img 
            src="https://i.ibb.co.com/YFv9gCPj/Pas-Foto.jpg" 
            alt="Pas-Foto" 
            border="0"
            onerror="this.onerror=null; this.src='https://i.ibb.co/YFv9gCPj/Pas-Foto.jpg';"
            style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;"
          />
        </a>
      </div>
      <div>
        <div style="font-size: 11px; font-weight: 800; color: #059669; text-transform: uppercase;">Pendidik & Pengembang Media</div>
        <div style="font-size: 17px; font-weight: 900; color: #0F172A; margin: 2px 0;">Robiyanto, S.Pd.</div>
        <div style="font-size: 12px; color: #475569; line-height: 1.4;">Guru Kelas & Pengembang Media Pembelajaran IPAS SD</div>
        <a href="https://ibb.co.com/RkLn8FYH" target="_blank" rel="noopener noreferrer" style="font-size: 11px; color: #059669; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 4px;">↗ Lihat Pas Foto Asli</a>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
      <div style="padding: 10px 14px; background: white; border: 1px solid #E2E8F0; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #64748B; font-weight: 600;">Nomor Induk Pegawai (NIP):</span>
        <strong style="font-family: monospace; color: #1E293B;">19930720 201902 1 005</strong>
      </div>
      <div style="padding: 10px 14px; background: white; border: 1px solid #E2E8F0; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #64748B; font-weight: 600;">Unit Kerja:</span>
        <strong style="color: #1E293B;">SD Negeri 2 Kebondalem, Banjarnegara</strong>
      </div>
      <div style="padding: 10px 14px; background: white; border: 1px solid #E2E8F0; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #64748B; font-weight: 600;">Email Kontak Resmi:</span>
        <a href="mailto:robiyantospd07@guru.sd.belajar.id" style="color: #059669; font-weight: 700; text-decoration: none;">robiyantospd07@guru.sd.belajar.id</a>
      </div>
    </div>
    <button class="btn btn-primary" style="margin-top: 16px; width: 100%; justify-content: center;" onclick="closeModal('modal-developer')">Tutup</button>
  </div>
</div>

<script>
  const QUESTIONS = ${jsonQuestions};
  const LEVELS = ${jsonLevels};

  let audioEnabled = true;
  let audioCtx = null;
  let bgmPlaying = false;
  let bgmTimer = null;
  let bgmStep = 0;

  function getAudio() {
    if (!audioCtx && window.AudioContext) audioCtx = new AudioContext();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq, dur, type='sine', vol=0.1) {
    if (!audioEnabled) return;
    try {
      const ctx = getAudio();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur + 0.05);
    } catch(e){}
  }

  // Procedural BGM for Standalone HTML
  const BGM_NOTES = [
    { bass: 130.81, notes: [261.63, 329.63, 392.00, 523.25] },
    { bass: 220.00, notes: [261.63, 329.63, 440.00, 523.25] },
    { bass: 174.61, notes: [261.63, 349.23, 440.00, 523.25] },
    { bass: 196.00, notes: [246.94, 293.66, 392.00, 493.88] },
  ];

  function playBgmStep() {
    if (!bgmPlaying || !audioEnabled) return;
    const patIdx = Math.floor(bgmStep / 4) % BGM_NOTES.length;
    const subIdx = bgmStep % 4;
    const pat = BGM_NOTES[patIdx];

    if (subIdx === 0) {
      playTone(pat.bass, 1.2, 'triangle', 0.08);
    }
    playTone(pat.notes[subIdx], 0.4, 'sine', 0.04);
    bgmStep++;
  }

  function toggleBgmStandalone() {
    const btn = document.getElementById('bgm-toggle-btn');
    if (bgmPlaying) {
      bgmPlaying = false;
      if (bgmTimer) clearInterval(bgmTimer);
      if (btn) btn.innerText = '🎵 Musik: Off';
    } else {
      getAudio();
      bgmPlaying = true;
      bgmStep = 0;
      if (bgmTimer) clearInterval(bgmTimer);
      bgmTimer = setInterval(playBgmStep, 320);
      if (btn) btn.innerText = '🎵 Musik: On';
    }
  }

  function toggleAudio() {
    audioEnabled = !audioEnabled;
    document.getElementById('audio-icon').innerText = audioEnabled ? '🔊' : '🔇';
    if (!audioEnabled && bgmPlaying) {
      toggleBgmStandalone();
    }
  }

  // Views Navigation
  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');
  }

  function openCPModal() { document.getElementById('modal-cp').classList.add('active'); }
  function openRangkumanModal() { document.getElementById('modal-rangkuman').classList.add('active'); }
  function openDeveloperModal() { document.getElementById('modal-developer').classList.add('active'); }
  function closeModal(id) { document.getElementById(id).classList.remove('active'); }

  // Render Level Grid
  const grid = document.getElementById('level-grid-container');
  LEVELS.forEach(lvl => {
    const card = document.createElement('div');
    card.className = 'level-card';
    const tagClass = lvl.difficulty === 'Mudah' ? 'tag-mudah' : lvl.difficulty === 'Sedang' ? 'tag-sedang' : 'tag-menantang';
    card.innerHTML = \`
      <div>
        <span class="level-tag \${tagClass}">\${lvl.difficulty}</span>
        <h3>\${lvl.title}</h3>
        <p>\${lvl.subtitle}</p>
      </div>
      <div class="card-footer">
        <span>25 Soal</span>
        <span>Mulai →</span>
      </div>
    \`;
    card.onclick = () => startLevel(lvl.id);
    grid.appendChild(card);
  });

  // Quiz State
  let currentLevel = 1;
  let activeQuestions = [];
  let currentQIdx = 0;
  let score = 0;
  let hearts = 3;
  let correctCount = 0;
  let isAnswered = false;

  function startLevel(lvlId) {
    currentLevel = lvlId;
    activeQuestions = QUESTIONS.filter(q => q.levelId === lvlId);
    currentQIdx = 0;
    score = 0;
    hearts = 3;
    correctCount = 0;
    showView('quiz');
    loadQuestion();
  }

  function loadQuestion() {
    isAnswered = false;
    document.getElementById('quiz-feedback-box').style.display = 'none';
    const q = activeQuestions[currentQIdx];
    document.getElementById('quiz-level-badge').innerText = 'Level ' + currentLevel + ' (' + q.difficulty + ')';
    document.getElementById('quiz-hearts').innerText = '❤️'.repeat(hearts);
    document.getElementById('quiz-score').innerText = score + ' Poin';
    document.getElementById('quiz-progress-text').innerText = 'Soal ' + (currentQIdx + 1) + ' dari ' + activeQuestions.length;
    document.getElementById('quiz-progress-bar').style.width = (((currentQIdx + 1) / activeQuestions.length) * 100) + '%';
    document.getElementById('quiz-question-text').innerText = q.question;

    const optContainer = document.getElementById('quiz-options-container');
    optContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = \`<span class="option-key">\${letters[idx]}</span><span>\${optText}</span>\`;
      btn.onclick = () => selectAnswer(idx);
      optContainer.appendChild(btn);
    });
  }

  function selectAnswer(chosenIdx) {
    if (isAnswered) return;
    isAnswered = true;
    const q = activeQuestions[currentQIdx];
    const isCorrect = chosenIdx === q.answerIndex;
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answerIndex) btn.classList.add('correct');
      else if (idx === chosenIdx) btn.classList.add('wrong');
    });

    const fbBox = document.getElementById('quiz-feedback-box');
    const fbTitle = document.getElementById('quiz-feedback-title');
    const fbText = document.getElementById('quiz-feedback-text');
    fbBox.style.display = 'block';

    if (isCorrect) {
      playTone(523.25, 0.1);
      setTimeout(() => playTone(659.25, 0.15), 80);
      score += 100;
      correctCount++;
      fbBox.className = 'feedback-box feedback-correct';
      fbTitle.innerText = 'Jawaban Benar! Hebat!';
    } else {
      playTone(280, 0.25);
      hearts--;
      fbBox.className = 'feedback-box feedback-wrong';
      fbTitle.innerText = 'Belum Tepat, Pelajari Konsepnya!';
    }
    fbText.innerHTML = '<strong>Pembahasan:</strong> ' + q.explanation;
    document.getElementById('quiz-hearts').innerText = '❤️'.repeat(Math.max(hearts, 0));
    document.getElementById('quiz-score').innerText = score + ' Poin';
  }

  function nextQuestion() {
    if (hearts <= 0 || currentQIdx + 1 >= activeQuestions.length) {
      showResult();
    } else {
      currentQIdx++;
      loadQuestion();
    }
  }

  function showResult() {
    showView('result');
    document.getElementById('result-score').innerText = score;
    const acc = Math.round((correctCount / activeQuestions.length) * 100);
    document.getElementById('result-accuracy').innerText = acc + '%';
    launchConfetti();
  }

  // Flashcard Study Mode
  let studyIdx = 0;
  let studyFlipped = false;

  function openStudyMode(lvlId) {
    currentLevel = lvlId;
    activeQuestions = QUESTIONS.filter(q => q.levelId === lvlId);
    studyIdx = 0;
    studyFlipped = false;
    showView('study');
    renderStudyCard();
  }

  function renderStudyCard() {
    const q = activeQuestions[studyIdx];
    document.getElementById('study-level-title').innerText = 'Level ' + currentLevel + ': ' + q.levelTitle;
    document.getElementById('study-card-num').innerText = 'Kartu ' + (studyIdx + 1) + ' dari ' + activeQuestions.length;
    const content = document.getElementById('study-card-content');
    if (!studyFlipped) {
      content.innerText = q.question;
      content.style.color = '#0F172A';
    } else {
      content.innerHTML = '<span style="color:#059669; font-size:16px;">Jawaban Tepat:</span><br>' + q.options[q.answerIndex] + '<br><br><small style="font-weight:500; font-size:13px; color:#475569;">' + q.explanation + '</small>';
    }
  }

  function flipStudyCard() {
    studyFlipped = !studyFlipped;
    renderStudyCard();
  }

  function nextStudyCard() {
    studyFlipped = false;
    studyIdx = (studyIdx + 1) % activeQuestions.length;
    renderStudyCard();
  }

  function prevStudyCard() {
    studyFlipped = false;
    studyIdx = (studyIdx - 1 + activeQuestions.length) % activeQuestions.length;
    renderStudyCard();
  }

  function startCurrentLevelQuiz() {
    startLevel(currentLevel);
  }

  // Confetti Animation
  function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const colors = ['#059669', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];
    for(let i=0; i<100; i++) {
      pieces.push({
        x: canvas.width/2,
        y: canvas.height/3,
        vx: (Math.random()-0.5)*12,
        vy: -Math.random()*12 - 4,
        size: Math.random()*8 + 4,
        color: colors[Math.floor(Math.random()*colors.length)],
        alpha: 1
      });
    }
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3;
        p.alpha -= 0.01;
        if (p.alpha > 0) {
          alive++;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });
      if (alive > 0) requestAnimationFrame(update);
    }
    update();
  }
</script>
</body>
</html>`;
}
